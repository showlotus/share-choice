import axios from 'axios'
import fs from 'fs'
import fsPromise from 'node:fs/promises'

const data = JSON.parse(fs.readFileSync('../src/views/movie/oscars/data.json', 'utf-8'))

async function imageUrlToBase64(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const base64 = Buffer.from(response.data, 'binary').toString('base64')
    const mimeType = response.headers['content-type']
    return `data:${mimeType};base64,${base64}`
  } catch (error) {
    throw new Error(`Failed to fetch image: ${error.message}`)
  }
}

function delay(wait = 200) {
  return new Promise((res) => {
    setTimeout(res, wait)
  })
}

/**
 * 通过异步迭代器，获取每一张图片的 base64 字符串
 */
function fetchEveryImgUrl() {
  return {
    async *[Symbol.asyncIterator]() {
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const base64 = await imageUrlToBase64(item.poster)
        yield [{ item, base64 }, i]
        await delay(1000)
      }
    }
  }
}

async function main() {
  for await (const [{ item, base64 }, i] of fetchEveryImgUrl()) {
    console.log(`已获取第 ${i + 1} 部电影 [${item.name}] 的电影海报.`)
    item.poster = base64
    await fsPromise.appendFile('./oscars/img-data.temp.txt', JSON.stringify(item, null, 2) + ',\n')
    await delay(1000)
  }

  await fsPromise.writeFile('./oscars/oscars-movie-img-data.json', JSON.stringify(data, null, 2))
  console.log('收集完成！')
}

main()
