import axios from 'axios'

export const api = axios.create({
   baseURL: 'https://api-rocketmovies-elh9.onrender.com'
})