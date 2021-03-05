import React from "react"
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerHead}>
          <div>
            <p>Senior Software Engineer</p>
            <p>Toronto, Ontario - Remote</p>
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
