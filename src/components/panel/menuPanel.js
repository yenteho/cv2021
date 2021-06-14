import React, { useState } from 'react'
import {
  Separator1,
  GreyOut,
  MenuPanelItem,
  MenuPanelTitle,
  MenuPanelHeader,
  LeftPanelPopUpTransition,
  BalanceButton,
  MenuPanelWrapper,
  MenuPanelItemListWrapper,
  Gap48,
  MenuPanelWrapperDesktop,
  MenuPanelWrapperMobile,
  MenuPanelContainer,
} from '../base/common'
import { IntlProvider } from 'react-intl'
import {
  WebDesignData,
  GraphicDesignData,
  AnimationDesignData,
  AboutMeData,
} from '../data/menuPanelData'

// testData(() => {a() b()}).map
// testData(() => {}, () => {}).map

const MenuPanelList = ({ page, switchPage }) => {
  const [showList, setList] = useState(false)
  const toggleList = () => {
    // console.log('TCL: showList', showList)
    setList(!showList)
  }
  return (
    <>
      {AboutMeData().map(({ menuPanelTitle, list = [], ...rest }, index) => (
        <>
          {menuPanelTitle && <MenuPanelTitle menuPanelTitle={menuPanelTitle} />}
          {list.map(({ icon, text, type, item, ...rest }, index) => (
            <MenuPanelItem
              key={index}
              icon={icon}
              text={text}
              subText={type}
              {...rest}
              active={page === item}
              enterMenuItem={() => {
                switchPage(item)
              }}
            />
          ))}
        </>
      ))}
    </>
  )
}
const MenuPanelListMobile = ({ page, switchPage, toggleMenuPanel }) => {
  const [showList, setList] = useState(false)
  const toggleList = () => {
    // console.log('TCL: showList', showList)
    setList(!showList)
  }
  return (
    <>
      {AboutMeData(() => toggleMenuPanel()).map(
        ({ menuPanelTitle, list = [], ...rest }, index) => (
          <>
            <MenuPanelTitle menuPanelTitle={menuPanelTitle} />
            {list.map(({ icon, text, type, item, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={text}
                subText={type}
                {...rest}
                active={page === item}
                enterMenuItem={() => {
                  switchPage(item)
                  toggleMenuPanel()
                }}
              />
            ))}
          </>
        )
      )}
    </>
  )
}

export function MenuPanel({
  switchPage,
  page,
  toggleMenuPanel,
  showMenuPanel,
  locale,
}) {
  return (
    <IntlProvider messages={locale}>
      <LeftPanelPopUpTransition show={showMenuPanel}>
        <MenuPanelHeader
          text={'Portfolio'}
          closePanel={toggleMenuPanel}
          debug={() => console.log('debug')}
        />
        <MenuPanelWrapperDesktop>
          <MenuPanelList switchPage={switchPage} />
          <Gap48 />
        </MenuPanelWrapperDesktop>
        <MenuPanelWrapperMobile>
          <MenuPanelListMobile
            toggleMenuPanel={toggleMenuPanel}
            switchPage={switchPage}
          />
          <Gap48 />
        </MenuPanelWrapperMobile>
      </LeftPanelPopUpTransition>
      {showMenuPanel && <GreyOut />}
    </IntlProvider>
  )
}

{
  /* <Separator1 /> */
}
{
  /* <MenuPanelItem
            text={'Settings'}
            enterMenuItem={() => toggleList()}
          />
          {showList && (
            <MenuPanelItemListWrapper>Test Panel</MenuPanelItemListWrapper>
          )} */
}
{
  /* <Separator1 /> */
}
