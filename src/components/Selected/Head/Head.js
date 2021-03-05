import React from "react"
import styles from "./Head.module.css"

const Head = () => {
  return (
    <div className={styles.head}>
      <div className={styles.headContent}>
        <img src='./icons/jobLogo.svg' alt='job logo' />
        <div>
          <p>So Digital Inc.</p>
          <p>sodigital.co</p>
        </div>

        <button>Company site </button>
      </div>
    </div>
  )
}

export default Head
