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

// id={73184365}
// id={72853469}
// id={73068935}
// id={72853469}
// id={73055443}
// id={68127253}
// id={72725033}
// id={73147273}

const layers = [
  {
    image: `${Images.Pypat_Web}`,
    amount: 0.5,
  },
]

const Portfolio = ({ locale, id, portfolioData,youtube }) => {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const itemsTask = async () => {
    try {
      const res = await fetchJsonp(
        `https://api.behance.net/v2/projects/${id}?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd`
      )
      const value = await res.json()
      return value.project.modules
    } catch (ex) {
      console.error('fetch items error', ex)
      return []
    }
  }
  useEffect(async () => {
    const allResponse = await Promise.allSettled([itemsTask()])
    const [ItemsRes] = allResponse.map((r) => r.value)
    setItems(ItemsRes)
    setIsLoaded(true)
  }, [id])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <IntlProvider messages={locale}>
      <ParallaxProvider>
        <PortfolioWrapper
          gradientColor0={portfolioData.gradientColor0}
          gradientColor25={portfolioData.gradientColor25}
          gradientColor75={portfolioData.gradientColor75}
          gradientColor100={portfolioData.gradientColor100}
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
            color={portfolioData.color}
            item={portfolioData.item}
            type={portfolioData.type}
            bu={portfolioData.bu}
            date={portfolioData.date}
          />
          {youtube && (
            <>
              {' '}
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
            </>
          )}
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Img src={item.src} />
              </li>
            ))}
          </ul>
          <Footer color={portfolioData.color} list={contactData} />
        </PortfolioWrapper>
      </ParallaxProvider>
    </IntlProvider>
  )
}

export default Portfolio
