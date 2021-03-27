import React from "react"
import styles from "./Job.module.css"
const Job = (props) => {
  return (
    <div className={styles.card} onClick={props.handleRoute}>
      <div className={styles.cardContent}>
        <img src='./icons/jobLogo.svg' alt='' />
        <p>5h ago &bull; {props.typeJob}</p>
        <p>{props.title}</p>
        <p>{props.company}</p>
        <p>{props.location}</p>
      </div>
    </div>
  )
}

export default Job
