import { draw, drawResize } from '@/entities/figure'
import { useGetWindowSize } from '@/shared/hooks'
import type { RectObject } from '@/shared/types'
import type { MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'

export const Home = () => {
  const { windowSize } = useGetWindowSize()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasCtx = canvasRef.current?.getContext('2d')
  const [rects, setRects] = useState<RectObject[]>([])

  const setPosition: MouseEventHandler<HTMLCanvasElement> = (e) => {
    e.buttons === 1 && setMousePosition({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    if (!canvasCtx || !canvasRef.current) return

    draw({
      canvasCtx,
      canvasRef,
      rects,
    })
  }, [canvasCtx, rects])

  const resize: MouseEventHandler<HTMLCanvasElement> = (e) => {
    if (!canvasCtx || e.buttons !== 1) return

    drawResize({
      canvasCtx,
      canvasRef,
      rects,
      mousePosition,
      event: e,
    })
  }

  const endRect: MouseEventHandler<HTMLCanvasElement> = (e) => {
    setRects([
      ...rects,
      {
        x: mousePosition.x,
        y: mousePosition.y,
        width: e.pageX - mousePosition.x,
        height: e.pageY - mousePosition.y,
        type: 'rect',
      },
    ])
  }

  return (
    <main>
      <canvas
        onMouseMove={resize}
        onMouseDown={setPosition}
        onMouseUp={endRect}
        width={windowSize.width}
        height={windowSize.height}
        ref={canvasRef}
      />
    </main>
  )
}
