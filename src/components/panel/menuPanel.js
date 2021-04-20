import React from 'react'
import {
  Separator1,
  GreyOut,
  MenuPanelItem,
  MenuPanelTitle,
  MenuPanelHeader,
  LeftPanelPopUpTransition,
  ContentScrollWrapper,
  BalanceButton,
} from '../base/common'
// import { MenuPanelSportData } from '../../Data/menuPanelSportData'
// import { MenuPanelInfoData } from '../../Data/menuPanelInfoData'

export function MenuPanel({
  toggleMenuPanel,
  showMenuPanel,
  toggleSettingsPanel,
  toggleFreeBetsPanel,
  switchPage,
  closeMenuPanel,
}) {
  return (
    <>
      <LeftPanelPopUpTransition show={showMenuPanel}>
        <MenuPanelHeader
          text={'Menu'}
          closePanel={toggleMenuPanel}
          debug={() => console.log('debug')}
        />
        <ContentScrollWrapper>
          {/* <BalanceButton text={'1,340,000,000.00 RMB'} genericLoading={false} /> */}
          {/* <MenuPanelItem
            icon={<Icons.Left_panel_in_play_indicator />}
            text={'In-play'}
            active
          />
          <MenuPanelItem
            icon={<Icons.Left_panel_price_boost />}
            priceBoost
            text={'Price Boosts'}
          />
          <MenuPanelItem
            icon={<Icons.Left_panel_special_events_normal />}
            text={
              'Special Event long Longest Long Long Long Long Long Long Long Long Nam...'
            }
          />
          <MenuPanelItem icon={<Icons.Euro />} text={'UEFA Euro 2020'} />
          <MenuPanelItem icon={<Icons.Olympics />} text={'Olympics'} />
          <MenuPanelItem
            icon={<Icons.Freebets />}
            // multiColorIcon
            text={'Free Bets'}
            counter={'99+'}
            enterMenuItem={() => toggleFreeBetsPanel()}
          /> */}
          {/* <Separator1 /> */}
          {/* {MenuPanelSportData.map(({ image, sport, ...rest }, index) => (
            <MenuPanelItem
              key={index}
              icon={image}
              text={sport}
              favorite
              {...rest}
              enterMenuItem={() => {
                closeMenuPanel()
                switchPage(sport)
              }}
            />
          ))} */}
          {/* <MenuPanelTitle menuPanelTitle={'Sports A-Z'} />
          <Separator1 />
          <MenuPanelItem
            // icon={<Icons.Left_panel_settings />}
            text={'Settings'}
            enterMenuItem={() => toggleSettingsPanel()}
          />
          <Separator1 />
          <MenuPanelTitle menuPanelTitle={'Info Centre'} /> */}
          {/* {MenuPanelInfoData.map(({ InfoIcon, Info }, index) => {
            return (
              <MenuPanelItem
                key={`MenuPanelItem_${index}`}
                icon={InfoIcon}
                text={Info}
              />
            )
          })} */}
        </ContentScrollWrapper>
      </LeftPanelPopUpTransition>
      {showMenuPanel && <GreyOut />}
    </>
  )
}
