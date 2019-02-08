import axios from 'axios'

const baseUrl = 'https://storage.googleapis.com/dito-questions/events.json'

export default {
  fetchData: () => (
    axios.get(baseUrl)
      .then(response => response)
      .catch(err => {throw new Error(err)})
  )
}