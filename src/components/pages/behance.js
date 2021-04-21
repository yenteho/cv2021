import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'

const Behance = () => {
  const [covers, setCovers] = useState([])
  const [items, setItems] = useState([])
  const [blogs, setBlogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetchJsonp(
      'https://api.behance.net/v2/users/yente_ho/projects?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setIsLoaded(true)
        setCovers(json.projects)
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
    fetchJsonp(
      'https://api.behance.net/v2/projects/68127253?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setIsLoaded(true)
        setItems(json.project.modules)
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yente_ho'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setIsLoaded(true)
        setBlogs(json.items)
      })
  }, [])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.src} />
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
    </div>
  )
}

export default Behance
