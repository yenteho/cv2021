import { FormattedMessage } from 'react-intl'
import colors from '../../colors/light.js'
import { CgWorkAlt } from 'react-icons/cg'
import { IoSchoolSharp, IoStarSharp, IoTrophySharp } from 'react-icons/io5'
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
        defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
      />
    ),
    content: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
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
        defaultMessage="RapaQ Co., Ltd., – E-commerce and social media for design professionals"
      />
    ),
    content: (
      <FormattedMessage id="rapaq.company" defaultMessage="Frontend Engineer" />
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
    content: (
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
    content: (
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
    iconStyle: { background: '#49445E' },
    title: (
      <FormattedMessage
        id="school.master"
        defaultMessage="M.A., Graduate Institute of Patent, College of Intellectual Property Studies"
      />
    ),
    content: (
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
    iconStyle: { background: '#49445E' },
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
    content: (
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
    iconStyle: { background: '#49445E' },
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
    icon: <IoStarSharp />,
    date: <FormattedMessage id="birth" defaultMessage="Dec 1990" />,
    location: (
      <FormattedMessage id="birth.locate" defaultMessage="Taipei, Taiwan" />
    ),
    iconStyle: { background: 'rgb(16, 204, 82)' },
    title: (
      <FormattedMessage
        id="xuenn.company"
        defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
      />
    ),
    content: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
  },
]
