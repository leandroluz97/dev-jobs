import axios from "axios"

export default class Axios {
  constructor() {
    const instance = axios.create({
      baseURL: "/positions.json",
    })

    this.instance = instance
  }

  getAlljobs() {
    return this.instance.get()
  }

  searchedJobs(title, location, fulltime, page) {
    const titleSearch = `description=${title}`
    const locationSearch = `location=${location}`
    const fulltimeSearch = `full_time=${fulltime}`
    const pageSearch = `page=${fulltime}`
    return this.instance.get(
      `?${title && titleSearch + "&"}``${location && locationSearch + "&"}``${
        fulltime && fulltimeSearch + "&"
      }``${page && pageSearch + "&"}`
    )
  }
}
