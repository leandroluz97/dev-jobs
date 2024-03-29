import axios from "axios"

export default class Axios {
  constructor() {
    const instance = axios.create({
      baseURL: "/positions.json",
    })

    this.instance = instance
  }

  getPosition() {
    return this.instance.get("", { crossdomain: true })
  }
  getAlljobs(page) {
    return this.instance.get(`?page=${page}`, { crossdomain: true })
  }
  getJobsById(id) {
    return axios.get(`/positions/${id}.json`, { crossdomain: true })
  }

  searchedJobs(title, location, fulltime, page) {
    const titleSearch = title ? `description=${title + "&"}` : ""
    const locationSearch = location ? `location=${location + "&"}` : ""
    const fulltimeSearch = fulltime ? `full_time=true&` : ""
    const pageSearch = page ? `page=${page}` : ""

    return this.instance.get(
      `?${locationSearch}${titleSearch}${fulltimeSearch}${pageSearch}`,
      { crossdomain: true }
    )
  }
  nextPage(pageNumber, pageRoute) {
    return axios.get(`${pageRoute}&page=${pageNumber}`, { crossdomain: true })
  }
}
