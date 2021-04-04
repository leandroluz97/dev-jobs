import React from "react"
import styles from "./Head.module.css"
import jobLogo from "../../../assets/jobLogo.svg"

const Head = ({ company, company_url }) => {
  return (
    <div className={styles.head}>
      <div className={styles.headContent}>
        <img src={jobLogo} alt='job logo' />
        <div>
          <p>{company}</p>
          <p>{company_url}</p>
        </div>

        <a href={company_url}>Company Site </a>
      </div>
    </div>
  )
}

export default Head
