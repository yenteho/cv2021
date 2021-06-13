import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'
import { Img } from '../base/common'

const coversTask = async () => {
  try {
    const res = await fetchJsonp(
      'https://api.behance.net/v2/users/yente_ho/projects?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.projects
  } catch (ex) {
    console.error('fetch covers error', ex)
    return []
  }
}

const itemsTask = async () => {
  try {
    const res = await fetchJsonp(
      'https://api.behance.net/v2/projects/68127253?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}
const blogTask = async () => {
  try {
    const res = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yente_ho'
    )
    const value = await res.json()
    return value.items
  } catch (ex) {
    console.error('fetch blogs error', ex)
    return []
  }
}

const App = () => {
  const [covers, setCovers] = useState([])
  const [items, setItems] = useState([])
  const [blogs, setBlogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(async () => {
    const allResponse = await Promise.allSettled([
      coversTask(),
      itemsTask(),
      blogTask(),
    ])
    const [coversRes, ItemsRes, blogsRes] = allResponse.map((r) => r.value)
    setCovers(coversRes)
    setItems(ItemsRes)
    setBlogs(blogsRes)
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
      <ul>
        {covers.map((product) => (
          <li key={product.id}>
            {product.name}
            <img src={product.covers['115']} />
            {/* <img src={product.covers["202"]} />
              <img src={product.covers["230"]} />
              <img src={product.covers["404"]} />
              <img src={product.covers["808"]} />
              <img src={product.covers.original} />
              <img src={product.covers.max_808} /> */}
          </li>
        ))}
      </ul>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.content}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
