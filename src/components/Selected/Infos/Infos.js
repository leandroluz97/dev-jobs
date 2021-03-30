import React from "react"
import styles from "./Infos.module.css"
import parse from "html-react-parser"

const Infos = ({ type, title, location, description, createdAt }) => {
  const day = new Date(createdAt).getDay()
  const month = new Date(createdAt).getMonth()
  const year = new Date(createdAt).getFullYear()

  const dayFormated =
    String(day).length <= 1 ? String(day).padStart(2, "0") : day
  const monthFormated =
    String(month).length <= 1 ? String(month).padStart(2, "0") : month

  return (
    <div className={styles.infos}>
      <div className={styles.infosHead}>
        <div>
          <p>
            {`${dayFormated}/${monthFormated}/${year}`} &bull; {type}
          </p>
          <p>{title}</p>
          <p>{location}</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
      <p className={styles.infosCopy}>{parse(description)}</p>
    </div>
  )
}

export default Infos
