import type { EndRectDrawProps, RectObject } from './types'

export const endRectDraw = ({
  currentRectType,
  event,
  mousePosition,
  rects,
}: EndRectDrawProps) => {
  const figure = {
    x: mousePosition.x,
    y: mousePosition.y,
    width: event.pageX - mousePosition.x,
    height: event.pageY - mousePosition.y,
    type: currentRectType,
  } satisfies RectObject

  return [...rects, figure]
}
