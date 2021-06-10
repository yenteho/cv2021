import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import Typist from 'react-typist'
import {
  ResumeWrapper,
  Photo,
  AnimationBackground,
  ResumeContainer,
  RelativeWrapper,
  ResumePageWrapper,
} from '../base/common'
import Images from '../../images/index'
import ContactInfo from '../panel/contactInfo'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Timeline from '../panel/timeline'
import SayHi from '../panel/sayhi'
const Resume = ({ locale }) => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    <IntlProvider messages={locale}>
      <ParallaxProvider>
        <ResumePageWrapper>
          <SayHi />
          <ResumeContainer>
            <ResumeWrapper>
              <RelativeWrapper>
                {/* <Intro
                text={
                  <FormattedMessage
                    id="resume.name"
                    defaultMessage="Angel Ho"
                  />
                }
              /> */}

                <ContactInfo />
              </RelativeWrapper>
              <Photo img={Images.Photo} />
            </ResumeWrapper>
          </ResumeContainer>
          <AnimationBackground />
          {/* <ParallaxBanner
          className="your-class"
          layers={[
            // {
            //     image: `${Images.Photo}`,
            //     amount: 0.1,
            // },
            {
              image: `${Images.Working}`,
              amount: 0.2,
            },
          ]}
          style={{
            height: '400px',
          }}
        >
          <h1>Banner Children</h1>
        </ParallaxBanner> */}
          <Timeline />
        </ResumePageWrapper>
      </ParallaxProvider>
    </IntlProvider>
  )
}

export default Resume
