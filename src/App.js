import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider } from "react-intl";
import AppView from "./components/AppView";
import { rgba, darken, opacify } from 'polished'
import styled from 'styled-components'
import Color_188 from './colors/188.json'
import {ThemeProvider} from './components/base/common'

const colors = Color_188.schemes
// const Container = styled.div`
//   height: 100vh;
//   overflow: scroll;
//   background-color: ${props => props.theme.color_P1};
// `

const Container = styled.div`
  height: 100vh;
  overflow: scroll;
  /* background: ${props => darken('0.2', `${props.theme.color_P1}`)}; */
  /* background: ${props => opacify('0.1', `${props.theme.color_P1}`)}; */
  background: ${props => opacify('0.1', `${props.theme.color_P1}`)};
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
      <div className="App">
      <ThemeProvider theme={{...colors}}>
        <Container>

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
        <AppView/>
      </div>
    </IntlProvider>
  );
}

export default App;
