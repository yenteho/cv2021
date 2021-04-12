import React from 'react'
// import Icons from './components/icons'
// import { BottomNav } from './components/nav/bottomNav'
import {
  ThemeProvider,
  Container,
  PageContainer,

  // BrandColorBar,
  // SbkHeader,
} from './base/common'
import {
  ResetStyle,
  GlobalStyle,
} from './base/globalStyle'
import Header from './nav/header'
const AppView = ({
  currentPage,
  colors,
  toggleBetSlip,
  getColorToHighlight,
  page,
  switchPage,
  showAmpPage,
  toggleAmpPage,
  statistics,
  esportsStatistics,
  headerActive,
  toggleMenuPanel,
  toggleWlbRightPanel,
  priceBoosts,
  financialDisplayPreference,
  infoContent,
  toolTip,
  headerHeight,
  iframe,
  iPadInnerheight,
  isVN,
  isCN,
  isWlb,
  changeTheme,
}) => {
  return (
    <ThemeProvider
      theme={{
        ...colors,
        // icons: Icons,
      }}
    >
      <div className="App" viewport-fit="cover">
        <ResetStyle />
        <GlobalStyle iframe={iframe} currentPage={currentPage} />
        <Container>
          <Header/>
          {/* <BrandColorBar changeTheme={changeTheme} /> */}
          {/* <SbkHeader
            HeaderItems={sbkHeaderData}
            toggleMenuPanel={toggleMenuPanel}
            switchPage={switchPage}
            headerActive={headerActive}
            currentColorSelection={colorID}
            page={page}
          /> */}
          <PageContainer>

          </PageContainer>
          {/* {betDetail}
          {quickBet}
          {statistics}
          {menuPanel}
          {settingsPanel}
          {toolTip}
          <BottomNav
            toggleBetSlipContent={toggleBetSlipContent}
            currentColorSelection={colorID}
            page={page}
            switchPage={switchPage}
          /> */}
        </Container>
      </div>
    </ThemeProvider>
  )
}

// export default withLoading(useHighlight(AppView), 'colors')

export default AppView