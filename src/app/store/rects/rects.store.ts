import { create } from 'zustand'
import type { RectsStoreState } from './model/rects-store.types'

export const useRectsStore = create<RectsStoreState>((set) => ({
  rects: [],
  setRects: (rects) => set({ rects }),
}))
