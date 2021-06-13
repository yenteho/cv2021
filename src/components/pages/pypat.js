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
  PortfolioFooter,
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

const layers = [
  {
    image: `${Images.Pypat_Web}`,
    amount: 0.5,
  },
]
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
      <ParallaxProvider>
        <PortfolioWrapper
          gradientColor0={'#DDDDDD'}
          gradientColor25={'#C6C6C6'}
          gradientColor75={'#E2E2E2'}
          gradientColor100={'#858585'}
        >
          {/* <ContentHeader
            layers={layers}
            img={Images.Pypat_Web}
            alt="Football"
            eventPeriod={
              <FormattedMessage
                id="pypat.company"
              />
            }
            competition={
              'Brand Identity, Tri-fold Brochure, DM, Envelope, User Interface'
            }
          /> */}
          <PortfolioDetail
            color="#696969"
            item="PyPat IP Services Firm"
            type="Brand Identity, Tri-fold Brochure, DM, Envelope, User Interface"
            bu={
              <FormattedMessage
                id="pypat.company"
                defaultMessage="PyPat IP Services Co., Ltd."
              />
            }
            date={<FormattedMessage id="pypat.date" />}
          />
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Img src={item.src} />
              </li>
            ))}
          </ul>
          <PortfolioFooter color="#696969" list={contactData} />
        </PortfolioWrapper>
      </ParallaxProvider>
    </IntlProvider>
  )
}

export default Pypat
