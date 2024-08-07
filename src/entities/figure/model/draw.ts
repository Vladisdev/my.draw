import type { DrawProps } from './types'

export const draw = ({ rects, canvasCtx, canvasRef }: DrawProps) => {
  if (!canvasCtx || !canvasRef.current) return

  canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

  rects.forEach((rect) => {
    canvasCtx.beginPath()
    canvasCtx.lineWidth = 3
    canvasCtx.strokeStyle = '#e2e2e8'

    switch (rect.type) {
      case 'rect':
        canvasCtx.roundRect(rect.x, rect.y, rect.width, rect.height, 10)
        break

      case 'line':
        canvasCtx.moveTo(rect.x, rect.y)
        canvasCtx.lineTo(rect.x + rect.width, rect.y + rect.height)
        break

      default:
        console.warn('Unknown rect type')
        break
    }

    canvasCtx.stroke()
  })
}
