import type { MutableRefObject, RefObject } from 'react'

export type Handlers = (keyof DocumentEventMap)[]
export interface UseClickOutsideProps {
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>
  callback: () => void
}
