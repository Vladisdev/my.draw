import type { RectType } from '@/entities/figure/model/types'
import type { PropsWithChildren } from 'react'

export interface FigureTypeStoreState {
  changeType: (type: RectType) => void
  type: RectType
}

export interface FigureProps extends PropsWithChildren {
  className?: string
  type: RectType
}
