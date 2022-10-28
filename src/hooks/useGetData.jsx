// Custom Hook

// hooks
import { useEffect } from 'react'

// axios
import axios from 'axios'

// Context
import { useItemsContext } from '../context/ItemsContext'

const useGetData = (url) => {
  const context = useItemsContext()

  const getData = async () => {
    try {
      const result = await axios.get(url)
      // console.log(result)
      context.setData(result.data)
      context.setLoading(false)
      // console.log(data)
    } catch (error) {
      console.log('no entre')
      context.setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])
}

export default useGetData
