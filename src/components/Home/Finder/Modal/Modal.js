import React from "react"
import styles from "./Modal.module.css"

const Modal = () => {
  return (
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
  )
}

export default Modal
