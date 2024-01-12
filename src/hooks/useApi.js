import { useState } from 'react'

const useApi = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (apiFunction) => {
    try {
      setLoading(true)
      const result = await apiFunction()
      setData(result)
    } catch (error) {
      if (error?.response?.data) setError(error.response.data)
      else setError(error)
    } finally {
      setLoading(false)
    }
  }

  const requests = async (apiFunctions) => {
    try {
      setLoading(true)

      for (const apiFunction of apiFunctions) {
        try {
          const result = await apiFunction()
          setData(result)
        } catch (error) {
          if (error?.response?.data) setError(error.response.data)
          break
        }
      }
    } finally {
      setLoading(false)
    }
  }

  return { request, data, loading, error, requests }
}

export default useApi
