import type { RectObject } from '@/shared/types'
import type React from 'react'
import type { MutableRefObject } from 'react'

export interface DrawProps {
  rects: RectObject[]
  canvasCtx: CanvasRenderingContext2D
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
}

export interface DrawResizeProps extends DrawProps {
  mousePosition: { x: number; y: number }
  event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
}
