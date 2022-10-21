// Custom Hook

// hooks
import { useState, useEffect } from 'react'

// axios
import axios from 'axios'

const useGetData = (url) => {
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const result = await axios.get(url)
      // console.log(result)
      setData(result.data)
      setLoading(false)
      // console.log(data)
    } catch (error) {
      console.log('no entre')
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading }
}

export default useGetData
