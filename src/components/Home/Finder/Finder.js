import React, { useContext, useEffect, useState } from "react"
import styles from "./Finder.module.css"
import { ThemeContext } from "../../../context/Theme"
import Modal from "./Modal/Modal"
import { useHistory } from "react-router-dom"
import { JobsContext } from "../../../context/JobsContext"
import finder from "../../../assets/finder.svg"
import location from "../../../assets/location.svg"
import finderWhite from "../../../assets/finderWhite.svg"

const Finder = () => {
  //contexts
  const { themeLight } = useContext(ThemeContext)
  const { handleJobs, setJobs } = useContext(JobsContext)

  //state
  const [search, setSearch] = useState({
    title: "",
    location: "",
  })
  const [checkbox, setCheckbox] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  let history = useHistory()

  const handleInput = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }
  const handleCheckbox = (e) => {
    setCheckbox(!checkbox)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    let isSearchEmpty = []

    for (const key in search) {
      isSearchEmpty.push(search[key].length > 1)
    }

    isSearchEmpty = isSearchEmpty.every((input) => input === false)

    if (isSearchEmpty) return

    setJobs([])

    if (search) {
      const params = { ...search, checkbox }

      let queryParams = []
      for (let i in params) {
        queryParams.push(
          encodeURIComponent(i) + "=" + encodeURIComponent(params[i])
        )
      }

      const queryString = queryParams.join("&")
      history.push({
        pathname: "/",
        search: "?" + queryString,
      })

      handleJobs(params)
    } else {
      return
    }
  }
  return (
    <>
      <section className={styles.finder}>
        <div className={styles.finderContainer}>
          <form className={styles.finderWrapper}>
            <div className={styles.finderByTitle}>
              <img src={finder} alt='finder' />
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Filter by title...'
                onChange={(e) => handleInput(e)}
                value={search.title}
              />
            </div>
            <div className={styles.finderByLocation}>
              <img src={location} alt='finder' />
              <input
                type='text'
                name='location'
                id='location'
                placeholder='Filter by location...'
                onChange={(e) => handleInput(e)}
                value={search.location}
              />
            </div>
            <div className={styles.finderSearch}>
              <div className={styles.finderFullTime}>
                <input
                  type='checkbox'
                  name='fulltime'
                  id='fulltime'
                  onChange={(e) => handleCheckbox(e)}
                  value={checkbox}
                />
                <label htmlFor='fulltime'>
                  <span>Full Time</span>
                  <span>Full Time Only</span>
                </label>
              </div>
              <div onClick={() => setIsModalOpen(!isModalOpen)}>
                {!themeLight ? (
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z'
                      fill='white'
                    />
                  </svg>
                ) : (
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z'
                      fill='#6E8098'
                    />
                  </svg>
                )}
              </div>
              <button onClick={handleSearch}>
                <img src={finderWhite} alt='finder white' />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleInput={handleInput}
        handleCheckbox={handleCheckbox}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
    </>
  )
}

export default Finder
