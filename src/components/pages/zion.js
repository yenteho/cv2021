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
      'https://api.behance.net/v2/projects/73068935?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd'
    )
    const value = await res.json()
    return value.project.modules
  } catch (ex) {
    console.error('fetch items error', ex)
    return []
  }
}

const Zion = ({ locale }) => {
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
        gradientColor0={'#0D0E0C'}
        gradientColor25={'#292E4C'}
        gradientColor75={'#202020'}
        gradientColor100={'#202020'}
      >
        <PortfolioDetail
          color="#ffffff"
          item={
            <FormattedMessage
              id="zion.animation"
              defaultMessage="Zion Grotto Road Tire"
            />
          }
          type={
            <FormattedMessage
              id="zion.namecard.design"
              defaultMessage="Product Design, 3D Animation, 3D Modeling, 3D Redering, Branding "
            />
          }
          date={
            <FormattedMessage
              id="zion.namecard.date"
              defaultMessage="Jan 2017"
            />
          }
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LV9BBtQwmQk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <PortfolioDetail
          color="#ffffff"
          item={
            <FormattedMessage
              id="zion.animation.detail"
              defaultMessage="The Zion Grotto Road Tire combines an innovative tread pattern with a tubeless casing to create an excellent tubeless tire, which maximizes rider safety under all-conditions. Graphene technology is incorporated into the center tread area to unlock the greatest possible improvements on rolling resistance. The hexagonal lattice silica-enhanced rubber compounds further decreases rolling resistance while increasing grip, and is used to replace the traditional fillers, such as petroleum oils and carbon black. The two reflective tread shoulder rings incorporate highly reflective material rated at 1,000 candlepower for safety warning."
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
        <Footer color="#ffffff" list={contactData} />
      </PortfolioWrapper>
    </IntlProvider>
  )
}

export default Zion
