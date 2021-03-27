import React from "react"
import styles from "./Infos.module.css"

const Infos = ({ type, title, location, description }) => {
  return (
    <div className={styles.infos}>
      <div className={styles.infosHead}>
        <div>
          <p>1w ago &bull; {type}</p>
          <p>{title}</p>
          <p>{location}</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
      <p className={styles.infosCopy}>{description}</p>
    </div>
  )
}

export default Infos
