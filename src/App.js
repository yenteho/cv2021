import './App.css'
import React, { useState, useEffect } from 'react'
import AppView from './components/AppView'
import colors from './colors/light.js'
import { ThemeProvider, Container } from './components/base/common'
import { ResetStyle, GlobalStyle } from './components/base/globalStyle'
import Header from './components/nav/header'
import { MenuPanel } from './components/panel/menuPanel'
import Resume from './components/pages/resume'
import Behance from './components/pages/behance'
import Medium from './components/pages/medium'
import Zion from './components/pages/zion'
import Coinof from './components/pages/coinof'
import NcCrypto from './components/pages/ncCrypto'
import NcXuenn from './components/pages/ncXuenn'
import Pypat from './components/pages/pypat'
import Pingxi from './components/pages/pingxi'

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
  const [page, switchPage] = useState('Angel Ho')
  const getCurrentPage = () => {
    switch (page) {
      case 'Angel Ho':
        return <Resume locale={locale} />
      case 'Portfolio':
        return <Behance lang={lang} locale={locale} />
      case 'Euro Cup 188 Bet Sports Book':
        return <Behance lang={lang} locale={locale} />
      case 'World Cup 188 / V9 / TT / R88 Bet Sports Book':
        return <Behance lang={lang} locale={locale} />
      case 'CoinOf Cryptocurrency Investment Advisor':
        return <Coinof lang={lang} locale={locale} />
      case 'CV 2017':
        return <Behance lang={lang} locale={locale} />
      case 'ZION GROTTA ROAD TIRE':
        return <Zion lang={lang} locale={locale} />
      case 'Pypat IP Services Company':
        return <Pypat />
      case 'Cryptocurrency Company Business Cards':
        return <NcCrypto />
      case 'Xuenn Digital Gaming Innovators':
        return <NcXuenn />
      case 'Pingxi Travellers Lodge':
        return <Pingxi />
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
      <Container>
        <MenuPanel
          showMenuPanel={showMenuPanel}
          toggleMenuPanel={toggleMenuPanel}
          switchPage={switchPage}
          page={page}
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
      <AppView />
    </ThemeProvider>
  )
}

export default App
