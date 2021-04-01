import React, { useContext, useEffect, useState } from "react"
import Finder from "./Finder/Finder"
import Job from "./Job/Job"
import styles from "./Home.module.css"
import { JobsContext } from "../../context/JobsContext"
import Spinner from "../UI/Spinner"
import { useHistory, useLocation } from "react-router-dom"
import Axios from "../../Axios/Axios"

const Home = () => {
  //Api context

  const { jobs, handleJobs, setJobs, page, setPage } = useContext(JobsContext)

  //Routes props
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    let params = {}
    const url = location.search.slice(1).split("&")
    let regex = /(&|\?page=\d{1,10})$/

    if (url.length !== 1 && location.search.replace(regex, "") !== "") {
      url.forEach((param) => {
        const key = param.split("=")
        params[key[0]] = key[1]
      })

      handleJobs(params)
    } else {
      const axios = new Axios()
      const pageNumber = location.search.split("=")
      const pageIndex = pageNumber[1] ? Number(pageNumber[1]) : page
      axios
        .getAlljobs(pageIndex)
        .then((response) => {
          setJobs(response.data)
        })
        .catch((err) => console.log(err))
    }
  }, [page])

  //handle functions
  const handleRoute = (id) => {
    history.push(`/job/${id}`)
  }
  const handleNextPage = (id) => {
    const url = location
    let regex = /(&|\?page=\d{1,10})$/
    let regexCommercial = /(&page=\d{1,10})$/
    let nextPage

    setPage(page + 1)
    setJobs([])

    if (url.search.replace(regex, "") === "") {
      nextPage = url.search.replace(regex, "")
      history.push(`${nextPage}?page=${page + 1}`)

      //setPagePath(url.pathname)
    }

    if (url.search.replace(regex, "") !== "") {
      nextPage = url.search.replace(regexCommercial, "")
      history.push(`${nextPage}&page=${page + 1}`)

      //setPagePath(url.search)
    }
  }

  let jobsList
  if (jobs.length === 0) {
    jobsList = <Spinner />
  } else {
    jobsList = jobs.map((job) => (
      <Job
        key={job.id}
        typeJob={job.type}
        title={job.title}
        company={job.company}
        location={job.location}
        handleRoute={() => handleRoute(job.id)}
      />
    ))
  }

  return (
    <main>
      <Finder />
      <section className={styles.jobs}>
        <div className={styles.jobsContainer}>
          <div className={styles.jobsWrapper}>{jobsList}</div>
          {jobs.length >= 50 ? (
            <button className={styles.jobPlus} onClick={handleNextPage}>
              More job
            </button>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default Home
