import { useEffect, useState } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-kappys-5p5zyiegt-kappys1.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setLoading(false)
        setCategories(response)
      })
  }, [])

  return { categories, loading }
}
