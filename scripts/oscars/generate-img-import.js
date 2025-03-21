import fs from 'fs'
import fsPromise from 'node:fs/promises'

const data = JSON.parse(fs.readFileSync('./oscars/data.json', 'utf-8'))

for (const item of data) {
  const imgName = item.name
    .replace(/[\u4e00-\u9fa5]|'|-/g, '')
    .trim()
    .split(' ')
    .map((v) => v[0].toUpperCase() + v.slice(1))
    .join('')
  await fsPromise.appendFile(
    './oscars/img-import.txt',
    // `import ${imgName} from './img/${item.name}.png'\n`
    `${JSON.stringify(item.name)}\n`
  )
}
