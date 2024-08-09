import { FigureSelector } from '@/features/figure-selector'
import styles from './figure-selection.module.scss'

export const FigureSelection = () => {
  return (
    <div className={styles.group}>
      <FigureSelector type='non-interactive'>Non interactive</FigureSelector>
      <FigureSelector type='rect'>Rect</FigureSelector>
      <FigureSelector type='line'>Line</FigureSelector>
    </div>
  )
}
