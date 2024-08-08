import type { RectType } from '@/entities/figure/model/types'

export interface FigureTypeStoreState {
  changeType: (type: RectType) => void
  type: RectType
}
