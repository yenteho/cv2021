import colors from '../../colors/light.js'
import { FormattedMessage } from 'react-intl'
import { CgWorkAlt } from 'react-icons/cg'
import { IoSchoolSharp, IoStarSharp, IoTrophySharp } from 'react-icons/io5'
import { FaBaby } from 'react-icons/fa'
import { GiSoccerBall } from 'react-icons/gi'

// export const getMenuPanel = (func) => [
//   {
//     sport: '',
//     image: <Icon />,
//     addFavorites: func
//   }
// ]
export const timelineData = [
  {
    icon: <CgWorkAlt />,
    date: <FormattedMessage id="xuenn.date" defaultMessage="2021 - present" />,
    location: (
      <FormattedMessage id="xuenn.locate" defaultMessage="Taipei, Taiwan" />
    ),
    title: (
      <FormattedMessage
        id="xuenn.company"
        defaultMessage="Xuenn Pte Ltd."
      />
    ),
    content: (
      <FormattedMessage
        id="xuenn.type" defaultMessage="Online digital gaming company "/>
    ),
    position: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
  },
  {
    icon: <GiSoccerBall />,
    iconStyle: { background: '#5a4cb5' },
    date: (
      <FormattedMessage
        id="xuenn.eu.time"
        defaultMessage="DEC 2018 - Jun 2021"
      />
    ),
    title: (
      <FormattedMessage id="xuenn.eu" defaultMessage="2020 Euro Cup Megatron" />
    ),
    content: (
      <FormattedMessage
        id="xuenn.eu.type"
        defaultMessage="Implemented the largest scale responsive web frontend revamp of our website"
      />
    ),
    // project: (
    //   <FormattedMessage
    //     id="xuenn.eu"
    //     defaultMessage="2020 Euro Cup Megatron"
    //   />
    // ),
    // time: (
    //   <FormattedMessage
    //     id="xuenn.eu.time"
    //     defaultMessage="DEC 2018 - Jun 2021"
    //   />
    // ),
    list: [
      {
        text: (
          <FormattedMessage
            id="xuenn.eu.line2"
            defaultMessage="Imported React Context API to build expandable, flexible and automatic color system. "
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.eu.line3"
            defaultMessage="Developed Theme Generator for automatic color customization. "
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.eu.line4"
            defaultMessage="Integrated color keys, vector Icons, background images all formats for Web, iOS and Android App to improve developing process.  "
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.eu.line5"
            defaultMessage="Built Storybook and Design System to make it easy to keep track of all UI widgets cases and all responsive web behavior, which could highly raise reusability and reduce communication costs. "
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.eu.line6"
            defaultMessage="Built private NPM UI Library as bootstrap of our team, which can increase efficiency of any UI change requirements from UI to front-end development process. "
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.eu.line7"
            defaultMessage="Restructured all UI layout from Adaptive Web Design to real Responsive Website Design with grid system, flexbox and media query, supporting all mainstream web browser on all devices at the same time."
          />
        ),
      },
    ],
  },
  {
    icon: <GiSoccerBall />,
    iconStyle: { background: '#5a4cb5' },
    date: (
      <FormattedMessage
        id="xuenn.wc.time"
        defaultMessage="JUL 2017 - JUL 2018"
      />
    ),
    title: (
      <FormattedMessage
        id="xuenn.wc"
        defaultMessage="2018 FIFA World Cup - Completed sports competition product UI revamp and was 24/7 standing by our website during competition."
      />
    ),
    content: (
      <FormattedMessage
        id="xuenn.eu.type"
        defaultMessage="Implemented the largest scale responsive web frontend revamp of our website"
      />
    ),
    //   project: (
    //   <FormattedMessage
    //     id="xuenn.wc"
    //     defaultMessage="2018 FIFA World Cup - Completed sports competition product UI revamp and was 24/7 standing by our website during competition."
    //   />
    // ),
    // time: (
    //   <FormattedMessage
    //     id="xuenn.wc.time"
    //     defaultMessage="JUL 2017 - JUL 2018"
    //   />
    // ),
    list: [
      {
        text: (
          <FormattedMessage
            id="xuenn.wc.brands"
            defaultMessage="Supported current 4 online brands, 188bet, TouTou, Rich88 and V9BET Sports Website in Desktop, Mobile and Tablet devices, keep html /css mockup consistent with design guideline, and provided suggestions for our partners of their CSS customization."
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.wc.negotiate"
            defaultMessage="Negotiated and coordinated with user in Philippines to discuss and check the final layouts, interactions and functions in InVision, Sketch and Zeplin. "
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.wc.translate"
            defaultMessage="Executed and translated requirements of visual design performances into precise, intuitive, and functional user interfaces"
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.wc.train"
            defaultMessage="Trained developers on using Zeplin, InVision and Sketch tools to improve efficiency."
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.wc.test"
            defaultMessage="Tested front-end code in multiple browsers to ensure cross-browser compatibility."
          />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="xuenn.wc.integrate"
            defaultMessage="Integrated BetRadar and Scoreboards, and divided LiveCenter and Feedex from original website to provide customized possibility for users, including football, basketball, tennis, ice hockey, rugby, darts, baseball, cricket, generic sports and other net sports."
          />
        ),
      },
    ],
  },
  {
    icon: <CgWorkAlt />,
    date: (
      <FormattedMessage id="rapaq.date" defaultMessage="MAR 2017 - JUN 2017" />
    ),
    location: (
      <FormattedMessage id="rapaq.locate" defaultMessage="Taipei, Taiwan" />
    ),
    title: (
      <FormattedMessage
        id="rapaq.title"
        defaultMessage="RapaQ Co., Ltd.,"
      />
    ),
    content: (
      <FormattedMessage id="raoaq.type" defaultMessage="E-commerce and social media for design professionals" />
    ),
    position: (
      <FormattedMessage id="raoaq.company" defaultMessage="Frontend Engineer" />
    ),
        project: (
      <FormattedMessage
        id="rapaq.ec"
        defaultMessage="Used HTML, CSS(SCSS), JavaScript and jQuery to create user-friendly web pages for E-commerce"
      />
    ),
  },
  {
    icon: <CgWorkAlt />,
    date: (
      <FormattedMessage
        id="yolomoto.date"
        defaultMessage="SPE 2016 - FEB 2017"
      />
    ),
    location: (
      <FormattedMessage id="yolomoto.locate" defaultMessage="Taipei, Taiwan" />
    ),
    iconStyle: { background: '#49445E' },
    title: (
      <FormattedMessage
        id="yolomoto.title"
        defaultMessage="Yolomoto Co., Ltd.  – Tire manufacturing startup company"
      />
    ),
    position: (
      <FormattedMessage
        id="yolomoto.company"
        defaultMessage="Web Designer / Graphic Designer / Industrial Designer/ Animation Designer"
      />
    ),
  },
  {
    icon: <CgWorkAlt />,
    date: (
      <FormattedMessage
        id="boehmert.date"
        defaultMessage="MAY 2016 - JUN 2016"
      />
    ),
    location: (
      <FormattedMessage id="boehmert.locate" defaultMessage="Munich, Germany" />
    ),
    iconStyle: { background: '#49445E' },
    title: (
      <FormattedMessage
        id="boehmert.title"
        defaultMessage="BOEHMERT & BOEHMERT"
      />
    ),
    position: (
      <FormattedMessage
        id="boehmert.company"
        defaultMessage="Patent Engineer Intern"
      />
    ),
  },
  {
    icon: <IoSchoolSharp />,
    date: (
      <FormattedMessage
        id="school.master.date"
        defaultMessage="SPE 2014 - JUN 2016"
      />
    ),
    location: (
      <FormattedMessage
        id="school.master.locate"
        defaultMessage="Taipei, Taiwan"
      />
    ),
    iconStyle: { background: '#A56F52' },
    title: (
      <FormattedMessage
        id="school.master"
        defaultMessage="M.A., Graduate Institute of Patent, College of Intellectual Property Studies"
      />
    ),
    position: (
      <>
        <FormattedMessage
          id="school.master.department"
          defaultMessage="National Taiwan University of Science and Technology"
        />{' '}
        <FormattedMessage
          id="school.master.gpa"
          defaultMessage="(GPA 4.0/4.0)"
        />
      </>
    ),
  },
  {
    icon: <IoSchoolSharp />,
    date: (
      <FormattedMessage
        id="school.bachelor.date"
        defaultMessage="SPE 2010 - JUN 2014"
      />
    ),
    location: (
      <FormattedMessage
        id="school.bachelor.locate"
        defaultMessage="Taipei, Taiwan"
      />
    ),
    iconStyle: { background: '#A56F52' },
    title: (
      <FormattedMessage
        id="school.bachelor"
        defaultMessage="B.A., Department of Industrial Design, Furniture and Interior Design Major"
      />
    ),
    content: (
      <>
        <FormattedMessage
          id="school.bachelor.department"
          defaultMessage="National Taipei University of Technology"
        />{' '}
        <FormattedMessage
          id="school.bachelor.gpa"
          defaultMessage="(GPA 3.3/4.0）"
        />
      </>
    ),
  },
  {
    icon: <IoTrophySharp />,
    date: (
      <FormattedMessage
        id="school.bachelor.award.date.taitung"
        defaultMessage="JUN 2014 Taitung Taiwans"
      />
    ),
    iconStyle: { background: '#80404B' },
    title: (
      <FormattedMessage
        id="school.bachelor.award.taitung"
        defaultMessage="2014 Taiwan Design Exhibitions"
      />
    ),
    content: (
      <FormattedMessage
        id="school.bachelor.award.rank.taitung"
        defaultMessage="Invited Exhibition - Reported on Central News Agencys"
      />
    ),
  },
  {
    icon: <IoTrophySharp />,
    date: (
      <FormattedMessage
        id="school.bachelor.award.date.yilan"
        defaultMessage="MAY 2014 Yilan Taiwans"
      />
    ),
    iconStyle: { background: '#80404B' },
    title: (
      <FormattedMessage
        id="school.bachelor.award.yilan"
        defaultMessage="Yilan Heyi The Exhibition of Cultural and Creative Industrys"
      />
    ),
    content: (
      <FormattedMessage
        id="school.bachelor.award.rank.yilan"
        defaultMessage="Invited Exhibitions"
      />
    ),
  },

  {
    icon: <IoTrophySharp />,
    date: (
      <FormattedMessage
        id="school.bachelor.award.date.yodex"
        defaultMessage="APR 2014 Taipei Taiwans"
      />
    ),
    iconStyle: { background: '#80404B' },
    title: (
      <FormattedMessage
        id="school.bachelor.award.yodex"
        defaultMessage="Young Designers' Exhibition (YODEX) - Craft Designs"
      />
    ),
    content: (
      <FormattedMessage
        id="school.bachelor.award.rank.yodex"
        defaultMessage="Excellence Awards"
      />
    ),
  },
  {
    icon: <IoTrophySharp />,
    date: (
      <FormattedMessage
        id="school.bachelor.award.date.permanent"
        defaultMessage="APR 2014"
      />
    ),
    iconStyle: { background: '#80404B' },
    title: (
      <FormattedMessage
        id="school.bachelor.award.permanent"
        defaultMessage="Taitung County 'Permanent Public Toilets' Competitions"
      />
    ),
    position: (
      <FormattedMessage
        id="school.bachelor.award.rank.permanent"
        defaultMessage="Bronze Award Winners"
      />
    ),
  },
  {
    icon: <IoTrophySharp />,
    date: (
      <FormattedMessage
        id="school.bachelor.award.date.nonresidentail"
        defaultMessage="APR 2013"
      />
    ),
    iconStyle: { background: '#80404B' },
    title: (
      <FormattedMessage
        id="school.bachelor.award.nonresidentail"
        defaultMessage="Non-residential Space Interior Designs"
      />
    ),
    content: (
      <FormattedMessage
        id="school.bachelor.award.rank.nonresidentail"
        defaultMessage="Winners"
      />
    ),
  },
  {
    icon: <IoSchoolSharp />,
    date: (
      <FormattedMessage
        id="school.juniorhigh.date"
        defaultMessage="SEP 2003 - JUN 2006"
      />
    ),
    location: (
      <FormattedMessage
        id="school.juniorhigh.locate"
        defaultMessage="Taipei, Taiwan"
      />
    ),
    iconStyle: { background: '#A56F52' },
    title: (
      <FormattedMessage
        id="school.juniorhigh"
        defaultMessage="Taipei Municipal Jinhua Junior High School"
      />
    ),
    content: (
      <FormattedMessage
        id="school.juniorhigh.department"
        defaultMessage="Art Gifted and Talented Class"
      />
    ),
  },
  {
    icon: <IoTrophySharp />,
    date: (
      <FormattedMessage id="school.juniorhigh.date" defaultMessage="APR 2006" />
    ),
    location: (
      <FormattedMessage
        id="school.juniorhigh.locate"
        defaultMessage="Taipei, Taiwan"
      />
    ),
    iconStyle: { background: '#80404B' },
    title: (
      <FormattedMessage
        id="school.juniorhigh.award"
        defaultMessage="National Student Art Competition"
      />
    ),
    content: (
      <FormattedMessage
        id="school.juniorhigh.award.rank"
        defaultMessage="Graphic Design/ Engraving Double Champion"
      />
    ),
  },

  {
    icon: <FaBaby />,
    date: <FormattedMessage id="birth" defaultMessage="Dec 1990" />,
    location: (
      <FormattedMessage id="birth.locate" defaultMessage="Taipei, Taiwan" />
    ),
    iconStyle: { background: '#D1988C' },
    title: (
      <FormattedMessage
        id="birth.family"
        defaultMessage="Art Family in Taipei"
      />
    ),
    content: (
      <FormattedMessage
        id="birth.learing"
        defaultMessage="Start learing sketch, watercolor, traditional Chinese painting, print and calligraphy since 5 years old"
      />
    ),
  },
]
