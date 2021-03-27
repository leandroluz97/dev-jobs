import React from "react"
import styles from "./Head.module.css"

const Head = ({ company, company_url }) => {
  return (
    <div className={styles.head}>
      <div className={styles.headContent}>
        <img src='./icons/jobLogo.svg' alt='job logo' />
        <div>
          <p>{company}</p>
          <p>{company_url}</p>
        </div>

        <a href={company_url}>Link </a>
      </div>
    </div>
  )
}

export default Head
