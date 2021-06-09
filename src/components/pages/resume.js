import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import {
  ResumeWrapper,
  Photo,
  AnimationBackground,
  ResumeContainer,
  Intro,
  RelativeWrapper,
} from '../base/common'
import Images from '../../images/index'
import ContactInfo from '../panel/contactInfo'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Timeline from '../panel/timeline'
const Resume = ({ locale }) => {
  return (
    <IntlProvider messages={locale}>
      <ParallaxProvider>
        <ResumeContainer>
          <ResumeWrapper>
            <RelativeWrapper>
              <Intro
                text={
                  <FormattedMessage
                    id="resume.name"
                    defaultMessage="Angel Ho"
                  />
                }
              />
              <ContactInfo />
            </RelativeWrapper>
            <Photo img={Images.Photo} />
          </ResumeWrapper>
          <AnimationBackground />
        </ResumeContainer>
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
      </ParallaxProvider>
    </IntlProvider>
  )
}

export default Resume
