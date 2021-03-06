import React from 'react'
import { FormattedMessage } from 'react-intl'
import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator } from 'react-icons/si'
import { AiOutlineSketch } from 'react-icons/ai'
import { MdWeb, MdSlowMotionVideo, MdOndemandVideo } from 'react-icons/md'
import { FaReact, FaSass } from 'react-icons/fa'
export const AboutMeData = (func) => [
  {
    menuPanelTitle: 'About Me',
    list: [
      {
        item: 'Resume',
        text: <FormattedMessage id="resume" defaultMessage="Resume" />,
        type: (
          <FormattedMessage
            id="resume.type"
            defaultMessage="Work Experience and Awards"
          />
        ),
        // icon: <FaReact/>,
        // favoriteActive: true,
        // addFavorite: () => toggleList(),
      },
      // {
      //   item: 'Skill Set',
      //   type: '',
      //   icon: <FaSass />,
      //   favoriteActive: true,
      //   addFavorite: func,
      // },
    ],
  },
  {
    menuPanelTitle: 'UI UX Web Design',
    list: [
      {
        item: 'Euro Cup 188 Bet Sports Book',
        text: (
          <FormattedMessage
            id="xuenn.eu"
            defaultMessage="2020 Euro Cup Megatron"
          />
        ),
        type: (
          <FormattedMessage
            id="xuenn.eu.design"
            defaultMessage="UI UX Website and Frontend Developement"
          />
        ),
        // icon: <FaReact/>,
        // favoriteActive: true,
        // addFavorite: () => toggleList(),
      },
      {
        item: 'World Cup 188 / V9 / TT / R88 Bet Sports Book',
        text: (
          <FormattedMessage
            id="xuenn.wc"
            defaultMessage="2018 FIFA World Cup"
          />
        ),
        type: (
          <FormattedMessage
            id="xuenn.wc.design"
            defaultMessage="UI UX Website and Frontend Developement"
          />
        ),
        // icon: <FaSass />,
        // favoriteActive: true,
        // addFavorite: () => console.log('click'),
      },
      {
        item: 'CoinOf Cryptocurrency Investment Advisor',
        text: (
          <FormattedMessage
            id="coinof"
            defaultMessage="CoinOf Cryptocurrency Investment Advisor"
          />
        ),
        type: <FormattedMessage id="coinof.design" defaultMessage="Website" />,
      },
      // {
      //   item: 'CV 2017',
      //   type: 'Web Design & Frontend Developement',
      // },
    ],
  },
  {
    menuPanelTitle: 'Animation',
    list: [
      {
        item: 'Zion Grotto Road Tire',
        text: (
          <FormattedMessage
            id="zion.animation"
            defaultMessage="Zion Grotto Road Tire"
          />
        ),
        type: (
          <FormattedMessage
            id="zion.namecard.design"
            defaultMessage="Product Design, 3D Animation, 3D Modeling, 3D Redering, Branding "
          />
        ),
      },
    ],
  },
  {
    menuPanelTitle: 'Graphic Design',
    list: [
      {
        item: 'Pypat IP Services Company',
        text: (
          <FormattedMessage
            id="pypat.web"
            defaultMessage="PyPat IP Services Firm"
          />
        ),
        type: (
          <FormattedMessage
            id="pypat.web.design"
            defaultMessage="Brand Identity, Tri-fold Brochure, DM, Envelope, User Interface"
          />
        ),
      },
      {
        item: 'Asian Patent Attorneys Association',
        text: (
          <FormattedMessage
            id="ntust.conf"
            defaultMessage="Asian Patent Attorneys Association x National Taiwan University of Science and Technology"
          />
        ),
        type: (
          <FormattedMessage
            id="ntust.conf.design"
            defaultMessage="Poster, Brochure, Banner, Manual"
          />
        ),
      },
      {
        item: 'Cryptocurrency Company Business Cards',
        text: (
          <FormattedMessage
            id="raistone.namecard"
            defaultMessage="Rai Stone Co., Ltd."
          />
        ),
        type: (
          <FormattedMessage
            id="raistone.namecard.design"
            defaultMessage="Cryptocurrency Company Business Cards"
          />
        ),
      },
      {
        item: 'Xuenn Digital Gaming Innovators',
        text: (
          <FormattedMessage
            id="xuenn.namecard"
            defaultMessage="Rai Stone Co., Ltd."
          />
        ),
        type: (
          <FormattedMessage
            id="xuenn.namecard.design"
            defaultMessage="Cryptocurrency Company Business Cards"
          />
        ),
      },
      {
        item: 'Pingxi Travellers Lodge',
        text: (
          <FormattedMessage
            id="pingxie.namecard"
            defaultMessage="Rai Stone Co., Ltd."
          />
        ),
        type: (
          <FormattedMessage
            id="pingxie.namecard.design"
            defaultMessage="Cryptocurrency Company Business Cards"
          />
        ),
      },
    ],
  },
  {
    menuPanelTitle: 'Awards',
    list: [
      {
        item: 'Awards',
        text: <FormattedMessage id="awards" defaultMessage="Awards" />,
        type: <FormattedMessage id="awards.type" defaultMessage="YODEX, IF" />,
      },
    ],
  },
  {
    menuPanelTitle: 'Art',
    list: [
      {
        item: 'Art',
        text: (
          <FormattedMessage id="handpainting" defaultMessage="handpainting" />
        ),
        type: (
          <FormattedMessage
            id="handpainting.type"
            defaultMessage="sketch, watercolor, traditional Chinese painting, calligraphy and print"
          />
        ),
      },
    ],
  },
]
