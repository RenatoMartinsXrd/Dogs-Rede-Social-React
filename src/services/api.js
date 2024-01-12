import axios from 'axios'

const API_URL = 'https://dogsapi.origamid.dev/json'

export const tokenPost = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/jwt-auth/v1/token`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const tokenValidatePost = async (token) => {
  try {
    const response = await axios.post(
      `${API_URL}/jwt-auth/v1/token/validate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const userGet = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const userPost = async (body) => {
  const response = await axios.post(`${API_URL}/api/user`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data
}
