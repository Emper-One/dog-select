import axios from 'axios'
const baseURL = 'https://dog.ceo/api'
const apiClient = axios.create({baseURL})

const api = {
  async getAllDogs () {	
    const url = `/breeds/list/all`
    return await apiClient.get(url)
  },

  async getSelectDog (name: string) {	
    const url = `/breed/${name}/images/random`
    return await apiClient.get(url)
  },

  async getRandomDog () {	
    const url = `/breeds/image/random`
    return await apiClient.get(url)
  }
}
export default api