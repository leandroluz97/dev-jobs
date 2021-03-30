import React from "react"
import styles from "./Backdrop.module.css"

const Backdrop = ({ isModalOpen, setIsModalOpen }) => {
  function handleModal() {
    setIsModalOpen(false)
  }

  return (
    <div
      className={isModalOpen ? styles.backdropModal : styles.visibleModal}
      onClick={handleModal}
    ></div>
  )
}

export default Backdrop
