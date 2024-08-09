import { create } from 'zustand'
import type { FigureTypeStoreState } from './types'

export const useFigureTypeStore = create<FigureTypeStoreState>((set) => ({
  type: 'non-interactive',
  changeType: (type) => set({ type }),
}))
