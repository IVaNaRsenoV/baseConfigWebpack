import React, { FC, ReactNode } from 'react'
import styles from "./ChartContainer.module.scss";

interface IChildren {
    children: ReactNode;
}

export const ChartContainer:FC<IChildren> = ({ children }) => {
  return (
    <div className={styles.chart__container}>
        {children}
    </div>
  )
}
