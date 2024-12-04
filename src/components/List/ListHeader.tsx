import React from 'react'
import styles from './ListHeader.module.css'

export type ListHeaderProps = {
  tasksCounter: number
  checkedTasksCounter: number
}

export const ListHeader: React.FC<ListHeaderProps> = ({
  tasksCounter,
  checkedTasksCounter
}: ListHeaderProps) => {
  const hasCompletedTasks = tasksCounter === 0;

  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {hasCompletedTasks ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}