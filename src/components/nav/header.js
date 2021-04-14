import React, { useState } from 'react'
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
  toggleMenuPanel,
  icons,
  HeaderItems,
  switchPage,
  headerActive,
  page,
}) => {
//   const scrollRef = useDragScrolling()
  // const dir = useScrollDirection(
  //   { scrolld: 'up', currentscroll: 0 },
  //   168,
  //   false,
  //   iframe
  // )

//   const [hideHeader, currentScroll] = useHideHeader(iframe)
  const [showDropdownList, setDropdownList] = useState(false)
  const toggleDropdownList = () => {
    console.log('TCL: showDropdownList', showDropdownList)
    setDropdownList(!showDropdownList)
  }
  const [tab, setTab] = useState('Main Markets')
  return (
      <HeaderWrapper>
          
        <MenuButton 
            // toggleMenuPanel={() => toggleMenuPanel()} 
        />
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
              active={headerActive === 'Schedule'}
              switchPage={() => switchPage('Schedule')}
            />
            <HeaderItem
              competition={'My Bets'}
              // active={headerActive === 'My Bets'}
              active
              switchPage={() => switchPage('My Bets')}
              counter={'99+'}
            />
          </FlexRight>
        </HeaderItemContainer>
        <Shadow
          fromColor={(props) => props.theme.color_P1_OP0}
          toColor={(props) => props.theme.color_P1}
        />
      </HeaderWrapper>
  )
}
export default Header