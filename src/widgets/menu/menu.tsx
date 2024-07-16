import BurgerIcon from '@/shared/assets/icons/dark/burger.svg?react'
import { useBoolean, useClickOutside } from '@/shared/hooks'
import { useRef } from 'react'
import styles from './menu.module.scss'
import { MenuList } from './menuList'

export const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [isMenuOpened, toggle] = useBoolean(false)
  useClickOutside({ ref: menuRef, callback: () => toggle(false) })

  return (
    <div ref={menuRef} className={styles.menu}>
      <button onClick={() => toggle()} className={styles.menu__button}>
        <BurgerIcon width={20} hanging={20} />
      </button>
      {isMenuOpened && <MenuList />}
    </div>
  )
}
