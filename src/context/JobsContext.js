import { useContext, useState, createContext, useEffect } from "react"
import Axios from "../Axios/Axios"

export const JobsContext = createContext([])

export const JobProvider = (props) => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const axios = new Axios()

    axios
      .getAlljobs()
      .then((jobs) => {
        setJobs(jobs.data)
      })
      .catch((err) => console.log(err))
  }, [])

  function handleJobs() {
    setJobs([])
  }

  return (
    <JobsContext.Provider value={{ jobs }}>
      {props.children}
    </JobsContext.Provider>
  )
}
