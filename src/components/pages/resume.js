import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import {
  ResumeWrapper,
  FlexEndWrapper,
  Photo,
  Contact,
  AnimationBackground,
  PanelHeader,
  FlexLeftColumn,
  ResumeContainer,
  ContactContainer,
  Intro,
  RelativeWrapper,
  PageContainer,
} from '../base/common'
import Images from '../../images/index'
import { FaLinkedinIn, FaMediumM, FaBehance, FaGithub } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdPhoneIphone, MdMailOutline } from 'react-icons/md'
import ContactInfo from '../panel/contactInfo'
const Resume = ({ locale }) => {
  return (
    <IntlProvider messages={locale}>
      {/* <PageContainer> */}
      <ResumeContainer>
        <ResumeWrapper>
          <RelativeWrapper>
            <Intro
              text={
                <FormattedMessage id="resume.name" defaultMessage="Angel Ho" />
              }
            />
            <ContactInfo />
          </RelativeWrapper>
          <Photo img={Images.Photo} />
        </ResumeWrapper>
        <AnimationBackground />
      </ResumeContainer>
      {/* <div>
          <RelativeWrapper>
            <FormattedMessage
              id="xuenn.company"
              defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
            />
            <FormattedMessage
              id="xuenn.title"
              defaultMessage="IT Consultant – Sports UI Designer"
            />
          </RelativeWrapper>
        </div> */}
      {/* </PageContainer> */}
    </IntlProvider>
  )
}

export default Resume
