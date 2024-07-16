import { Menu } from '../menu/menu'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      {/* figure actions */}
    </header>
  )
}
