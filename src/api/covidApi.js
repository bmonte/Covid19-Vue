import api from '../services/api'

export const fetchGlobalCases = () => {
  return api.get().then(response => {
    return response.data
  });
}

export const fetchCountryList = () => {
  return api.get('/countries').then( response => {
    return response.data
  })
}

export const fetchLocalCases = (_country) => {
  return api.get(`/countries/${_country}`).then(response => {
    return response.data
  });
}