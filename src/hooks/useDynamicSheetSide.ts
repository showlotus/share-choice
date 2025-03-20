import { useCallback, useEffect, useState } from 'react'

import { useMediaQuery } from 'usehooks-ts'

export function useDynamicSheetSide() {
  const [side, setSide] = useState<'right' | 'bottom' | 'top' | 'left' | null | undefined>('right')
  const callback = useCallback(() => {
    if (window.innerWidth < 640) {
      setSide('bottom')
    } else {
      setSide('right')
    }
  }, [])

  window.addEventListener('resize', callback)

  useEffect(() => {
    callback()
  }, [callback])

  return { side }
}
