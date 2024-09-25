import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
