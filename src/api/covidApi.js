import api from '../services/api'

export const fetchGlobalCases = () => {
  return api.get('total').then(response => {
    return response.data
  });
}

export const fetchLocalCases = (_country) => {
  return api.get(`country/${_country}`).then(response => {
    return response.data
  });
}