import { Menu } from '@/widgets'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

export const Layout = () => {
  return (
    <>
      <div className={styles.header}>
        <Menu />
      </div>
      <Outlet />
    </>
  )
}
