import axios from 'axios'
import qs from 'qs'

class AjaxRequest {
  constructor() {
    // this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'localhost:8000'
    this.timeout = 3000
    this.queue = {}
  }
  merge (options) {
    return {...options, baseURL: this.baseURL, timeout: this.timeout}
  }
  setInterceptor (instance, url) {
    instance.interceptors.response.use(res => {
      return res.data
    })
  }
  post(url, data) {
    let str = qs.stringify(data)
    let instance = axios.create()
    this.setInterceptor(instance)
    let config = this.merge(
      {
        method: 'post',
        url
      }
    )
    if (str) {
      config.data = str
    }
    return instance(config)
  }
}
let ajaxRequest = new AjaxRequest()

export async function post(...args) {
  const result = await ajaxRequest.post(...args)
  return result
}