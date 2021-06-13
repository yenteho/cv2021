import { FaLinkedinIn, FaMediumM, FaBehance, FaGithub } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdPhoneIphone, MdMailOutline } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'
export const contactData = [
  {
    href: 'mailto:contact@angelho.design',
    target: '_blank',
    rel: 'Mail',
    icon: <MdMailOutline />,
    text: (
      <FormattedMessage
        id="resume.email"
        defaultMessage=" contact@angelho.design"
      />
    ),
  },
  {
    href: 'tel:+886-958-941-898',
    target: '_blank',
    rel: 'Phone',
    icon: <MdPhoneIphone />,
    text: (
      <FormattedMessage id="resume.phone" defaultMessage="+886-958-941-898 " />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/angel-yente-ho/',
    target: '_blank',
    rel: 'LinkedIn',
    icon: <FaLinkedinIn />,
    text: (
      <FormattedMessage
        id="resume.LinkedIn"
        defaultMessage="https://www.linkedin.com/in/angel-yente-ho/"
      />
    ),
  },

  {
    href: 'https://medium.com/@yente_ho',
    target: '_blank',
    rel: 'Medium',
    icon: <FaMediumM />,
    text: (
      <FormattedMessage
        id="resume.Medium"
        defaultMessage="https://medium.com/@yente_ho "
      />
    ),
  },

  {
    href: 'https://www.behance.net/yente_ho',
    target: '_blank',
    rel: 'Behance',
    icon: <FaBehance />,
    text: (
      <FormattedMessage
        id="resume.Behance"
        defaultMessage="https://www.behance.net/yente_ho "
      />
    ),
  },

  {
    href: 'https://github.com/yenteho',
    target: '_blank',
    rel: 'Github',
    icon: <FaGithub />,
    text: (
      <FormattedMessage
        id="resume.Github"
        defaultMessage="https://github.com/yenteho "
      />
    ),
  },

  {
    href: 'http://angelho.design',
    target: '_blank',
    rel: 'Website',
    icon: <CgProfile />,
    text: (
      <FormattedMessage
        id="resume.Website"
        defaultMessage="http://angelho.design"
      />
    ),
  },
]
