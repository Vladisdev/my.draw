import { useEffect } from 'react'
import type { Handlers, UseClickOutsideProps } from './types'

const handlers: Handlers = ['touchend', 'mouseup']

export const useClickOutside = ({ callback, ref }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref?.current || ref.current?.contains(event.target as Node)) {
        return
      }

      callback()
    }

    handlers.forEach((event) =>
      document.addEventListener(event, handleClickOutside)
    )

    return () => {
      handlers.forEach((event) =>
        document.removeEventListener(event, handleClickOutside)
      )
    }
  }, [callback, ref])
}
