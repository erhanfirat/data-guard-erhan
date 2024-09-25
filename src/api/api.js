import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://github.com/',
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
