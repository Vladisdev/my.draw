import { useFigureTypeStore } from '@/app/store/figure/figure-type.store'
import { useRectsStore } from '@/app/store/rects/rects.store'
import { draw, drawResize } from '@/entities/figure'
import type { RectObject } from '@/entities/figure/model/types'
import { useGetWindowSize } from '@/shared/hooks'
import type { MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './home.module.scss'

export const Home = () => {
  const currentRectType = useFigureTypeStore((state) => state.type)
  const { rects, setRects } = useRectsStore()
  const { windowSize } = useGetWindowSize()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasCtx = canvasRef.current?.getContext('2d')

  const setPosition: MouseEventHandler<HTMLCanvasElement> = (e) => {
    e.buttons === 1 && setMousePosition({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    if (!canvasCtx || !canvasRef.current) return

    draw({
      canvasCtx,
      canvasRef,
      rects,
      rectType: currentRectType,
    })
  }, [canvasCtx, currentRectType, rects])

  const resize: MouseEventHandler<HTMLCanvasElement> = (e) => {
    if (!canvasCtx || e.buttons !== 1) return

    drawResize({
      canvasCtx,
      canvasRef,
      rects,
      mousePosition,
      event: e,
      rectType: currentRectType,
    })
  }

  const endRect: MouseEventHandler<HTMLCanvasElement> = (e) => {
    const figure = {
      x: mousePosition.x,
      y: mousePosition.y,
      width: e.pageX - mousePosition.x,
      height: e.pageY - mousePosition.y,
      type: currentRectType,
    } satisfies RectObject

    setRects([...rects, figure])
  }

  return (
    <main>
      <canvas
        className={`${
          currentRectType === 'non-interactive' ? styles.none_interactive : ''
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
