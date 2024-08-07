import { draw } from './draw'
import type { DrawResizeProps } from './types'

export const drawResize = ({
  canvasCtx,
  canvasRef,
  rects,
  mousePosition,
  event,
  rectType,
}: DrawResizeProps) => {
  draw({
    canvasCtx,
    canvasRef,
    rects,
    rectType,
  })

  canvasCtx.beginPath()
  canvasCtx.lineWidth = 3
  canvasCtx.strokeStyle = '#e2e2e8'

  switch (rectType) {
    case 'rect':
      canvasCtx.roundRect(
        mousePosition.x,
        mousePosition.y,
        event.pageX - mousePosition.x,
        event.pageY - mousePosition.y,
        10
      )
      break

    case 'line':
      canvasCtx.moveTo(mousePosition.x, mousePosition.y)
      canvasCtx.lineTo(event.pageX, event.pageY)
      break

    default:
      console.warn('Unknown rect type')
      break
  }

  canvasCtx.stroke()
}
