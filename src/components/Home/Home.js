import React, { useContext, useEffect } from "react"
import Finder from "./Finder/Finder"
import Job from "./Job/Job"
import styles from "./Home.module.css"
import { JobsContext } from "../../context/JobsContext"
import Spinner from "../UI/Spinner"
import {
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom"
import Axios from "../../Axios/Axios"

const Home = () => {
  //Api context
  const {
    jobs,
    handleJobs,
    setJobs,
    page,
    setPage,
    pagePath,
    setPagePath,
  } = useContext(JobsContext)

  //Routes props
  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()

  useEffect(() => {
    let params = {}
    const url = location.search.slice(1).split("&")

    if (url.length !== 1) {
      url.forEach((param) => {
        const key = param.split("=")
        params[key[0]] = key[1]
      })

      handleJobs(params)
    } else {
      const axios = new Axios()
      axios
        .getAlljobs(page)
        .then((response) => {
          setJobs(response.data)
        })
        .catch((err) => console.log(err))
    }
  }, [pagePath])

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

    if (url.search.replace(regex, "") === "") {
      setPagePath(url.pathname)

      nextPage = url.search.replace(regex, "")
      history.push(`${nextPage}?page=${page + 1}`)
    }

    if (url.search.replace(regex, "") !== "") {
      setPagePath(url.search)

      nextPage = url.search.replace(regexCommercial, "")
      history.push(`${nextPage}&page=${page + 1}`)
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
          <button onClick={handleNextPage}>more job</button>
        </div>
      </section>
    </main>
  )
}

export default Home
