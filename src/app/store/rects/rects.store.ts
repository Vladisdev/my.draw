import type { RectObject } from '@/entities/figure/model/types'
import { create } from 'zustand'

interface RectsStoreState {
  rects: RectObject[]
  setRects: (rects: RectObject[]) => void
}

export const useRectsStore = create<RectsStoreState>((set) => ({
  rects: [],
  setRects: (rects) => set({ rects }),
}))
