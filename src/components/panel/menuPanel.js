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
import { FormattedMessage, IntlProvider } from 'react-intl'
import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator } from 'react-icons/si'
import { AiOutlineSketch } from 'react-icons/ai'
import { MdWeb, MdSlowMotionVideo, MdOndemandVideo } from 'react-icons/md'
import {
  WebDesignData,
  GraphicDesignData,
  AnimationDesignData,
  AboutMeData,
} from '../data/menuPanelData'
// import { MenuPanelInfoData } from '../../Data/menuPanelInfoData'

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
          {/* <BalanceButton text={'1,340,000,000.00 RMB'} genericLoading={false} /> */}
          <MenuPanelTitle menuPanelTitle={'About Me'} />
          {AboutMeData.map(
            ({ icon, item, text, type, favorite, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={text}
                subText={type}
                {...rest}
                active={page === item}
                enterMenuItem={() => {
                  // closeMenuPanel()
                  switchPage(item)
                  toggleMenuPanel()
                }}
              />
            )
          )}
          <MenuPanelTitle menuPanelTitle={'UI UX Web Design'} />
          {WebDesignData.map(
            ({ icon, item, type, favorite, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={item}
                subText={type}
                {...rest}
                active={page === item}
                enterMenuItem={() => {
                  // closeMenuPanel()
                  switchPage(item)
                  toggleMenuPanel()
                }}
              />
            )
          )}

          <MenuPanelTitle menuPanelTitle={'Animation'} />
          {AnimationDesignData.map(
            ({ icon, item, type, favorite, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={item}
                subText={type}
                {...rest}
                active={page === item}
                enterMenuItem={() => {
                  // closeMenuPanel()
                  switchPage(item)
                  toggleMenuPanel()
                }}
              />
            )
          )}
          <MenuPanelTitle menuPanelTitle={'Graphic Design'} />
          {GraphicDesignData.map(
            ({ icon, item, type, favorite, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={item}
                subText={type}
                {...rest}
                active={page === item}
                enterMenuItem={() => {
                  // closeMenuPanel()
                  switchPage(item)
                  toggleMenuPanel()
                }}
              />
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
