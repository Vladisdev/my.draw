import { FigureSelectionGroup } from '@/widgets'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <FigureSelectionGroup />
      </header>
      <Outlet />
    </>
  )
}
