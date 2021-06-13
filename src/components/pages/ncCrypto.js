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
      'https://api.behance.net/v2/projects/68127253?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}

const NcCrypto = ({ locale }) => {
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
        gradientColor0={'#F2F2F0'}
        gradientColor25={'#F2F2F0'}
        gradientColor75={'#F4F3F1'}
        gradientColor100={'#D7D7D7'}
      >
        <PortfolioDetail
          color="#696969"
          item={
            <FormattedMessage
              id="raistone.namecard"
              defaultMessage="Rai Stone Co., Ltd."
            />
          }
          type={
            <FormattedMessage
              id="raistone.namecard.design"
              defaultMessage="Cryptocurrency Company Business Cards"
            />
          }
          date={
            <FormattedMessage
              id="raistone.namecard.date"
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

export default NcCrypto
