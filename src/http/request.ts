import { API_URL } from '@env'
import axios, { type AxiosResponse } from 'axios'
import type { AxiosInstance } from 'axios'
import { getToken, removeToken } from './token.tsx'

export class Request {
  public static axiosInstance: AxiosInstance

  public static init() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.initInterceptors()
    
    return axios
  }
  private static initInterceptors() {
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        // config.data = qs.stringify(config.data)
        // console.log(config,'@')

        config.headers.token = await getToken()
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { statusText, data, status } = response
        if (statusText === 'OK' || status === 200) {
          return data
        } else {
          return Promise.reject(data)
        }
      },
      (error) => {
        if (error.response.status === 401) {
          removeToken()
          // const t_data = getToken();
          // sendLog({
          //   type: 'error',
          //   uid: t_data['username'] || '',
          //   spm: 'login.out.expire.0',
          //   extInfo: JSON.stringify({}),
          // });
          // window.localStorage.clear();
        }
        return Promise.reject(error.data)
      }
    )
  }
}
