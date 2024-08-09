import { draw, drawResize, endRectDraw } from '@/entities/figure'
import { useFigureTypeStore } from '@/features/figure-selector'
import { useRectsStore } from '@/features/rects'
import { useGetWindowSize } from '@/shared/hooks'
import type { MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './home.module.scss'

export const Home = () => {
  const currentRectType = useFigureTypeStore((state) => state.type)
  const { rects, setRects, deleteLastRect } = useRectsStore()
  const { windowSize } = useGetWindowSize()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasCtx = canvasRef.current?.getContext('2d')

  useEffect(() => {
    const deleteLastCreatedFigure = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'z' && rects.length > 0) deleteLastRect()
    }

    window.addEventListener('keydown', deleteLastCreatedFigure)

    return () => {
      window.removeEventListener('keydown', deleteLastCreatedFigure)
    }
  }, [deleteLastRect, rects, setRects])

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
    const newRects = endRectDraw({
      currentRectType,
      event: e,
      mousePosition,
      rects,
    })

    setRects(newRects)
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
