import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import AppView from './components/AppView'
import { rgba, darken, opacify, adjustHue } from 'polished'
import styled from 'styled-components'
import colors from './colors/light.js'
import { ThemeProvider } from './components/base/common'
import { ResetStyle, GlobalStyle } from './components/base/globalStyle'
import Header from './components/nav/header'
import { MenuPanel } from './components/panel/menuPanel'

const Container = styled.div`
  height: 100vh;
  overflow: scroll;
  background: ${(props) => props.theme.color_B1};
`
function App() {
  const [lang, setLang] = useState('en')
  const [locale, setLocale] = useState(undefined)
  useEffect(async () => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  }, [lang])
  const [showMenuPanel, setMenuPanel] = useState(true)
  const toggleMenuPanel = () => {
    setMenuPanel(!showMenuPanel)
  }
  return (
    <IntlProvider messages={locale}>
      <ThemeProvider theme={{ ...colors }}>
        <ResetStyle />
        <GlobalStyle />
        <AppView />
        <Container className="App">
          <MenuPanel
            showMenuPanel={showMenuPanel}
            toggleMenuPanel={toggleMenuPanel}
          />
          <Header
            lang={lang}
            setLang={setLang}
            toggleMenuPanel={toggleMenuPanel}
            showMenuPanel={showMenuPanel}
          />
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
              <FormattedMessage id="app.content" defaultMessage="Learn React" />
            </a>
          </header>
        </Container>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
