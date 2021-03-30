import React, { useState } from "react"
import Backdrop from "./Backdrop"
import styles from "./Modal.module.css"

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className={styles.backdrop}>
        <div className={styles.modalContainer}>
          <form>
            <div className={styles.modalForm}>
              <div className={styles.modalByLocation}>
                <img src='./icons/location.svg' alt='finder' />
                <input
                  type='text'
                  name='location'
                  id='location'
                  placeholder='Filter by location...'
                />
              </div>
              <div className={styles.modalFullTime}>
                <input type='checkbox' name='fulltime' id='fulltime' />
                <label htmlFor='fulltime'>
                  <span>Full Time Only</span>
                </label>
              </div>
              <button>Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal
