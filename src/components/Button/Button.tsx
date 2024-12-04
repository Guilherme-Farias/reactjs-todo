import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  )
}