import { defineStore } from 'pinia'
import { store } from '../index'

export const useDemo = defineStore('demo', {
  state: (): { a: any } => ({
    a: false
  }),
  actions: {
    async setA() {
      this.a = true
    }
  }
})

export const useDemoStore = () => {
  return useDemo(store)
}
