import React from "react"
import styles from "./Job.module.css"
import jobLogo from "../../../assets/jobLogo.svg"
const Job = ({ createdAt, typeJob, title, company, location, handleRoute }) => {
  const day = new Date(createdAt).getDay()
  const month = new Date(createdAt).getMonth()
  const year = new Date(createdAt).getFullYear()

  const dayFormated =
    String(day).length <= 1 ? String(day).padStart(2, "0") : day
  const monthFormated =
    String(month).length <= 1 ? String(month).padStart(2, "0") : month
  return (
    <div className={styles.card} onClick={handleRoute}>
      <div className={styles.cardContent}>
        <img src={jobLogo} alt='logo' />
        <p>
          {`${dayFormated}/${monthFormated}/${year}`} &bull; {typeJob}
        </p>
        <p>{title}</p>
        <p>{company}</p>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default Job
