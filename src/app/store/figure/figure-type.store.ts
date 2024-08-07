import type { RectType } from '@/entities/figure/model/types'
import { create } from 'zustand'

interface State {
  changeType: (type: RectType) => void
  type: RectType
}

export const useFigureTypeStore = create<State>((set) => ({
  type: 'non-interactive',
  changeType: (type) => set({ type }),
}))
