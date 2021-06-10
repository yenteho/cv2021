import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import Typist from 'react-typist'
import { Intro, GradientBorder } from '../base/common'
const SayHi = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    <>
      {count && (
        <Intro
          text={
            <GradientBorder>
              <Typist avgTypingDelay={40} onTypingDone={() => setCount(0)}>
                <span>Say Hello!</span>
                <Typist.Delay ms={1000} />
                <br />
                <br />
                <span> I'm Angel Ho. </span>
                <Typist.Delay ms={1000} />
                <br />
                <br />
                <span> I'm a UI Designer </span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={12} delay={200} />
                <span> UX Designer </span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={12} delay={200} />
                <span> Web Designer </span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={16} delay={200} />
                <span> Full Stack Designer... </span>
                <Typist.Delay ms={5000} />
                <br />
              </Typist>
            </GradientBorder>
          }
        />
      )}
    </>
  )
}

export default SayHi
