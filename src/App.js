import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from "react-intl";
import AppView from "./components/AppView";
import { rgba, darken, opacify, adjustHue } from 'polished'
import styled from 'styled-components'
import colors from './colors/light.js'
import {ThemeProvider} from './components/base/common'
import {
  ResetStyle,
  GlobalStyle,
} from './components/base/globalStyle'

const Container = styled.div`
  height: 100vh;
  overflow: scroll;
  background: ${props => adjustHue('180', `${props.theme.color_P1}`)};
`
function App() {
  const [lang, setLang] = useState('en')
  const [locale, setLocale] = useState(undefined)

  useEffect(async() => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  },[lang])

  return (
    <IntlProvider 
      messages={locale}
    >
      <ThemeProvider theme={{...colors}}>
        <ResetStyle />
        <GlobalStyle />
        <AppView/>
        <Container className="App">
          <header className="App-header">
            <div className="flex-center">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
              <select
                value={lang}
                onChange={(evt) => {
                  setLang(evt.target.value);
                }}
              >
                <option value="en">English</option>
                <option value="cn">中文</option>
                <option value="fr">Français</option>
                <option value="jp">日本語</option>
              </select>
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
  );
}

export default App;
