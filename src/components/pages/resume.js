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
import Timeline from '../panel/timeline'
import SayHi from '../panel/sayhi'
import Skillset from '../panel/skillset'
const Resume = ({ locale }) => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    <IntlProvider messages={locale}>
      <ResumePageWrapper>
        <SayHi />
        <ResumeContainer>
          <ResumeWrapper>
            <ContactInfo />
            <Photo img={Images.Photo} />
          </ResumeWrapper>
        </ResumeContainer>
        <AnimationBackground />

        <Timeline />
      </ResumePageWrapper>
    </IntlProvider>
  )
}

export default Resume
