import { useFigureTypeStore } from '@/app/store/figure/figure-type.store'
import { draw, drawResize } from '@/entities/figure'
import type { RectObject } from '@/entities/figure/model/types'
import { useGetWindowSize } from '@/shared/hooks'
import type { MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './home.module.scss'

export const Home = () => {
  const rectType = useFigureTypeStore((state) => state.type)
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
      rectType,
    })
  }, [canvasCtx, rectType, rects])

  const resize: MouseEventHandler<HTMLCanvasElement> = (e) => {
    if (!canvasCtx || e.buttons !== 1) return

    drawResize({
      canvasCtx,
      canvasRef,
      rects,
      mousePosition,
      event: e,
      rectType,
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
        type: rectType,
      },
    ])
  }

  return (
    <main>
      <canvas
        className={`${
          rectType === 'non-interactive' ? styles.none_interactive : ''
        }`}
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
