import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Contact, ContactContainer, RelativeWrapper } from '../base/common'
import { FaLinkedinIn, FaMediumM, FaBehance, FaGithub } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdPhoneIphone, MdMailOutline } from 'react-icons/md'
import { contactData } from '../data/contactData'
const ContactInfo = () => {
  return (
    <RelativeWrapper>
      <ContactContainer>
        {contactData.map(
          ({ href, target, rel, icon, text, ...rest }, index) => (
            <Contact
              href={href}
              target="_blank"
              rel={rel}
              icon={icon}
              text={text}
            />
          )
        )}
      </ContactContainer>
    </RelativeWrapper>
  )
}

export default ContactInfo
