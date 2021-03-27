import React from "react"
import styles from "./Apply.module.css"
const Apply = ({ how_to_apply }) => {
  return (
    <div className={styles.apply}>
      <h2 className={styles.applyTitle}>How to Apply</h2>
      <p>{how_to_apply}</p>
    </div>
  )
}

export default Apply
