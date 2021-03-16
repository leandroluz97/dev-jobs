import React, { useContext } from "react"
import Finder from "./Finder/Finder"
import Job from "./Job/Job"
import styles from "./Home.module.css"
import { JobsContext } from "../../context/JobsContext"
import Spinner from "../UI/Spinner"

const Home = (props) => {
  const { jobs } = useContext(JobsContext)

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
      />
    ))
  }

  return (
    <main>
      <Finder />

      <section className={styles.jobs}>
        <div className={styles.jobsContainer}>
          <div className={styles.jobsWrapper}>{jobsList}</div>
        </div>
      </section>
    </main>
  )
}

export default Home
