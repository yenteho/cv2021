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
import { ResetStyle, GlobalStyle } from './base/globalStyle'
import Header from './nav/header'
const AppView = () => {
  return (
    <>
      <PageContainer></PageContainer>
    </>
  )
}

// export default withLoading(useHighlight(AppView), 'colors')

export default AppView
