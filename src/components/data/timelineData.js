import { FormattedMessage } from 'react-intl'
import colors from '../../colors/light.js'
import { CgWorkAlt } from 'react-icons/cg'
import { IoSchoolSharp, IoStarSharp } from 'react-icons/io5'
export const timelineData = [
  {
    icon: <CgWorkAlt />,
    date: '2021 - present',
    company: (
      <FormattedMessage
        id="xuenn.company"
        defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
      />
    ),
    position: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
  },
  {
    icon: <CgWorkAlt />,
    company: (
      <FormattedMessage
        id="xuenn.company"
        defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
      />
    ),
    position: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
  },
  {
    icon: <IoSchoolSharp />,
    iconStyle: { background: 'rgb(233, 30, 99)' },
    company: (
      <FormattedMessage
        id="xuenn.company"
        defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
      />
    ),
    position: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
  },
  {
    icon: <IoStarSharp />,
    iconStyle: { background: 'rgb(16, 204, 82)' },
    company: (
      <FormattedMessage
        id="xuenn.company"
        defaultMessage="Xuenn Pte Ltd. – Online digital gaming company "
      />
    ),
    position: (
      <FormattedMessage
        id="xuenn.title"
        defaultMessage="IT Consultant – Sports UI Designer"
      />
    ),
  },
]
