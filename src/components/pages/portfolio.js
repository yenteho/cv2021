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
  Video,
  Gap48,
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

const Portfolio = ({
  locale,
  id,
  portfolioData,
  youtube,
  xuennEu,
  xuennWc,
  art,
  awards,
}) => {
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

          {xuennEu && (
            <>
              <Video src={Images.Xuenn_ZeplinThemeGen} />
              <PortfolioDetail
                color="#ffffff"
                item={
                  <>
                    <FormattedMessage
                      id="xuenn.eu.themegen"
                      defaultMessage="Developed Theme Generator for automatic color customization. "
                    />
                    <br />
                    <br />
                    <FormattedMessage
                      id="xuenn.eu.colorkeys"
                      defaultMessage="Integrated color keys, vector Icons, background images all formats for Web, iOS and Android App to improve developing process.  "
                    />
                  </>
                }
              />

              <Video src={Images.Xuenn_ThemeGen} />
              <PortfolioDetail
                color="#ffffff"
                item={
                  <>
                    <FormattedMessage
                      id="xuenn.eu.color"
                      defaultMessage="Imported React Context API to build expandable, flexible and automatic color system. "
                    />
                  </>
                }
              />
              <Video src={Images.Xuenn_Storybook} />
              <PortfolioDetail
                color="#ffffff"
                item={
                  <>
                    <FormattedMessage
                      id="xuenn.eu.designsystem"
                      defaultMessage="Built Storybook and Design System to make it easy to keep track of all UI widgets cases and all responsive web behavior, which could highly raise reusability and reduce communication costs. "
                    />
                  </>
                }
              />
              <Video src={Images.Xuenn_188} />
              <PortfolioDetail
                color="#ffffff"
                item={
                  <>
                    <FormattedMessage
                      id="xuenn.eu.restructure"
                      defaultMessage="Restructured all UI layout from Adaptive Web Design to real Responsive Website Design with grid system, flexbox and media query, supporting all mainstream web browser on all devices at the same time."
                    />
                  </>
                }
              />
            </>
          )}
          {xuennWc && (
            <>
              <Video src={Images.Xuenn_wc} />
              <PortfolioDetail
                color="#ffffff"
                item={
                  <>
                    <FormattedMessage
                      id="xuenn.wc.brands"
                      defaultMessage="Supported current 4 online brands, 188bet, TouTou, Rich88 and V9BET Sports Website in Desktop, Mobile and Tablet devices, keep html /css mockup consistent with design guideline, and provided suggestions for our partners of their CSS customization."
                    />
                    <br />
                    <br />
                    <FormattedMessage
                      id="xuenn.wc.negotiate"
                      defaultMessage="Negotiated and coordinated with user in Philippines to discuss and check the final layouts, interactions and functions in InVision, Sketch and Zeplin. "
                    />
                    <br />
                    <br />
                    <FormattedMessage
                      id="xuenn.wc.translate"
                      defaultMessage="Executed and translated requirements of visual design performances into precise, intuitive, and functional user interfaces"
                    />
                    <br />
                    <br />
                    <FormattedMessage
                      id="xuenn.wc.train"
                      defaultMessage="Trained developers on using Zeplin, InVision and Sketch tools to improve efficiency."
                    />
                    <br />
                    <br />
                    <FormattedMessage
                      id="xuenn.wc.test"
                      defaultMessage="Tested front-end code in multiple browsers to ensure cross-browser compatibility."
                    />
                  </>
                }
              />
            </>
          )}
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
          {awards && (
            <>
              <Img src={Images.Yodex_chair} />

              <PortfolioDetail
                color="#696969"
                item={
                  <>
                    <FormattedMessage
                      id="school.bachelor.award.yodex"
                      defaultMessage="Young Designers' Exhibition (YODEX) - Craft Designs"
                    />
                    <br />
                    <FormattedMessage
                      id="school.bachelor.award.rank.yodex"
                      defaultMessage="Excellence Awards"
                    />
                  </>
                }
              />
              <Img src={Images.IF_interior} />
              <PortfolioDetail
                color="#696969"
                item={
                  <>
                    <FormattedMessage
                      id="awards.if"
                      defaultMessage="Hearing Spaces"
                    />
                    <br />
                    <FormattedMessage
                      id="awards.if.type"
                      defaultMessage="IF Interior Design"
                    />
                  </>
                }
              />
            </>
          )}
          {art && (
            <>
              <PortfolioDetail
                color="#696969"
                item={
                  <FormattedMessage
                    id="traditionalchinesepainting"
                    defaultMessage="traditional Chinese painting"
                  />
                }
              />
              <Img src={Images.TC_tiger} />
              <Gap48/>
              <Img src={Images.TC_vegetables} />
              <Gap48/>
              <Img src={Images.TC_bitter} />
              {/* <Img src={Images.TC_boat} /> */}
              <PortfolioDetail
                color="#696969"
                item={<FormattedMessage id="sketch" defaultMessage="sketch" />}
              />
              <Img src={Images.Sketch_war} />
              <Gap48/>
              <Img src={Images.Sketch_light} />
              <Gap48/>
              <Img src={Images.Sketch_car} />
              <Gap48/>
              <Img src={Images.Sketch_crab} />
              <Gap48/>
              <Img src={Images.Sketch_lizard} />
              <Gap48/>
              <Img src={Images.Sketch_baby} />
              <Gap48/>
              <Img src={Images.Sketch_camera} />
              <PortfolioDetail
                color="#696969"
                item={<FormattedMessage id="watercolor" defaultMessage="watercolor" />}
              />
              <Img src={Images.Water_boat} />
              <PortfolioDetail
                color="#696969"
                item={<FormattedMessage id="print" defaultMessage="print" />}
              />
              <Img src={Images.Print_flower} />
              <Gap48/>
              <Img src={Images.Print_TC} />
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
