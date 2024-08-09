import type { RectObject } from '@/entities/figure/model/types'

export interface RectsStoreState {
  rects: RectObject[]
  setRects: (rects: RectObject[]) => void
  deleteLastRect: () => void
}
