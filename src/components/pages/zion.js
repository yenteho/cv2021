import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'

import { Img } from '../base/common'
const itemsTask = async () => {
  try {
    const res = await fetchJsonp(
      'https://api.behance.net/v2/projects/73068935?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}

const Zion = () => {
  const [covers, setCovers] = useState([])
  const [items, setItems] = useState([])
  const [blogs, setBlogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(async () => {
    const allResponse = await Promise.allSettled([itemsTask()])
    const [ItemsRes] = allResponse.map((r) => r.value)
    setItems(ItemsRes)
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Img src={item.src} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Zion
