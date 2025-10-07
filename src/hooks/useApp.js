import axios from 'axios'
import { useEffect, useState } from 'react'

const useApp = () => {
  const [apps, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios('../appData.json')
      .then(data => {setBooks(data.data)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { apps, loading, error }
}

export default useApp