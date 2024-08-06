import type { ButtonVariants } from '@/shared/types'
import cn from 'classnames'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './button.module.scss'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants
}

export const Button = ({
  className,
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.button__secondary]: variant === 'secondary',
        [styles.button__ghost]: variant === 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
