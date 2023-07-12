import axios from "axios";

const base = 'https://jsonplaceholder.typicode.com'


// https://jsonplaceholder.typicode.com/photos

const API = ({url,getToken}) => {

  // console.log('API ++ ', url || base, getToken)

  return axios.create({
    baseURL: url || base,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken || '',
    }
  })
}

export const getApiSK = async (data) => {
  return await API({url:null, getToken:null}).get('/photos', data)
}
