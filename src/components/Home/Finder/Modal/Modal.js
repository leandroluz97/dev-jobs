import React, { useState } from "react"
import Backdrop from "./Backdrop"
import styles from "./Modal.module.css"

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  handleInput,
  handleCheckbox,
  handleSearch,
  checkbox,
  setSearch,
  search,
}) => {
  const modalSearch = (e) => {
    e.preventDefault()
    handleSearch(e)
    setIsModalOpen(false)
  }
  return (
    <>
      <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className={isModalOpen ? styles.backdrop : styles.visible}>
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
                  onChange={(e) => handleInput(e)}
                  value={search.location}
                />
              </div>
              <div className={styles.modalFullTime}>
                <input
                  type='checkbox'
                  name='fulltime'
                  id='fulltime'
                  onChange={(e) => handleCheckbox(e)}
                  value={checkbox}
                />
                <label htmlFor='fulltime'>
                  <span>Full Time Only</span>
                </label>
              </div>
              <button onClick={(e) => modalSearch(e)}>Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal
