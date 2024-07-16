import MoonIcon from '@/shared/assets/icons/dark/moon.svg?react'
import SunIcon from '@/shared/assets/icons/dark/sun.svg?react'
import cn from 'classnames'
import styles from './theme.module.scss'

export const Theme = () => {
  return (
    <div className={styles.theme}>
      <span className={styles.theme__text}>Theme</span>
      <div className={styles.theme__variants}>
        <label htmlFor='sun' className={styles.theme__item}>
          <input type='radio' name='theme' id='sun' />
          <SunIcon width={17} height={17} />
        </label>
        <label htmlFor='moon' className={cn(styles.theme__item, styles.active)}>
          <input type='radio' name='theme' id='moon' />
          <MoonIcon width={17} height={17} />
        </label>
      </div>
    </div>
  )
}
