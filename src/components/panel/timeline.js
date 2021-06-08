import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { VerticalElementContainer, TimelineContent } from '../base/common'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { F12 } from '../base/font'
import { Fragment } from 'react'
import { timelineData } from '../data/timelineData'
const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalElementContainer>
        {timelineData.map(
          ({ company, position, date, icon, iconStyle }, index) => (
            <Fragment key={`VerticalElementContainer_${index}`}>
              <VerticalTimelineElement
                date={<F12>{date}</F12>}
                icon={icon}
                iconStyle={iconStyle}
              >
                <TimelineContent company={company} position={position} />
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalElementContainer>
    </VerticalTimeline>
  )
}

export default Timeline
