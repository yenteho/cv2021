import './App.css'
import React, { useState, useEffect } from 'react'
import AppView from './components/AppView'
import colors from './colors/light.js'
import { ThemeProvider, Container } from './components/base/common'
import { ResetStyle, GlobalStyle } from './components/base/globalStyle'
import Header from './components/nav/header'
import { MenuPanel } from './components/panel/menuPanel'
import fetchJsonp from 'fetch-jsonp'
import Resume from './components/pages/resume'
import Behance from './components/pages/behance'
import Medium from './components/pages/medium'

function App() {
  const [lang, setLang] = useState('en')
  const [locale, setLocale] = useState(undefined)
  useEffect(async () => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  }, [lang])
  const [showMenuPanel, setMenuPanel] = useState(false)
  const toggleMenuPanel = () => {
    setMenuPanel(!showMenuPanel)
  }
  const [page, switchPage] = useState('Angel Ho')
  const getCurrentPage = () => {
    switch (page) {
      case 'Angel Ho':
        return <Resume locale={locale} />
      case 'Portfolio':
        return <Behance lang={lang} locale={locale} />
      case 'Technical Notes':
        return <Medium />
      case 'LinkedIn':
        return <></>
      default:
        return 'Angel Ho'
    }
  }
  const currentPage = getCurrentPage()
  return (
    <ThemeProvider theme={{ ...colors }}>
      <ResetStyle />
      <GlobalStyle />
      <AppView />
      <Container>
        <MenuPanel
          showMenuPanel={showMenuPanel}
          toggleMenuPanel={toggleMenuPanel}
        />
        <Header
          lang={lang}
          setLang={setLang}
          toggleMenuPanel={toggleMenuPanel}
          showMenuPanel={showMenuPanel}
          switchPage={switchPage}
          page={page}
        />
        {currentPage}
      </Container>
    </ThemeProvider>
  )
}

export default App
