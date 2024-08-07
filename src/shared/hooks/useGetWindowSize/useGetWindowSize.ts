import { useEffect, useState } from 'react'

export const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState<
    Record<string, number | undefined>
  >({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const resizeHandler = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener('resize', resizeHandler)

    resizeHandler()

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return { windowSize }
}
