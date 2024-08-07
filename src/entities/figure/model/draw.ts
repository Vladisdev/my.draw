import type { DrawProps } from './types'

export const draw = ({ rects, canvasCtx, canvasRef }: DrawProps) => {
  if (!canvasCtx || !canvasRef.current) return

  canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

  rects.forEach((rect) => {
    canvasCtx.beginPath()
    canvasCtx.lineWidth = 3
    canvasCtx.strokeStyle = '#e2e2e8'
    canvasCtx.roundRect(rect.x, rect.y, rect.width, rect.height, 10)
    canvasCtx.stroke()
  })
}
