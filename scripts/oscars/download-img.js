import axios from 'axios'
import fs from 'fs'
import fsPromise from 'node:fs/promises'

const data = JSON.parse(fs.readFileSync('./oscars/data.json', 'utf-8'))

async function downloadImage(imageUrl, name) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' })
    const writer = fs.createWriteStream(`./oscars/img/${name}.png`)
    response.data.pipe(writer)
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  } catch (error) {
    throw new Error(`Failed to fetch image: ${error.message}`)
  }
}

function delay(wait = 1000) {
  return new Promise((res) => {
    setTimeout(res, wait)
  })
}

/**
 * 通过异步迭代器，下载每一张图片
 */
function downloadEveryImg() {
  return {
    async *[Symbol.asyncIterator]() {
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        await downloadImage(item.poster, item.name)
        yield [item, i]
        await delay()
      }
    }
  }
}

async function main() {
  for await (const [item, i] of downloadEveryImg()) {
    console.log(`已获取第 ${i + 1} 部电影 [${item.name}] 的电影海报.`)
    await delay()
  }

  console.log('收集完成！')
}

main()
