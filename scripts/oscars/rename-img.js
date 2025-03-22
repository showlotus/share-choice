import fs from 'node:fs'
import path from 'node:path'

const directory = path.resolve('../src/views/movie/oscars/img')

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err)
    return
  }

  let count = 1

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase()
    const baseName = path.basename(file, ext)
    // 只处理图片文件
    if (ext === '.png') {
      const oldPath = path.join(directory, file)
      const newFileName = baseName.replace(/^(([\u4e00-\u9fa5]|·|：|\d)+).*/, '$1') + ext

      // console.log(newFileName)
      // return
      const newPath = path.join(directory, newFileName)

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`重命名 ${file} 失败:`, err)
        } else {
          console.log(`${file} 重命名为 ${newFileName}`)
        }
      })

      count++
    }
  })
})
