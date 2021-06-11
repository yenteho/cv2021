import React, { useState, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { headerData } from '../data/headerData'
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
  locale,
}) => {
  //   const scrollRef = useDragScrolling()
  const [showDropdownList, setDropdownList] = useState(false)
  const toggleDropdownList = () => {
    console.log('TCL: showDropdownList', showDropdownList)
    setDropdownList(!showDropdownList)
  }
  return (
    <IntlProvider messages={locale}>
      <HeaderWrapper>
        <MenuButton toggleMenuPanel={() => toggleMenuPanel()} />
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
            <HeaderItem
              competition={'Angel Ho'}
              active={page === 'Angel Ho'}
              switchPage={() => switchPage('Angel Ho')}
            />
          </FlexLeft>
          <FlexRight>
            {headerData.map(({ item, counter, ...rest }, index) => (
                <HeaderItem
                  switchPage={() => switchPage(item)}
                  active={page === item}
                  key={`headerItem_${index}`}
                  competition={item}
                  withBadge={item === 'My Events'}
                  counter={counter}
                />
              ))}
            <div>
              <select
                value={lang}
                onChange={(evt) => {
                  setLang(evt.target.value)
                }}
              >
                <option value="en">English</option>
                <option value="cn">中文</option>
                {/* <option value="fr">Français</option>
                  <option value="jp">日本語</option> */}
              </select>
            </div>
          </FlexRight>
        </HeaderItemContainer>
        <Shadow
          fromColor={(props) => props.theme.color_P1_OP0}
          toColor={(props) => props.theme.color_P1}
        />
      </HeaderWrapper>
    </IntlProvider>
  )
}
export default Header
