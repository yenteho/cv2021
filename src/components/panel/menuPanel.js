import React, {useState} from 'react'
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
} from '../base/common'
import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator } from 'react-icons/si'
import { AiOutlineSketch } from 'react-icons/ai'
import { MdWeb, MdSlowMotionVideo, MdOndemandVideo } from 'react-icons/md'
import { WebDesignData, GraphicDesignData } from '../data/menuPanelData'
// import { MenuPanelInfoData } from '../../Data/menuPanelInfoData'

export function MenuPanel({ toggleMenuPanel, showMenuPanel, switchPage }) {
  const [showList, setList] = useState(false)
  const toggleList = () => {
    console.log('TCL: showList', showList)
    setList(!showList)
  }
  return (
    <>
      <LeftPanelPopUpTransition show={showMenuPanel}>
        <MenuPanelHeader
          text={'Portfolio'}
          closePanel={toggleMenuPanel}
          debug={() => console.log('debug')}
        />
        <MenuPanelWrapper>
          {/* <BalanceButton text={'1,340,000,000.00 RMB'} genericLoading={false} /> */}
          <MenuPanelTitle menuPanelTitle={'UI UX Web Design'} />
          {WebDesignData.map(
            ({ icon, item, type, favorite, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={item}
                subText={type}
                {...rest}
                enterMenuItem={() => {
                  // closeMenuPanel()
                  // switchPage(item)
                }}
              />
            )
          )}

          <MenuPanelTitle menuPanelTitle={'Animation'} />
          {GraphicDesignData.map(
            ({ icon, item, type, favorite, ...rest }, index) => (
              <MenuPanelItem
                key={index}
                icon={icon}
                text={item}
                subText={type}
                {...rest}
                enterMenuItem={() => {
                  // closeMenuPanel()
                  // switchPage(item)
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
                enterMenuItem={() => {
                  // closeMenuPanel()
                  // switchPage(item)
                }}
              />
            )
          )}
          <Separator1 />
          <MenuPanelItem
            // icon={<AiOutlineSketch />}
            text={'Settings'}
            enterMenuItem={() => toggleList()}
          />
          {showList && <MenuPanelItemListWrapper>
Test Panel
          </MenuPanelItemListWrapper>}
          <Separator1 />

        </MenuPanelWrapper>
      </LeftPanelPopUpTransition>
      {/* {showMenuPanel && <GreyOut />} */}
    </>
  )
}
