import { Button } from '@/shared/ui'
import cn from 'classnames'
import { useFigureTypeStore } from '../model/figure-type.store'
import type { FigureProps } from '../model/types'
import styles from './styles.module.scss'

export const FigureSelector = ({ className, type, children }: FigureProps) => {
  const figureStore = useFigureTypeStore()

  const setNewFigureType = () => {
    figureStore.changeType(type)
  }

  return (
    <Button
      onClick={setNewFigureType}
      className={cn(styles.selector, className, {
        [styles.selector__active]: figureStore.type === type,
      })}
      variant='ghost'
    >
      {children}
    </Button>
  )
}
