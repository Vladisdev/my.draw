import { useFigureTypeStore } from '@/app/store/figure/figure-type.store'
import type { RectType } from '@/entities/figure/model/types'
import { Button } from '@/shared/ui'
import cn from 'classnames'
import styles from './figure-selection.module.scss'

export const FigureSelection = () => {
  return (
    <div className={styles.group}>
      <FigureSelectionItem />
    </div>
  )
}

export const FigureSelectionItem = () => {
  const changeRectType = useFigureTypeStore((state) => state.changeType)
  const currentRectType = useFigureTypeStore((state) => state.type)

  const clickHandler = (type: RectType) => {
    changeRectType(type)
  }

  return (
    <>
      <Button
        className={cn(styles.group__item, {
          [styles.group__item__active]: currentRectType === 'non-interactive',
        })}
        onClick={() => clickHandler('non-interactive')}
        variant='ghost'
      >
        Non interactive
      </Button>
      <Button
        className={cn(styles.group__item, {
          [styles.group__item__active]: currentRectType === 'rect',
        })}
        onClick={() => clickHandler('rect')}
        variant='ghost'
      >
        Rect
      </Button>
      <Button
        className={cn(styles.group__item, {
          [styles.group__item__active]: currentRectType === 'line',
        })}
        onClick={() => clickHandler('line')}
        variant='ghost'
      >
        Line
      </Button>
    </>
  )
}
