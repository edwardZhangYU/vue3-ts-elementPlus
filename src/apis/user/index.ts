import type { AxiosRequestConfig } from 'axios'
import axiosInstance from '../instance/index'
export const getUser = async (url: string, data: any, config: AxiosRequestConfig) => {
  const res = await axiosInstance.baseGet(url, data, config)
  return res
}
