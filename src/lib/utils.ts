import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import baseX from 'base-x'
import pako from 'pako'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base 字符表
const BASE_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const base = baseX(BASE_CHARSET)

/**
 * 将二进制数组编码为 Base 字符串
 * @param bits 二进制数组
 * @returns Base 字符串
 */
export function encodeBits(bits: number[]) {
  const byteArray = Uint8Array.from(bits)
  const compressed = pako.deflateRaw(byteArray)
  return base.encode(compressed)
}

/**
 * 将 Base 字符串解码为二进制数组
 * @param encodedStr Base 字符串
 * @returns 二进制数组
 */
export function decodeBits(encodedStr: string) {
  if (!encodedStr) return []
  const compressed = base.decode(encodedStr)
  const decompressed = pako.inflateRaw(compressed)
  return Array.from(decompressed)
}
