import axios from 'axios'
import * as cherrio from 'cheerio'
import fsPromise from 'node:fs/promises'

const axiosConfig = {
  headers: {
    // your cookie
    Cookie:
      'bid=CN_7TFjMa-Y; viewed="26275211_34838092_26695132"; __utmc=30149280; _pk_id.100001.8cb4=cf9dc44f0153aa2e.1741958988.; ll="118371"; _vwo_uuid_v2=DA0A93E88171112D54C581D78CFBA4EB2|ec75b2882e0c26ff1ea928b35754e711; _pk_ref.100001.8cb4=%5B%22%22%2C%22%22%2C1742045285%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_ses.100001.8cb4=1; __utma=30149280.1278665864.1691067779.1742033171.1742045288.16; __utmz=30149280.1742045288.16.5.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/doulist/3151124/; dbcl2="156055244:ikuIb08tZhs"; ck=vlOe; push_noty_num=0; push_doumail_num=0; __utmt=1; __utmv=30149280.15605; __utmb=30149280.2.10.1742045288'
  }
}

/**
 * 通过异步迭代器，获取每一页的 html
 */
function fetchEveryPageHtml() {
  return {
    async *[Symbol.asyncIterator]() {
      // the next page button selector
      const NEXT_PAGE_BTN_SELECTOR = '#content > div > div.article > div.paginator > span.next'

      let idx = 0
      let url = 'https://www.douban.com/doulist/3151124/'
      let html = (await axios.get(url, axiosConfig)).data
      let $ = cherrio.load(html)
      yield [{ html, $ }, idx++] // <-- return html
      await delay(1000)
      let nextPageBtn = $(NEXT_PAGE_BTN_SELECTOR)
      while (nextPageBtn.find('a').length) {
        url = nextPageBtn.find('a').attr('href')
        html = (await axios.get(url, axiosConfig)).data
        $ = cherrio.load(html)
        yield [{ html, $ }, idx++] // <-- return html
        nextPageBtn = $(NEXT_PAGE_BTN_SELECTOR)
        await delay(1000)
      }
    }
  }
}

/**
 * 获取电影简介
 * @param {string} url
 */
async function fetchIntro(url) {
  const html = (await axios.get(url, axiosConfig)).data
  const $ = cherrio.load(html)
  const intro = $('#link-report-intra span[property="v:summary"]')
    .html()
    .trim()
    .split('<br>')
    .map((v) => v.trim())
    .join('\n')

  return intro
}

function delay(wait = 200) {
  return new Promise((res) => {
    setTimeout(res, wait)
  })
}

async function main() {
  const data = []
  for await (const [{ $ }, i] of fetchEveryPageHtml()) {
    console.log(`获取第 ${i + 1} 页电影列表中...`)
    let list = []
    $('#content > div > div.article > div.doulist-item').each((idx, item) => {
      const name = $(item).find('div.bd.doulist-subject > div.title').text().trim()
      const poster = $(item).find('div.bd.doulist-subject > div.post > a > img').attr('src')
      const abstract = $(item)
        .find('div.bd.doulist-subject > div.abstract')
        .html()
        .trim()
        .split('<br>')
        .map((v) => v.trim())
        .join('\n')
      const title = $(item)
        .find('div.ft > div.comment-item.content > blockquote')
        .text()
        .trim()
        .replace(/^评语：/, '')

      const detailUrl = $(item).find('div.bd.doulist-subject > div.title > a').attr('href')
      list.push({ title, name, poster, abstract, detailUrl })
      console.log(`已获取到 [${name}] 基本信息.`)
    })

    console.log(`获取第 ${i + 1} 页电影剧情简介中...`)
    for (const item of list) {
      const intro = await fetchIntro(item.detailUrl)
      item.intro = intro
      delete item.detailUrl
      console.log(`已获取到 [${item.name}] 剧情简介.`)
      await fsPromise.appendFile('./oscars/data.temp.txt', JSON.stringify(item, null, 2) + ',\n')
      await delay(1000)
    }

    data.push(...list)
  }

  await fsPromise.writeFile('./oscars/oscars-movie-data.json', JSON.stringify(data, null, 2))
  console.log('收集完成！')
}

main()
