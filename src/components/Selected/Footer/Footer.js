import React from "react"
import styles from "./Footer.module.css"
const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerHead}>
          <div>
            <p>{props.job.title}</p>
            <p>{props.job.location}</p>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
