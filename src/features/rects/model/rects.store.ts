import { create } from 'zustand'
import type { RectsStoreState } from './types'

export const useRectsStore = create<RectsStoreState>((set) => ({
  rects: [],
  setRects: (rects) => set({ rects }),
  deleteLastRect: () => set((state) => ({ rects: state.rects.slice(0, -1) })),
}))
