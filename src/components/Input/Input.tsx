import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ ...props }: InputProps) => {
  return <input className={styles.container} {...props} />
}