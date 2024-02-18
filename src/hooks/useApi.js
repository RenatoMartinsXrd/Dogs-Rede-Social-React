import { useState } from 'react'

const useApi = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isFetching, setFetching] = useState(true)
  const [error, setError] = useState(null)

  const request = async (apiFunction) => {
    try {
      setLoading(true)
      const result = await apiFunction()
      setData(result)
      return true
    } catch (error) {
      if (error?.response?.data) setError(error.response.data)
      else setError(error)
      return false
    } finally {
      setLoading(false)
      setFetching(false)
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
      setFetching(false)
    }
  }

  return {
    request,
    data,
    loading,
    error,
    isFetching,
    requests,
    setError,
    setData,
    setLoading
  }
}

export default useApi
