import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import logo from '../../logo.svg'
import '../../App.css'

const Resume = ({locale}) => {
  return (
    <IntlProvider messages={locale}>
    <header className="App-header">
      <link rel="apple-touch-icon" href="INSERT_FILE_PATH_HERE" />
      <div className="flex-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>
        <FormattedMessage
          id="app.header"
          defaultMessage="Edit src/App.js and save to reload."
        />
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage
          id="app.content"
          defaultMessage="Learn React"
        />
      </a>
    </header>
  </IntlProvider>
  )
}

export default Resume
