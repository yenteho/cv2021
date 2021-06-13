import './App.css'
import React, { useState, useEffect } from 'react'
import AppView from './components/AppView'
import colors from './colors/light.js'
import {
  ThemeProvider,
  Container,
  PageWrapper,
  Footer,
} from './components/base/common'
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
import NtustPatentConf from './components/pages/ntustPatentConf'
import { contactData } from './components/data/contactData'
import Portfolio from './components/pages/portfolio'
import {
  pypatData,
  xuennData,
  raistoneData,
  pingxiData,
  ntustconfData,
  zionData,
} from './components/data/portfolioData'
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
  const isDisableScroll = showMenuPanel
  const [page, switchPage] = useState('Pypat IP Services Company')
  const getCurrentPage = () => {
    switch (page) {
      case 'Resume':
        return <Resume locale={locale} showMenuPanel={showMenuPanel} />
      case 'Portfolio':
        return <Behance lang={lang} locale={locale} />
      case 'Euro Cup 188 Bet Sports Book':
        return <Resume lang={lang} locale={locale} />
      case 'World Cup 188 / V9 / TT / R88 Bet Sports Book':
        return <Resume lang={lang} locale={locale} />
      // case 'CoinOf Cryptocurrency Investment Advisor':
      //   return <Coinof locale={locale} />
      // case 'CV 2017':
      //   return <Behance locale={locale} />
      // case 'ZION GROTTA ROAD TIRE':
      //   return <Zion locale={locale} />
      // case 'Pypat IP Services Company':
      //   return <Pypat locale={locale} />
      // case 'Asian Patent Attorneys Association':
      //   return <NtustPatentConf locale={locale} />
      // case 'Cryptocurrency Company Business Cards':
      //   return <NcCrypto locale={locale} />
      // case 'Xuenn Digital Gaming Innovators':
      //   return <NcXuenn locale={locale} />
      // case 'Pingxi Travellers Lodge':
      //   return <Pingxi locale={locale} />
      case 'CoinOf Cryptocurrency Investment Advisor':
        return (
          <Portfolio locale={locale} portfolioData={pypatData} id={73184365} />
        )
      case 'CV 2017':
        return (
          <Portfolio locale={locale} portfolioData={pypatData} id={72853469} />
        )
      case 'ZION GROTTA ROAD TIRE':
        return (
          <Portfolio locale={locale} portfolioData={zionData} id={73068935} youtube={true}/>
        )
      case 'Pypat IP Services Company':
        return (
          <Portfolio
            locale={locale}
            portfolioData={ntustconfData}
            id={72853469}
          />
        )
      case 'Asian Patent Attorneys Association':
        return (
          <Portfolio locale={locale} portfolioData={pypatData} id={73055443} />
        )
      case 'Cryptocurrency Company Business Cards':
        return (
          <Portfolio
            locale={locale}
            portfolioData={raistoneData}
            id={68127253}
          />
        )
      case 'Xuenn Digital Gaming Innovators':
        return (
          <Portfolio locale={locale} portfolioData={xuennData} id={72725033} />
        )
      case 'Pingxi Travellers Lodge':
        return (
          <Portfolio locale={locale} portfolioData={pingxiData} id={73147273} />
        )
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
      <Container isDisableScroll={isDisableScroll}>
        <Header
          lang={lang}
          setLang={setLang}
          toggleMenuPanel={toggleMenuPanel}
          showMenuPanel={showMenuPanel}
          switchPage={switchPage}
          page={page}
        />
        <PageWrapper showMenuPanel={showMenuPanel}>
          <MenuPanel
            showMenuPanel={showMenuPanel}
            toggleMenuPanel={toggleMenuPanel}
            switchPage={switchPage}
            page={page}
          />
          <div />
          {currentPage}
        </PageWrapper>
      </Container>
      <AppView />
    </ThemeProvider>
  )
}

export default App
