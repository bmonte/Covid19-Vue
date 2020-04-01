import axios from 'axios'

const api = axios.create({
  baseURL: 'https://covid2019-api.herokuapp.com/v2/'
})

export default api