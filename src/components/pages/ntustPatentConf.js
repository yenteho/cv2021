import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { Img, PortfolioWrapper, PortfolioDetail, Footer } from '../base/common'
import { contactData } from '../data/contactData'
const itemsTask = async () => {
  try {
    const res = await fetchJsonp(
      'https://api.behance.net/v2/projects/73055443?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}
const NtustPatentConf = ({ locale }) => {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(async () => {
    const allResponse = await Promise.allSettled([itemsTask()])
    const [ItemsRes] = allResponse.map((r) => r.value)
    setItems(ItemsRes)
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <IntlProvider messages={locale}>
      <PortfolioWrapper
        gradientColor0={'#DCDCDC'}
        gradientColor25={'#E5E5E5'}
        gradientColor75={'#F9F9F8'}
        gradientColor100={'#858585'}
      >
        <PortfolioDetail
          color="#696969"
          item={
            <FormattedMessage
              id="ntust.conf"
              defaultMessage="Asian Patent Attorneys Association x National Taiwan University of Science and Technology"
            />
          }
          type={
            <FormattedMessage
              id="ntust.conf.design"
              defaultMessage="Poster, Brochure, Banner, Manual"
            />
          }
          bu={
            <FormattedMessage
              id="school.master.department"
              defaultMessage="National Taiwan University of Science and Technology"
            />
          }
          date={
            <FormattedMessage id="ntust.conf.date" defaultMessage="Feb 2016" />
          }
        />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Img src={item.src} />
            </li>
          ))}
        </ul>
        <Footer color="#696969" list={contactData} />
      </PortfolioWrapper>
    </IntlProvider>
  )
}

export default NtustPatentConf
