import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base64 字符表
const BASE64_CHARSET = '0123456789/ABCDEFGHIJKLMNOPQRSTUVWXYZ+abcdefghijklmnopqrstuvwxyz'

export function utoa(bits: number[]) {
  let result = ''

  // 按 6 bit 分组
  for (let i = 0; i < bits.length; i += 6) {
    let value = 0
    for (let j = 0; j < 6; j++) {
      const bit = bits[i + j] !== undefined ? bits[i + j] : 0 // 不足 6 位时补 0
      value = (value << 1) | bit
    }
    result += BASE64_CHARSET[value]
  }

  return result
}

export function atou(base64: string) {
  const bits = []

  for (let i = 0; i < base64.length; i++) {
    const char = base64[i]
    const index = BASE64_CHARSET.indexOf(char)
    if (index === -1) {
      return []
    }
    // index 转成 6 位二进制
    const binStr = index.toString(2).padStart(6, '0')
    for (let j = 0; j < 6; j++) {
      bits.push(Number(binStr[j]))
    }
  }

  return bits
}
