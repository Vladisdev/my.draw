import { draw } from './draw'
import type { DrawResizeProps } from './types'

export const drawResize = ({
  canvasCtx,
  canvasRef,
  rects,
  mousePosition,
  event,
}: DrawResizeProps) => {
  draw({
    canvasCtx,
    canvasRef,
    rects,
  })

  canvasCtx.beginPath()
  canvasCtx.lineWidth = 3
  canvasCtx.strokeStyle = '#e2e2e8'
  canvasCtx.roundRect(
    mousePosition.x,
    mousePosition.y,
    event.pageX - mousePosition.x,
    event.pageY - mousePosition.y,
    10
  )
  canvasCtx.stroke()
}
