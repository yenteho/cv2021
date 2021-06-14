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
export function MenuPanel({
  switchPage,
  page,
  toggleMenuPanel,
  showMenuPanel,
  locale,
}) {
  const [showList, setList] = useState(false)
  const toggleList = () => {
    // console.log('TCL: showList', showList)
    setList(!showList)
  }
  return (
    <IntlProvider messages={locale}>
      <LeftPanelPopUpTransition show={showMenuPanel}>
        <MenuPanelHeader
          text={'Portfolio'}
          closePanel={toggleMenuPanel}
          debug={() => console.log('debug')}
        />
        <MenuPanelWrapper>
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
                      // toggleMenuPanel()
                    }}
                  />
                ))}
              </>
            )
          )}

          {/* <Separator1 /> */}
          {/* <MenuPanelItem
            text={'Settings'}
            enterMenuItem={() => toggleList()}
          />
          {showList && (
            <MenuPanelItemListWrapper>Test Panel</MenuPanelItemListWrapper>
          )} */}
          {/* <Separator1 /> */}
          <Gap48 />
        </MenuPanelWrapper>
      </LeftPanelPopUpTransition>
      {/* {showMenuPanel && <GreyOut />} */}
    </IntlProvider>
  )
}
