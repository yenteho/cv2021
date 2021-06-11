import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { BounceBall, SkillSetContainer } from '../base/common'
import { CgProfile } from 'react-icons/cg'
import { skillsetData } from '../data/skillsetData'
import { SiAdobephotoshop, SiAdobexd } from 'react-icons/si'
import { AiOutlineSketch } from 'react-icons/ai'

const Skillset = () => {
  return (
    <SkillSetContainer>
      {skillsetData.map(({ icon, move, bounceDuration, ballSize }, index) => (
        <BounceBall
          icon={icon}
          move={move}
          bounceDuration={bounceDuration}
          ballSize={ballSize}
          key={`BounceBall_${index}`}
        />
      ))}
    </SkillSetContainer>
  )
}

export default Skillset
