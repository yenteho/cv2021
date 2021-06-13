import React, { useState, useEffect } from 'react'
import {
  VerticalElementContainer,
  TimelineContent,
  TimeLineDetail,
} from '../base/common'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Fragment } from 'react'
import { timelineData } from '../data/timelineData'
const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalElementContainer>
        {timelineData.map(
          ({ title, content, date, location, icon, iconStyle }, index) => (
            <Fragment key={`VerticalElementContainer_${index}`}>
              <VerticalTimelineElement
                date={<TimeLineDetail date={date} location={location} />}
                icon={icon}
                iconStyle={iconStyle}
              >
                <TimelineContent title={title} content={content} />
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalElementContainer>
    </VerticalTimeline>
  )
}
export default Timeline