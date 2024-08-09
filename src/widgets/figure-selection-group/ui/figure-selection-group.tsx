import { FigureSelector } from '@/features/figure-selector'
import styles from './figure-selection-group.module.scss'

export const FigureSelectionGroup = () => {
  return (
    <div className={styles.group}>
      <FigureSelector type='non-interactive'>Non interactive</FigureSelector>
      <FigureSelector type='rect'>Rect</FigureSelector>
      <FigureSelector type='line'>Line</FigureSelector>
    </div>
  )
}
