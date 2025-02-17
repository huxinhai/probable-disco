import type { AxiosRequestConfig } from 'axios'
import { Request } from './request.ts'

export const post = <T = any, D = any>(url: string, data?: D) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url
  }
  if (data) config.data = data
  return Request.axiosInstance<T>(config) as Promise<T>
}
