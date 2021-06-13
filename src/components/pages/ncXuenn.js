import React, { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import { FormattedMessage, IntlProvider } from 'react-intl'
import Images from '../../images/index'
import {
  Img,
  PortfolioWrapper,
  ContentHeader,
  PortfolioDetail,
  Footer,
} from '../base/common'
import { contactData } from '../data/contactData'
const itemsTask = async () => {
  try {
    const res = await fetchJsonp(
      'https://api.behance.net/v2/projects/72725033?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}

const NcXuenn = ({ locale }) => {
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
        gradientColor0={'#ABACB0'}
        gradientColor25={'#B8B9BF'}
        gradientColor75={'#B8BBC2'}
        gradientColor100={'#3B3D3F'}
      >
        <PortfolioDetail
          color="#696969"
          item={
            <FormattedMessage
              id="xuenn.namecard"
              defaultMessage="Rai Stone Co., Ltd."
            />
          }
          type={
            <FormattedMessage
              id="xuenn.namecard.design"
              defaultMessage="Cryptocurrency Company Business Cards"
            />
          }
          date={
            <FormattedMessage
              id="xuenn.namecard.date"
              defaultMessage="Feb 2018"
            />
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

export default NcXuenn
