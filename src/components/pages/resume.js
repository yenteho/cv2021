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
} from '../base/common'
import Images from '../../images/index'
import { FaLinkedinIn, FaMediumM, FaBehance, FaGithub } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdPhoneIphone, MdMailOutline } from 'react-icons/md'
const Resume = ({ locale }) => {
  return (
    <IntlProvider messages={locale}>
        <ResumeWrapper>
          <FlexEndWrapper>
            {/* <FormattedMessage id="resume.name" defaultMessage="Angel Ho" /> */}
            <Contact
              href="mailto:contact@angelho.design"
              target="_blank"
              rel="Phone"
              icon={<MdMailOutline />}
              link={
                <FormattedMessage
                  id="resume.email"
                  defaultMessage=" contact@angelho.design"
                />
              }
            />
            <Contact
              href="tel:+886-958-941-898"
              target="_blank"
              rel="Phone"
              icon={<MdPhoneIphone />}
              link={
                <FormattedMessage
                  id="resume.phone"
                  defaultMessage="+886-958-941-898 "
                />
              }
            />
            <Contact
              href="https://www.linkedin.com/in/angel-yente-ho/"
              target="_blank"
              rel="LinkedIn"
              icon={<FaLinkedinIn />}
              link={
                <FormattedMessage
                  id="resume.LinkedIn"
                  defaultMessage="https://www.linkedin.com/in/angel-yente-ho/"
                />
              }
            />
            <Contact
              href="https://medium.com/@yente_ho"
              target="_blank"
              rel="Medium"
              icon={<FaMediumM />}
              link={
                <FormattedMessage
                  id="resume.Medium"
                  defaultMessage="https://medium.com/@yente_ho "
                />
              }
            />
            <Contact
              href="https://www.behance.net/yente_ho"
              target="_blank"
              rel="Behance"
              icon={<FaBehance />}
              link={
                <FormattedMessage
                  id="resume.Behance"
                  defaultMessage="https://www.behance.net/yente_ho "
                />
              }
            />
            <Contact
              href="https://github.com/yenteho"
              target="_blank"
              rel="Github"
              icon={<FaGithub />}
              link={
                <FormattedMessage
                  id="resume.Github"
                  defaultMessage="https://github.com/yenteho "
                />
              }
            />
            <Contact
              href="http://angelho.design"
              target="_blank"
              rel="Website"
              icon={<CgProfile />}
              link={
                <FormattedMessage
                  id="resume.Website"
                  defaultMessage="http://angelho.design"
                />
              }
            />
          </FlexEndWrapper>

          {/* <FlexEndWrapper>
            <FormattedMessage
              id="xuenn.company"
              defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
            />
            <FormattedMessage
              id="xuenn.title"
              defaultMessage="IT Consultant – Sports UI Designer"
            />
          </FlexEndWrapper> */}
          <Photo img={Images.Photo} />
        </ResumeWrapper>
      <AnimationBackground />
    </IntlProvider>
  )
}

export default Resume
