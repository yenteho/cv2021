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
      'https://api.behance.net/v2/projects/72853469?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}

const Pypat = ({ locale }) => {
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
        gradientColor0={'#DDDDDD'}
        gradientColor25={'#DDDDDD'}
        gradientColor75={'#E2E2E2'}
        gradientColor100={'#858585'}
      >
        <PortfolioDetail
          color="#696969"
          item={
            <FormattedMessage
              id="pypat.web"
              defaultMessage="PyPat IP Services Firm"
            />
          }
          type={
            <FormattedMessage
              id="pypat.web.design"
              defaultMessage="Brand Identity, Tri-fold Brochure, DM, Envelope, User Interface"
            />
          }
          bu={
            <FormattedMessage
              id="pypat.company"
              defaultMessage="PyPat IP Services Co., Ltd."
            />
          }
          date={
            <FormattedMessage id="pypat.web.date" defaultMessage="Oct 2015" />
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

export default Pypat
