import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import Typist from 'react-typist'
import {
  ResumeWrapper,
  Photo,
  AnimationBackground,
  ResumeContainer,
  Intro,
  RelativeWrapper,
  GradientBorder,
} from '../base/common'
import Images from '../../images/index'
import ContactInfo from '../panel/contactInfo'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Timeline from '../panel/timeline'
import { F24 } from '../base/font'
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
              {count && (
                <Intro
                  text={
                    <GradientBorder>
                      <Typist
                        avgTypingDelay={50}
                        onTypingDone={() => setCount(0)}
                      >
                        <span>Say Hello!</span>
                        <Typist.Delay ms={1000} />
                        <br />
                        <br />
                        <span> I'm Angel Ho. </span>
                        <Typist.Delay ms={1000} />
                        <br />
                        <br />
                        <span> I'm a UI UX Designer </span>
                        <Typist.Delay ms={1000} />
                        <Typist.Backspace count={17} delay={800} />
                        <span> a Full Stack Designer... </span>
                        <Typist.Delay ms={5000} />
                        <br />
                      </Typist>
                    </GradientBorder>
                  }
                />
              )}
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
