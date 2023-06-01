import { service } from './service'
import type { AxiosRequestConfig } from 'axios'
import qs from 'qs'
export default {
  baseGet: async <T = any>(url: string, params?: any, config?: AxiosRequestConfig) => {
    const res = await service.get(url, {
      ...config,
      params: params || {}
    })
    return res.data as unknown as T
  },
  postForXWWWForm: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const d = qs.stringify(data || {})
    const conf = config || {}
    if (conf.headers) {
      conf.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
      conf.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const res = await service.post(url, d, conf)
    return res.data as unknown as T
  },
  // json请求体
  basePost: async <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await service.post(url, data || {}, config || {})
    return res.data as unknown as T
  }

  //   download: async <T = any>(option: any) => {
  //     const res = await request({ method: 'GET', responseType: 'blob', ...option })
  //     return res as unknown as Promise<T>
  //   },
  //   upload: async <T = any>(option: any) => {
  //     option.headersType = 'multipart/form-data'
  //     const res = await request({ method: 'POST', ...option })
  //     return res as unknown as Promise<T>
  //   }
}
