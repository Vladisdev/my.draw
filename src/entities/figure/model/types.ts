import type React from 'react'
import type { MutableRefObject } from 'react'

export type RectType = 'non-interactive' | 'rect' | 'line' | 'text'

export type RectObject = {
  type: RectType
  x: number
  y: number
  width: number
  height: number
}

export interface DrawProps {
  rects: RectObject[]
  canvasCtx: CanvasRenderingContext2D
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
  rectType: RectType
}

export interface DrawResizeProps extends DrawProps {
  mousePosition: { x: number; y: number }
  event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
}
