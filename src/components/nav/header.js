import React, { useState, useEffect } from 'react'
import {
  FlexRight,
  FlexLeft,
  Shadow,
  HeaderItemContainer,
  HeaderItem,
  HeaderWrapper,
  MenuButton,
  ArrowButtonRight,
  ArrowButtonLeft,
  SbkHeaderTransition,
  FilterItem,
  FilterWrapper,
  FilterWrapperItemContainer,
  RelativeWrapper,
  DropdownList,
  FilterLocateWrapper,
  FilterItemContainer,
  FilterLocateWrapperInner,
} from '../base/common'

const Header = ({
  icons,
  HeaderItems,
  switchPage,
  headerActive,
  page,
  lang,
  setLang,
  toggleMenuPanel,
}) => {
  //   const scrollRef = useDragScrolling()
  const [showDropdownList, setDropdownList] = useState(false)
  const toggleDropdownList = () => {
    console.log('TCL: showDropdownList', showDropdownList)
    setDropdownList(!showDropdownList)
  }
  return (
    <RelativeWrapper>
      <HeaderWrapper>
        <MenuButton toggleMenuPanel={() => toggleMenuPanel()} />
        {/* <ArrowButtonRight darkBg />
          <ArrowButtonLeft darkBg /> */}
        <HeaderItemContainer
        // ref={scrollRef}
        >
          <Shadow
            fromColor={(props) => props.theme.color_P1}
            toColor={(props) => props.theme.color_P1_OP0}
            fromLeft={'left: 64px;'}
            withWidth={'16px;'}
          />
          <FlexLeft onClick={() => console.log('>')}>
            {icons}
            {/* {HeaderItems.map((item, index) => (
                <HeaderItem
                  switchPage={() => switchPage(item)}
                  active={headerActive === item}
                  key={`headerItem_${index}`}
                  competition={item}
                  withBadge={item === 'My Events'}
                ></HeaderItem>
              ))} */}
          </FlexLeft>
          <FlexRight>
            <HeaderItem
              competition={'Schedule'}
              active={page === 'Behance'}
              switchPage={() => switchPage('Behance')}
            />
            <HeaderItem
              competition={'My Bets'}
              active={page === 'Medium'}
              // active
              switchPage={() => switchPage('Medium')}
              counter={'99+'}
            />
            <div>
              <select
                value={lang}
                onChange={(evt) => {
                  setLang(evt.target.value)
                }}
              >
                <option value="en">English</option>
                <option value="cn">中文</option>
                <option value="fr">Français</option>
                <option value="jp">日本語</option>
              </select>
            </div>
          </FlexRight>
        </HeaderItemContainer>
        <Shadow
          fromColor={(props) => props.theme.color_P1_OP0}
          toColor={(props) => props.theme.color_P1}
        />
      </HeaderWrapper>
    </RelativeWrapper>
  )
}
export default Header
