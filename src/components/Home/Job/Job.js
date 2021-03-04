import React from "react"
import styles from "./Job.module.css"
const Job = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src='./icons/jobLogo.svg' alt='' />
        <p>5h ago &bull; FullTime</p>
        <p>Senior Software Engineer</p>
        <p>So Digital Inc.</p>
        <p>Toronto, Ontario - Remote</p>
      </div>
    </div>
  )
}

export default Job
