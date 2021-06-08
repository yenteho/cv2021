import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { F32, F24, F22, F20, F18, F16, F15, F14, F13, F12, F11 } from './font'
import {
  IconWrapper80,
  IconWrapper56,
  IconWrapper48,
  IconWrapper32,
  IconWrapper24,
  IconWrapper18,
  IconWrapper16,
  IconWrapper12,
  IconWrapper10,
  IconWrapper8,
} from './iconWrapper'
import './animation.css'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'
let Icons = null
export const ThemeProvider = (props) => {
  Icons = props.theme.icons
  return (
    <BaseThemeProvider theme={{ ...props.theme }}>
      {props.children}
    </BaseThemeProvider>
  )
}

const sizes = {
  desktopLarge: 1599,
  desktopMedium: 1279,
  desktop: 1023,
  tabletLandscape: 959,
  tablet: 639,
  mobile: 319,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const Container = styled.div`
  overflow: scroll;
  ${media.desktopLarge`background: ${(props) => props.theme.color_B1};`}
  ${media.desktopMedium`background: ${(props) => props.theme.color_B1};`}
  ${media.desktop`background: ${(props) => props.theme.color_B1};`}
  ${media.tabletLandscape`${(props) =>
    props.disableScroll && `position: fixed; width:100%; `}
    background: ${(props) => props.theme.color_B1};`}
  ${media.tablet`background: ${(props) => props.theme.color_B1};`}
  ${media.mobile`background: ${(props) => props.theme.color_B1};`}
`
//-------------------- Contextfiy --------------------//
export const ContxtCss = styled.div.attrs({ className: '' })`
  cursor: ${(props) => props.contextState && 'context-menu'};
  ${media.desktopMedium`
      display:${(props) => props.className === 'LeftPanelRaw' && 'none'};
  `}
`
//-------------------- Flex --------------------//
export const Flex = styled.div`
  display: flex;
`
//-------------------- FlexBreak --------------------//
export const FlexBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`
//-------------------- FlexWrap --------------------//
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
//-------------------- left --------------------//
export const FlexLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
//-------------------- right --------------------//
export const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
//-------------------- center --------------------//
// flexbox 上下左右置中
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
//-------------------- Flex Column --------------------//
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FlexLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const FlexRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
//-------------------- Flex Sticky Wrapper --------------------//
export const FlexStickyTop = styled.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
`
export const FlexStickyBottom = styled.div`
  position: sticky;
  bottom: 0;
  align-self: flex-start;
`
export const FlexEndWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`
//-------------------- Table --------------------//
export const TableRow = styled.div`
  display: table-row;
  border-collapse: separate;
`
export const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`

//-------------------- Animations --------------------//
const ldsdualring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const goalFadeIn = keyframes`
  0% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
`

const goalFadeOut = keyframes`
  0% {
    opacity: 1;
    border-width: 1px;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    border-width: 0;
    transform: scale(2);
  }
`

const process = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
`

const preLoading = keyframes`
  0% {
    background-position: 0px 50%;
  }

  100% {
    background-position: 100% 51%;
  }
`

const genericLoading = keyframes`
  0% {
      stroke-dashoffset: 187;
  }
  50% {
      stroke-dashoffset: 46;
      transform: rotate(135deg);
  }
  100% {
      stroke-dashoffset: 190;
      transform: rotate(450deg);
  }
`

const genericLoadingRotate = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`
const shakeHorizontal = keyframes`
  0% {
    transform: translate3d(-10px, 0,0);
  }
  25% {
    transform: translate3d(10px, 0,0);
  }
  50% {
    transform: translate3d(-5px, 0,0);
  }
  75% {
    transform: translate3d(5px, 0,0);
  }
  100% {
    transform: translate3d(0px, 0,0);
  }
`
const dropVertical = keyframes`
  0% {
    transform: translate3d(0, -50px,0);
  }
  25% {
    transform: translate3d(0, 10px,0);
  }
  50% {
    transform: translate3d(0, 0px,0);
  }
  75% {
    transform: translate3d(0, 5px,0);
  }
  100% {
    transform: translate3d(0px, 0,0);
  }
`
const ripple = keyframes`
  0% {
    box-shadow: 0 0 0 .7rem rgba(255,255,255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 8rem rgba(255,255,255, 0);
  }
`
//-------------------- Scrolling Containers --------------------//
// Flexbox 左右滑
export const FlexScrollWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
  user-select: none;
`
// Page 上下滑
export const PageScrollWrapper = styled.div`
  width: 100%;
  /* height: 100%;
  overflow: auto; */
`
export const ContentScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  -webkit-overflow-scrolling: touch;
`
export const ContentScrollContainer = styled.div``
//-------------------- Separator --------------------//
export const Separator1 = styled.div`
  border-top: 1px solid ${(props) => props.theme.color_A4};
  border-style: ${(props) =>
    props.dashed ? 'dashed' : props.dotted ? 'dotted' : ''};
`
export const Separator2 = styled.div`
  border-top: 2px solid ${(props) => props.theme.color_A4};
  border-style: ${(props) =>
    props.dashed ? 'dashed' : props.dotted ? 'dotted' : ''};
`
export const Separator4 = styled.div`
  border-top: 4px solid ${(props) => props.theme.color_A4};
  border-style: ${(props) =>
    props.dashed ? 'dashed' : props.dotted ? 'dotted' : ''};
  ${media.desktop`border-top: 2px solid ${(props) => props.theme.color_A4};`}
`
export const Separator8 = styled.div`
  border-top: 8px solid ${(props) => props.theme.color_A4};
  margin: 8px 0px;
  border-style: ${(props) =>
    props.dashed ? 'dashed' : props.dotted ? 'dotted' : ''};
`
export const Gap8 = styled.div`
  border-top: 8px solid transparent;
`
export const Gap16 = styled.div`
  border-top: 16px solid transparent;
`
//-------------------- Fixed Page & Wrapper --------------------//

export const RelativeWrapper = styled.div`
  position: relative;
`
export const FixedPage2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: auto;
  min-height: 50%;
`
export const FixedPage3 = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: auto;
`
export const ContentContainer = styled(RelativeWrapper)`
  pointer-events: auto;
  background: ${(props) => props.theme.color_P4_2};
  width: 100%;
  overflow-y: hidden;
  /* ${(props) => {
    const menuH = 48
    const headerH = menuH + props.theme.headerHeight
    const offsetTop = props.theme.iframe ? menuH : headerH
    return `
    transition: transform ${props.needTransition ? '0.3s' : '0s'} ease;
    height: ${props.windowY - offsetTop}px;
    transform: ${
      props.show
        ? `translate3d(0,${offsetTop}px,0)`
        : `translate3d(0,${props.windowY - menuH}px,0)`
    };
    `
  }};
  ${(props) => {
    //media.desktop => width < 1024
    const offsetTop = props.theme.iframe ? 0 : props.theme.headerHeight
    return media.desktop`
    height: ${props.windowY - offsetTop}px;
    transform: ${
      props.show
        ? `translate3d(0,${offsetTop}px,0);`
        : `translate3d(0,${props.windowY}px,0);`
    }
  `
  }}
  ${(props) => {
    //media.tablet => width < 640
    return media.tablet`
    padding-top: 'env(safe-area-inset-bottom)';
    `
  }} */
`
//-------------------- TransitionWrapper --------------------//
const PopUpTransition = styled.div`
  transition: transform 0.3s ease;
  position: sticky;
  bottom: 0;
`
export const SbkHeaderTransition = styled.div`
  transition: transform 0.3s ease;
  position: sticky;
  width: 100%;
  overflow-y: hidden;
  height: 48px;
  z-index: 4;
`
export const CenterPanelPopUpTransition = styled(PopUpTransition)`
  z-index: 5;
  ${(props) =>
    props.show
      ? `transform: translate3d(0,0%,0);`
      : `transform: translate3d(0,100%,0);`};
`
const RPPopUpTransition = styled.div`
  transition: transform 0.3s ease;
  position: sticky;
  ${media.desktop`
    position: fixed;
  `}
  bottom: 0;
`
export const RightPanelPopUpTransition = styled(RPPopUpTransition)`
  height: ${(props) =>
    props.theme.iPadInnerheight > 0
      ? `calc(${props.theme.iPadInnerheight}px + 48px)`
      : '100%'};
  z-index: 5;
  right: 0;
  width: 100%;
  ${(props) =>
    props.show
      ? `transform: translate3d(0,0%,0);`
      : `transform: translate3d(0,180%,0);`};
  ${ContentContainer} {
    ${media.desktop`
      margin-top: ${(props) => props.theme.headerHeight + 'px'};
    `}
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    ${ContentScrollWrapper} {
      padding-bottom: 170px;
    }
  }
  ${ContentScrollWrapper} {
    min-height: 112px;
    max-height: calc(100% - 48px);
    ${(props) => props.fullView && `height: calc(100vh - 48px);`}/* ${(props) =>
      props.theme.iPadInnerheight > 0
        ? `padding-bottom:48px;max-height:calc(${props.theme.iPadInnerheight}px + 48px);`
        : `max-height: calc(100vh - 48px);`} */
    /* ${(props) =>
      props.theme.iPadInnerheight > 0 ? 'padding-bottom:48px;' : ''}*/
  }
`
export const KeypadTransition = styled.div`
  ${(props) =>
    props.show
      ? `transform: translate3d(0,${props.errorMessageHeight},0);`
      : `transform: translate3d(0,100%,0);`};
  transition: none;
  ${media.desktop`
    ${(props) =>
      props.show
        ? `transform: translate3d(0,${props.errorMessageHeight},0);`
        : `transform: translate3d(0,calc(100% + 48px),0);`};
  `}
  ${media.tablet`
    ${(props) =>
      props.show
        ? `transform: translate3d(0,${props.errorMessageHeight},0);`
        : `transform: translate3d(0,100%,0);`};
  `}
`
export const LeftPanelPopUpTransition = styled.div`
  background: ${(props) => props.theme.color_B2};
  width: 320px;
  ${media.tablet`width:100%;`}
  padding-bottom: 48px;
  transition: transform 0.3s ease;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  ${(props) =>
    props.show
      ? `transform: translate3d(0%,0,0);`
      : `transform: translate3d(-100%,0,0);`};
  /* transition: width 3s ease;
  ${(props) => (props.show ? `width: 100%;` : `width: 0px;`)};  */
  z-index: 4;
  pointer-events: auto;
`
//-------------------- BetSlip Keypad Button  --------------------//
export const KeypadButtonWrapper = styled(FlexCenter)`
  user-select: none;
  text-transform: uppercase;
  background: ${(props) =>
    props.changeStake ? props.theme.color_P3_22_OP24 : null};
  color: ${(props) => props.theme.color_P4_25};
  height: 48px;
  cursor: pointer;
  g {
    fill: ${(props) => props.theme.color_P4_25};
  }
  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.color_P1_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P1_Lmin8};
  }
  transition: 2s;
  ${media.desktop`
    ${(props) => props.changeStake && `grid-column: 2 span;`};
  `}
  ${media.tablet`
    ${(props) => props.changeStake && `grid-column: 1 span;`};
  `}
`
export const KeypadWrapper = styled.div`
  position: relative;
  bottom: ${(props) =>
    props.errorMessageHeight
      ? `calc(48px + ${props.errorMessageHeight})`
      : '48px'};
  height: 144px;
  width: 100%;
  background: ${(props) => props.theme.color_S5};

  ${Grid(5)};
  grid-template-rows: repeat(3, 1fr);
  font-size: 1.4rem;
  g {
    fill: ${(props) => props.theme.color_P4_25};
  }
  ${media.desktop`
    ${Grid(10)};
    grid-template-rows: repeat(2, 1fr);
    height: 96px;
  `}
  ${media.tablet`
    ${Grid(5)};
    grid-template-rows: repeat(3, 1fr);
    height: 144px;
  `}
`
//-------------------- Truncate --------------------//
export function Truncate(line = '1') {
  return `
    -webkit-line-clamp: ${line};
    -moz-line-clamp: ${line};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;  
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    word-wrap: break-word;
  `
}

//-------------------- Scaled Container --------------------//
export const ScaledContainer = styled.div`
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  margin: 0 auto;
`
export const ScaledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

//-------------------- Flex Space Between  --------------------//
export function FlexSpaceBetween(height = '0') {
  return `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${height}px;
  `
}

// 偽元素上下左右置中
export const GhostCenter = styled.div`
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    // width: .1px
  }
`
// 絕對定位上下左右置中
export const AbsoluteCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`
// 絕對定位垂直置中
export const AbsoluteTopCenter = styled.div`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`
// 絕對定位靠左置中
export const AbsoluteLeftCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
`
// 絕對定位垂直置中靠右
export const AbsoluteRightCenter = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate3d(0, -50%, 0);
`
// margin左右置中
export const MarginAutoCenter = styled.div`
  margin: 0 auto;
  position: relative;
`

//-------------------- Sticky Containers --------------------//
//固定
export function StickyWrapper(top = '0', bottom = 'auto') {
  return `
    position: fixed;
    z-index: 2;
    width: 100%;
    top: ${top};
    bottom: ${bottom};
  `
}
//-------------------- Fixed Top / Bottom --------------------//
export const FixedBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`
//-------------------- Carousel Shadow --------------------//

export const Shadow = styled.div`
  top: 0;
  position: absolute;
  background: linear-gradient(
    to right,
    ${(props) =>
      props.fromColor ? props.fromColor : props.theme.color_P4_2_OP0},
    ${(props) => (props.toColor ? props.toColor : props.theme.color_P4_2)}
  );
  width: ${(props) => (props.withWidth ? props.withWidth : '32px')};
  ${(props) => (props.fromLeft ? props.fromLeft : 'right: 0;')};
  pointer-events: none;
  transition: right 0.3s;
  height: ${(props) => (props.showDropdownList ? '40px' : '100%')};
`

export const ShadowLine = styled.div`
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.color_Shadow},
    ${(props) => props.theme.color_P1_OP0}
  );
`
//-------------------- ReactSwipe --------------------//

export const Wrapper = styled.div`
  position: relative;
  ${(props) => props.theme.icons.Caret_left} {
    position: absolute;
    left: 5px;
    width: 10px;
    g {
      fill: ${(props) => props.theme.color_P1_OP0};
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_P1};
        }
      }
    }
  }
`
export const DotsWrapper = styled(FlexCenter)`
  height: 16px;
  margin-top: 8px;
  ${(props) => props.dark && `background: ${props.theme.color_S5};`}
`
export const Dot = styled(Flex)`
  width: 16px;
  height: 4px;
  border-radius: 6px;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_A3};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_A3};
  }
  margin-right: 8px;
  &:nth-last-child(1) {
    margin-right: 0px;
  }
  background: ${(props) =>
    props.dark
      ? `${props.active ? props.theme.color_A3_2 : props.theme.color_S6_1}`
      : `${props.active ? `${props.theme.color_A3};` : props.theme.color_S6}`};
`
export const Dots = ({ switchDot, list = [] }) => {
  return (
    <DotsWrapper>
      {list &&
        list.length > 0 &&
        list.map(({ ...rest }, index) => (
          <Dot
            key={'dots' + index}
            onClick={() => switchDot(index)}
            {...rest}
          />
        ))}
    </DotsWrapper>
  )
}

export const ButtonLeft = styled.div`
  position: absolute;
  left: 5px;
  width: 10px;
  ${(props) => props.theme.icons.Caret_left} {
    g {
      fill: ${(props) => props.theme.color_P1_OP0};
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_P1};
        }
      }
    }
  }
`
export const ButtonRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  ${(props) => props.theme.icons.Caret_right} {
    g {
      fill: ${(props) => props.theme.color_P1_OP0};
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_P1};
        }
      }
    }
  }
`

//-------------------- css grid--------------------//
export function Grid(col) {
  return `
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(${col}, 1fr);
  `
}
export function GridChild(colstart, colend, rowstart, rowend) {
  return `
    -ms-grid-column: ${colstart};
    -ms-grid-column-span: ${colend} - ${colstart};
    -ms-grid-row: ${rowstart};
    -ms-grid-row-span: ${rowend} - ${rowstart};
    grid-column: ${colstart} / ${colend};
    grid-row: ${rowstart} / ${rowend};
  `
}

//-------------------- Header Background Banner --------------------//
export const HeaderBg = styled.div`
  background: ${(props) =>
    props.scoreboard || (props.img && !props.theme.isWlb)
      ? `url(${props.img}) bottom center no-repeat;`
      : props.football
      ? props.theme.color_A11_Football
      : props.basketball
      ? props.theme.color_A11_Basketball
      : props.tennis
      ? props.theme.color_A11_Tennis
      : props.badminton
      ? props.theme.color_A11_Badminton
      : props.volleyball
      ? props.theme.color_A11_Volleyball
      : props.tableTennis
      ? props.theme.color_A11_TableTennis
      : props.baseball
      ? props.theme.color_A11_Baseball
      : props.snooker
      ? props.theme.color_A11_Snooker
      : props.esports
      ? props.theme.color_A11_Esports
      : props.cricket
      ? props.theme.color_A11_Cricket
      : props.darts
      ? props.theme.color_A11_Darts
      : props.rugby
      ? props.theme.color_A11_Rugby
      : props.americanFootball
      ? props.theme.color_A11_AmericanFootball
      : props.beachSoccer
      ? props.theme.color_A11_BeachSoccer
      : props.boxing
      ? props.theme.color_A11_Boxing
      : props.handball
      ? props.theme.color_A11_Handball
      : props.iceHockey
      ? props.theme.color_A11_IceHockey
      : props.anyOther1X2Sport
      ? props.theme.color_A11_AnyOther1X2Sport
      : props.anyOtherMLSport
      ? props.theme.color_A11_AnyOtherMLSport
      : props.golf
      ? props.theme.color_A11_Golf
      : props.lottery
      ? props.theme.color_A11_Lottery
      : props.motorRacing
      ? props.theme.color_A11_MotorRacing
      : props.specialBets
      ? props.theme.color_A11_SpecialBets
      : props.financialBets
      ? props.theme.color_A11_FinancialBets
      : props.allSports
      ? props.theme.color_A11_AllSports
      : props.theme.color_A11};
  background-size: cover;
  ${media.desktopLarge`background-size: 1002px 200px;`};
  width: ${(props) => (props.soonSports ? '50%' : '100%')};
`
export const BannerImg = styled(FlexCenter)`
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`
//-------------------- Space --------------------//
export const Space4 = styled.div`
  height: 4px;
  width: 100%;
`
export const Space8 = styled.div`
  height: 8px;
  width: 100%;
`
export const Space16 = styled.div`
  height: 16px;
  width: 100%;
`
export const Space20 = styled.div`
  height: 20px;
  width: 100%;
`
export const Space24 = styled.div`
  height: 24px;
  width: 100%;
`
export const Space32 = styled.div`
  height: 32px;
  width: 100%;
`
export const Space36 = styled.div`
  height: 36px;
  width: 100%;
`
export const Space42 = styled.div`
  height: 42px;
  width: 100%;
`
export const Space48 = styled.div`
  height: 48px;
  width: 100%;
`
export const Space52 = styled.div`
  height: 52px;
  width: 100%;
`
export const Space56 = styled.div`
  height: 56px;
  width: 100%;
`
export const Space180 = styled.div`
  height: 180px;
  width: 100%;
`
export const PageBottomSpace = styled.div`
  min-height: 200px;
  padding-bottom: 16px;
  width: 100%;
  ${media.desktop`min-height: 160px;`}
`
//-------------------- GreyOut --------------------//
export const GreyOut = styled.div`
  transform: translate3d(0, 0, 0);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.wlbRightPanel ? '5' : '3')};
  background: ${(props) => props.theme.color_P3_OP32};
  pointer-events: auto;
`
//-------------------- Loading --------------------//
export const Loading = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  top: 12px;
  left: 5px;
  display: block;
  margin: 50% auto;
  &:after {
    content: ' ';
    display: block;
    width: 26px;
    height: 26px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #000000;
    border-color: #000000 transparent #000000 transparent;
    animation: ${ldsdualring} 1.2s linear infinite;
  }
`

//-------------------- Switch Button --------------------//
export const SwitchButtonWrapper = styled.div`
  position: relative;
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 24px;
  border-radius: 11px;
  background: ${(props) => props.theme.color_P4_2};
  border: 1px solid ${(props) => props.theme.color_P3_OP64};
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 3px;
    background: ${(props) => props.theme.color_P3_OP64};
    transition: 0.2s;
  }
`
export const SwitchButton = styled.input`
  opacity: 1;
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 24px;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      ~ ${CheckBoxLabel} {
        &::after {
          background: ${(props) => props.theme.color_A1_1};
        }
        border: 1px solid ${(props) => props.theme.color_A1_1};
      }
    }
  }
  ${(props) =>
    props.checked &&
    `
    &:checked + ${CheckBoxLabel} {
      border: 1px solid ${props.theme.color_A1_1};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin: 3px 3px 3px 18px;
        background: ${props.theme.color_A1_1};
        transition: 0.2s;
      }
    }
  `};
`
//-------------------- Resume --------------------//
export const Photo = styled.div`
  background: ${(props) =>
    props.img && `url(${props.img}) center center no-repeat`};
  background-size: cover;
  width: 100%;
  max-height: 80vh;
  border-radius: 3vmin;
  box-shadow: 0 0 6vmin rgba(0, 0, 0, 0.25);
`
export const ResumeContainer = styled(FlexCenterColumn)`
  overflow: hidden;
  height: 100vh;
`
export const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 500px);
  height: 80vh;
  width: 100%;
  padding: 0 48px;
  z-index: 1;
`
export const Link = styled.a`
  color: ${(props) => props.theme.color_T1};
`
export const IntroWrapper = styled.div`
  position: absolute;

  color: ${(props) => props.theme.color_T1};
`
export const Intro = ({ text }) => (
  <IntroWrapper>
    <F32>{text}</F32>
  </IntroWrapper>
)

export const ContactContainer = styled(FlexEndWrapper)`
  height: 100%;
`
const ContactWrapper = styled.div`
  ${FlexSpaceBetween(64)}
  ${Link} {
    display: none;
  }
  ${IconWrapper32} {
    top: calc(50% - 10vmin);
    left: calc(50% - 10vmin);
    width: 56px;
    height: 56px;
    margin-top: 8px;
    margin-right: 16px;
    border-radius: 2vmin;
    box-shadow: 0 0 6vmin var(--shadow);
    animation: boxMove 4s linear infinite;
    color: ${(props) => props.theme.color_T1};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      ${IconWrapper32} {
        background-color: ${(props) => props.theme.color_T1_hover};
      }
      ${Link} {
        opacity: 1;
        display: block;
      }
    }
  }
  &:active {
    color: ${(props) => props.theme.color_T1_active};
  }
`
export const Contact = ({ text, icon, href }) => (
  <ContactWrapper>
    <div />
    <Link href={href}>
      <F18>{text}</F18>
    </Link>
    <IconWrapper32>{icon}</IconWrapper32>
  </ContactWrapper>
)
const AnimationBackgroundWrapper = styled.div`
  overflow: hidden;
`
export const AnimationBackground = () => (
  <AnimationBackgroundWrapper>
    <div class="box box10"></div>
    <div class="box box9"></div>
    <div class="box box8"></div>
    <div class="box box7"></div>
    <div class="box box6"></div>
    <div class="box box5"></div>
    <div class="box box4"></div>
    <div class="box box3"></div>
    <div class="box box2"></div>
    <div class="box box1"></div>
    <div class="box box0"></div>
  </AnimationBackgroundWrapper>
)

//-------------------- Timeline --------------------//
export const VerticalElementContainer = styled.div`
  width: 100%;
  height: 100%;
  .vertical-timeline-element-content {
    box-shadow: 0 0 6vmin rgba(0, 0, 0, 0.25);
    background: transparent;
  }
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${(props) => props.theme.color_T1};
  }
  .vertical-timeline-element-icon {
    background: ${(props) => props.theme.color_P1};
    color: ${(props) => props.theme.color_T1};
  }
`
export const TimelineContentWrapoer = styled.div`
  width: 100%;
  height: 100%;
  ${F18}, ${F14} {
    color: ${(props) => props.theme.color_T1};
  }
`
export const TimelineContent = ({ company, position }) => (
  <TimelineContentWrapoer>
    <F18 bold>{company}</F18>
    <F14>{position}</F14>
  </TimelineContentWrapoer>
)

//-------------------- Radio Button --------------------//
export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: translate3d(0, 50%, 0);
  background: ${(props) => props.theme.color_P4_2};
  border: 1px solid ${(props) => props.theme.color_P3_OP64};
`
export const RadioButton = styled.input`
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      ~ ${RadioButtonLabel} {
        border: 2px solid ${(props) => props.theme.color_A1_1};
      }
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: ${(props) => props.theme.color_P4_2};
    border: 2px solid ${(props) => props.theme.color_A1_1};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin: 2px;
      background: ${(props) => props.theme.color_A1_1};
    }
  }
`
export const Counter = ({ counter }) => (
  <CounterWrapper data-txt-count>{counter}</CounterWrapper>
)
export const CounterWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 50%;
  transform: translate3d(120%, 0, 0);
  font-size: 11px;
  line-height: 13px;
  height: 14px;
  line-height: 14px;
  padding: 0 2% 0 4px;
  min-width: 14px;
  max-width: 25px;
  text-align: left;
  display: block;
  border-radius: 8px;
  letter-spacing: 0px;
  background: ${(props) => props.theme.color_A1_3};
  color: ${(props) => props.theme.color_P4_15};
`
//-------------------- Icons --------------------//
export const GenericLoadingWrapper = styled.div`
  ${(props) => props.theme.icons.generic_loading} svg {
    height: 16px;
    width: 16px;
    z-index: 2;
    animation: ${genericLoadingRotate} 1.4s linear 0s infinite;
  }
  svg circle {
    stroke: ${(props) =>
      props.white ? props.theme.color_P4_10 : props.theme.color_A3};
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: 6px;
    transform-origin: center center;
    animation: ${genericLoading} 1.4s ease-in-out 0s infinite;
  }
  ${(props) =>
    props.width24 &&
    `
    svg{
      width: 24px;
      height: 24px;
    }
  `};
  ${(props) =>
    props.obtPanel &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    height: 216px;
    svg{
      width: 24px;
      height: 24px;
    }
  `};
  ${(props) =>
    props.betslip &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    height: 144px;
    svg{
      width: 32px;
      height: 32px;
    }
  `};
`
export const GenericLoading = ({ betslip, width24, white, obtPanel }) => (
  <GenericLoadingWrapper
    betslip={betslip}
    white={white}
    width24={width24}
    obtPanel={obtPanel}
  >
    <Icons.generic_loading />
  </GenericLoadingWrapper>
)
export const BaseballInning = styled(FlexCenter)`
  g {
    fill: ${(props) => props.theme.color_A1_1};
  }
`
export const BaseballBase = styled(FlexCenter)``
export const CloseButtonWrapper = styled(AbsoluteRightCenter)`
  z-index: 2;
  g {
    fill: ${(props) =>
      props.infoPopUp
        ? props.theme.color_P3_OP40
        : props.betSlip
        ? props.theme.color_P3_22_OP40
        : props.theme.color_P3_OP64};
  }
  background: ${(props) => props.theme.color_P4_2};
  ${IconWrapper24} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color_T1_hover};
      }
    }
    &:active {
      width: 32px;
      height: 32px;
      margin: 8px;
      color: ${(props) => props.theme.color_T1_active};
      background: ${(props) => props.theme.color_P1_active};
    }
  }
`
export const CloseButton = ({ infoPopUp, betSlip, onClick }) => (
  <CloseButtonWrapper
    infoPopUp={infoPopUp}
    betSlip={betSlip}
    onClick={onClick}
    data-btn-close
  >
    <IconWrapper24>
      <HiOutlineX />
    </IconWrapper24>
  </CloseButtonWrapper>
)
export const TvWrapper = styled(FlexCenter)`
  ${IconWrapper32},${IconWrapper16} {
    position: relative;
    ${AbsoluteCenter}:first-child {
      display: ${(props) => (props.play ? 'block' : 'none')};
      g {
        fill: ${(props) => props.theme.color_A3};
      }
    }
    ${AbsoluteCenter}:last-child {
      display: ${(props) => (props.play ? 'none' : 'block')};
      g {
        fill: ${(props) =>
          props.active
            ? `${props.theme.color_A3};
            `
            : props.homePageActive
            ? `${props.theme.color_P2_2};
            `
            : props.homePage
            ? props.theme.color_P4_2
            : props.contentCenter
            ? `${props.theme.color_P3_12_OP64};
            `
            : props.theme.color_P3_16_OP64};
      }
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) =>
            props.homePageActive
              ? props.theme.color_P2_2
              : props.homePage
              ? props.theme.color_P4_2
              : props.theme.color_A3};
        }
        ${AbsoluteCenter}:first-child {
          display: ${(props) =>
            props.homePageActive ? 'none' : props.homePage ? 'none' : 'block'};
        }
        ${AbsoluteCenter}:last-child {
          display: ${(props) =>
            props.homePageActive ? 'block' : props.homePage ? 'block' : 'none'};
        }
      }
    }
    &:active {
      g {
        fill: ${(props) =>
          props.homePageActive
            ? props.theme.color_P2_2
            : props.homePage
            ? props.theme.color_P4_2
            : props.theme.color_A3};
      }
      background: ${(props) =>
        props.homePage || props.homePageActive
          ? props.theme.color_P3_OP72
          : props.theme.color_P3_1_OP8_1};
    }
  }
  ${(props) =>
    (props.homePage || props.homePageActive) &&
    `
    ${IconWrapper32} {
      background: ${props.theme.color_P3_OP72_1};
      border-radius: 50%;
      margin: 8px;
      position: absolute;
      top:0;
      left:0;
      z-index: 1;
    }
  `};
`
export const StatisticsWrapper = styled(FlexCenter)`
  g {
    fill: ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_16_OP64};
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_A3};
        }
      }
    }
    &:active {
      g {
        fill: ${(props) => props.theme.color_A3};
      }
      background: ${(props) => props.theme.color_P3_1_OP8_1};
    }
  }
`

export const Statistics = ({ onClick, active, esports }) => (
  <StatisticsWrapper onClick={onClick} active={active}>
    <IconWrapper32>
      {esports ? <Icons.Scoreboard_stats /> : <Icons.Statistics_event />}
    </IconWrapper32>
  </StatisticsWrapper>
)
export const TvButton = ({
  active,
  onClick,
  play,
  homePage,
  homePageActive,
}) => (
  <TvWrapper
    active={active || play}
    play={active || play}
    onClick={onClick}
    homePage={homePage}
    homePageActive={homePageActive}
  >
    <IconWrapper32>
      <IconWrapper16>
        <AbsoluteCenter>
          <Icons.Cc_tv_active />
        </AbsoluteCenter>
        <AbsoluteCenter>
          <Icons.Tv_button_mop />
        </AbsoluteCenter>
      </IconWrapper16>
    </IconWrapper32>
  </TvWrapper>
)
export const InfoIconWrapper = styled(FlexCenter)`
  position: relative;
  g {
    fill: ${(props) =>
      props.eventHeader ? props.theme.color_A6_5 : props.theme.color_A6_2};
  }
  &:after {
    content: '';
    z-index: 2;
    position: absolute;
    width: 0;
    height: 0;
    margin-left: 5px;
    top: 39px;
    left: 0px;
    box-sizing: border-box;
    border: 6px solid ${(props) => props.theme.color_P3_OP16};
    border-color: ${(props) => props.theme.color_P4_2}
      ${(props) => props.theme.color_P4_2} transparent transparent;
    transform-origin: 0 10px;
    transform: rotate(-45deg);
    box-shadow: 2px -2px 5px 0px ${(props) => props.theme.color_P3_OP16};
    display: ${(props) =>
      props.activeArrowDown || props.activeArrowUp ? 'block' : 'none'};
    ${(props) =>
      props.activeArrowUp &&
      `
      top: -5px;
      left: 25px;
      border-color: transparent transparent ${props.theme.color_P4_2} ${props.theme.color_P4_2};
      box-shadow: -3px 3px 5px 0px rgba(0,0,0,0.16);
    `};
  }
  ${IconWrapper12} {
    g {
      fill: ${(props) => props.active && props.theme.color_A6_2_Lmin8};
    }
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) =>
            props.eventHeader
              ? props.theme.color_A6_5_Lplus4
              : props.theme.color_A6_2_Lplus4};
        }
      }
    }
    &:active {
      g {
        fill: ${(props) =>
          props.eventHeader
            ? props.theme.color_A6_5_Lplus4
            : props.theme.color_A6_2_Lplus4};
      }
      background: ${(props) => props.theme.color_A11_Lmin8};
    }
  }
`
export const InfoPopUpContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 12px;
  z-index: 2;
`
export const InfoPopUpWrapper = styled(RelativeWrapper)`
  width: 257px;
  height: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.color_P4_2};
  z-index: 1;
  ${FlexLeft} {
    height: 32px;
    position: relative;
    padding-left: 16px;
    color: ${(props) => props.theme.color_P3_18};

    ${CloseButtonWrapper} {
      height: 32px;
      width: 32px;
      z-index: 1;
    }
    ${IconWrapper48} {
      width: 32px;
      height: 32px;
      padding: 10px;
      &:active {
        margin: 0px;
        background: ${(props) => props.theme.color_P3_1_OP8_1};
      }
      @media (hover: hover) {
        &:hover {
          g {
            fill: ${(props) => props.theme.color_P3_OP100};
          }
        }
      }
    }
  }
  ${FlexColumn} {
    color: ${(props) => props.theme.color_P3_OP64};
    padding: 0px 16px 10px 16px;
    max-height: 150px;
    overflow-y: auto;
    ${F12} {
      line-height: ${(props) => (props.contentText ? '12px' : '25px')};
    }
  }
  &:after {
    content: '';
    width: 257px;
    height: 100%;
    box-shadow: 0px 2px 5px 2px ${(props) => props.theme.color_P3_OP16};
    position: absolute;
    top: 0;
    pointer-events: none;
  }
`
export const InfoPopUp = ({
  closeInfoPopUp,
  titleText,
  contentText,
  extraTimeText,
  penaltyText,
  fullTimeText,
}) => (
  <InfoPopUpContainer>
    <InfoPopUpWrapper contentText={contentText}>
      <RelativeWrapper>
        <FlexLeft>
          <F12 bold={1} uppercase={1}>
            {titleText}
          </F12>
          <CloseButton onClick={closeInfoPopUp} infoPopUp={1} />
        </FlexLeft>
        <FlexColumn>
          {extraTimeText && <F12>{extraTimeText}</F12>}
          {penaltyText && <F12>{penaltyText}</F12>}
          {fullTimeText && <F12>{fullTimeText}</F12>}
          {contentText && <F12>{contentText}</F12>}
        </FlexColumn>
      </RelativeWrapper>
    </InfoPopUpWrapper>
  </InfoPopUpContainer>
)
export const Information12 = ({ onClick, active }) => (
  <InfoIconWrapper onClick={onClick} activeArrowDown={active} active={active}>
    <IconWrapper12>
      <Icons.Information />
    </IconWrapper12>
  </InfoIconWrapper>
)
export const Information16 = ({
  onClick,
  activeArrowUp,
  activeArrowDown,
  eventHeader,
}) => (
  <InfoIconWrapper
    onClick={onClick}
    activeArrowDown={activeArrowDown}
    activeArrowUp={activeArrowUp}
    eventHeader={eventHeader}
  >
    <IconWrapper32>
      <Icons.Information />
    </IconWrapper32>
  </InfoIconWrapper>
)

export const NeutralWrapper = styled(FlexCenter)`
  g {
    fill: ${(props) => props.theme.color_A6_3};
  }
  ${RelativeWrapper}:first-child {
    display: ${(props) => (props.theme.isCN ? 'block' : 'none')};
  }
  ${RelativeWrapper}:last-child {
    display: ${(props) => (props.theme.isCN ? 'none ' : 'block')};
  }
`
export const Neutral = () => (
  <NeutralWrapper>
    <IconWrapper12>
      <RelativeWrapper>
        <Icons.Neutral_cn />
      </RelativeWrapper>
      <RelativeWrapper>
        <Icons.Neutral />
      </RelativeWrapper>
    </IconWrapper12>
  </NeutralWrapper>
)
export const PriceBoostIconWrapper = styled(FlexCenter)`
  g {
    fill: ${(props) => props.theme.color_A1};
  }
`
export const PriceBoost12 = () => (
  <PriceBoostIconWrapper data-ico-priceboosts>
    <IconWrapper12>
      <Icons.Price_boost />
    </IconWrapper12>
  </PriceBoostIconWrapper>
)
export const PriceBoost16 = () => (
  <PriceBoostIconWrapper data-ico-priceboosts>
    <IconWrapper16>
      <Icons.Price_boost />
    </IconWrapper16>
  </PriceBoostIconWrapper>
)
export const In_play_indicatorWrapper = styled(FlexCenter)`
  g {
    fill: ${(props) => props.theme.color_P3_16_OP64};
  }
`
export const In_play_indicator = () => (
  <In_play_indicatorWrapper>
    <IconWrapper12>
      <Icons.In_play_indicator />
    </IconWrapper12>
  </In_play_indicatorWrapper>
)

export const FavoriteWrapper = styled(FlexCenter)`
  g {
    fill: ${(props) =>
      props.active
        ? `${props.theme.color_A3_4};`
        : props.mopPanelActive
        ? `${props.theme.color_A3_5};`
        : props.menuPanelActive
        ? `${props.theme.color_A3};`
        : props.menuPanel
        ? `${props.theme.color_P3_16_OP64};`
        : props.marketline
        ? `${props.theme.color_P3_2_OP40};`
        : `${props.theme.color_P3_16_OP64};`};
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_A3};
        }
      }
    }
    &:active {
      g {
        fill: ${(props) => props.theme.color_A3};
      }
      background: ${(props) => props.theme.color_P3_1_OP8_1};
    }
  }
`
export const FavoriteActiveWrapper = styled.div`
  position: absolute;
  transform: ${(props) => (props.addFavorite ? `scale(1)` : `scale(2)`)};
  opacity: ${(props) => (props.addFavorite ? `1` : `0`)};
  transition: transform 0.3s ease, opacity 0.3s ease;
`
export const FavoriteNormalWrapper = styled.div`
  opacity: ${(props) => (props.addFavorite ? `0` : `1`)};
  margin-bottom: -2px;
`
export const MarketlineIndicator = styled(FlexCenter)`
  display: flex;
  padding: 8px 0;
  ${F12} {
    color: ${(props) => props.theme.color_P3_16_OP64};
  }
  g {
    fill: ${(props) => props.theme.color_P3_6_OP64};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      ${F12} {
        color: ${(props) => props.theme.color_P3_6};
      }
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const Favorite = ({
  onClick,
  active,
  marketline,
  menuPanel,
  menuPanelActive,
  mopPanelActive,
}) => {
  const [inSideFavoriteActive, setInSideFavoriteActive] = useState(false)
  const isControlByProps = !!onClick
  const toggleFunc = () => {
    if (isControlByProps) {
      onClick(!active)
    } else {
      setInSideFavoriteActive(!inSideFavoriteActive)
    }
  }
  return (
    <FavoriteWrapper
      onClick={() => toggleFunc()}
      active={isControlByProps ? active : inSideFavoriteActive}
      menuPanelActive={
        isControlByProps ? menuPanelActive : inSideFavoriteActive
      }
      mopPanelActive={isControlByProps ? mopPanelActive : inSideFavoriteActive}
      marketline={marketline}
      menuPanel={menuPanel}
    >
      <IconWrapper32>
        {isControlByProps ? (
          active || mopPanelActive || menuPanelActive ? (
            <FavoriteActiveWrapper
              addFavorite={active || mopPanelActive || menuPanelActive}
            >
              <Icons.Favorite_event_active />
            </FavoriteActiveWrapper>
          ) : (
            <FavoriteNormalWrapper
              addFavorite={active || mopPanelActive || menuPanelActive}
            >
              <Icons.Favorite_event />
            </FavoriteNormalWrapper>
          )
        ) : (
          <>
            <FavoriteActiveWrapper addFavorite={inSideFavoriteActive}>
              <Icons.Favorite_event_active />
            </FavoriteActiveWrapper>
            <FavoriteNormalWrapper addFavorite={inSideFavoriteActive}>
              <Icons.Favorite_event />
            </FavoriteNormalWrapper>
          </>
        )}
      </IconWrapper32>
    </FavoriteWrapper>
  )
}

export const CheckboxWrapper = styled(FlexCenter)`
  width: 32px;
  height: 32px;
  g {
    fill: ${(props) =>
      props.active ? props.theme.color_A1_1 : props.theme.color_P3_OP64};
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_A1_1};
        }
      }
    }
  }
`
export const Checkbox = ({ checked, onClick }) => {
  const [inSideChecked, setInSideChecked] = useState(false)
  const isControlByProps = !!onClick
  const toggleCheckboxActive = () => {
    if (isControlByProps) {
      onClick(!checked)
    } else {
      setInSideChecked(!inSideChecked)
    }
  }
  return (
    <CheckboxWrapper
      onClick={() => toggleCheckboxActive()}
      active={isControlByProps ? checked : inSideChecked}
    >
      <IconWrapper18>
        {isControlByProps ? (
          checked ? (
            <Icons.Checkbox_selected />
          ) : (
            <Icons.Checkbox />
          )
        ) : inSideChecked ? (
          <Icons.Checkbox_selected />
        ) : (
          <Icons.Checkbox />
        )}
      </IconWrapper18>
    </CheckboxWrapper>
  )
}

const BetMultiplesInfoButtonWrapper = styled(CloseButtonWrapper)`
  g {
    fill: ${(props) => props.theme.color_P3_22_OP40};
  }
`

export const BetMultiplesInfoButton = ({ onClick }) => (
  <BetMultiplesInfoButtonWrapper onClick={onClick}>
    <IconWrapper48>
      <Icons.Bet_multiples_info />
    </IconWrapper48>
  </BetMultiplesInfoButtonWrapper>
)

export const CompetitionFilterIconWrapper = styled(FavoriteWrapper)`
  position: relative;
  ${IconWrapper32} {
    g {
      fill: ${(props) =>
        props.active
          ? `${props.theme.color_A3_3};`
          : `${props.theme.color_P3_11_OP64};`};
    }
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_A3_3};
        }
      }
    }
    &:active {
      g {
        fill: ${(props) => props.theme.color_A3_3};
      }
    }
  }
  &:before {
    content: ${(props) => props.active && `''`};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${(props) => props.theme.color_A5_4};

    position: absolute;
    top: 4px;
    right: 50%;
    transform: translate3d(12px, 0, 0);
  }
`

export const CompetitionFilterIcon = ({ active }) => (
  <CompetitionFilterIconWrapper active={active}>
    <IconWrapper32>
      {active ? (
        <Icons.Competition_filter_active />
      ) : (
        <Icons.Competition_filter />
      )}
    </IconWrapper32>
  </CompetitionFilterIconWrapper>
)
export const DateFilterIconWrapper = styled(FavoriteWrapper)`
  ${IconWrapper32} {
    g {
      fill: ${(props) =>
        props.active ? props.theme.color_A3_3 : props.theme.color_P3_1_OP64};
    }
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_A3_3};
        }
      }
    }
    &:active {
      cursor: pointer;
      g {
        fill: ${(props) => props.theme.color_A3_3};
      }
    }
  }
`
export const DateFilterIcon = ({ toggleDateFilter, dateFilterActive }) => {
  return (
    <DateFilterIconWrapper onClick={toggleDateFilter} active={dateFilterActive}>
      <IconWrapper32>
        {dateFilterActive ? (
          <Icons.Date_filter_active />
        ) : (
          <Icons.Date_filter />
        )}
      </IconWrapper32>
    </DateFilterIconWrapper>
  )
}
export const BetSettingsIconWrapper = styled(DateFilterIconWrapper)`
  ${IconWrapper32} {
    g {
      fill: ${(props) => props.theme.color_P3_1_OP64};
    }
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_A3_3};
        }
      }
    }
    &:active {
      cursor: pointer;
      g {
        fill: ${(props) => props.theme.color_A3_3};
      }
    }
  }
`
export const BetSettingsIcon = ({ toggleSettings }) => {
  return (
    <BetSettingsIconWrapper onClick={toggleSettings} data-btn-settings>
      <IconWrapper32>
        <Icons.Bet_settings />
      </IconWrapper32>
    </BetSettingsIconWrapper>
  )
}

export const BackButtonWrapper = styled(IconWrapper48)`
  g {
    fill: ${(props) => props.theme.color_P3_1_OP64};
  }
  ${IconWrapper32} {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) => props.theme.color_P3_1};
        }
      }
    }
    &:active {
      g {
        fill: ${(props) => props.theme.color_P3_1};
      }
      background: ${(props) => props.theme.color_A11_Lmin8};
    }
  }
`
export const BackButton = ({ goBack }) => (
  <BackButtonWrapper onClick={goBack}>
    <IconWrapper32>
      <Icons.Back />
    </IconWrapper32>
  </BackButtonWrapper>
)
export const ChevronUpDownWrapper = styled(FlexCenter)``
export const Chevron_up = () => (
  <ChevronUpDownWrapper>
    <Icons.Chevron_up />
  </ChevronUpDownWrapper>
)
export const Chevron_down = () => (
  <ChevronUpDownWrapper>
    <Icons.Chevron_down />
  </ChevronUpDownWrapper>
)
export const ChevronUpDownContainer = styled.div`
  ${(props) => (props.show ? 'display: block ' : 'display: none')};
`
export const Chevron = ({ chevronUp, show }) => {
  return (
    <ChevronUpDownContainer show={show}>
      {chevronUp ? <Chevron_up /> : <Chevron_down />}
    </ChevronUpDownContainer>
  )
}
const ChevronLeftRightWrapper = styled(FlexCenter)`
  width: 32px;
  height: 40px;
  margin: 0px 4px;
  g {
    fill: ${(props) =>
      props.disabled ? props.theme.color_P3_OP24 : props.theme.color_P3_OP56};
  }
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) => (props.disabled ? 'unset' : 'pointer')};
      g {
        fill: ${(props) =>
          props.disabled ? props.theme.color_P3_OP24 : props.theme.color_P3_1};
      }
    }
  }
  &:active {
    background: ${(props) =>
      props.disabled ? 'transparent' : props.theme.color_P3_1_OP8_1};
    g {
      fill: ${(props) =>
        props.disabled ? props.theme.color_P3_OP24 : props.theme.color_P3_1};
    }
  }
`
export const Chevron_doubleleft = ({ disabledDoubleleft, doubleLeft }) => (
  <ChevronLeftRightWrapper disabled={disabledDoubleleft} onClick={doubleLeft}>
    <Icons.Chevron_doubleleft />
  </ChevronLeftRightWrapper>
)
export const Chevron_left = ({ disabledLeft, left }) => (
  <ChevronLeftRightWrapper disabled={disabledLeft} onClick={left}>
    <Icons.Chevron_left />
  </ChevronLeftRightWrapper>
)
export const Chevron_right = ({ disabledRight, right }) => (
  <ChevronLeftRightWrapper disabled={disabledRight} onClick={right}>
    <Icons.Chevron_right />
  </ChevronLeftRightWrapper>
)

export const ActiveTeamWrapper = styled.div`
  g {
    fill: ${(props) => props.theme.color_A1_4};
  }
`
export const ActiveTeam = () => (
  <ActiveTeamWrapper>
    <Icons.Active_team />
  </ActiveTeamWrapper>
)
export const RedCardWrapper = styled(FlexCenter)`
  g {
    /* fill: ${(props) => props.theme.color_A5_2}; */
  }
`
export const RedCard = ({ RedCard_1, RedCard_2, RedCard_3, RedCard_4 }) => (
  <RedCardWrapper>
    {RedCard_1 ? (
      <Icons.Red_card_1 />
    ) : RedCard_2 ? (
      <Icons.Red_card_2 />
    ) : RedCard_3 ? (
      <Icons.Red_card_3 />
    ) : RedCard_4 ? (
      <Icons.Red_card_4 />
    ) : (
      <Icons.Red_card />
    )}
  </RedCardWrapper>
)
export const EsportsTeam1Active = styled(FlexCenter)`
  background: ${(props) =>
    props.esportsTeam1Color ? props.esportsTeam1Color : 'transparent'};
  width: 4px;
  height: 24px;
  margin: 0px 6px;
`
export const EsportsTeam2Active = styled(EsportsTeam1Active)`
  background: ${(props) =>
    props.esportsTeam2Color ? props.esportsTeam2Color : 'transparent'};
`

export const ParlayBlockerWrapper = styled.div`
  g {
    fill: ${(props) => props.theme.color_A7_5};
  }
  position: absolute;
  left: 0;
  top: ${(props) => props.priceBoost && `38px`};
`
export const ParlayBlocker = ({ priceBoost }) => (
  <ParlayBlockerWrapper priceBoost={priceBoost}>
    <IconWrapper16>
      <Icons.Parlay_blocker />
    </IconWrapper16>
  </ParlayBlockerWrapper>
)
export const LockBackgroundWrapper = styled.div`
  g {
    fill: ${(props) => props.theme.color_P3_22_OP4};
  }
  position: absolute;
  right: 0;
  bottom: 0;
  height: 112px;
  width: 114px;
`

export const LockBackground = () => (
  <LockBackgroundWrapper>
    <Icons.Locker_background />
  </LockBackgroundWrapper>
)
//----------- ArrowButton & Scroll -----------//

export const ArrowButtonChevronWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  g {
    fill: ${(props) =>
      props.darkBg
        ? props.theme.color_P4_1_OP64
        : props.specialEventBg
        ? props.theme.color_P4_6
        : props.theme.color_P3_OP64};
  }
  @media (hover: hover) {
    &:hover {
      g {
        fill: ${(props) =>
          props.darkBg
            ? props.theme.color_P4_1
            : props.specialEventBg
            ? props.theme.color_P4_6
            : props.theme.color_P3_OP100};
      }
    }
  }
  &:active {
    g {
      fill: ${(props) =>
        props.darkBg
          ? props.theme.color_P4_1
          : props.specialEventBg
          ? props.theme.color_P4_6
          : props.theme.color_P3_OP100};
    }
  }
`
export const ArrowButtonWrapper = styled(RelativeWrapper)`
  z-index: 1;
  width: 24px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  box-shadow: 0px 0px 2px 0px ${(props) => props.theme.color_P3_OP40};
  transition: all 0.3s ease 0s;
  background: ${(props) =>
    props.darkBg
      ? props.theme.color_P1_Lplus4
      : props.specialEventBg
      ? props.theme.color_S1_2_Lplus4
      : props.theme.color_A13};
  @media (hover: hover) {
    &:hover,
    &:hover:after {
      transition: all 0.3s ease 0s;
      width: 40px;
      cursor: pointer;
    }
    &:hover {
      background: ${(props) =>
        props.darkBg
          ? props.theme.color_P1_Lplus4
          : props.specialEventBg
          ? props.theme.color_S1_2_Lplus4
          : props.theme.color_A13};
    }
  }
  &:active {
    background: ${(props) =>
      props.darkBg
        ? props.theme.color_P1_Lmin8
        : props.specialEventBg
        ? props.theme.color_S1_2_Lmin8
        : props.theme.color_A13_Lmin8};
  }
  border-color: ${(props) => props.theme.color_P3_OP40};
  ${(props) => props.hidden && `display: none;`}
`

export const ArrowButtonLeftWrapper = styled(ArrowButtonWrapper)`
  transition: left 0.3s;
  left: ${(props) => (props.arrowLeft ? props.arrowLeft : '0px')};
  top: ${(props) => (props.showDropdownList ? '36px' : '50%')};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  &:after {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  ${ArrowButtonChevronWrapper} {
    right: 3px;
  }
`
export const ArrowButtonRightWrapper = styled(ArrowButtonWrapper)`
  transition: right 0.3s;
  right: ${(props) => (props.arrowRight ? props.arrowRight : '0px')};
  top: ${(props) => (props.showDropdownList ? '36px' : '50%')};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  &:after {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  ${ArrowButtonChevronWrapper} {
    left: 3px;
  }
`
export const ArrowButtonLeft = ({
  darkBg,
  specialEventBg,
  arrowLeft,
  onClick,
  hidden,
  showDropdownList,
}) => (
  <ArrowButtonLeftWrapper
    hidden={hidden}
    darkBg={darkBg}
    specialEventBg={specialEventBg}
    arrowLeft={arrowLeft}
    onClick={onClick}
    showDropdownList={showDropdownList}
  >
    <ArrowButtonChevronWrapper darkBg={darkBg} specialEventBg={specialEventBg}>
      <Icons.Chevron_left />
    </ArrowButtonChevronWrapper>
  </ArrowButtonLeftWrapper>
)

//rightclick

export const ArrowButtonRight = ({
  darkBg,
  specialEventBg,
  arrowRight,
  onClick,
  hidden,
  showDropdownList,
}) => (
  <ArrowButtonRightWrapper
    hidden={hidden}
    darkBg={darkBg}
    specialEventBg={specialEventBg}
    arrowRight={arrowRight}
    onClick={onClick}
    showDropdownList={showDropdownList}
  >
    <ArrowButtonChevronWrapper darkBg={darkBg} specialEventBg={specialEventBg}>
      <Icons.Chevron_right />
    </ArrowButtonChevronWrapper>
  </ArrowButtonRightWrapper>
)

//-------------------- BrandHeader --------------------//

export const BrandHeader = ({ brandHeaderText }) => (
  <BrandWrapper>
    <F18>{brandHeaderText}</F18>
  </BrandWrapper>
)

export const BrandWrapper = styled(RelativeWrapper)`
  width: 100%;
  background: ${(props) => props.theme.color_P1_Lplus4};
  z-index: 10;
  display: sticky;
`
//-------------------- PageHeader --------------------//

export const PageHeaderTitleWrapper = styled.div`
  color: ${(props) => props.theme.color_P3_1};
  ${FlexSpaceBetween(48)};
  ${F13}, ${F14} {
    ${Truncate(1)};
    color: ${(props) => props.theme.color_P3_1_OP56};
    line-height: 16px;
  }
  ${F18} {
    ${(props) => (props.allMarketPage ? `${Truncate(2)}` : `${Truncate(1)}`)};
    color: ${(props) => props.theme.color_P3_1};

    margin: 4px 0px;
  }
  text-align: center;
  ${IconWrapper48} {
    min-width: 48px;
  }
  ${InfoIconWrapper} {
    g {
      fill: ${(props) => props.theme.color_A6_5};
    }
    ${IconWrapper32} {
      @media (hover: hover) {
        &:hover {
          g {
            fill: ${(props) => props.theme.color_A6_5_Lplus4};
          }
        }
      }
      &:active {
        g {
          fill: ${(props) => props.theme.color_A6_5_Lplus4};
        }
      }
    }
  }
`
export const PageHeaderWrapper = styled(FlexCenter)`
  width: 100%;
  height: 40px;
  background: ${(props) => (props.img ? '' : props.theme.color_S9)};
`
export const PageHeaderTitle = ({
  eventPeriod,
  competition,
  icon,
  goBack,
  toggleCompetitionPage,
  toggleDateFilter,
  toggleInfo,
  allMarketPage,
}) => (
  <PageHeaderTitleWrapper allMarketPage={allMarketPage}>
    {goBack ? <BackButton goBack={goBack} data-btn-back /> : <IconWrapper48 />}
    <FlexCenterColumn>
      <F14 condensed={1} uppercase={1} data-txt-title1={`${eventPeriod}`}>
        {eventPeriod}
      </F14>
      <F18
        bold={1}
        condensed={1}
        uppercase={1}
        data-txt-title2={`${competition}`}
      >
        {competition}
      </F18>
    </FlexCenterColumn>
    <IconWrapper48
      onClick={toggleCompetitionPage || toggleDateFilter || toggleInfo}
    >
      <IconWrapper16>{icon}</IconWrapper16>
    </IconWrapper48>
  </PageHeaderTitleWrapper>
)
export const PageHeaderTabContainer = styled(FlexScrollWrapper)`
  margin: 16px 8px;
`
export const PageHeaderTabWrapper = styled.div`
  white-space: nowrap;
  height: 100%;
  padding: 0px 8px;
  ${FlexCenter} {
    height: 100%;
    ${(props) =>
      props.active
        ? `border-bottom: 2px solid ${props.theme.color_A3_3};
          color:${props.theme.color_A3_3};
        `
        : `border-bottom: 2px solid transparent;
          color:${props.theme.color_P3_1_OP64};`};
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color_A3_3};
      }
    }
  }
  &:active {
    color: ${(props) => props.theme.color_A3_3};
    background: ${(props) => props.theme.color_P3_1_OP8_1};
    padding: 0 8px;
  }
`
export const PageHeaderTab = ({ competition, active, switchTab }) => (
  <PageHeaderTabWrapper
    active={active}
    onClick={switchTab}
    data-btn={competition}
  >
    <FlexCenter>
      <F14 uppercase={1}>{competition}</F14>
    </FlexCenter>
  </PageHeaderTabWrapper>
)
//-------------------- PriceBoostDate  --------------------//
const PriceBoostDateWrapper = styled(FlexCenter)`
  width: 100%;
  height: 40px;
  font-stretch: ${(props) => (props.theme.isVN ? 'normal' : 'condensed')};
  position: relative;
  user-select: none;
  ${Flex} {
    background: ${(props) => props.theme.color_P4_28};
    z-index: 1;
    padding: 0px 16px;
  }
  ${F16} {
    color: ${(props) => props.theme.color_P3_1};
  }
`
export const PriceBoostDate = ({ date }) => (
  <PriceBoostDateWrapper>
    <Flex>
      <F16 bold={1} uppercase={1}>
        {date}
      </F16>
    </Flex>
    <Line />
  </PriceBoostDateWrapper>
)
//-------------------- CompetitionTab / Competition --------------------//
const CompetitionTabWrapper = styled(FlexCenter)`
  width: 100%;
  height: 56px;
  font-stretch: ${(props) => (props.theme.isVN ? 'normal' : 'condensed')};
  margin: ${(props) =>
    props.hideTopGap ? '0px 0px 16px 0px' : '16px 0 16px 0'};
  position: relative;
  user-select: none;
  ${Flex} {
    background: ${(props) => props.theme.color_P4_28};
    z-index: 1;
    padding: 0px 8px;
  }
`
const CompetitionTabText = styled(FlexCenter)`
  padding: 12px 8px;
  color: ${(props) =>
    props.active ? props.theme.color_P3_4 : props.theme.color_P3_OP56};
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) => (props.tab ? `unset` : `pointer`)};
      color: ${(props) => props.theme.color_P3_2};
    }
  }
  &:active {
    background: ${(props) =>
      props.tab ? `transparent` : props.theme.color_P3_1_OP8_1};
  }
`
const Line = styled.div`
  border-top: 1px solid ${(props) => props.theme.color_P3_OP16};
  width: 100%;
  position: absolute;
  transform: translate3d(0, -50%, 0);
  left: 0;
`
export const CompetitionTab = ({
  tab,
  tab1Text,
  switchTab1,
  tab2Text,
  switchTab2,
  tab1Active,
  tab2Active,
  hideTopGap,
}) => (
  <CompetitionTabWrapper hideTopGap={hideTopGap}>
    <Flex>
      <CompetitionTabText
        active={tab1Active || tab}
        tab={tab}
        onClick={switchTab1}
      >
        {tab && (
          <F20 bold={1} condensed={1} uppercase={1}>
            {tab}
          </F20>
        )}
        {tab1Text && (
          <F20 bold={1} condensed={1} uppercase={1}>
            {tab1Text}
          </F20>
        )}
      </CompetitionTabText>
      {tab2Text && (
        <CompetitionTabText active={tab2Active} onClick={switchTab2}>
          <F20 bold={1} condensed={1} uppercase={1}>
            {tab2Text}
          </F20>
        </CompetitionTabText>
      )}
    </Flex>
    <Line />
  </CompetitionTabWrapper>
)
const CompetitionWrapper = styled.div`
  position: relative;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      width: 100%;
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  ${AbsoluteLeftCenter} {
    margin-left: 19px;
  }
  ${AbsoluteRightCenter} {
    margin-right: 8px;
  }
`
const CompetitionName = styled.div`
  padding: 0px 16px;
  width: 100%;
  ${FlexSpaceBetween(56)};
  ${F14}:first-child {
    color: ${(props) => props.theme.color_P3_OP72};
    ${(props) => props.checkbox && `margin-left: 36px;`};
    ${Truncate(2)}
    padding-right: 16px;
    line-height: 1.9rem;
  }
  ${F14}:last-child {
    width: 25px;
    padding-left: 8px;
    border-left: 1px solid ${(props) => props.theme.color_P3_OP16};
    color: ${(props) => props.theme.color_P3_OP72};
    ${(props) => props.favorite && `margin-right: 40px;`};
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const Competition = ({
  competitionName,
  match,
  favorite,
  checkbox,
  clickHandler,
  showSubmit,
  addFavorite,
}) => (
  <CompetitionWrapper>
    <CompetitionName
      favorite={favorite}
      checkbox={checkbox}
      onClick={clickHandler}
    >
      <F14>{competitionName}</F14>
      <F14 bold={1}>{match}</F14>
    </CompetitionName>
    <AbsoluteLeftCenter onClick={showSubmit}>{checkbox}</AbsoluteLeftCenter>
    <AbsoluteRightCenter onClick={addFavorite}>{favorite}</AbsoluteRightCenter>
  </CompetitionWrapper>
)

//-------------------- Tooltip --------------------//
const TooltipFixedContainer = styled.div`
  box-sizing: content-box;
  z-index: 1;
  position: fixed;
  pointer-events: none;
  bottom: 16px;
  width: 100%;
  left: 0;
  display: grid;
  grid-template-columns: 64px minmax(640px, 1fr) 33%;
  ${media.desktopMedium`
    ${(props) =>
      props.homePage
        ? `grid-template-columns: 0px minmax(640px, 1fr) minmax(342px, 426px);
          ${TooltipContainer}{
            grid-column-start: 1;
            grid-column-end: 3;
          };
        `
        : 'grid-template-columns: 0 minmax(640px, 1fr) 33%'};
  `}
  ${media.desktop`
    bottom: 64px;
    grid-template-columns: 0 100% 0;
  `}
  @media (max-width: 812px) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
`
const TooltipContainer = styled(FlexStickyBottom)`
  pointer-events: auto;
  z-index: 2;
  width: 100%;
  pointer-events: auto;
  padding: 0 16px;
  ${media.desktop`
    bottom: ${(props) => (props.selected ? '72px' : '56px')};
    padding: 0 8px;
  `}
`
const TooltipWrapper = styled(FlexCenter)`
  background: ${(props) => props.theme.color_A6_1};
  color: ${(props) => props.theme.color_P4_5};
  padding: 8px 16px;
  min-height: 48px;
  height: auto;
  max-width: 640px;
  margin: 0px auto;
  text-align: center;
  ${(props) =>
    props.submit && `justify-content: space-between;text-align: left;`};
  ${IconWrapper24} {
    g {
      fill: ${(props) => props.theme.color_P4_5};
    }
    margin-right: 16px;
  }
`
const TooltipSubmitButton = styled(FlexCenter)`
  min-width: 56px;
  width: 85px;
  height: 32px;
  cursor: pointer;
  user-select: none;
  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.color_A6_1_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_A6_1_Lmin8};
  }
`
export const Tooltip = ({
  text,
  submit,
  submitText,
  selected,
  freeBet,
  homePage,
}) => (
  <TooltipFixedContainer style={{ zIndex: '5' }} homePage={homePage}>
    <div />
    <TooltipContainer selected={selected} data-crt-toast>
      <TooltipWrapper submit={submitText || freeBet}>
        {freeBet && (
          <IconWrapper24>
            <Icons.Freebets />
          </IconWrapper24>
        )}
        <F14>{text}</F14>
        {submitText && (
          <TooltipSubmitButton onClick={submit} data-btn-toast={submitText}>
            <F14 uppercase={1}>{submitText}</F14>
          </TooltipSubmitButton>
        )}
      </TooltipWrapper>
    </TooltipContainer>
    <div />
  </TooltipFixedContainer>
)
//-------------------- Matches Submit Button --------------------//
const MatchesSubmitFixedContainer = styled(TooltipFixedContainer)``
const MatchesSubmitContainer = styled(TooltipContainer)``
const MatchesSubmitWrapper = styled(TooltipWrapper)`
  background: ${(props) => props.theme.color_A1_2};
  color: ${(props) => props.theme.color_P4_10};
  margin: 0 auto;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_A1_2_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_A1_2_Lmin8};
  }
`
export const MatchesSubmit = ({ submitText, submit }) => (
  <MatchesSubmitFixedContainer>
    <div />
    <MatchesSubmitContainer onClick={submit}>
      <MatchesSubmitWrapper>
        <F14 uppercase={1}>{submitText}</F14>
      </MatchesSubmitWrapper>
    </MatchesSubmitContainer>
    <div />
  </MatchesSubmitFixedContainer>
)

//-------------------- Panel Header --------------------//
const PanelHeaderClickableButtonWrapper = styled(RelativeWrapper)`
  g {
    fill: ${(props) =>
      props.betDetail ? props.theme.color_P3_OP40 : props.theme.color_P4_1};
  }
  ${IconWrapper48} {
    g {
      fill: ${(props) =>
        props.betDetail
          ? props.theme.color_P3_OP40
          : props.theme.color_P4_1_OP64};
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        g {
          fill: ${(props) =>
            props.betDetail
              ? props.theme.color_P3_OP100
              : props.theme.color_P4_1};
        }
      }
    }
    &:active {
      width: ${(props) => (props.betSlip ? '48px' : '32px')};
      height: ${(props) => (props.betSlip ? '48px' : '32px')};
      margin: ${(props) => (props.betSlip ? '0px' : '8px')};
      g {
        fill: ${(props) =>
          props.betDetail
            ? props.theme.color_P3_OP100
            : props.theme.color_P4_1};
      }
      background: ${(props) =>
        props.betDetail
          ? props.theme.color_P3_1_OP8_1
          : props.theme.color_P1_Lmin8};
    }
  }
`
const PanelHeaderIconWrapper = styled(RelativeWrapper)`
  ${IconWrapper48} {
    g {
      fill: ${(props) => props.theme.color_P4_1};
    }
  }
`
const RemoveAllText = styled(AbsoluteCenter)`
  padding-right: 48px;
  color: ${(props) => props.theme.color_P4_27};
  opacity: ${(props) => (props.showRemoveAll ? `1` : `0`)};
  transition: opacity 0.15s;
  transition-delay: ${(props) => (props.showRemoveAll ? `0.1s` : `0s`)};
  z-index: 2;
`
const RemoveAllWrapper = styled(FlexCenter)`
  height: 100%;
  width: ${(props) => (props.showRemoveAll ? '100%' : '0%')};
  transition: width 0.3s ease;
  position: absolute;
  right: 48px;
  white-space: nowrap;
  background: ${(props) => props.theme.color_A7_3};

  justify-content: center;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_A7_3_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_A7_3_Lmin8};
  }
`
export const PanelHeaderWrapper = styled.div`
  position: relative;
  ${FlexSpaceBetween(48)};
  background: ${(props) =>
    props.betDetail ? 'transparent' : props.theme.color_P1};
  color: ${(props) => props.theme.color_T1};
  box-shadow: -3px ​4px 8px 1px ${(props) => props.theme.color_Shadow};
  ${F12} {
    color: ${(props) => props.theme.color_A8_1};
  }
  ${FlexLeft} {
    height: 100%;
    width: 100%;
    padding-left: ${(props) => (props.betReceipt || props.betDetail) && '16px'};
    ${F18} {
      padding-left: 16px;
    }
  }
  ${(props) =>
    props.withLeftIcon && `${FlexLeft} > ${F18} {padding-left: 0px;}`};
`
const PanelHeaderSeparator = styled.span`
  font-size: 16px;
  height: 16px;
  padding-left: 8px;
  margin-left: 8px;
  border-left: 1px solid ${(props) => props.theme.color_P4_1_OP24};
`

export const PanelHeader = ({
  icon,
  text,
  goBack,
  debug,
  closePanel,
  toggleBetSlipContent,
  showRemoveAll,
  removeAll,
  removeAllText,
  toggleShowRemoveAll,
  cancelRemoveAll,
  betSlip,
  betSlipPopUp,
  betReceipt,
  betDetail,
  amount,
  count,
  currency,
  chevronUp,
  wlbRightPanel,
  hideAmount,
  toggleHideAmount,
}) => (
  <PanelHeaderWrapper
    withLeftIcon={icon || goBack || toggleBetSlipContent}
    removeAll={removeAll}
    betSlip={betSlip}
    betSlipPopUp={betSlipPopUp}
    betReceipt={betReceipt}
    betDetail={betDetail}
    wlbRightPanel={wlbRightPanel}
  >
    <FlexLeft
      onClick={removeAll || toggleBetSlipContent || debug || toggleHideAmount}
    >
      {(goBack || toggleBetSlipContent) && (
        <PanelHeaderClickableButtonWrapper
          onClick={goBack || toggleBetSlipContent}
          betSlip={toggleBetSlipContent || removeAll || betDetail}
        >
          <IconWrapper48>
            {goBack && <Icons.Back />}
            {toggleBetSlipContent && <Chevron show={1} chevronUp={chevronUp} />}
          </IconWrapper48>
        </PanelHeaderClickableButtonWrapper>
      )}
      {icon && (
        <PanelHeaderIconWrapper>
          <IconWrapper48>{icon}</IconWrapper48>
        </PanelHeaderIconWrapper>
      )}
      {wlbRightPanel && (
        <PanelHeaderIconWrapper>
          <IconWrapper48>
            {hideAmount ? <Icons.Hidebalance /> : <Icons.Showbalance />}
          </IconWrapper48>
        </PanelHeaderIconWrapper>
      )}
      {betSlip ? (
        <>
          <FlexColumn>
            <Flex>
              <F16 uppercase={1}>{text}</F16>
              {count && (
                <>
                  <PanelHeaderSeparator />
                  <F16 bold={1} condensed={1} data-txt-selection-count={count}>
                    {count}
                  </F16>
                </>
              )}
            </Flex>
            {amount && (
              <F12 data-txt-balance={amount}>
                {amount || 0}&nbsp;{currency}
              </F12>
            )}
          </FlexColumn>
          <RemoveAllText showRemoveAll={showRemoveAll}>
            <F16 bold={1} uppercase={1}>
              {removeAllText}
            </F16>
          </RemoveAllText>
          <RemoveAllWrapper showRemoveAll={showRemoveAll} data-btn-remove-all />
        </>
      ) : betReceipt || wlbRightPanel ? (
        <>
          <FlexColumn>
            <Flex>
              <F16 uppercase={1}>{text}</F16>
              {count && <F16>{count}</F16>}
            </Flex>
            {amount && (
              <F12>
                {amount || 0}&nbsp;{currency}
              </F12>
            )}
          </FlexColumn>
        </>
      ) : betDetail ? (
        <FlexColumn>
          <F16 bold={1} condensed={1} uppercase={1}>
            {text}
          </F16>
        </FlexColumn>
      ) : (
        <F18 bold={1} uppercase={1} condensed={1}>
          {text}
        </F18>
      )}
    </FlexLeft>
    <PanelHeaderClickableButtonWrapper
      onClick={closePanel || toggleShowRemoveAll || cancelRemoveAll}
      betDetail={betDetail}
      betSlip={showRemoveAll || cancelRemoveAll || betSlip || betSlipPopUp}
    >
      {betSlip ? (
        <>
          {toggleShowRemoveAll &&
            (showRemoveAll ? (
              <IconWrapper48>
                <Icons.Close />
              </IconWrapper48>
            ) : (
              <IconWrapper48 data-btn-trash-can>
                <Icons.Delete />
              </IconWrapper48>
            ))}
        </>
      ) : betReceipt ? null : (
        <IconWrapper48>
          <HiOutlineX />
        </IconWrapper48>
      )}
    </PanelHeaderClickableButtonWrapper>
  </PanelHeaderWrapper>
)
export const MenuPanelHeader = ({ text, closePanel }) => (
  <>
    <PanelHeaderWrapper>
      <IconWrapper24>
        <HiMenu />
      </IconWrapper24>
      <FlexLeft>
        <F16 uppercase={1}>{text}</F16>
      </FlexLeft>
      <CloseButton onClick={closePanel} />
    </PanelHeaderWrapper>
    {/* <ShadowLine/> */}
  </>
)

export const ViewAllMultipleWrapper = styled(Flex)`
  background: ${(props) => props.theme.color_P4_25};
  color: ${(props) => props.theme.color_P3_20};
  border-top: 2px solid ${(props) => props.theme.color_A4_1};

  ${FlexLeft} {
    padding: 4px 16px 4px 8px;
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_P3_1_OP4_2};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_2};
  }
  g {
    fill: ${(props) => props.theme.color_P3_22_OP56};
  }
`
export const ViewAllMultiple = ({ toggleViewAllMultiple, chevronUp, text }) => (
  <ViewAllMultipleWrapper
    onClick={toggleViewAllMultiple}
    data-btn-view-all-multiple-options
  >
    <IconWrapper48>
      {toggleViewAllMultiple && <Chevron show={1} chevronUp={chevronUp} />}
    </IconWrapper48>
    <FlexLeft>
      <F16>{text}</F16>
    </FlexLeft>
  </ViewAllMultipleWrapper>
)
//-------------------- Menu Panel --------------------//
export const MenuPanelWrapper = styled(ContentContainer)`
  width: 320px;
  overflow: auto;
  background: ${(props) => props.theme.color_P4_2};
  margin-bottom: 48px;
  ${ContentScrollWrapper} {
    height: calc(100vh - 48px);
  }
  ${media.tablet`width:100%;`}
  ${TooltipContainer} {
    display: block;
  }
`
export const SettingsPanelWrapper = styled(MenuPanelWrapper)``
export const MenuPanelTitleWrapper = styled(FlexLeft)`
  height: 56px;
  ${F16} {
    padding: 4px 16px;
    color: ${(props) => props.theme.color_P3_4};
  }
  background: ${(props) => props.theme.color_P4_2};
`
export const MenuPanelTitle = ({ menuPanelTitle }) => (
  <MenuPanelTitleWrapper>
    <F16 bold={1} condensed={1} uppercase={1}>
      {menuPanelTitle}
    </F16>
  </MenuPanelTitleWrapper>
)
export const MenuPanelItemWrapper = styled(RelativeWrapper)`
  ${FlexSpaceBetween(56)};
  ${FlexLeft} {
    width: 100%;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.color_P3_1_OP4_1};
        ${F14} {
          color: ${(props) => props.theme.color_A3};
        }
        g {
          fill: ${(props) =>
            props.multiColorIcon ? null : props.theme.color_A3};
        }
      }
    }
    &:active {
      background: ${(props) => props.theme.color_P3_1_OP8_1};
      ${F14} {
        color: ${(props) => props.theme.color_A3};
      }
      g {
        fill: ${(props) =>
          props.multiColorIcon ? null : props.theme.color_A3};
      }
    }
  }
  ${AbsoluteLeftCenter} {
    margin-left: 12px;
  }
  ${AbsoluteRightCenter} {
    margin-right: 8px;
  }
  ${IconWrapper56} {
    position: relative;
    g {
      fill: ${(props) =>
        props.active
          ? `${props.theme.color_A3};`
          : props.priceBoost
          ? `${props.theme.color_A1};`
          : props.multiColorIcon
          ? null
          : `${props.theme.color_P3_11_OP64};`};
    }
  }
  ${CounterWrapper} {
    padding: 0px 8%;
  }
  ${F12} {
    ${Truncate(1)}
    color: ${(props) => props.theme.color_A3};
  }
  ${F14} {
    padding-right: ${(props) => props.favorite && `48px`};
    ${Truncate(2)}
    color: ${(props) =>
      props.active
        ? `${props.theme.color_A3}; `
        : `${props.theme.color_P3_11_OP64};`}
  }
`
export const MenuPanelItem = ({
  text,
  subText,
  favorite,
  icon,
  active,
  priceBoost,
  addFavorite,
  favoriteActive,
  enterMenuItem,
  row2,
  multiColorIcon,
  counter,
}) => (
  <>
    <MenuPanelItemWrapper
      active={active}
      priceBoost={priceBoost}
      multiColorIcon={multiColorIcon}
      favorite={favorite}
    >
      <FlexLeft onClick={enterMenuItem}>
        <IconWrapper56>
          {icon}
          {counter && <Counter counter={counter} />}
        </IconWrapper56>

        {row2 ? (
          <FlexColumn>
            <F14 uppercase={1}>{text}</F14>
            <F12>{subText}</F12>
          </FlexColumn>
        ) : (
          <F14 uppercase={1}>{text}</F14>
        )}
      </FlexLeft>
      {favorite && (
        <AbsoluteRightCenter>
          <Favorite
            menuPanel={1}
            onClick={addFavorite}
            menuPanelActive={favoriteActive}
          />
        </AbsoluteRightCenter>
      )}
    </MenuPanelItemWrapper>
  </>
)
//-------------------- Settings Panel --------------------//
const SettingsItemWrapper = styled(FlexLeft)`
  height: 48px;
  margin-left: 16px;
  position: relative;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      ${RadioButtonLabel} {
        border: 2px solid ${(props) => props.theme.color_A1_1};
      }
    }
  }
  ${F14} {
    margin-left: 8px;
    color: ${(props) => props.theme.color_P3_11_OP64};
  }
`
export const SettingsItem = ({ text, value, checked, onChange, readOnly }) => (
  <SettingsItemWrapper
    onClick={() => {
      onChange(value)
    }}
  >
    <RadioButton
      type="radio"
      value={value}
      checked={checked}
      readOnly={readOnly && 'readonly'}
    />
    <RadioButtonLabel htmlFor="input" />
    <F14>{text}</F14>
  </SettingsItemWrapper>
)

const EnableQuickBetWrapper = styled.div`
  ${FlexSpaceBetween(56)};
  padding: 0px 16px;
  color: ${(props) => props.theme.color_P3_11_OP64};
  position: relative;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      ${CheckBoxLabel} {
        cursor: pointer;
      }
      ${CheckBoxLabel} {
        &::after {
          background: ${(props) => props.theme.color_A1_1};
        }
        border: 1px solid ${(props) => props.theme.color_A1_1};
      }
    }
  }
`
export const EnableQuickBet = ({ text, checked, onClick, readOnly }) => {
  const [inSideChecked, setInSideChecked] = useState(false)
  const isControlByProps = !!onClick
  const toggleFunc = () => {
    if (isControlByProps) {
      onClick(!checked)
    } else {
      setInSideChecked(!inSideChecked)
    }
  }
  return (
    <EnableQuickBetWrapper onClick={toggleFunc}>
      <F14>{text}</F14>
      <SwitchButtonWrapper>
        <SwitchButton
          id="checkbox"
          type="checkbox"
          checked={isControlByProps ? checked : inSideChecked}
          onClick={(e) => {
            e.stopPropagation()
          }}
          readOnly={readOnly && 'readonly'}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </SwitchButtonWrapper>
    </EnableQuickBetWrapper>
  )
}

EnableQuickBet.propsTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

//-------------------- Bet Type Templates --------------------//
export const MarketWrapper1 = styled.div`
  ${Grid('1')};
  grid-gap: 16px;
  margin: 16px;
`
export const MarketWrapper2 = styled.div`
  ${Grid('2')};
  grid-gap: 16px;
  margin: 16px;
`
export const MarketWrapper2to1 = styled(MarketWrapper2)`
  grid-gap: ${(props) => props.outright && '8px 16px'};
  ${media.tablet`${Grid(1)}`}
  ${(props) => props.regionalCoupon && `margin: 16px 0px;`};
  ${(props) =>
    props.competition &&
    `grid-gap: 0px;
    margin: 0px;`};
  ${(props) => props.rightPanel && `${Grid(1)}`};
  ${media.desktop`
    ${(props) => props.rightPanel && `${Grid(2)}`}
    ${(props) => props.regionalCoupon && `margin: 16px;`};
  `};
  ${media.tablet`
    ${(props) => (props.rightPanel ? `${Grid(1)}` : `${Grid(1)}`)}
  `};
`
export const MarketWrapper3 = styled.div`
  ${Grid('3')};
  grid-gap: 16px;
  margin: 16px;
`
export const MarketWrapper3to1 = styled(MarketWrapper3)`
  ${media.tablet`${Grid(1)}`}
`

export const Handicap = styled.div`
  max-width: 100%;
  color: ${(props) =>
    props.malayOdds
      ? `${props.theme.color_P3_25};`
      : `${props.theme.color_A3_8};`};
  text-align: center;
  margin-left: ${(props) => props.selectionName && '4px'};
  ${F13} {
    ${Truncate(1)};
  }
`
export const SelectionName = styled(FlexCenter)`
  color: ${(props) => props.theme.color_P3_15_OP64};

  font-size: 13px;
  text-align: center;
  line-height: 15px;
  ${(props) =>
    props.truncate2
      ? `${Truncate(2)};`
      : `${Truncate(1)};word-break: break-all;`};
`
export const Odds = styled(FlexCenter)`
  ${(props) =>
    props.lineThrough &&
    ` position: relative;
      ${F15}{
        color: ${props.theme.color_S8};
        font-weight: normal;
        &::after {
          content: '';
          border-bottom: 1px solid ${props.theme.color_S8};
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%,-50%,0);
          width: 26px;
        }
      }
    `}
  ${F15} {
    color: ${(props) =>
      props.lineThrough
        ? props.theme.color_S8
        : props.minusOdds
        ? props.theme.color_A7_4
        : props.malayOdds
        ? props.theme.color_P3_3
        : props.theme.color_P3_3};
  }
  ${(props) => props.priceBoost && `${F15} {color: ${props.theme.color_A1};}`}
`
export const OddsWrapper = styled(FlexCenterColumn)`
  will-change: background-color;
  border-radius: 4px;
  height: ${(props) => (props.height64 ? `64px` : `48px`)};
  min-width: 64px;
  padding: 8px 4px;
  ${F14} {
    text-align: center;
    color: ${(props) => props.theme.color_P3_3};
  }
  g {
    fill: ${(props) => props.theme.color_P3_OP64};
  }
  @media (hover: hover) {
    ${(props) =>
      props.oddsUp
        ? `
      &:hover{cursor: pointer;}`
        : props.oddsDown
        ? `
        &:hover{cursor: pointer;} `
        : props.active
        ? `
         &:hover{cursor: pointer;} 
        `
        : props.withBGColor
        ? `
        &:hover{
          cursor: pointer;
          background:${props.theme.color_P2_4_Lplus42};
          border: 1px solid ${props.theme.color_P2_4};
        }
          `
        : props.noOdds || props.locked || props.withoutBorder
        ? null
        : `
        &:hover{
          cursor: pointer;
          background:${props.theme.color_P2_4_Lplus42};
          border: 1px solid ${props.theme.color_P2_4};
          }
        `};
  }
  ${(props) =>
    props.oddsUp
      ? `background:${props.theme.color_A2_2};
      border: 1px solid ${props.theme.color_A2_2};
      ${SelectionName},${F13},${F15}{color:${props.theme.color_P4_14};}
      ${F15}::after{border-bottom: 2px solid  ${props.theme.color_P4_14};}`
      : props.oddsDown
      ? `background:${props.theme.color_A7_1};
        border: 1px solid ${props.theme.color_A7_1};
        ${SelectionName},${F13},${F15}{color:${props.theme.color_P4_13};} 
        ${F15}::after{border-bottom: 2px solid ${props.theme.color_P4_13};}`
      : props.active
      ? `background:${props.theme.color_P2_4};
        border: 1px solid ${props.theme.color_P2_4};
         ${SelectionName},${F13},${F15}{ color:${props.theme.color_P4_9};} 
          ${F15}::after{
            border-bottom: 2px solid  ${props.theme.color_P4_9};
          }
        `
      : props.withBGColor
      ? `
        background:${props.theme.color_S2};
        border: 1px solid ${props.theme.color_P3_OP24};
        `
      : props.noOdds || props.locked
      ? `background:${props.theme.color_P3_OP4};
      border: 1px solid ${props.theme.color_P3_OP24};
      ${SelectionName}{color:${props.theme.color_P3_OP56};}}`
      : props.withoutBorder
      ? `border: none; background: none;`
      : `
        background:${props.theme.color_P4_29}; 
        border: 1px solid ${props.theme.color_P3_OP24};
        `};
  user-select: none;
`

export const OddsWrapperAlignEnd = styled.div`
  display: grid;
  justify-items: center;
  align-content: end;
  ${OddsWrapper} {
    width: 100%;
  }
`
export const PriceBoostEpmWrapper2to1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 92px;
  grid-column-gap: 16px;
  margin: 16px;
  ${MarketWrapper2to1} {
    margin: 0px;
  }
  ${MarketWrapper1} {
    grid-auto-rows: minmax(16px, auto);
    align-content: center;
    line-height: 16px;
    grid-gap: 0px;
    margin: 0px;
  }
`
export const PriceBoostSelectionName = styled(FlexLeft)`
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP72};
    ${Truncate(3)};
  }
  ${F12} {
    color: ${(props) => props.theme.color_P3_OP72};
    ${Truncate(1)};
  }
`
export const PriceBoostEpmSelectionName = ({ winner, team }) => (
  <PriceBoostSelectionName>
    <F14 bold={1}>{winner}</F14>
    <F12>{team}</F12>
  </PriceBoostSelectionName>
)
export const Selection = ({
  selectionName,
  handicap,
  odds,
  withBGColor,
  active,
  oddsUp,
  oddsDown,
  noOdds,
  locked,
  withoutBorder,
  lineThrough,
  priceBoost,
  priceBoostSelectionName,
  odds2,
  addSelection,
  height64,
  malayOdds,
  indoOdds,
  minusOdds,
}) => (
  <>
    {priceBoostSelectionName && (
      <PriceBoostSelectionName>
        <F14 bold={1}>{priceBoostSelectionName}</F14>
      </PriceBoostSelectionName>
    )}
    <OddsWrapper
      withBGColor={withBGColor}
      oddsUp={oddsUp}
      oddsDown={oddsDown}
      noOdds={noOdds}
      locked={locked}
      withoutBorder={withoutBorder}
      active={active}
      onClick={addSelection}
      height64={height64}
      data-crt-odds-box
    >
      {(selectionName || handicap || locked) && (
        <FlexCenter>
          {selectionName && (
            <SelectionName
              truncate2={height64}
              data-txt-selection={selectionName}
            >
              {selectionName}
            </SelectionName>
          )}
          {handicap && (
            <Handicap
              malayOdds={malayOdds || indoOdds}
              selectionName={selectionName}
              data-txt-hdp={handicap}
            >
              <F13>{handicap}</F13>
            </Handicap>
          )}
          {locked && <Icons.Locked />}
        </FlexCenter>
      )}
      {odds && (
        <Odds
          lineThrough={lineThrough}
          malayOdds={malayOdds || indoOdds}
          minusOdds={minusOdds}
          data-txt-odds={odds}
        >
          <F15 bold={1}>{odds}</F15>
        </Odds>
      )}
      {odds2 && (
        <Odds priceBoost={priceBoost}>
          <F15 bold={1}>{odds2}</F15>
        </Odds>
      )}
    </OddsWrapper>
  </>
)
export const SelectionTitle = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 4px 16px;
`
export const SelectionTitle2 = styled(SelectionTitle)`
  grid-template-columns: repeat(2, minmax(0px, 1fr));
`
export const SelectionTitle3 = styled(SelectionTitle2)`
  grid-template-columns: repeat(3, minmax(0px, 1fr));
`
export const SelectionTitleTextWrapper = styled(FlexCenter)`
  min-height: 40px;
  color: ${(props) =>
    props.active ? props.theme.color_A3 : props.theme.color_P3_4_OP56};
  ${F12}, ${F14} {
    ${Truncate(2)};
    text-align: center;
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_A3};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const SelectionTitleText = ({ font12, font14, switchTab, active }) => (
  <SelectionTitleTextWrapper onClick={switchTab} active={active}>
    <F12>{font12}</F12>
    <F14 bold={1}>{font14}</F14>
  </SelectionTitleTextWrapper>
)

export const OBTTitleSwitchTabTextWrapper = styled(FlexCenter)`
  ${Truncate(1)}
  line-height: 40px;
  padding: 0 8px;
  color: ${(props) =>
    props.active ? props.theme.color_P3_4 : props.theme.color_P3_OP56};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_P3_4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const OBTTitleSwitchTabWrapper = styled(FlexCenter)`
  height: 64px;
  ${OBTTitleSwitchTabTextWrapper} {
    &:nth-child(2) {
      margin-left: 24px;
    }
  }
`
export const OBTSelectionTitleTab = ({
  tab,
  tab1Text,
  tab2Text,
  tab1Active,
  tab2Active,
  switchTab1,
  switchTab2,
}) => (
  <OBTTitleSwitchTabWrapper>
    <OBTTitleSwitchTabTextWrapper
      active={tab1Active || tab}
      tab={tab}
      onClick={switchTab1}
    >
      {tab && (
        <F16 bold={1} condensed={1} uppercase={1}>
          {tab}
        </F16>
      )}
      <F16 bold={tab1Text} condensed={1} uppercase={1}>
        {tab1Text}
      </F16>
    </OBTTitleSwitchTabTextWrapper>
    {tab2Text && (
      <OBTTitleSwitchTabTextWrapper active={tab2Active} onClick={switchTab2}>
        <F16 bold={tab2Text} uppercase={1}>
          {tab2Text}
        </F16>
      </OBTTitleSwitchTabTextWrapper>
    )}
  </OBTTitleSwitchTabWrapper>
)
export const PlayerNameWrapper = styled(FlexLeft)`
  height: 100%;
  background: ${(props) => props.withBGColor && props.theme.color_S2};
  ${F14} {
    ${Truncate(2)};
    color: ${(props) => props.theme.color_P3_OP56};
    text-align: left;
  }
  ${OddsWrapper} {
    justify-content: flex-start;
    align-items: flex-start;
    background: transparent;
    &:hover {
      cursor: default;
    }
  }
`
export const PlayerName = ({ name, withBGColor }) => (
  <PlayerNameWrapper withBGColor={withBGColor}>
    <OddsWrapper>
      <F14 bold={1}>{name}</F14>
    </OddsWrapper>
  </PlayerNameWrapper>
)

export const ViewMoreWrapper = styled(FlexCenter)`
  height: 48px;
  ${F12} {
    color: ${(props) => props.theme.color_P3_13_OP64};

    margin-right: 8px;
  }
  g {
    fill: ${(props) =>
      props.viewAll
        ? `${props.theme.color_P3_OP24}`
        : `${props.theme.color_P3_OP56}`};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const ViewMore = ({
  toggleViewMore,
  viewLess,
  viewAll,
  moreText,
  lessText,
  allText,
}) => {
  return (
    <ViewMoreWrapper onClick={toggleViewMore} viewAll={viewAll}>
      {viewLess ? (
        <FlexCenter>
          <F12 bold={1} uppercase={1}>
            {lessText}
          </F12>
          <IconWrapper16>
            <Icons.Chevron_up />
          </IconWrapper16>
        </FlexCenter>
      ) : viewAll ? (
        <FlexCenter>
          <F12 bold={1} uppercase={1}>
            {allText}
          </F12>
          <IconWrapper12>
            <Icons.Caret_right />
          </IconWrapper12>
        </FlexCenter>
      ) : (
        <FlexCenter>
          <F12 bold={1} uppercase={1}>
            {moreText}
          </F12>
          <IconWrapper16>
            <Icons.Chevron_down />
          </IconWrapper16>
        </FlexCenter>
      )}
    </ViewMoreWrapper>
  )
}

export const MarketWrapperT5 = styled(MarketWrapper1)`
  grid-gap: 16px;
  /* grid-template-columns: repeat(auto-fill, 1fr); */
  ${MarketWrapper2} {
    ${Grid(4)}
    /* grid-template-columns: repeat(auto-fit, minmax(136px, 1fr)); */
    margin: 0px;
    ${media.tablet`
      ${Grid(2)}
    `}
  }
`
export const MarketWrapperT6 = styled.div`
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  ${MarketWrapper2}, ${MarketWrapper3} {
    margin-top: 0px;
  }
  ${SelectionTitleTextWrapper} {
    @media (hover: hover) {
      &:hover {
        cursor: unset;
        color: ${(props) => props.theme.color_P3_4_OP56};
      }
    }
    &:active {
      background: transparent;
    }
  }
  ${SelectionName} {
    text-align: right;
  }
  ${Separator1}, ${Separator2} {
    margin: 16px 0px 0px 0px;
  }
`
export const NoGoalsT7 = styled.div`
  display: grid;
  grid-template-columns: 1.9fr 3fr;
  border-left: 1px solid ${(props) => props.theme.color_P3_OP24};
`
export const OthersT7 = styled.div`
  display: grid;
  grid-template-columns: 1.9fr repeat(3, minmax(min-content, 1fr));
`
export const MarketWrapperT7 = styled.div`
  ${SelectionTitleTextWrapper} {
    @media (hover: hover) {
      &:hover {
        cursor: unset;
        color: ${(props) => props.theme.color_P3_4_OP56};
      }
    }
    &:active {
      background: transparent;
    }
  }
  ${MarketWrapper1}:nth-child(2) {
    border-left: 1px solid ${(props) => props.theme.color_P3_OP24};
  }
  ${media.tablet`
    ${SelectionTitleTextWrapper}{
      &:hover{
        cursor: pointer;
        ${F14}{color: ${(props) => props.theme.color_A3};}
      }
      &:active{background:${(props) => props.theme.color_P3_1_OP8_1};}
    }
    ${NoGoalsT7} {
      border-right: 1px solid transparent;
    }
    ${MarketWrapper1}:nth-child(2) { display: none; } 
      ${SelectionTitleTextWrapper}:nth-child(1) > ${F14}  {
        color: ${(props) => props.theme.color_A3};
          ${(props) =>
            props.SwitchTab && `color: ${props.theme.color_P3_4_OP56};`}
      }
    ${(props) =>
      props.SwitchTab &&
      `
        ${OthersT7}{
          display:grid;
          border-left: 1px solid transparent;
          border-top: none;
        }
        ${MarketWrapper1}:nth-child(1) {display:none;} 
        ${MarketWrapper1}:nth-child(2) {
          border-left: 1px solid transparent;
          display: inherit;
        }
        ${SelectionTitleTextWrapper}:nth-child(1):hover {${F14}{color: ${props.theme.color_A3};}}
        ${SelectionTitleTextWrapper}:nth-child(2) > ${F14} {
          color: ${props.theme.color_A3};
        }
      `};
      ${NoGoalsT7} {
        border-right: none;
        border-left: 1px solid transparent;
        border-top: 1px solid ${(props) => props.theme.color_P3_OP24};
      }
  `}
  ${MarketWrapper1} {
    margin: 0;
    grid-gap: 0;
    grid-template-columns: 1.9fr repeat(3, minmax(min-content, 1fr));
    grid-auto-rows: 64px;
  }
  ${SelectionTitle2} {
    grid-column: span 2;
    height: 64px;
  }
  ${MarketWrapper2to1} {
    grid-gap: 0px;
    margin: 0;
    border-top: 1px solid ${(props) => props.theme.color_P3_OP24};
    &:nth-last-child(2) {
      border-bottom: 1px solid ${(props) => props.theme.color_P3_OP24};
    }
  }
  ${PlayerNameWrapper} > ${OddsWrapper} {
    padding: 4px 8px 4px 16px;
  }
  ${OddsWrapper} {
    height: 64px;
    padding: 0;
    border: none;
    border-radius: 0;
    width: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${(props) => props.theme.color_P3_OP24};
    &:nth-child(4n-3) {
      border-left: none;
    }
  }
`

export const MarketWrapperT8 = styled.div`
  padding: 0 16px 16px 16px;
  ${MarketWrapper1}, ${MarketWrapper2to1} {
    margin: 0;
  }
  ${MarketWrapper3} {
    grid-template-columns: 2fr 1fr 2fr;
    margin: 0 0 16px 0;
  }
  ${SelectionTitle3} {
    grid-template-columns: 2fr 1fr 2fr;
    padding: 4px 0px;
  }
  ${SelectionTitleTextWrapper} {
    ${F12}, ${F14} {
      ${Truncate(1)};
    }
    @media (hover: hover) {
      &:hover {
        cursor: unset;
        color: ${(props) => props.theme.color_P3_14_OP56};
        background: none;
      }
    }
    &:active {
      cursor: unset;
      color: ${(props) => props.theme.color_P3_14_OP56};
      background: none;
    }
  }
  ${ViewMoreWrapper} {
    display: none;
  }
  ${media.tablet`
    ${MarketWrapper3}, ${SelectionTitle3} {
      ${Grid('3')};
    }
    ${MarketWrapper1} {
      display: block;
      ${OddsWrapper} {
        margin-bottom: 16px;
      }
    }
    ${ViewMoreWrapper} {display: grid;}
  `}
`
export const MarketWrapperT9 = styled.div`
  ${SelectionTitle} {
    border-bottom: 1px solid ${(props) => props.theme.color_P3_OP24};
    height: 64px;
  }
  ${SelectionTitleTextWrapper} {
    @media (hover: hover) {
      &:hover {
        cursor: unset;
        color: ${(props) => props.theme.color_P3_4_OP56};
      }
    }
    &:active {
      background: transparent;
    }
  }
  ${F14} {
    ${Truncate(2)};
  }
  ${MarketWrapper1} {
    &:nth-child(1),
    &:nth-child(2) {
      margin: 0;
    }
  }
  ${media.tablet`
    ${MarketWrapper1}:nth-child(2) {display:none;} 
    ${SelectionTitleTextWrapper}:nth-child(1) {
      color: ${(props) => props.theme.color_A3};
      
    }
    ${SelectionTitleTextWrapper}{
      &:hover{cursor: pointer;} 
      &:active{background:${(props) => props.theme.color_P3_1_OP8_1};}
    }
    ${MarketWrapper1}:nth-child(2) { display: none; } 
      ${SelectionTitleTextWrapper}:nth-child(1) > ${F14}  {
        color: ${(props) => props.theme.color_A3};
          ${(props) =>
            props.SwitchTab && `color: ${props.theme.color_P3_4_OP56};`}
      }
    ${(props) =>
      props.SwitchTab &&
      `${MarketWrapper1}:nth-child(1) {display:none;} 
      ${MarketWrapper1}:nth-child(2) {display: inherit;}
      ${SelectionTitleTextWrapper}:nth-child(1) {
        color: ${props.theme.color_P3_14_OP56};
      } 
      ${SelectionTitleTextWrapper}:nth-child(2) {
          color: ${props.theme.color_A3};
        }
      `};
  `}
`
//-------------------- Grey Out info Price Boosts Content Templates --------------------//

export const PriceBoostInfoContentWrapper = styled.div`
  margin: 16px 0px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  ${F16} {
    color: ${(props) => props.theme.color_P3_18};
    line-height: 20px;
    margin-bottom: 8px;
  }
  ${F14} {
    line-height: 16px;
    color: ${(props) => props.theme.color_P3_OP72};
  }
  ${F12} {
    line-height: 16px;
    color: ${(props) => props.theme.color_P3_OP72};
  }
`

export const PriceBoostInfoContent = ({
  selectionName,
  competitionEventName,
  competitionName,
  participantName,
  period,
}) => (
  <PriceBoostInfoContentWrapper>
    {competitionEventName && (
      <F16 bold={1} uppercase={1}>
        {competitionEventName}
      </F16>
    )}
    {competitionName && <F14 bold={1}>{competitionName}</F14>}
    {participantName && <F12>{participantName}</F12>}
    {selectionName && <F12>{selectionName}</F12>}
    {period && <F12>{period}</F12>}
  </PriceBoostInfoContentWrapper>
)

//-------------------- MOP Widgets Templates --------------------//
export const NPOddsType = ({ oddsType, childEvent }) => (
  <OddsPanelWrapper data-txt-bet-type-name={oddsType}>
    <OddsTypeWrapper>
      <F12>{oddsType}</F12>
      {childEvent && <F12>{childEvent}</F12>}
    </OddsTypeWrapper>
  </OddsPanelWrapper>
)
export const POddsType = ({ oddsType, childEvent, twoColumns }) => (
  <>
    {twoColumns ? (
      <>
        <OddsTypeWrapper twoColumns childEvent={childEvent}>
          <F12>{oddsType}</F12>
          {childEvent && <F12>{childEvent}</F12>}
        </OddsTypeWrapper>
        <OddsTypeWrapper />
      </>
    ) : (
      <OddsTypeWrapper childEvent={childEvent}>
        <F12>{oddsType}</F12>
        {childEvent && <F12>{childEvent}</F12>}
      </OddsTypeWrapper>
    )}
  </>
)

export const OddsTypeWrapper = styled(FlexCenterColumn)`
  min-width: 64px;
  text-align: center;
  height: 40px;
  padding-top: 4px;
  ${TableCell} {
    max-width: 100%;
  }
  ${F12}:first-child {
    ${(props) => (props.childEvent ? `${Truncate(2)}` : `${Truncate(3)}`)};
    color: ${(props) => props.theme.color_P3_14_OP56};
  }
  ${F12}:nth-child(2) {
    ${Truncate(1)};
    color: ${(props) => props.theme.color_A3};
  }

  ${(props) =>
    props.twoColumns &&
    `
      transform: translate3d(calc(50% + 4px),0,0);
      whit-space: nowrap;
  `}
`
export const OddsPanelWrapper = styled.div``
export const OddsPanelContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 232px 1fr 1fr 1fr;
  ${MarketWrapper2}, ${MarketWrapper3} {
    margin-bottom: 0px;
  }
  ${OddsPanelWrapper} {
    &:nth-child(1) {
      ${OddsTypeWrapper} {
        text-align: left;
        padding: 4px 0px 0px 16px;
        text-transform: uppercase;
      }
    }
  }

  ${(props) =>
    props.FiveColumns && `grid-template-columns: 232px 1fr 1fr 1fr 1fr;`}
  ${(props) => props.ThreeColumns && `grid-template-columns: 232px 1fr 1fr;`}
  ${(props) =>
    props.teamTotals &&
    `grid-template-columns: 232px 1fr;
      ${MarketWrapper2}{margin-top: 4px;}
    `}
  ${(props) =>
    props.rightPanel &&
    `grid-template-columns: 1fr 52%;
      ${OddsPanelWrapper} {
        &:nth-child(4n-1),
        &:nth-child(4n) {
          display: none;
        }
          ${
            props.FiveColumns &&
            `&:nth-child(4n-1),&:nth-child(4n) {display: grid;}
              &:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: none;}`
          }
          ${
            props.ThreeColumns &&
            `&:nth-child(4n-1),&:nth-child(4n),&:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: grid;}
              &:nth-child(3n) {display: none;}`
          }
        }
      `}
  ${media.desktopLarge`  
    grid-template-columns: 232px 1fr 1fr;
    ${OddsPanelWrapper} {
      &:nth-child(4n) {
        display: none;
      }
      ${(props) =>
        props.FiveColumns &&
        `&:nth-child(4n) {display: grid;} &:nth-child(5n-1),&:nth-child(5n) {display: none;}`}
      ${(props) =>
        props.ThreeColumns &&
        `&:nth-child(4n) {display: grid;} &:nth-child(5n-1),&:nth-child(5n) {display: grid;}`}
    }
    ${(props) =>
      props.teamTotals &&
      `grid-template-columns: 232px 1fr;${OddsPanelWrapper}:nth-child(4n){display: grid;}`}
    ${(props) =>
      props.rightPanel &&
      `grid-template-columns: 1fr 52%;
        ${OddsPanelWrapper} {
          &:nth-child(4n-1),
          &:nth-child(4n) {
            display: none;
            }
          ${
            props.FiveColumns &&
            `&:nth-child(4n-1),&:nth-child(4n) {display: grid;}
              &:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: none;}
            `
          }
          ${
            props.ThreeColumns &&
            `&:nth-child(4n-1),&:nth-child(4n),&:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: grid;}
                &:nth-child(3n) {display: none;}
            `
          }
          }
      `}
  `}
  ${media.desktop`
    grid-template-columns: 232px 1fr 1fr 1fr;
    ${(props) =>
      props.teamTotals &&
      `grid-template-columns: 232px 1fr;${OddsPanelWrapper}:nth-child(4n){display: grid;}`}
    ${(props) => props.ThreeColumns && `grid-template-columns: 232px 1fr 1fr;`}
    ${OddsPanelWrapper} {
      &:nth-child(4n) {
        display: grid;
      }
      ${(props) =>
        props.FiveColumns &&
        `&:nth-child(4n) {display: grid;} &:nth-child(5n-1),&:nth-child(5n) {display: grid;}`}
    }
    ${(props) =>
      props.FiveColumns && `grid-template-columns: 232px 1fr 1fr 1fr 1fr;`}
    ${(props) =>
      props.rightPanel &&
      `${OddsPanelWrapper} {
          ${
            props.FiveColumns &&
            `&:nth-child(4n-1),&:nth-child(4n) {display: grid;}
              &:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: grid;}
            `
          }
          ${
            props.ThreeColumns &&
            `&:nth-child(4n-1),&:nth-child(4n),&:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: grid;}
                &:nth-child(3n) {display: grid;}
            `
          }
          }
      `}
  `}
  ${media.tabletLandscape`
    grid-template-columns: 232px 1fr 1fr;
      ${OddsPanelWrapper} {
        &:nth-child(4n) {
          display: none;
        }
        ${(props) =>
          props.FiveColumns &&
          `&:nth-child(4n) {display: grid;} &:nth-child(5n-1),&:nth-child(5n) {display: none;}`}
        ${(props) =>
          props.ThreeColumns &&
          `&:nth-child(4n) {display: grid;} &:nth-child(5n-1),&:nth-child(5n) {display: grid;}`}
      }
    ${(props) =>
      props.teamTotals &&
      `grid-template-columns: 232px 1fr;${OddsPanelWrapper}:nth-child(4n){display: grid;}`}
  `}
  ${media.tablet`
    grid-template-columns: 1fr 52%;
    ${OddsPanelWrapper} {
      &:nth-child(4n-1),
      &:nth-child(4n) {
        display: none;
      }
      ${(props) =>
        props.FiveColumns &&
        `&:nth-child(4n-1),&:nth-child(4n) {display: grid;}
          &:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: none;}
      `}
      ${(props) =>
        props.ThreeColumns &&
        `&:nth-child(4n-1),&:nth-child(4n),&:nth-child(5n-2),&:nth-child(5n-1),&:nth-child(5n) {display: grid;}
            &:nth-child(3n) {display: none;}
      `}
    }
    ${(props) =>
      props.teamTotals &&
      `${OddsPanelWrapper}{&:nth-child(4n-1),&:nth-child(4n){display: grid;}}`}
  `}
`

export const TeamNameWrapper = styled.div`
  display: grid;
  grid-auto-rows: 50%;
  height: 100%;
`

export const TeamName = styled(FlexLeft)`
  ${F14} {
    font-weight: ${(props) => props.active && `bold`};
    ${Truncate(2)};
  }
  height: 100%;
  padding-right: 24px;
  max-width: ${(props) =>
    props.withScore && props.tennis
      ? 'calc(192px - 48px)'
      : props.withScore
      ? '192px'
      : props.correctScore
      ? '100%'
      : '216px'};
  ${media.tablet`
    max-width: ${(props) =>
      props.withScore ? 'calc(48vw - 40px)' : 'calc(48vw - 16px)'};
  `}
`

export const Score = styled(FlexLeft)`
  white-space: nowrap;
  color: ${(props) =>
    props.cricketActive || props.tennisSet
      ? `${props.theme.color_A3_5};
        
      `
      : props.tennisGame || props.tennisGame_m
      ? `${props.theme.color_P3_OP100};
        
      `
      : props.points || props.tennisPoints_m
      ? props.theme.color_P3_OP56
      : props.tennisPoints
      ? `${props.theme.color_P3_OP56};
        
      `
      : props.tennisSet_sc || props.sc
      ? `${props.theme.color_P2_2};
      
      `
      : props.tennisGame_sc
      ? props.theme.color_P4_4
      : props.tennisPoints_sc
      ? `${props.theme.color_P4_24_OP56};
        
      `
      : props.scoreboardActive
      ? `${props.theme.color_P4_24_OP64};
        
      `
      : props.detail_sc
      ? `${props.theme.color_P4_24_OP56};
        
      `
      : `${props.theme.color_A3_5};
        
      `};
  ${(props) => props.bold && `font-weight: bold;`}
  ${(props) => (props.tennisGame_m || props.tennisPoints_m) && `display: none;`}
  ${media.tablet`  ${(props) =>
    (props.tennisGame_m || props.tennisPoints_m) && `display: flex;`}`}
  ${(props) => props.scoreboardActive && `font-weight: bold;`};
`

export const Period = styled(FlexCenter)`
  white-space: normal;
  color: ${(props) =>
    props.scoreboardLive
      ? props.theme.color_P2_3
      : props.scoreboardPlaySuspended
      ? props.theme.color_A5_3
      : props.scoreboard
      ? props.theme.color_P4_4_OP56
      : props.live
      ? props.theme.color_A3_6
      : props.playSuspended
      ? props.theme.color_A7_2
      : props.theme.color_P3_23_OP56};
  font-size: 12px;
  ${(props) => props.esportsPeriod && `white-space:nowrap;`};
  ${media.tablet`
    ${(props) => props.tennis_np && `display: none;`}
  `}
`
export const Out = styled(FlexCenter)`
  color: ${(props) => props.theme.color_P3_OP56};
  padding: 0px 13px;
`
export const Time = styled(FlexCenter)`
  color: ${(props) => props.theme.color_A3};
`
export const Legs = styled(FlexCenter)`
  color: ${(props) => props.theme.color_P3_4_OP56};
  font-size: 12px;
  white-space: nowrap;
`
export const MatchTrackerIconWrapper = styled.div`
  ${IconWrapper12} {
    g {
      fill: ${(props) =>
        props.matchTrackerActive || props.tvActive
          ? ''
          : props.theme.color_P3_16_OP64};
    }
  }
  ${IconWrapper32} {
    g {
      fill: ${(props) =>
        props.matchTrackerActive ? '' : props.theme.color_P3_16_OP64};
    }
    position: relative;
    ${AbsoluteCenter}:first-child {
      display: ${(props) => (props.matchTrackerActive ? 'block' : 'none')};
    }
    ${AbsoluteCenter}:last-child {
      display: ${(props) => (props.matchTrackerActive ? 'none' : 'block')};
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        ${AbsoluteCenter}:first-child {
          display: block;
          g {
            fill: none;
          }
        }
        ${AbsoluteCenter}:last-child {
          display: none;
        }
      }
    }
    &:active {
      background: ${(props) => props.theme.color_P3_1_OP8_1};
    }
  }
`

export const EsportsStatus = styled(F12)`
  color: ${(props) =>
    props.scoreboard ? props.theme.color_P2_3 : props.theme.color_A3_6};
  padding-left: 8px;
  margin-left: 8px;
  border-left: ${(props) =>
    props.scoreboard ? 'none' : `1px solid ${props.theme.color_P3_OP24}`};
  line-height: 16px;
`
export const EsportsGameType = styled(F12)`
  ${Truncate(1)}
  min-width: fit-content;
  color: ${(props) =>
    props.scoreboard
      ? `${props.theme.color_P4_4_OP56}`
      : `${props.theme.color_P3_OP40};
      
    `};
  padding-left: ${(props) => props.scoreboard && `8px`};
  line-height: 16px;
  padding-right: 16px;
`
export const EsportsScore = styled(F12)`
  line-height: 16px;
  white-space: nowrap;
  color: ${(props) =>
    props.sc ? props.theme.color_P2_2 : props.theme.color_A3_5};
`
export const EsportsStatistics = styled(IconWrapper16)`
  g {
    fill: ${(props) => props.theme.color_P4_24_OP64};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`
export const NPDetailWrapper = styled(RelativeWrapper)`
  ${FlexSpaceBetween(48)};
  ${FlexLeft} {
    ${Period},${Legs},${Time},${IconWrapper12},${BaseballInning},${BaseballBase},${Out},${Score} {
      padding-right: 16px;
    }
    ${media.tablet`
      ${Period},${Legs},${Time},${IconWrapper12},${BaseballInning},${BaseballBase},${Out},${Score}{
        padding-right: 8px;
      }
      ${(props) => props.playSuspended && `${Period}{display: block;}`};
    `}
  }
  ${IconWrapper32} {
    margin-left: 16px;
  }
  ${FlexLeft} > ${MatchTrackerIconWrapper}, ${FlexLeft} > ${TvWrapper} {
    display: none;
    ${(props) => props.homePage && `display: block;`};
  }
  ${FlexRight} > ${MatchTrackerIconWrapper}, ${FlexRight} > ${TvWrapper} {
    ${(props) => props.homePage && `display: none;`};
  }
  ${media.desktop`
    ${FlexLeft} > ${MatchTrackerIconWrapper}, ${FlexLeft} > ${TvWrapper} {
      display: block;
      ${(props) => props.homePage && `display: block;`};
    }
    ${FlexRight} > ${MatchTrackerIconWrapper}, ${FlexRight} > ${TvWrapper} {
      display: none;
      ${(props) => props.homePage && `display: none;`};
    }
  `}
`
export const PDetailWrapper = styled(Flex)`
  height: 48px;
  padding-left: 16px;
  ${(props) => props.secondColumn && `padding-top:8px; padding-bottom: 8px;`}
  ${(props) =>
    props.bottom && `justify-content: space-between; margin-top: 8px;`};
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) => props.information && `pointer`};
      ${InfoIconWrapper} {
        g {
          fill: ${(props) => props.theme.color_A6_2_Lplus4};
        }
      }
    }
  }
  &:active {
    ${InfoIconWrapper} {
      g {
        fill: ${(props) => props.theme.color_A6_2_Lmin8};
      }
    }
  }
  ${FlexLeft} > ${MatchTrackerIconWrapper}, ${FlexLeft} > ${TvWrapper} {
    display: none;
    padding-right: 8px;
  }
  ${media.desktop`
    ${FlexLeft} > ${MatchTrackerIconWrapper}, ${FlexLeft} > ${TvWrapper} {display: block;}
    ${FlexRight} > ${MatchTrackerIconWrapper}, ${FlexRight} > ${TvWrapper}{display: none;}
  `}
`

export const NonPremiumPanelWrapper = styled(RelativeWrapper)`
  ${MarketWrapper2},${MarketWrapper3} {
    grid-gap: 8px;
  }
  ${InfoPopUpContainer} {
    top: unset;
    left: unset;
    right: 12px;
    bottom: 42px;
    ${FlexColumn} {
      max-height: 54px;
    }
  }
  ${OddsWrapper} {
    min-width: 48px;
  }
  ${NPDetailWrapper} {
    padding: 0px 8px 0px 16px;
  }
  ${TeamNameWrapper} {
    grid-auto-rows: ${(props) => (props.teamTotals ? '48px' : '32px')};
    padding: ${(props) =>
      props.teamTotals ? '0px 0px 0px 16px' : '8px 0px 8px 16px'};
    ${(props) => props.teamTotals && 'grid-gap:8px;margin-top: 4px;'};
    ${FlexCenter},${Score} {
      display: none;
    }
    ${TeamName} {
      color: ${(props) => props.theme.color_P3_5};
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        ${TeamName} {
          color: ${(props) => props.theme.color_A3};
        }
      }
    }
    &:active {
      ${TeamName} {
        color: ${(props) => props.theme.color_A3_1_Lmin8};
      }
    }
    ${(props) =>
      props.Inplay &&
      `grid-template-columns: 24px 1fr;${Score}{display:flex;}`};
    ${(props) =>
      (props.BasketballInplay || props.RugbyInplay || props.wideScore) &&
      `grid-template-columns: 32px 1fr;${Score}{display:flex;}`};
    ${(props) =>
      props.NetSportsInplay &&
      `grid-template-columns: 16px 1fr 16px 24px; padding-left:0px;${FlexCenter},${Score}{display:flex;}${Score}{justify-content: flex-end;}`};
    ${(props) =>
      props.TennisInplay &&
      `
        grid-template-columns: 16px 1fr 24px 24px 24px; 
        padding-left:0px;
        ${FlexCenter},${Score}{display:flex;}
        ${Score}{justify-content: flex-start;}
        ${Score}:nth-child(6n+2){display:none;}
        ${
          props.rightPanel &&
          `
          grid-template-columns: 16px 24px 1fr;
          ${Score}{display:none;}
          ${Score}:nth-child(6n+2){display:flex;}
        `
        }
      `};
    ${(props) =>
      props.CricketInplay &&
      `grid-template-columns: 16px 48px 1fr; padding-left:0px;${FlexCenter},${Score}{display:flex;}${Score}{justify-content: flex-start;}`};
    ${(props) =>
      props.BaseballInplay &&
      `grid-template-columns: 16px 24px 1fr; padding-left:0px;${FlexCenter},${Score}{display:flex;}${Score}{justify-content: flex-start;}`};
    ${(props) =>
      props.FootballInplay &&
      `grid-template-columns: 16px 24px 1fr; padding-left:0px;${FlexCenter},${Score}{display:flex;}${Score}{justify-content: flex-start;}`};
    ${(props) =>
      props.LegsOnly &&
      `grid-template-columns: 16px 1fr 24px;${FlexCenter}{display:flex;}`};
    ${media.desktop`
        ${(props) =>
          props.TennisInplay &&
          `grid-template-columns: 16px 1fr 24px 24px 24px; 
            padding-left:0px;
            ${FlexCenter},${Score}{display:flex;}
            ${Score}{justify-content: flex-start;}
            ${Score}:nth-child(6n+2){display:none;}
        `};
    `}
    ${media.tablet`
        ${(props) =>
          props.TennisInplay &&
          `grid-template-columns: 16px 24px 1fr;
            ${Score}{display:none;}
            ${Score}:nth-child(6n+2){display:flex;}
        `};
    `}
  }
`

export const PremiumPanelWrapper = styled(RelativeWrapper)`
  margin-bottom: 16px;
  ${TableRow} {
    border-spacing: 8px 0px;
  }
  ${Period},${Legs},${InfoIconWrapper},${NeutralWrapper},${In_play_indicatorWrapper},${PriceBoostIconWrapper},${BaseballInning},${BaseballBase},${Out} {
    padding-right: 8px;
  }
  ${IconWrapper32} {
    margin-left: 8px;
  }
  ${OddsPanelContainer} {
    grid-template-columns: 192px 1fr;
    grid-template-rows: 1fr;
    ${media.tablet`
      grid-template-columns: 184px 1fr;
    `}
  }
  ${OddsWrapper}, ${OddsTypeWrapper} {
    width: 1400px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 0px;
    height: 48px;
    ${(props) => props.wideOdds && `min-width: 100px; `};
  }
  ${OddsPanelWrapper} {
    @media screen and (min-width: 1024px) {
      &::-webkit-scrollbar {
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        border: 1px solid ${(props) => props.theme.color_P4_2};
      }
    }
    display: grid;
    grid-template-rows: 40px 1fr 1fr 1fr;
    grid-gap: 8px;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    position: relative;
    ${Flex}:nth-child(1) {
      flex-wrap: wrap;
      padding-left: 16px;
    }
    &:first-child {
      grid-template-rows: 40px 96px 48px;
      ${TeamNameWrapper} {
        ${TeamName} {
          max-width: ${(props) =>
            props.Inplay || props.BaseballInplay || props.FootballInplay
              ? 'calc(192px - 40px)'
              : props.BasketballInplay || props.wideScore
              ? 'calc(192px - 48px)'
              : props.CricketInplay
              ? 'calc(192px - 56px)'
              : 'calc(192px - 16px)'};
          ${media.tablet`
            max-width: ${(props) =>
              props.Inplay || props.BaseballInplay || props.FootballInplay
                ? 'calc(192px - 40px - 8px)'
                : props.BasketballInplay || props.wideScore
                ? 'calc(192px - 48px- 8px)'
                : props.CricketInplay
                ? 'calc(192px - 56px- 8px)'
                : 'calc(192px - 16px- 8px)'};
          `}
          color: ${(props) => props.theme.color_P3_5};
        }
        @media (hover: hover) {
          &:hover {
            cursor: ${(props) => (props.obtPanel ? 'default' : 'pointer')};
            ${TeamName} {
              color: ${(props) =>
                props.obtPanel ? props.theme.color_P3_5 : props.theme.color_A3};
            }
          }
        }
        &:active {
          ${TeamName} {
            color: ${(props) =>
              props.obtPanel
                ? props.theme.color_P3_5
                : props.theme.color_A3_1_Lmin8};
          }
        }
        cursor: pointer;
        grid-template-columns: 16px 1fr;
        grid-template-rows: 48px;
        display: grid;
        grid-row-gap: 8px;
        ${(props) => props.Inplay && `grid-template-columns: 16px 24px 1fr;`};
        ${(props) =>
          (props.BasketballInplay || props.wideScore) &&
          `grid-template-columns: 16px 32px 1fr;`};
        ${(props) =>
          props.NetSportsInplay &&
          `grid-template-columns: 16px 1fr; ${Score}{ padding-right: 16px;}`};
        ${(props) =>
          props.CricketInplay && `grid-template-columns: 16px 48px 1fr;`};
        ${(props) =>
          props.TennisInplay &&
          `grid-template-columns: 16px 1fr; ${Score}{ padding-right: 16px;} ${ActiveTeamWrapper}{padding-top: 7px;}`};
        ${(props) =>
          props.BaseballInplay && `grid-template-columns: 16px 24px 1fr;`};
        ${(props) =>
          props.FootballInplay && `grid-template-columns: 16px 24px 1fr;`};
      }
    }
  }
  ${media.desktopMedium`
    ${(props) =>
      props.hideLastTwoOddsOn1024 &&
      `
      ${OddsWrapper}:nth-last-child(1), ${OddsWrapper}:nth-last-child(2), ${OddsTypeWrapper}:nth-last-child(1), ${OddsTypeWrapper}:nth-last-child(2){
        display: none;
      }
    `};
  `}
  ${media.desktop`
    ${(props) =>
      props.hideLastTwoOddsOn1024 &&
      `
      ${OddsWrapper}:nth-last-child(1), ${OddsWrapper}:nth-last-child(2), ${OddsTypeWrapper}:nth-last-child(1), ${OddsTypeWrapper}:nth-last-child(2){
        display: table-cell;
      }
    `};
  `}
`

export const NPTeamName = ({
  teamName1,
  teamName2,
  team1Score,
  team2Score,
  team1Score1,
  team2Score1,
  team1Score2,
  team2Score2,
  team1SetScore,
  team1GameScore,
  team1PointsScore,
  team2SetScore,
  team2GameScore,
  team2PointsScore,
  team1CricketScore1,
  team1CricketScore2,
  team2CricketScore1,
  team2CricketScore2,
  team1Score1Active,
  team1Score2Active,
  team2Score1Active,
  team2Score2Active,
  team1ToScore,
  team2ToScore,
  team1Active,
  team2Active,
  team1RedCard,
  team1RedCard_1,
  team1RedCard_2,
  team1RedCard_3,
  team1RedCard_4,
  team2RedCard,
  team2RedCard_1,
  team2RedCard_2,
  team2RedCard_3,
  team2RedCard_4,
  team1Handicap,
  team2Handicap,
  enterAmp,
}) => (
  <TeamNameWrapper onClick={enterAmp}>
    <FlexCenter>
      {team1Active && <ActiveTeam />}
      {team1RedCard && <RedCard />}
      {team1RedCard_1 && <RedCard RedCard_1 />}
      {team1RedCard_2 && <RedCard RedCard_2 />}
      {team1RedCard_3 && <RedCard RedCard_3 />}
      {team1RedCard_4 && <RedCard RedCard_4 />}
    </FlexCenter>
    {team1Score && (
      <Score bold={team1ToScore}>
        <F14>{team1Score}</F14>
      </Score>
    )}
    {team1SetScore && (
      <Score tennisSet_m={1}>
        <F14>{team1SetScore}</F14>
      </Score>
    )}
    {team1CricketScore1 && (
      <FlexCenterColumn>
        {team1CricketScore1 && (
          <Score points={1} cricketActive={team1Score1Active}>
            <F14>{team1CricketScore1}</F14>
          </Score>
        )}
        {team1CricketScore2 && (
          <Score points={1} cricketActive={team1Score2Active}>
            <F14>{team1CricketScore2}</F14>
          </Score>
        )}
      </FlexCenterColumn>
    )}
    <TeamName
      active={team1Handicap}
      tennis={team1SetScore || team1GameScore || team1PointsScore}
      withScore={
        team1Score || team1SetScore || team1GameScore || team1PointsScore
      }
    >
      <F14>{teamName1}</F14>
    </TeamName>
    {team1Score1 && (
      <Score>
        <F14>{team1Score1}</F14>
      </Score>
    )}
    {team1Score2 && (
      <Score points={1}>
        <F14>{team1Score2}</F14>
      </Score>
    )}

    {team1SetScore && (
      <Score tennisSet={1}>
        <F14>{team1SetScore}</F14>
      </Score>
    )}
    {team1GameScore && (
      <Score tennisGame={1}>
        <F14>{team1GameScore}</F14>
      </Score>
    )}
    {team1PointsScore && (
      <Score tennisPoints={1}>
        <F14>{team1PointsScore}</F14>
      </Score>
    )}
    <FlexCenter>
      {team2Active && <ActiveTeam />}
      {team2RedCard && <RedCard />}
      {team2RedCard_1 && <RedCard RedCard_1 />}
      {team2RedCard_2 && <RedCard RedCard_2 />}
      {team2RedCard_3 && <RedCard RedCard_3 />}
      {team2RedCard_4 && <RedCard RedCard_4 />}
    </FlexCenter>
    {team2Score && (
      <Score bold={team2ToScore}>
        <F14>{team2Score}</F14>
      </Score>
    )}
    {team2SetScore && (
      <Score tennisSet_m={1}>
        <F14>{team2SetScore}</F14>
      </Score>
    )}
    {team2CricketScore1 && (
      <FlexCenterColumn>
        {team2CricketScore1 && (
          <Score points={1} cricketActive={team2Score1Active}>
            <F14>{team2CricketScore1}</F14>
          </Score>
        )}
        {team2CricketScore2 && (
          <Score points={1} cricketActive={team2Score2Active}>
            <F14>{team2CricketScore2}</F14>
          </Score>
        )}
      </FlexCenterColumn>
    )}
    <TeamName
      active={team2Handicap}
      tennis={team2SetScore || team2GameScore || team2PointsScore}
      withScore={
        team2Score || team2SetScore || team2GameScore || team2PointsScore
      }
    >
      <F14>{teamName2}</F14>
    </TeamName>
    {team2Score1 && (
      <Score>
        <F14>{team2Score1}</F14>
      </Score>
    )}
    {team2Score2 && (
      <Score points={1}>
        <F14>{team2Score2}</F14>
      </Score>
    )}

    {team2SetScore && (
      <Score tennisSet={1}>
        <F14>{team2SetScore}</F14>
      </Score>
    )}
    {team2GameScore && (
      <Score tennisGame={1}>
        <F14>{team2GameScore}</F14>
      </Score>
    )}
    {team2PointsScore && (
      <Score tennisPoints={1}>
        <F14>{team2PointsScore}</F14>
      </Score>
    )}
  </TeamNameWrapper>
)

export const NPTeamName_CorrectScore = ({
  teamName1,
  teamName2,
  team1Score,
  team2Score,
  team1ToScore,
  team2ToScore,
  team1Active,
  team2Active,
  team1RedCard,
  team1RedCard_1,
  team1RedCard_2,
  team1RedCard_3,
  team1RedCard_4,
  team2RedCard,
  team2RedCard_1,
  team2RedCard_2,
  team2RedCard_3,
  team2RedCard_4,
  neutral,
  period,
  periodTime,
  periodLive,
  Inplay,
  enterAmp,
}) => (
  <CorrectScoreTeamNameWrapper Inplay={Inplay} onClick={enterAmp}>
    <FlexCenter>
      {team1Active && <ActiveTeam />}
      {team1RedCard && <RedCard />}
      {team1RedCard_1 && <RedCard RedCard_1 />}
      {team1RedCard_2 && <RedCard RedCard_2 />}
      {team1RedCard_3 && <RedCard RedCard_3 />}
      {team1RedCard_4 && <RedCard RedCard_4 />}
    </FlexCenter>
    <Score bold={team1ToScore}>
      <F14>{team1Score}</F14>
    </Score>
    <TeamName correctScore={1}>
      <F16>{teamName1}</F16>
    </TeamName>
    <FlexCenter>
      {team2Active && <ActiveTeam />}
      {team2RedCard && <RedCard />}
      {team2RedCard_1 && <RedCard RedCard_1 />}
      {team2RedCard_2 && <RedCard RedCard_2 />}
      {team2RedCard_3 && <RedCard RedCard_3 />}
      {team2RedCard_4 && <RedCard RedCard_4 />}
    </FlexCenter>
    <Score bold={team2ToScore}>
      <F14>{team2Score}</F14>
    </Score>
    <TeamName correctScore={1}>
      <F16>{teamName2}</F16>
    </TeamName>
    <NPDetailWrapper>
      <FlexCenterColumn>
        <Period live={periodLive}>{period}</Period>
        {periodTime && <Period live={periodLive}>{periodTime}</Period>}
        {neutral && <Neutral />}
      </FlexCenterColumn>
    </NPDetailWrapper>
  </CorrectScoreTeamNameWrapper>
)
export const NPDetail = ({
  period,
  periodLive,
  playSuspended,
  legs,
  priceBoost,
  neutral,
  inplayIndicator,
  marketline,
  information,
  infoActive,
  tv,
  tvActive,
  tvPlay,
  matchTrackerBadminton,
  matchTrackerBasketball,
  matchTrackerDarts,
  matchTrackerFootball,
  matchTrackerIceHockey,
  matchTrackerRugby,
  matchTrackerTableTennis,
  matchTrackerTennis,
  matchTrackerVolleyball,
  matchTrackerActive,
  out,
  baseballInningUp,
  baseballInningDown,
  baseball_base,
  baseball_base_1,
  baseball_base_1_2,
  baseball_base_1_2_3,
  baseball_base_1_3,
  baseball_base_2,
  baseball_base_2_3,
  baseball_base_3,
  enterAmp,
  statistics,
  showStatistics,
  statisticsActive,
  favorite,
  favoriteActive,
  toggleFavorite,
  toggleTv,
  toggleMatchTracker,
  toggleInfo,
  team1GameScore,
  team1PointsScore,
  team2GameScore,
  team2PointsScore,
  homePage,
  esports,
  esportsPeriod,
  esportsGameType,
  esportsStatus,
  esportsScore,
}) => (
  <NPDetailWrapper homePage={homePage} playSuspended={playSuspended}>
    <FlexLeft>
      {(period || esportsPeriod) && (
        <Period
          live={periodLive}
          tennis_np={
            team1GameScore ||
            team2GameScore ||
            team1PointsScore ||
            team2PointsScore
          }
          playSuspended={playSuspended}
          esportsPeriod={esportsPeriod}
        >
          {period || esportsPeriod}
          {esportsStatus && <EsportsStatus>{esportsStatus}</EsportsStatus>}
        </Period>
      )}
      {esportsGameType && <EsportsGameType>{esportsGameType}</EsportsGameType>}
      {esportsScore && (
        <Score>
          <F12>{esportsScore}</F12>
        </Score>
      )}
      {(team1GameScore || team2GameScore) && (
        <Score tennisGame_m={1} playSuspended={playSuspended}>
          <F12>
            {team1GameScore}&nbsp;-&nbsp;{team2GameScore}
          </F12>
        </Score>
      )}
      {(team1PointsScore || team2PointsScore) && (
        <Score tennisPoints_m={1} playSuspended={playSuspended}>
          <F12>
            {team1PointsScore}&nbsp;-&nbsp;{team2PointsScore}
          </F12>
        </Score>
      )}
      {(baseballInningUp || baseballInningDown) && (
        <BaseballInning>
          {baseballInningUp && <Icons.Baseball_inning_up />}
          {baseballInningDown && <Icons.Baseball_inning_down />}
        </BaseballInning>
      )}
      {(baseball_base ||
        baseball_base_1 ||
        baseball_base_1_2 ||
        baseball_base_1_2_3 ||
        baseball_base_1_3 ||
        baseball_base_2 ||
        baseball_base_2_3 ||
        baseball_base_3) && (
        <BaseballBase>
          {baseball_base && <IconBaseballBase />}
          {baseball_base_1 && <IconBaseballBase_1 />}
          {baseball_base_1_2 && <IconBaseballBase_1_2 />}
          {baseball_base_1_2_3 && <IconBaseballBase_1_2_3 />}
          {baseball_base_1_3 && <IconBaseballBase_1_3 />}
          {baseball_base_2 && <IconBaseballBase_2 />}
          {baseball_base_2_3 && <IconBaseballBase_2_3 />}
          {baseball_base_3 && <IconBaseballBase_3 />}
        </BaseballBase>
      )}
      {out && (
        <Out>
          <F12>{out}</F12>
        </Out>
      )}
      {legs && <Legs>{legs}</Legs>}
      {neutral && <Neutral />}
      {inplayIndicator && <In_play_indicator />}
      {priceBoost && <PriceBoost12 />}
      {(tv ||
        matchTrackerBadminton ||
        matchTrackerBasketball ||
        matchTrackerDarts ||
        matchTrackerFootball ||
        matchTrackerIceHockey ||
        matchTrackerRugby ||
        matchTrackerTableTennis ||
        matchTrackerTennis ||
        matchTrackerVolleyball) && (
        <MatchTrackerIconWrapper
          matchTrackerActive={tvPlay || tvActive || matchTrackerActive}
        >
          <IconWrapper12>
            {tv &&
              (tvPlay || tvActive ? (
                <Icons.Cc_tv_active />
              ) : (
                <Icons.Tv_button_mop />
              ))}
            {matchTrackerBadminton &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_badminton_active />
              ) : (
                <Icons.Match_tracker_badminton_normal />
              ))}
            {matchTrackerBasketball &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_basketball_active />
              ) : (
                <Icons.Match_tracker_basketball_normal />
              ))}
            {matchTrackerDarts &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_darts_active />
              ) : (
                <Icons.Match_tracker_darts_normal />
              ))}
            {matchTrackerFootball &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_football_active />
              ) : (
                <Icons.Match_tracker_football_normal />
              ))}
            {matchTrackerIceHockey &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_ice_hockey_active />
              ) : (
                <Icons.Match_tracker_ice_hockey_normal />
              ))}
            {matchTrackerRugby &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_rugby_active />
              ) : (
                <Icons.Match_tracker_rugby_normal />
              ))}
            {matchTrackerTableTennis &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_table_tennis_active />
              ) : (
                <Icons.Match_tracker_table_tennis_normal />
              ))}
            {matchTrackerTennis &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_tennis_active />
              ) : (
                <Icons.Match_tracker_tennis_normal />
              ))}
            {matchTrackerVolleyball &&
              (matchTrackerActive ? (
                <Icons.Match_tracker_volleyball_active />
              ) : (
                <Icons.Match_tracker_volleyball_normal />
              ))}
          </IconWrapper12>
        </MatchTrackerIconWrapper>
      )}
      {marketline && (
        <MarketlineIndicator onClick={enterAmp}>
          <F12 bold={1}>{marketline}</F12>
          <Icons.Caret_right />
        </MarketlineIndicator>
      )}
    </FlexLeft>
    <FlexRight>
      {information && (
        <Information16 onClick={toggleInfo} activeArrowUp={infoActive} />
      )}
      {tv && (
        <TvWrapper play={tvPlay || tvActive}>
          <IconWrapper32 onClick={toggleTv}>
            <IconWrapper16>
              <AbsoluteCenter>
                <Icons.Cc_tv_active />
              </AbsoluteCenter>
              <AbsoluteCenter>
                <Icons.Tv_button_mop />
              </AbsoluteCenter>
            </IconWrapper16>
          </IconWrapper32>
        </TvWrapper>
      )}
      {(matchTrackerBadminton ||
        matchTrackerBasketball ||
        matchTrackerDarts ||
        matchTrackerFootball ||
        matchTrackerIceHockey ||
        matchTrackerRugby ||
        matchTrackerTableTennis ||
        matchTrackerTennis ||
        matchTrackerVolleyball) && (
        <MatchTrackerIconWrapper
          matchTrackerActive={matchTrackerActive}
          onClick={toggleMatchTracker}
        >
          <IconWrapper32>
            <IconWrapper16>
              {matchTrackerBadminton && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_badminton_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_badminton_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerBasketball && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_basketball_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_basketball_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerDarts && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_darts_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_darts_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerFootball && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_football_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_football_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerIceHockey && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_ice_hockey_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_ice_hockey_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerRugby && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_rugby_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_rugby_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerTableTennis && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_table_tennis_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_table_tennis_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerTennis && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_tennis_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_tennis_normal />
                  </AbsoluteCenter>
                </>
              )}
              {matchTrackerVolleyball && (
                <>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_volleyball_active />
                  </AbsoluteCenter>
                  <AbsoluteCenter>
                    <Icons.Match_tracker_volleyball_normal />
                  </AbsoluteCenter>
                </>
              )}
            </IconWrapper16>
          </IconWrapper32>
        </MatchTrackerIconWrapper>
      )}
      {statistics && (
        <Statistics
          onClick={showStatistics}
          active={statisticsActive}
          esports={esports}
        />
      )}
      {favorite && (
        <Favorite onClick={toggleFavorite} mopPanelActive={favoriteActive} />
      )}
    </FlexRight>
  </NPDetailWrapper>
)
export const PTeamName = ({
  teamName1,
  teamName2,
  team1Score,
  team2Score,
  team1Score1,
  team2Score1,
  team1Score2,
  team2Score2,
  team1SetScore,
  team1GameScore,
  team1PointsScore,
  team2SetScore,
  team2GameScore,
  team2PointsScore,
  team1CricketScore1,
  team1CricketScore2,
  team2CricketScore1,
  team2CricketScore2,
  team1Score1Active,
  team1Score2Active,
  team2Score1Active,
  team2Score2Active,
  team1Handicap,
  team2Handicap,
  team1ToScore,
  team2ToScore,
  team1Active,
  team2Active,
  team1RedCard,
  team1RedCard_1,
  team1RedCard_2,
  team1RedCard_3,
  team1RedCard_4,
  team2RedCard,
  team2RedCard_1,
  team2RedCard_2,
  team2RedCard_3,
  team2RedCard_4,
  period,
  periodLive,
  information,
  infoActive,
  toggleInfo,
  neutral,
  inplayIndicator,
  legs,
  playSuspended,
  bestOf,
  out,
  baseballInningUp,
  baseballInningDown,
  baseball_base,
  baseball_base_1,
  baseball_base_1_2,
  baseball_base_1_2_3,
  baseball_base_1_3,
  baseball_base_2,
  baseball_base_2_3,
  baseball_base_3,
  marketline,
  priceBoost,
  tv,
  tvActive,
  tvPlay,
  matchTrackerBadminton,
  matchTrackerBasketball,
  matchTrackerDarts,
  matchTrackerFootball,
  matchTrackerIceHockey,
  matchTrackerRugby,
  matchTrackerTableTennis,
  matchTrackerTennis,
  matchTrackerVolleyball,
  matchTrackerActive,
  enterAmp,
  statistics,
  showStatistics,
  statisticsActive,
  favorite,
  favoriteActive,
  toggleFavorite,
  toggleTv,
  toggleMatchTracker,
  esports,
  esportsPeriod,
  esportsGameType,
  esportsStatus,
  esportsScore,
}) => (
  <>
    <PDetailWrapper
      onClick={toggleInfo}
      information={information}
      secondColumn={bestOf || esportsGameType || esportsScore}
    >
      <Period
        live={periodLive}
        playSuspended={playSuspended}
        data-txt-period={period}
      >
        {period || esportsPeriod}
        {esportsStatus && <EsportsStatus>{esportsStatus}</EsportsStatus>}
      </Period>
      {(baseballInningUp || baseballInningDown) && (
        <BaseballInning>
          {baseballInningUp && <Icons.Baseball_inning_up />}
          {baseballInningDown && <Icons.Baseball_inning_down />}
        </BaseballInning>
      )}
      {(baseball_base ||
        baseball_base_1 ||
        baseball_base_1_2 ||
        baseball_base_1_2_3 ||
        baseball_base_1_3 ||
        baseball_base_2 ||
        baseball_base_2_3 ||
        baseball_base_3) && (
        <BaseballBase>
          {baseball_base && <IconBaseballBase />}
          {baseball_base_1 && <IconBaseballBase_1 />}
          {baseball_base_1_2 && <IconBaseballBase_1_2 />}
          {baseball_base_1_2_3 && <IconBaseballBase_1_2_3 />}
          {baseball_base_1_3 && <IconBaseballBase_1_3 />}
          {baseball_base_2 && <IconBaseballBase_2 />}
          {baseball_base_2_3 && <IconBaseballBase_2_3 />}
          {baseball_base_3 && <IconBaseballBase_3 />}
        </BaseballBase>
      )}
      {out && (
        <Out>
          <F12>{out}</F12>
        </Out>
      )}
      {information && <Information12 active={infoActive} />}
      {neutral && <Neutral />}
      {inplayIndicator && <In_play_indicator />}
      {legs && <Legs>{legs}</Legs>}
      {(bestOf || esportsGameType || esportsScore) && (
        <>
          <FlexBreak />
          {(bestOf || esportsGameType) && (
            <EsportsGameType>{bestOf || esportsGameType}</EsportsGameType>
          )}
          {esportsScore && <EsportsScore>{esportsScore}</EsportsScore>}
        </>
      )}
    </PDetailWrapper>
    <TeamNameWrapper onClick={enterAmp}>
      <FlexCenter>
        {team1Active && <ActiveTeam />}
        {team1RedCard && <RedCard />}
        {team1RedCard_1 && <RedCard RedCard_1 />}
        {team1RedCard_2 && <RedCard RedCard_2 />}
        {team1RedCard_3 && <RedCard RedCard_3 />}
        {team1RedCard_4 && <RedCard RedCard_4 />}
      </FlexCenter>
      {team1Score && (
        <Score bold={team1ToScore} data-txt-home-score={team1Score}>
          <F14>{team1Score}</F14>
        </Score>
      )}
      {team1CricketScore1 && (
        <FlexCenterColumn>
          {team1CricketScore1 && (
            <Score
              points={1}
              cricketActive={team1Score1Active}
              data-txt-home-score={team1CricketScore1}
            >
              <F14>{team1CricketScore1}</F14>
            </Score>
          )}
          {team1CricketScore2 && (
            <Score
              points={1}
              cricketActive={team1Score2Active}
              data-txt-home-score={team1CricketScore2}
            >
              <F14>{team1CricketScore2}</F14>
            </Score>
          )}
        </FlexCenterColumn>
      )}
      <FlexLeftColumn>
        <TeamName active={team1Handicap} data-txt-comp-name={teamName1}>
          <F14>{teamName1}</F14>
        </TeamName>
        {(team1Score1 || team1Score2) && (
          <FlexLeft>
            {team1Score1 && (
              <Score data-txt-home-score={team1Score1}>
                <F14>{team1Score1}</F14>
              </Score>
            )}
            <Score points={1} data-txt-home-score={team1Score2}>
              <F14>{team1Score2}</F14>
            </Score>
          </FlexLeft>
        )}
        {team1SetScore && (
          <FlexLeft>
            {team1SetScore && (
              <Score tennisSet={1} data-txt-home-score={team1SetScore}>
                <F14>{team1SetScore}</F14>
              </Score>
            )}
            {team1GameScore && (
              <Score tennisGame={1} data-txt-home-score={team1GameScore}>
                <F14>{team1GameScore}</F14>
              </Score>
            )}
            {team1PointsScore && (
              <Score tennisPoints={1} data-txt-home-score={team1PointsScore}>
                <F14>{team1PointsScore}</F14>
              </Score>
            )}
          </FlexLeft>
        )}
      </FlexLeftColumn>
      <FlexCenter>
        {team2Active && <ActiveTeam />}
        {team2RedCard && <RedCard />}
        {team2RedCard_1 && <RedCard RedCard_1 />}
        {team2RedCard_2 && <RedCard RedCard_2 />}
        {team2RedCard_3 && <RedCard RedCard_3 />}
        {team2RedCard_4 && <RedCard RedCard_4 />}
      </FlexCenter>
      {team2Score && (
        <Score bold={team2ToScore}>
          <F14>{team2Score}</F14>
        </Score>
      )}
      {team2CricketScore1 && (
        <FlexCenterColumn>
          {team2CricketScore1 && (
            <Score
              points={1}
              cricketActive={team2Score1Active}
              data-txt-home-score={team2CricketScore1}
            >
              <F14>{team2CricketScore1}</F14>
            </Score>
          )}
          {team2CricketScore2 && (
            <Score
              points={1}
              cricketActive={team2Score2Active}
              data-txt-home-score={team2CricketScore2}
            >
              <F14>{team2CricketScore2}</F14>
            </Score>
          )}
        </FlexCenterColumn>
      )}
      <FlexLeftColumn>
        <TeamName active={team2Handicap} data-txt-comp-name={teamName2}>
          <F14>{teamName2}</F14>
        </TeamName>
        {(team2Score1 || team2Score2) && (
          <FlexLeft>
            {team2Score1 && (
              <Score data-txt-home-score={team2Score1}>
                <F14>{team2Score1}</F14>
              </Score>
            )}
            <Score points={1} data-txt-home-score={team2Score2}>
              <F14>{team2Score2}</F14>
            </Score>
          </FlexLeft>
        )}
        {team2SetScore && (
          <FlexLeft>
            {team2SetScore && (
              <Score tennisSet={1} data-txt-home-score={team2SetScore}>
                <F14>{team2SetScore}</F14>
              </Score>
            )}
            {team2GameScore && (
              <Score tennisGame={1} data-txt-home-score={team2GameScore}>
                <F14>{team2GameScore}</F14>
              </Score>
            )}
            {team2PointsScore && (
              <Score tennisPoints={1} data-txt-home-score={team2PointsScore}>
                <F14>{team2PointsScore}</F14>
              </Score>
            )}
          </FlexLeft>
        )}
      </FlexLeftColumn>
    </TeamNameWrapper>
    <PDetailWrapper bottom={1}>
      <FlexLeft>
        {priceBoost && <PriceBoost12 />}
        {(tv ||
          matchTrackerBadminton ||
          matchTrackerBasketball ||
          matchTrackerDarts ||
          matchTrackerFootball ||
          matchTrackerIceHockey ||
          matchTrackerRugby ||
          matchTrackerTableTennis ||
          matchTrackerTennis ||
          matchTrackerVolleyball) && (
          <MatchTrackerIconWrapper
            matchTrackerActive={tvPlay || tvActive || matchTrackerActive}
            onClick={toggleMatchTracker}
          >
            <IconWrapper12>
              {tv &&
                (tvPlay || tvActive ? (
                  <Icons.Cc_tv_active />
                ) : (
                  <Icons.Tv_button_mop />
                ))}
              {matchTrackerBadminton &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_badminton_active />
                ) : (
                  <Icons.Match_tracker_badminton_normal />
                ))}
              {matchTrackerBasketball &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_basketball_active />
                ) : (
                  <Icons.Match_tracker_basketball_normal />
                ))}
              {matchTrackerDarts &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_darts_active />
                ) : (
                  <Icons.Match_tracker_darts_normal />
                ))}
              {matchTrackerFootball &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_football_active />
                ) : (
                  <Icons.Match_tracker_football_normal />
                ))}
              {matchTrackerIceHockey &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_ice_hockey_active />
                ) : (
                  <Icons.Match_tracker_ice_hockey_normal />
                ))}
              {matchTrackerRugby &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_rugby_active />
                ) : (
                  <Icons.Match_tracker_rugby_normal />
                ))}
              {matchTrackerTableTennis &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_table_tennis_active />
                ) : (
                  <Icons.Match_tracker_table_tennis_normal />
                ))}
              {matchTrackerTennis &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_tennis_active />
                ) : (
                  <Icons.Match_tracker_tennis_normal />
                ))}
              {matchTrackerVolleyball &&
                (matchTrackerActive ? (
                  <Icons.Match_tracker_volleyball_active />
                ) : (
                  <Icons.Match_tracker_volleyball_normal />
                ))}
            </IconWrapper12>
          </MatchTrackerIconWrapper>
        )}
        {marketline && (
          <MarketlineIndicator onClick={enterAmp} data-txt-more-bet>
            <F12 bold={1}>{marketline}</F12>
            <Icons.Caret_right />
          </MarketlineIndicator>
        )}
      </FlexLeft>
      <FlexRight>
        {tv && (
          <TvWrapper play={tvPlay || tvActive}>
            <IconWrapper32 onClick={toggleTv}>
              <IconWrapper16>
                <AbsoluteCenter>
                  <Icons.Cc_tv_active />
                </AbsoluteCenter>
                <AbsoluteCenter>
                  <Icons.Tv_button_mop />
                </AbsoluteCenter>
              </IconWrapper16>
            </IconWrapper32>
          </TvWrapper>
        )}
        {(matchTrackerBadminton ||
          matchTrackerBasketball ||
          matchTrackerDarts ||
          matchTrackerFootball ||
          matchTrackerIceHockey ||
          matchTrackerRugby ||
          matchTrackerTableTennis ||
          matchTrackerTennis ||
          matchTrackerVolleyball) && (
          <MatchTrackerIconWrapper
            matchTrackerActive={matchTrackerActive}
            onClick={toggleMatchTracker}
          >
            <IconWrapper32>
              <IconWrapper16>
                {matchTrackerBadminton && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_badminton_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_badminton_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerBasketball && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_basketball_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_basketball_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerDarts && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_darts_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_darts_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerFootball && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_football_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_football_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerIceHockey && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_ice_hockey_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_ice_hockey_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerRugby && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_rugby_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_rugby_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerTableTennis && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_table_tennis_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_table_tennis_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerTennis && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_tennis_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_tennis_normal />
                    </AbsoluteCenter>
                  </>
                )}
                {matchTrackerVolleyball && (
                  <>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_volleyball_active />
                    </AbsoluteCenter>
                    <AbsoluteCenter>
                      <Icons.Match_tracker_volleyball_normal />
                    </AbsoluteCenter>
                  </>
                )}
              </IconWrapper16>
            </IconWrapper32>
          </MatchTrackerIconWrapper>
        )}
        {statistics && (
          <Statistics
            onClick={showStatistics}
            active={statisticsActive}
            data-btn-stats={1}
            esports={esports}
          />
        )}
        {favorite && (
          <Favorite onClick={toggleFavorite} mopPanelActive={favoriteActive} />
        )}
      </FlexRight>
    </PDetailWrapper>
  </>
)

export const PenaltyShootout = ({
  round,
  penState,
  team1_1_goal,
  team1_1_goal_active,
  team1_1_missed,
  team1_1_missed_active,
  team1_1_blank,
  team1_1_current,
  team1_2_goal,
  team1_2_goal_active,
  team1_2_missed,
  team1_2_missed_active,
  team1_2_blank,
  team1_2_current,
  team1_3_goal,
  team1_3_goal_active,
  team1_3_missed,
  team1_3_missed_active,
  team1_3_blank,
  team1_3_current,
  team1_4_goal,
  team1_4_goal_active,
  team1_4_missed,
  team1_4_missed_active,
  team1_4_blank,
  team1_4_current,
  team1_5_goal,
  team1_5_goal_active,
  team1_5_missed,
  team1_5_missed_active,
  team1_5_blank,
  team1_5_current,
  team2_1_goal,
  team2_1_goal_active,
  team2_1_missed,
  team2_1_missed_active,
  team2_1_blank,
  team2_1_current,
  team2_2_goal,
  team2_2_goal_active,
  team2_2_missed,
  team2_2_missed_active,
  team2_2_blank,
  team2_2_current,
  team2_3_goal,
  team2_3_goal_active,
  team2_3_missed,
  team2_3_missed_active,
  team2_3_blank,
  team2_3_current,
  team2_4_goal,
  team2_4_goal_active,
  team2_4_missed,
  team2_4_missed_active,
  team2_4_blank,
  team2_4_current,
  team2_5_goal,
  team2_5_goal_active,
  team2_5_missed,
  team2_5_missed_active,
  team2_5_blank,
  team2_5_current,
}) => (
  <PensWrapper>
    <PenaltyIndicatorWrapper>
      {team1_1_goal && <PenaltyIndicatorGoal active={team1_1_goal_active} />}
      {team1_1_missed && (
        <PenaltyIndicatorMissed active={team1_1_missed_active} />
      )}
      {team1_1_blank && <PenaltyIndicatorBlank />}
      {team1_1_current && <PenaltyIndicatorCurrent />}
      {team1_2_goal && <PenaltyIndicatorGoal active={team1_2_goal_active} />}
      {team1_2_missed && (
        <PenaltyIndicatorMissed active={team1_2_missed_active} />
      )}
      {team1_2_blank && <PenaltyIndicatorBlank />}
      {team1_2_current && <PenaltyIndicatorCurrent />}
      {team1_3_goal && <PenaltyIndicatorGoal active={team1_3_goal_active} />}
      {team1_3_missed && (
        <PenaltyIndicatorMissed active={team1_3_missed_active} />
      )}
      {team1_3_blank && <PenaltyIndicatorBlank />}
      {team1_3_current && <PenaltyIndicatorCurrent />}
      {team1_4_goal && <PenaltyIndicatorGoal active={team1_4_goal_active} />}
      {team1_4_missed && (
        <PenaltyIndicatorMissed active={team1_4_missed_active} />
      )}
      {team1_4_blank && <PenaltyIndicatorBlank />}
      {team1_4_current && <PenaltyIndicatorCurrent />}
      {team1_5_goal && <PenaltyIndicatorGoal active={team1_5_goal_active} />}
      {team1_5_missed && (
        <PenaltyIndicatorMissed active={team1_5_missed_active} />
      )}
      {team1_5_blank && <PenaltyIndicatorBlank />}
      {team1_5_current && <PenaltyIndicatorCurrent />}
    </PenaltyIndicatorWrapper>
    <Round round={round} penState={penState} />
    <PenaltyIndicatorWrapper>
      {team2_1_goal && <PenaltyIndicatorGoal active={team2_1_goal_active} />}
      {team2_1_missed && (
        <PenaltyIndicatorMissed active={team2_1_missed_active} />
      )}
      {team2_1_blank && <PenaltyIndicatorBlank />}
      {team2_1_current && <PenaltyIndicatorCurrent />}
      {team2_2_goal && <PenaltyIndicatorGoal active={team2_2_goal_active} />}
      {team2_2_missed && (
        <PenaltyIndicatorMissed active={team2_2_missed_active} />
      )}
      {team2_2_blank && <PenaltyIndicatorBlank />}
      {team2_2_current && <PenaltyIndicatorCurrent />}
      {team2_3_goal && <PenaltyIndicatorGoal active={team2_3_goal_active} />}
      {team2_3_missed && (
        <PenaltyIndicatorMissed active={team2_3_missed_active} />
      )}
      {team2_3_blank && <PenaltyIndicatorBlank />}
      {team2_3_current && <PenaltyIndicatorCurrent />}
      {team2_4_goal && <PenaltyIndicatorGoal active={team2_4_goal_active} />}
      {team2_4_missed && (
        <PenaltyIndicatorMissed active={team2_4_missed_active} />
      )}
      {team2_4_blank && <PenaltyIndicatorBlank />}
      {team2_4_current && <PenaltyIndicatorCurrent />}
      {team2_5_goal && <PenaltyIndicatorGoal active={team2_5_goal_active} />}
      {team2_5_missed && (
        <PenaltyIndicatorMissed active={team2_5_missed_active} />
      )}
      {team2_5_blank && <PenaltyIndicatorBlank />}
      {team2_5_current && <PenaltyIndicatorCurrent />}
    </PenaltyIndicatorWrapper>
  </PensWrapper>
)

export const OBTOddsType = ({ oddsType, active, switchOBTTab }) => (
  <OBTOddsTypeWrapper active={active} onClick={switchOBTTab}>
    <FlexCenter>
      <F14>{oddsType}</F14>
    </FlexCenter>
  </OBTOddsTypeWrapper>
)

export const OBTOddsTypeWrapper = styled.div`
  white-space: nowrap;
  height: 100%;
  padding: 0px 12px;
  ${FlexCenter} {
    height: 100%;
    ${(props) =>
      props.active
        ? `color:${props.theme.color_A3}; 
       border-bottom: 2px solid ${props.theme.color_A3};`
        : `color:${props.theme.color_P3_9_OP64};
        border-bottom: 2px solid transparent;}`};
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color_A3};
      }
    }
    &:active {
      cursor: pointer;
      color: ${(props) => props.theme.color_A3};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const OBTOddsTypeTitleContainer = styled(RelativeWrapper)`
  border-top: 1px solid ${(props) => props.theme.color_A4};
  ${Shadow} {
    width: 68px;
  }
`
export const OBTOddsTypeTitleWrapper = styled(FlexScrollWrapper)`
  height: 48px;
  padding-left: 8px;
  margin-right: ${(props) => props.closeButton && `56px;`};
`
export const OBTPanelWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.color_S4};
  margin-bottom: 8px;
  ${MarketWrapper2} {
    padding: 16px;
    margin: 0px;
  }
  ${MarketWrapper1} {
    grid-template-columns: 1fr 92px;
    margin: 0px;
  }
  ${PremiumPanelWrapper} {
    margin-bottom: 0px;
    padding: 0px 0px 16px 0px;
    ${OddsPanelWrapper} {
      &::-webkit-scrollbar-thumb {
        border: 1px solid ${(props) => props.theme.color_S4};
      }
    }
  }

  ${MarketWrapperT6} > ${MarketWrapper2} {
    margin-bottom: 0px;
    padding: 0px 16px 16px 16px;
  }
  ${SelectionTitle} {
    height: 56px;
    ${FlexRight} {
      color: ${(props) => props.theme.color_P3_OP100};
    }
    ${FlexLeft} {
      color: ${(props) => props.theme.color_P3_OP56};
    }
  }
  ${Period},${FavoriteWrapper} {
    display: none;
  }
`
export const CorrectScoreTeamNameWrapper = styled.div`
  display: grid;
  grid-auto-rows: 50%;
  height: 100%;
  background: ${(props) => props.theme.color_S4_OP32};

  padding: 8px 0px 8px 0px;
  margin-bottom: 16px;
  grid-template-columns: 16px 1fr 64px;
  grid-template-rows: 50% 50%;
  text-align: center;
  height: 80px;
  &:hover {
    cursor: pointer;
  }
  ${Score} {
    font-size: 14px;
    display: none;
  }
  ${TeamName} {
    text-align: left;
    color: ${(props) => props.theme.color_P3_OP100};
    ${F16} {
      ${Truncate(2)}
    }
  }
  ${NPDetailWrapper} {
    height: 100%;
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    ${Period} {
      width: 64px;
      text-align: center;
      padding-bottom: 5px;
      ${(props) =>
        props.active ? props.theme.color_A3 : props.theme.color_P3_2_OP56};
    }
  }
  ${(props) =>
    props.Inplay &&
    `grid-template-columns: 16px 24px 1fr 64px; 
     padding-left:0px;
     ${FlexCenter},${Score}{display: flex;}
     ${Score}{justify-content: flex-start;}
     ${NPDetailWrapper} {
      grid-column-start: 4; 
      grid-row-start: 1; 
      grid-row-end: 3;
      }
    `}
`

export const FootballPriceBoostTitleWrapper = styled.div`
  ${FlexSpaceBetween(56)}
  padding: 4px 8px 4px 16px;
  ${F14} {
    margin-left: 8px;
    color: ${(props) => props.theme.color_A1};
    ${Truncate(2)}
  }
`
export const FootballPriceBoostTitleContainer = styled.div`
  ${MarketWrapper2to1} {
    grid-gap: 0;
    margin: 0;
  }
  ${FootballPriceBoostTitleWrapper}:nth-child(odd) {
    padding: 12px 0px 12px 16px;
  }
  ${FootballPriceBoostTitleWrapper}:nth-child(even) {
    padding: 12px 8px 12px 8px;
  }
`

export const PriceBoostTitle = ({ text, onClick }) => (
  <FootballPriceBoostTitleWrapper>
    <Flex>
      <PriceBoost16 />
      <F14 bold={1} uppercase={1}>
        {text}
      </F14>
    </Flex>
    <IconWrapper32 onClick={onClick}>
      <Information16 />
    </IconWrapper32>
  </FootballPriceBoostTitleWrapper>
)

export const PriceBoostWrapper = styled.div`
  ${OBTPanelWrapper} {
    background: ${(props) => props.theme.color_P4_2};
  }
  ${(props) =>
    props.featured &&
    `
    ${PriceBoostTitle} {
      padding: 0px;
    }
    ${media.tablet`
      ${PriceBoostTitle},${MarketWrapper1} {
        &:nth-last-child(1){
          display: none;
        }
      }
    `}
  `};
`
//-------------------- Penalty Indicator --------------------//

export const PenaltyIndicatorSpring = styled.div`
  position: relative;
  animation: ${goalFadeIn} 0.5s ease 0s 1;
`
export const PenaltyIndicatorAnimation = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0px;
  transform: scale(0.1);
  animation: ${process} 1.5s ease 100ms infinite;
  border-style: solid;
  border-image: initial;
  border-radius: 50%;
  transition: all 0s ease 0s;
`
export const GoalFadeOutSlow = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 100ms 1;
  border-color: ${(props) => props.theme.color_A1_1};
`
export const GoalFadeOutMedium = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 300ms 1;
  border-color: ${(props) => props.theme.color_A1_1};
`
export const GoalFadeOutFast = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 500ms 1;
  border-color: ${(props) => props.theme.color_A1_1};
`
export const MissedFadeOutSlow = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 100ms 1;
  border-color: ${(props) => props.theme.color_A5_2};
`
export const MissedFadeOutMedium = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 300ms 1;
  border-color: ${(props) => props.theme.color_A5_2};
`
export const MissedFadeOutFast = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 500ms 1;
  border-color: ${(props) => props.theme.color_A5_2};
`
export const CurrentFadeOutSlow = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 100ms infinite;
  border-color: ${(props) => props.theme.color_A1_1};
`
export const CurrentFadeOutMedium = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 300ms infinite;
  border-color: ${(props) => props.theme.color_A1_1};
`
export const CurrentFadeOutFast = styled(PenaltyIndicatorAnimation)`
  animation: ${goalFadeOut} 1.5s ease 500ms infinite;
  border-color: ${(props) => props.theme.color_A1_1};
`

export const IconsPenaltyIndicatorBlank = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color_S7_OP56};
`
export const PenaltyIndicatorBlank = () => <IconsPenaltyIndicatorBlank />
export const IconsPenaltyIndicatorGoal = styled(IconsPenaltyIndicatorBlank)`
  background-color: ${(props) => props.theme.color_A1_1};
`
export const PenaltyIndicatorGoal = ({ active }) => (
  <>
    {active ? (
      <PenaltyIndicatorSpring>
        <IconsPenaltyIndicatorGoal />
        <GoalFadeOutSlow />
        <GoalFadeOutMedium />
        <GoalFadeOutFast />
      </PenaltyIndicatorSpring>
    ) : (
      <IconsPenaltyIndicatorGoal />
    )}
  </>
)
export const IconsPenaltyIndicatorMissed = styled(IconsPenaltyIndicatorBlank)`
  background-color: ${(props) => props.theme.color_A5_2};
`
export const PenaltyIndicatorMissed = ({ active }) => (
  <>
    {active ? (
      <PenaltyIndicatorSpring>
        <IconsPenaltyIndicatorMissed />
        <MissedFadeOutSlow />
        <MissedFadeOutMedium />
        <MissedFadeOutFast />
      </PenaltyIndicatorSpring>
    ) : (
      <IconsPenaltyIndicatorMissed />
    )}
  </>
)
export const IconsPenaltyIndicatorCurrent = styled(IconsPenaltyIndicatorBlank)`
  background-color: ${(props) => props.theme.color_A8};
  border: 1px solid ${(props) => props.theme.color_A1_1};
`
export const PenaltyIndicatorCurrent = () => (
  <PenaltyIndicatorSpring>
    <IconsPenaltyIndicatorCurrent />
    <CurrentFadeOutSlow />
    <CurrentFadeOutMedium />
    <CurrentFadeOutFast />
  </PenaltyIndicatorSpring>
)
export const RoundWrapper = styled.div`
  text-align: center;
  width: 164px;
  ${F12} {
    color: ${(props) => props.theme.color_P3_OP40};
    &:nth-child(1) {
      white-space: nowrap;
      color: ${(props) => props.theme.color_A3_7};
    }
    &:last-child {
      ${Truncate(1)};
    }
  }
`
export const Round = ({ round, penState }) => (
  <RoundWrapper>
    <F12>{round}</F12>
    <F12>{penState}</F12>
  </RoundWrapper>
)

export const PenaltyIndicatorWrapper = styled.div`
  padding: 0px 8px;
  ${FlexSpaceBetween(48)};
  max-width: 127px;
`

export const PensWrapper = styled(FlexCenter)`
  height: 40px;
  ${IconWrapper16} {
    padding: 0px 2px;
  }
`

//-------------------- Scoreboard --------------------//
export const NPDetailWrapperBottom = styled(FlexLeft)`
  ${FlexSpaceBetween}
  min-height: 32px;
  height: auto;
  ${FlexRight} {
    width: 118px;
    flex-wrap: wrap;
  }
`
export const Batsman = styled(F12)`
  ${Truncate(1)}
`
export const TennisGame = styled(F12)`
  margin-left: 8px;
  white-space: normal;
  color: ${(props) => props.theme.color_P2_3};
`
export const DartSets = styled(Score)`
  margin-left: 2px;
`
export const ScoreboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 16px 1fr 72px;
  grid-template-rows: 40px 40px;
  ${PensWrapper} {
    background: ${(props) => props.theme.color_S1_2};
  }
  ${TeamName} {
    padding-right: 20px;
    max-width: ${(props) =>
      props.Cricket
        ? 'calc(33vw - 164px - 8px)'
        : props.Inplay || props.wideScore
        ? 'calc(33vw - 124px - 8px)'
        : props.ThreeScores || props.wideScore
        ? 'calc(33vw - 112px - 8px)'
        : 'calc(33vw - 88px - 8px);'};
    ${media.desktop`max-width: ${(props) =>
      props.Cricket
        ? 'calc(100vw - 164px - 8px)'
        : props.Inplay || props.wideScore
        ? 'calc(100vw - 124px - 8px)'
        : props.ThreeScores || props.wideScore
        ? 'calc(100vw - 112px - 8px)'
        : 'calc(100vw - 88px - 8px);'};`};
  }
  ${TeamName} > ${F16} {
    color: ${(props) => props.theme.color_P4_4};
    ${Truncate(2)};
  }
  ${RoundWrapper} {
    ${F12} {
      color: ${(props) => props.theme.color_P4_24_OP56};

      &:nth-child(1) {
        color: ${(props) => props.theme.color_P2_3};
      }
    }
  }
  ${NPDetailWrapper} {
    > div {
      display: block;
      width: 100%;
    }
    height: 100%;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 0px 10px;
    ${Period} {
      text-align: center;
      line-height: 16px;
      &:first-child {
        padding-bottom: ${(props) => props.neutral && `4px`};
      }
    }
    ${BaseballInning} {
      padding: 0px 5px 3px 5px;
    }
  }
  ${PensWrapper}, ${NPDetailWrapperBottom} {
    grid-column: span 4;
    padding: 0px 16px;
    ${Score} {
      font-size: 12px;
      padding: 4px 0px 4px 8px;
      ${(props) => props.active && `font-weight: bold;`};
      ${(props) => props.playSuspended && `display: block;`};
      &:first-child {
        padding-left: 0px;
      }
    }
    ${Period} {
      padding-right: 8px;
    }
    ${Out},${Legs},${Batsman} {
      color: ${(props) => props.theme.color_P4_24_OP56};
    }
  }

  ${(props) =>
    props.Cricket
      ? `grid-template-columns: 16px 64px 1fr 72px;
          ${NPDetailWrapper} {
            grid-column-start: 4;
            grid-column-end: 5;
          }
          ${NPDetailWrapperBottom} {
            display: grid;
            grid-template-columns: 1fr 32px 1fr 32px;
            ${FlexCenter}{
              grid-column: span 4;
              height: 32px;  
            }
            ${Score}{height: 32px;}
          }`
      : props.wideScore && props.Inplay
      ? `grid-template-columns: 16px 32px 1fr 72px;
          ${NPDetailWrapper} {
            grid-column-start: 4;
            grid-column-end: 5;
          }
          ${NPDetailWrapperBottom} {
            grid-column: span 4; 
          }`
      : props.wideScore
      ? `grid-template-columns: 16px 32px 1fr 72px;
          ${NPDetailWrapper} {
            grid-column-start: 4;
            grid-column-end: 5;
          }`
      : props.ThreeScores && props.region
      ? `grid-template-columns: 16px 24px 1fr 24px 24px 32px;
        div:nth-child(7n-1){padding-right: 10px;}
        ${NPDetailWrapper} {display: none;}
        ${NPDetailWrapperBottom} {grid-column: span 6;}`
      : props.ThreeScores
      ? `grid-template-columns: 16px 1fr 24px 24px 32px;
        div:nth-child(6n-1){padding-right: 10px;}
        ${NPDetailWrapper} {display: none;}
        ${NPDetailWrapperBottom} {grid-column: span 5;}`
      : props.TwoScores && props.region
      ? ` grid-template-columns: 16px 24px 1fr 24px 32px;
        div:nth-child(6n-1){padding-right: 10px;}
        ${NPDetailWrapper} {display: none;}
        ${NPDetailWrapperBottom} {
          grid-column: span 5; 
        }`
      : props.TwoScores
      ? ` grid-template-columns: 16px 1fr 24px 32px;
        div:nth-child(5n-1){padding-right: 10px;}
        ${NPDetailWrapper} {display: none;}
        ${NPDetailWrapperBottom} {
          grid-column: span 4; 
        }`
      : props.OneScore && props.region
      ? ` grid-template-columns: 16px 24px 1fr 48px;
        div:nth-child(5n-1){padding-right: 10px;}
        ${NPDetailWrapper} {display: none;}
        ${NPDetailWrapperBottom} {
          grid-column: span 3; 
        }`
      : props.OneScore
      ? ` grid-template-columns: 16px 1fr 48px;
        div:nth-child(4n-1){padding-right: 10px;}
        ${NPDetailWrapper} {display: none;}
        ${NPDetailWrapperBottom} {
          grid-column: span 3; 
        }`
      : props.region || props.Inplay
      ? `grid-template-columns: 16px 24px 1fr 72px;
          ${NPDetailWrapper} {
            grid-column-start: 4;
            grid-column-end: 5;
          }
          ${NPDetailWrapperBottom} {
          grid-column: span 4; 
          }`
      : `grid-template-columns: 16px 1fr 72px;${NPDetailWrapperBottom} {
          grid-column: span 3; 
          }`};
`
export const Scoreboard = ({
  img,
  alt,
  inplay,
  region1,
  region2,
  teamName1,
  teamName2,
  team1Score,
  team2Score,
  team1Score1,
  team2Score1,
  team1Score2,
  team2Score2,
  team1SetScore,
  team1GameScore,
  team1PointsScore,
  team2SetScore,
  team2GameScore,
  team2PointsScore,
  cricket,
  cricketInningsScore,
  cricketBatsman1,
  cricketBatsman1Score,
  cricketBatsman2,
  cricketBatsman2Score,
  team1ToScore,
  team2ToScore,
  team1Active,
  team2Active,
  team1RedCard,
  team1RedCard_1,
  team1RedCard_2,
  team1RedCard_3,
  team1RedCard_4,
  team2RedCard,
  team2RedCard_1,
  team2RedCard_2,
  team2RedCard_3,
  team2RedCard_4,
  esportsTeam1Color,
  esportsTeam2Color,
  set1,
  set2,
  set3,
  set4,
  set5,
  set6,
  period,
  periodTime,
  periodLive,
  gameType,
  gameTypeLive,
  esportsPeriod,
  esportsPeriodLive,
  esportsStatus,
  esportsGameType,
  esportsStatistics,
  showStatistics,
  esportsScore,
  baseballInningUp,
  baseballInningDown,
  baseball_base,
  baseball_base_1,
  baseball_base_1_2,
  baseball_base_1_2_3,
  baseball_base_1_3,
  baseball_base_2,
  baseball_base_2_3,
  baseball_base_3,
  out,
  tennisSet,
  tennisGame,
  dartSets,
  legs,
  dartlegs,
  playSuspended,
  neutral,
  pens,
  round,
  penState,
  team1_1_goal,
  team1_1_goal_active,
  team1_1_missed,
  team1_1_missed_active,
  team1_1_blank,
  team1_1_current,
  team1_2_goal,
  team1_2_goal_active,
  team1_2_missed,
  team1_2_missed_active,
  team1_2_blank,
  team1_2_current,
  team1_3_goal,
  team1_3_goal_active,
  team1_3_missed,
  team1_3_missed_active,
  team1_3_blank,
  team1_3_current,
  team1_4_goal,
  team1_4_goal_active,
  team1_4_missed,
  team1_4_missed_active,
  team1_4_blank,
  team1_4_current,
  team1_5_goal,
  team1_5_goal_active,
  team1_5_missed,
  team1_5_missed_active,
  team1_5_blank,
  team1_5_current,
  team2_1_goal,
  team2_1_goal_active,
  team2_1_missed,
  team2_1_missed_active,
  team2_1_blank,
  team2_1_current,
  team2_2_goal,
  team2_2_goal_active,
  team2_2_missed,
  team2_2_missed_active,
  team2_2_blank,
  team2_2_current,
  team2_3_goal,
  team2_3_goal_active,
  team2_3_missed,
  team2_3_missed_active,
  team2_3_blank,
  team2_3_current,
  team2_4_goal,
  team2_4_goal_active,
  team2_4_missed,
  team2_4_missed_active,
  team2_4_blank,
  team2_4_current,
  team2_5_goal,
  team2_5_goal_active,
  team2_5_missed,
  team2_5_missed_active,
  team2_5_blank,
  team2_5_current,
  wideScore,
  threeScores,
  twoScores,
  oneScore,
  Q1Score,
  Q2Score,
  Q3Score,
  Q4Score,
  OTScore,
  Q1Active,
  Q2Active,
  Q3Active,
  Q4Active,
  OTActive,
  H1Score,
  H2Score,
  H1Active,
  H2Active,
  fullTimeScore,
  extraTimeScore,
}) => (
  <HeaderBg img={img} alt={alt} scoreboard={1}>
    <ScoreboardWrapper
      Inplay={inplay}
      playSuspended={playSuspended}
      wideScore={wideScore}
      ThreeScores={threeScores}
      TwoScores={twoScores}
      OneScore={oneScore}
      region={region1 || region2}
      Cricket={cricket}
      neutral={neutral}
    >
      <FlexCenter>
        {team1Active && <ActiveTeam />}
        {team1RedCard && <RedCard />}
        {team1RedCard_1 && <RedCard RedCard_1 />}
        {team1RedCard_2 && <RedCard RedCard_2 />}
        {team1RedCard_3 && <RedCard RedCard_3 />}
        {team1RedCard_4 && <RedCard RedCard_4 />}
        {esportsTeam1Color && (
          <EsportsTeam1Active esportsTeam1Color={esportsTeam1Color} />
        )}
      </FlexCenter>
      {team1Score && (
        <Score sc={1} bold={team1ToScore}>
          <F16>{team1Score}</F16>
        </Score>
      )}
      {region1 && (
        <FlexLeft>
          <IconWrapper16>{region1}</IconWrapper16>
        </FlexLeft>
      )}
      <TeamName>
        <F16>{teamName1}</F16>
      </TeamName>
      {twoScores && team1Score1 && !team1Score2 && <Score />}
      {(team1SetScore || team1Score1) && (
        <Score tennisSet_sc>
          <F16>{team1SetScore || team1Score1}</F16>
        </Score>
      )}
      {(team1GameScore || team1Score2) && (
        <Score tennisGame_sc>
          <F16>{team1GameScore || team1Score2}</F16>
        </Score>
      )}
      {team1PointsScore && (
        <Score tennisPoints_sc>
          <F16>{team1PointsScore}</F16>
        </Score>
      )}
      <NPDetailWrapper>
        <FlexColumn>
          <FlexCenter>
            <FlexColumn>
              <Period scoreboard={1} scoreboardLive={periodLive}>
                {period}
              </Period>
              {periodTime && (
                <Period scoreboard={1} scoreboardLive={periodLive}>
                  {periodTime}
                </Period>
              )}
            </FlexColumn>
            {(baseballInningUp || baseballInningDown) && (
              <BaseballInning>
                {baseballInningUp && <Icons.Baseball_inning_up />}
                {baseballInningDown && <Icons.Baseball_inning_down />}
              </BaseballInning>
            )}
          </FlexCenter>
          {neutral && <Neutral />}
        </FlexColumn>
      </NPDetailWrapper>
      <FlexCenter>
        {team2Active && <ActiveTeam />}
        {team2RedCard && <RedCard />}
        {team2RedCard_1 && <RedCard RedCard_1 />}
        {team2RedCard_2 && <RedCard RedCard_2 />}
        {team2RedCard_3 && <RedCard RedCard_3 />}
        {team2RedCard_4 && <RedCard RedCard_4 />}
        {esportsTeam2Color && (
          <EsportsTeam2Active esportsTeam2Color={esportsTeam2Color} />
        )}
      </FlexCenter>
      {team2Score && (
        <Score sc={1} bold={team2ToScore}>
          <F16>{team2Score}</F16>
        </Score>
      )}
      {region2 && (
        <FlexLeft>
          <IconWrapper16>{region2}</IconWrapper16>
        </FlexLeft>
      )}
      <TeamName>
        <F16>{teamName2}</F16>
      </TeamName>
      {twoScores && team1Score1 && !team1Score2 && <Score />}
      {(team2SetScore || team2Score1) && (
        <Score tennisSet_sc={1}>
          <F16>{team2SetScore || team2Score1}</F16>
        </Score>
      )}
      {(team2GameScore || team2Score2) && (
        <Score tennisGame_sc={1}>
          <F16>{team2GameScore || team2Score2}</F16>
        </Score>
      )}
      {team2PointsScore && (
        <Score tennisPoints_sc={1}>
          <F16>{team2PointsScore}</F16>
        </Score>
      )}
      {((wideScore && inplay) ||
        threeScores ||
        twoScores ||
        oneScore ||
        gameType ||
        baseballInningUp ||
        baseballInningDown ||
        cricketBatsman1 ||
        cricketBatsman2 ||
        cricketInningsScore ||
        esportsPeriod ||
        esportsScore) && (
        <NPDetailWrapperBottom>
          {cricketInningsScore && (
            <FlexCenter>
              <Score detail_sc={1}>{cricketInningsScore}</Score>
            </FlexCenter>
          )}
          {cricketBatsman1 && <Batsman>{cricketBatsman1} </Batsman>}
          {cricketBatsman1Score && (
            <Score scoreboardActive={1} bold={1}>
              {cricketBatsman1Score}
            </Score>
          )}
          {cricketBatsman2 && <Batsman>{cricketBatsman2} </Batsman>}
          {cricketBatsman2Score && (
            <Score scoreboardActive={1} bold={1}>
              {cricketBatsman2Score}
            </Score>
          )}
          <FlexLeft>
            {fullTimeScore && (
              <Score detail_sc={1} scoreboardActive={Q1Active}>
                {fullTimeScore}
              </Score>
            )}
            {extraTimeScore && (
              <Score detail_sc={1} scoreboardActive={Q1Active}>
                {extraTimeScore}
              </Score>
            )}
            {Q1Score && (
              <Score detail_sc={1} scoreboardActive={Q1Active}>
                {Q1Score}
              </Score>
            )}
            {Q2Score && (
              <Score detail_sc={1} scoreboardActive={Q2Active}>
                {Q2Score}
              </Score>
            )}
            {Q3Score && (
              <Score detail_sc={1} scoreboardActive={Q3Active}>
                {Q3Score}
              </Score>
            )}
            {Q4Score && (
              <Score detail_sc={1} scoreboardActive={Q4Active}>
                {Q4Score}
              </Score>
            )}
            {H1Score && (
              <Score detail_sc={1} scoreboardActive={H1Active}>
                {H1Score}
              </Score>
            )}
            {H2Score && (
              <Score detail_sc={1} scoreboardActive={H2Active}>
                {H2Score}
              </Score>
            )}
            {OTScore && (
              <Score detail_sc={1} scoreboardActive={OTActive}>
                {OTScore}
              </Score>
            )}
            {(oneScore ||
              twoScores ||
              threeScores ||
              gameType ||
              esportsPeriod) && (
              <>
                <Period
                  scoreboardLive={gameTypeLive || esportsPeriodLive}
                  scoreboard={1}
                  scoreboardPlaySuspended={playSuspended}
                  esportsPeriod={esportsPeriod}
                >
                  {gameType || tennisSet || esportsPeriod}
                  {tennisGame && <TennisGame>{tennisGame}</TennisGame>}
                  {dartSets && (
                    <DartSets scoreboardActive={1} bold={1}>
                      {dartSets}
                    </DartSets>
                  )}
                  {esportsStatus && (
                    <EsportsStatus scoreboard={1}>
                      {esportsStatus}
                    </EsportsStatus>
                  )}
                </Period>
                {esportsGameType && (
                  <EsportsGameType scoreboard={1}>
                    {esportsGameType}
                  </EsportsGameType>
                )}
              </>
            )}
            {(oneScore || threeScores || twoScores) && neutral && <Neutral />}
            {(baseball_base ||
              baseball_base_1 ||
              baseball_base_1_2 ||
              baseball_base_1_2_3 ||
              baseball_base_1_3 ||
              baseball_base_2 ||
              baseball_base_2_3 ||
              baseball_base_3) && (
              <BaseballBase>
                {baseball_base && <IconBaseballBase />}
                {baseball_base_1 && <IconBaseballBase_1 />}
                {baseball_base_1_2 && <IconBaseballBase_1_2 />}
                {baseball_base_1_2_3 && <IconBaseballBase_1_2_3 />}
                {baseball_base_1_3 && <IconBaseballBase_1_3 />}
                {baseball_base_2 && <IconBaseballBase_2 />}
                {baseball_base_2_3 && <IconBaseballBase_2_3 />}
                {baseball_base_3 && <IconBaseballBase_3 />}
              </BaseballBase>
            )}
            {out && (
              <Out>
                <F12>{out}</F12>
              </Out>
            )}
          </FlexLeft>
          {(threeScores || twoScores) && (
            <FlexRight>
              {set1 && <Score tennisPoints_sc={1}>{set1}</Score>}
              {set2 && <Score tennisPoints_sc={1}>{set2}</Score>}
              {set3 && <Score tennisPoints_sc={1}>{set3}</Score>}
              {set4 && <Score tennisPoints_sc={1}>{set4}</Score>}
              {set5 && <Score tennisPoints_sc={1}>{set5}</Score>}
              {set6 && <Score tennisPoints_sc={1}>{set6}</Score>}
              {legs && (
                <Legs>
                  {legs}
                  <DartSets scoreboardActive={1} bold={1}>
                    {dartlegs}
                  </DartSets>
                </Legs>
              )}
            </FlexRight>
          )}
          {esportsStatistics && (
            <FlexRight>
              <EsportsStatistics onClick={showStatistics}>
                <Icons.Scoreboard_stats />
              </EsportsStatistics>
            </FlexRight>
          )}
          {esportsScore && (
            <FlexRight>
              <EsportsScore sc={1}>{esportsScore}</EsportsScore>
            </FlexRight>
          )}
        </NPDetailWrapperBottom>
      )}
      {pens && (
        <PensWrapper>
          <PenaltyIndicatorWrapper>
            {team1_1_goal && (
              <PenaltyIndicatorGoal active={team1_1_goal_active} />
            )}
            {team1_1_missed && (
              <PenaltyIndicatorMissed active={team1_1_missed_active} />
            )}
            {team1_1_blank && <PenaltyIndicatorBlank />}
            {team1_1_current && <PenaltyIndicatorCurrent />}
            {team1_2_goal && (
              <PenaltyIndicatorGoal active={team1_2_goal_active} />
            )}
            {team1_2_missed && (
              <PenaltyIndicatorMissed active={team1_2_missed_active} />
            )}
            {team1_2_blank && <PenaltyIndicatorBlank />}
            {team1_2_current && <PenaltyIndicatorCurrent />}
            {team1_3_goal && (
              <PenaltyIndicatorGoal active={team1_3_goal_active} />
            )}
            {team1_3_missed && (
              <PenaltyIndicatorMissed active={team1_3_missed_active} />
            )}
            {team1_3_blank && <PenaltyIndicatorBlank />}
            {team1_3_current && <PenaltyIndicatorCurrent />}
            {team1_4_goal && (
              <PenaltyIndicatorGoal active={team1_4_goal_active} />
            )}
            {team1_4_missed && (
              <PenaltyIndicatorMissed active={team1_4_missed_active} />
            )}
            {team1_4_blank && <PenaltyIndicatorBlank />}
            {team1_4_current && <PenaltyIndicatorCurrent />}
            {team1_5_goal && (
              <PenaltyIndicatorGoal active={team1_5_goal_active} />
            )}
            {team1_5_missed && (
              <PenaltyIndicatorMissed active={team1_5_missed_active} />
            )}
            {team1_5_blank && <PenaltyIndicatorBlank />}
            {team1_5_current && <PenaltyIndicatorCurrent />}
          </PenaltyIndicatorWrapper>
          <Round round={round} penState={penState} />
          <PenaltyIndicatorWrapper>
            {team2_1_goal && (
              <PenaltyIndicatorGoal active={team2_1_goal_active} />
            )}
            {team2_1_missed && (
              <PenaltyIndicatorMissed active={team2_1_missed_active} />
            )}
            {team2_1_blank && <PenaltyIndicatorBlank />}
            {team2_1_current && <PenaltyIndicatorCurrent />}
            {team2_2_goal && (
              <PenaltyIndicatorGoal active={team2_2_goal_active} />
            )}
            {team2_2_missed && (
              <PenaltyIndicatorMissed active={team2_2_missed_active} />
            )}
            {team2_2_blank && <PenaltyIndicatorBlank />}
            {team2_2_current && <PenaltyIndicatorCurrent />}
            {team2_3_goal && (
              <PenaltyIndicatorGoal active={team2_3_goal_active} />
            )}
            {team2_3_missed && (
              <PenaltyIndicatorMissed active={team2_3_missed_active} />
            )}
            {team2_3_blank && <PenaltyIndicatorBlank />}
            {team2_3_current && <PenaltyIndicatorCurrent />}
            {team2_4_goal && (
              <PenaltyIndicatorGoal active={team2_4_goal_active} />
            )}
            {team2_4_missed && (
              <PenaltyIndicatorMissed active={team2_4_missed_active} />
            )}
            {team2_4_blank && <PenaltyIndicatorBlank />}
            {team2_4_current && <PenaltyIndicatorCurrent />}
            {team2_5_goal && (
              <PenaltyIndicatorGoal active={team2_5_goal_active} />
            )}
            {team2_5_missed && (
              <PenaltyIndicatorMissed active={team2_5_missed_active} />
            )}
            {team2_5_blank && <PenaltyIndicatorBlank />}
            {team2_5_current && <PenaltyIndicatorCurrent />}
          </PenaltyIndicatorWrapper>
        </PensWrapper>
      )}
    </ScoreboardWrapper>
  </HeaderBg>
)

export const EsportsModalWrapper = styled(ScoreboardWrapper)`
  grid-template-columns: 1fr 80px 1fr;
  ${media.desktop`grid-template-columns: 1fr 112px 1fr;`}
  ${media.tablet`grid-template-columns: 1fr 80px 1fr;`}
  grid-template-rows: 64px;
  background: ${(props) => props.theme.color_S5_1};
  color: ${(props) => props.theme.color_P4_24_OP64};
  ${EsportsTeam1Active},${EsportsTeam2Active} {
    height: 32px;
    min-width: 4px;
  }
  ${TeamName} {
    padding: 0px;
  }
  ${Score} {
    width: 28px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const EsportsModalTeamNameWrapper = styled(Flex)`
  ${FlexSpaceBetween(64)};
`
export const ScoreDash = styled(FlexCenter)`
  width: 8px;
  height: 100%;
`
export const EsportsModal = ({
  inplay,
  teamName1,
  teamName2,
  team1Score,
  team2Score,
  esportsTeam1Color,
  esportsTeam2Color,
}) => (
  <EsportsModalWrapper Inplay={inplay}>
    <EsportsModalTeamNameWrapper>
      <EsportsTeam1Active esportsTeam1Color={esportsTeam1Color} />
      <TeamName>
        <F16>{teamName1}</F16>
      </TeamName>
    </EsportsModalTeamNameWrapper>
    <FlexCenter>
      <Score sc={1}>
        <F16>{team1Score}</F16>
      </Score>
      <ScoreDash>-</ScoreDash>
      <Score sc={1}>
        <F16>{team2Score}</F16>
      </Score>
    </FlexCenter>
    <EsportsModalTeamNameWrapper>
      <TeamName>
        <F16>{teamName2}</F16>
      </TeamName>
      <EsportsTeam2Active esportsTeam2Color={esportsTeam2Color} />
    </EsportsModalTeamNameWrapper>
  </EsportsModalWrapper>
)
export const RoundScore = styled(FlexCenter)`
  color: ${(props) =>
    props.win ? props.theme.color_P3_OP64 : props.theme.color_P3_OP40};
  height: 100%;
`
export const EsportsModalRoundWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.oneColumn ? `1fr` : `1fr 80px 1fr`};
  ${media.desktop`grid-template-columns: ${(props) =>
    props.oneColumn ? `1fr` : `1fr 112px 1fr`};`}
  ${media.tablet`grid-template-columns: ${(props) =>
    props.oneColumn ? `1fr` : `1fr 80px 1fr`};`}
  background: ${(props) => props.theme.color_P4_2};
  padding: 8px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color_A4};
  border-top: none;
`
export const EsportsModalRoundTitleWrapper = styled(EsportsModalRoundWrapper)`
  height: 48px;
  background: none;
  color: ${(props) => props.theme.color_P3_OP56};
  border-left: none;
  border-right: none;
`
export const EsportsModalRoundContainer = styled.div`
  background: ${(props) => props.theme.color_P3_OP4};
  color: ${(props) => props.theme.color_P3_OP56};
  padding: 0 16px 16px 16px;
`
export const EsportsRoundText = styled(FlexCenter)`
  background: ${(props) => props.theme.color_S4_3};
  color: ${(props) => props.theme.color_P3_17_OP56};
  height: 24px;
  width: ${(props) =>
    props.participantName ? '24px' : props.roundGameDuration ? '32px' : '100%'};
`
export const EsportsRoundGameDuration = styled(FlexCenter)`
  background: ${(props) => props.theme.color_P3_OP4};
  color: ${(props) => props.theme.color_P3_OP56};
  width: 100%;
`
export const EsportsParticipantName = styled(FlexLeft)`
  color: ${(props) => props.theme.color_P3_OP56};
  margin-left: 8px;
`

export const EsportsModalRound = ({
  roundScoreText1,
  roundScoreText2,
  durationText,
  penalty,
  list = [],
}) => (
  <EsportsModalRoundContainer>
    <EsportsModalRoundTitleWrapper>
      <FlexCenter>{roundScoreText1 && <F12>{roundScoreText1}</F12>}</FlexCenter>
      <FlexCenter>{durationText && <F12>{durationText}</F12>}</FlexCenter>
      <FlexCenter>{roundScoreText2 && <F12>{roundScoreText2}</F12>}</FlexCenter>
    </EsportsModalRoundTitleWrapper>
    {penalty && (
      <>
        <EsportsModalRoundWrapper oneColumn={1}>
          <FlexCenter>
            <F12>{penalty}</F12>
          </FlexCenter>
        </EsportsModalRoundWrapper>
      </>
    )}
    {list &&
      list.length > 0 &&
      list.map(
        (
          {
            roundGameText,
            roundGameDuration,
            roundScore1,
            roundScore2,
            roundScore1Win,
            roundScore2Win,
            roundScore1Active,
            roundScore2Active,
            participantName,
            ...rest
          },
          index
        ) => (
          <EsportsModalRoundWrapper
            oneColumn={participantName}
            key={'esportsModalRound' + index}
          >
            <RelativeWrapper>
              {roundScore1 && (
                <RoundScore win={roundScore1Win || roundScore1Active}>
                  <F14 bold={roundScore1Win || roundScore1Active}>
                    {roundScore1}
                  </F14>
                </RoundScore>
              )}
              {roundScore1Win && (
                <AbsoluteLeftCenter>
                  <Icons.Bet_status_win />
                </AbsoluteLeftCenter>
              )}
            </RelativeWrapper>
            <Flex>
              <EsportsRoundText
                roundGameDuration={roundGameDuration}
                participantName={participantName}
              >
                <F12>{roundGameText}</F12>
              </EsportsRoundText>
              {roundGameDuration && (
                <EsportsRoundGameDuration>
                  <F12>{roundGameDuration}</F12>
                </EsportsRoundGameDuration>
              )}
              {participantName && (
                <EsportsParticipantName>
                  <F12>{participantName}</F12>
                </EsportsParticipantName>
              )}
            </Flex>
            <RelativeWrapper>
              {roundScore2 && (
                <RoundScore win={roundScore2Win || roundScore2Active}>
                  <F14 bold={roundScore2Win || roundScore2Active}>
                    {roundScore2}
                  </F14>
                </RoundScore>
              )}
              {roundScore2Win && (
                <AbsoluteRightCenter>
                  <Icons.Bet_status_win />
                </AbsoluteRightCenter>
              )}
            </RelativeWrapper>
          </EsportsModalRoundWrapper>
        )
      )}
  </EsportsModalRoundContainer>
)
//-------------------- Featured Event --------------------//
const FeaturedMessage = styled(FlexLeft)`
  padding: 4px 16px;
  height: ${(props) => (props.playSuspended ? '32px' : '40px')};
  background: ${(props) =>
    props.playSuspended ? props.theme.color_S4_OP32 : props.theme.color_P4_2};
  color: ${(props) =>
    props.playSuspended ? props.theme.color_A7_2 : props.theme.color_P3_2_OP40};
  border-bottom: ${(props) =>
    props.playSuspended ? 'none' : `1px solid ${props.theme.color_A4}`};
  ${(props) => props.playSuspended && `justify-content: center;`};
  ${F12} {
    line-height: 16px;
    ${Truncate(2)}
  }
  ${media.desktop`
    padding: 4px 0px;
    margin: ${(props) => (props.playSuspended ? '0px' : '0px 16px')};
  `}
`
const FeaturedCompetitionWrapper = styled.div`
  padding: 8px 16px;
  height: 64px;
  color: ${(props) => props.theme.color_P4_4};
  ${F12} {
    line-height: 16px;
  }
  ${F14} {
    ${Truncate(2)}
  }
  ${F12} {
    ${Truncate(1)}
  }
  ${FlexLeft} {
    &:nth-child(2) {
      height: 32px;
    }
  }
`
const EsportsCompetitionName = styled(FlexLeft)`
  padding: 4px 16px;
  height: 32px;
  color: ${(props) => props.theme.color_P3_OP64};
  background: ${(props) => props.theme.color_S4_1};
  width: 100%;
  ${F12} {
    ${Truncate(1)}
  }
`
const FeaturedEventWrapper = styled(ScaledContainer)`
  display: block;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  ${NPDetailWrapperBottom} {
    display: none;
  }
  ${ScoreboardWrapper},${FeaturedCompetitionWrapper} {
    width: 100%;
    background: ${(props) => props.theme.color_P3_OP72_1};
    position: absolute;
    z-index: 1;
  }
  ${FeaturedCompetitionWrapper},${ScoreboardWrapper} {
    bottom: 0px;
  }
  ${ScoreboardWrapper} {
    grid-template-rows: 32px 32px;
  }
  ${ScoreboardWrapper} > ${TeamName} > ${F16} {
    ${Truncate(1)};
  }
  ${media.desktop`
  ${(props) =>
    props.startPage
      ? null
      : `
    display: grid;
    padding-bottom: 0px;
    grid-template-columns: 114px 1fr;
    height: 64px;
    width: 100%;
    ${TvWrapper}, ${ScoreboardWrapper},${FeaturedCompetitionWrapper},${BannerImg} {position:relative;}
    ${BannerImg} {height: 64px;}`};
  `}
`

export const FeaturedEventBanner = ({
  img,
  tv,
  tvActive,
  alt,
  inplay,
  region1,
  region2,
  teamName1,
  teamName2,
  team1Score,
  team2Score,
  team1Score1,
  team2Score1,
  team1Score2,
  team2Score2,
  team1SetScore,
  team1GameScore,
  team1PointsScore,
  team2SetScore,
  team2GameScore,
  team2PointsScore,
  cricket,
  cricketInningsScore,
  cricketBatsman1,
  cricketBatsman1Score,
  cricketBatsman2,
  cricketBatsman2Score,
  team1ToScore,
  team2ToScore,
  team1Active,
  team2Active,
  team1RedCard,
  team1RedCard_1,
  team1RedCard_2,
  team1RedCard_3,
  team1RedCard_4,
  team2RedCard,
  team2RedCard_1,
  team2RedCard_2,
  team2RedCard_3,
  team2RedCard_4,
  esportsTeam1Color,
  esportsTeam2Color,
  period,
  periodTime,
  periodLive,
  neutral,
  baseballInningUp,
  baseballInningDown,
  wideScore,
  threeScores,
  twoScores,
  oneScore,
  sport,
  competition,
  message,
  playSuspendedMessage,
  playSuspended,
  onClick,
  startPage,
  esportsCompetitionName,
}) => (
  <>
    {esportsCompetitionName && (
      <EsportsCompetitionName>
        <F12 uppercase={1}>{esportsCompetitionName}</F12>
      </EsportsCompetitionName>
    )}
    <FeaturedEventWrapper tv={tv} onClick={onClick} startPage={startPage}>
      <RelativeWrapper>
        {tv && <TvButton homePage={tv} homePageActive={tvActive} />}
        <RightPanelBannerWrapper>
          <ScaledContent>
            <BannerImg img={img} alt="BannerImg" />
          </ScaledContent>
        </RightPanelBannerWrapper>
      </RelativeWrapper>
      {(sport ||
        competition ||
        (esportsCompetitionName && (!teamName1 || !teamName2))) && (
        <>
          <FeaturedCompetitionWrapper>
            <FlexLeft>
              <F12 uppercase={1}>{sport}</F12>
            </FlexLeft>
            <FlexLeft>
              <F14 bold={1} uppercase={1}>
                {competition || esportsCompetitionName}
              </F14>
            </FlexLeft>
          </FeaturedCompetitionWrapper>
        </>
      )}
      {(teamName1 || teamName2) && (
        <Scoreboard
          alt={alt}
          inplay={inplay}
          region1={region1}
          region2={region2}
          teamName1={teamName1}
          teamName2={teamName2}
          team1Score={team1Score}
          team2Score={team2Score}
          team1Score1={team1Score1}
          team2Score1={team2Score1}
          team1Score2={team1Score2}
          team2Score2={team2Score2}
          team1SetScore={team1SetScore}
          team1GameScore={team1GameScore}
          team1PointsScore={team1PointsScore}
          team2SetScore={team2SetScore}
          team2GameScore={team2GameScore}
          team2PointsScore={team2PointsScore}
          cricket={cricket}
          cricketInningsScore={cricketInningsScore}
          cricketBatsman1={cricketBatsman1}
          cricketBatsman1Score={cricketBatsman1Score}
          cricketBatsman2={cricketBatsman2}
          cricketBatsman2Score={cricketBatsman2Score}
          team1ToScore={team1ToScore}
          team2ToScore={team2ToScore}
          team1Active={team1Active}
          team2Active={team2Active}
          team1RedCard={team1RedCard}
          team1RedCard_1={team1RedCard_1}
          team1RedCard_2={team1RedCard_2}
          team1RedCard_3={team1RedCard_3}
          team1RedCard_4={team1RedCard_4}
          team2RedCard={team2RedCard}
          team2RedCard_1={team2RedCard_1}
          team2RedCard_2={team2RedCard_2}
          team2RedCard_3={team2RedCard_3}
          team2RedCard_4={team2RedCard_4}
          esportsTeam1Color={esportsTeam1Color}
          esportsTeam2Color={esportsTeam2Color}
          period={period}
          periodTime={periodTime}
          periodLive={periodLive}
          neutral={neutral}
          wideScore={wideScore}
          threeScores={threeScores}
          twoScores={twoScores}
          oneScore={oneScore}
          baseballInningUp={baseballInningUp}
          baseballInningDown={baseballInningDown}
        />
      )}
    </FeaturedEventWrapper>
    {playSuspendedMessage && (
      <FeaturedMessage playSuspended={1}>
        <F13>{playSuspendedMessage}</F13>
      </FeaturedMessage>
    )}
    {message && (
      <FeaturedMessage>
        <F12>{message}</F12>
      </FeaturedMessage>
    )}
  </>
)
//-------------------- Nav Carousel --------------------//
export const SportCarouselWrapper = styled(RelativeWrapper)`
  padding: 8px 0px;
`
export const SportCarouselItemContainer = styled(FlexScrollWrapper)`
  padding: 0 16px;
`
export const SportCarouselItemWrapper = styled(FlexCenterColumn)`
  margin-right: 8px;
  width: 76px;
  height: 56px;
  flex-shrink: 0;
  ${IconWrapper24} {
    margin: 0 auto;
  }
  ${FlexCenter} {
    height: 24px;
  }
  ${F12} {
    ${Truncate(1)};
    text-align: center;
  }
  g {
    fill: ${(props) =>
      props.disabled
        ? props.theme.color_P4_OP64
        : props.active && props.homePage
        ? props.theme.color_A3
        : props.homePage
        ? props.theme.color_P3_9_OP64
        : props.active
        ? props.theme.color_A3_3
        : props.theme.color_P3_1_OP64};
  }
  color: ${(props) =>
    props.disabled
      ? `
      ${props.theme.color_P4_OP64};
      
      `
      : props.active && props.homePage
      ? `
      ${props.theme.color_A3};
      
      `
      : props.homePage
      ? `${props.theme.color_P3_9_OP64};
      
      `
      : props.active
      ? `
      ${props.theme.color_A3_3};
      
      `
      : `${props.theme.color_P3_1_OP64};
      
      `};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) =>
        props.homePage ? props.theme.color_A3 : props.theme.color_A3_3};
      g {
        fill: ${(props) =>
          props.homePage ? props.theme.color_A3 : props.theme.color_A3_3};
      }
    }
  }
  &:active {
    color: ${(props) =>
      props.homePage ? props.theme.color_A3 : props.theme.color_A3_3};
    g {
      fill: ${(props) =>
        props.homePage ? props.theme.color_A3 : props.theme.color_A3_3};
    }
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const SportCarouselItem = ({
  sportIcon,
  active,
  sport,
  switchSport,
  homePage,
  ...rest
}) => (
  <SportCarouselItemWrapper
    active={active}
    onClick={switchSport}
    homePage={homePage}
  >
    <IconWrapper24>{sportIcon}</IconWrapper24>
    <FlexCenter>
      <F12>{sport}</F12>
    </FlexCenter>
  </SportCarouselItemWrapper>
)

export const MenuButtonWrapper = styled(FlexCenter)`
  width: 64px;
  position: absolute;
  height: 100%;
  left: 0;
  background: ${(props) => props.theme.color_P1};
  g {
    fill: ${(props) =>
      props.active ? `${props.theme.color_P2_1};` : `${props.theme.color_T1};`};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_P1_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P1_Lmin8};
  }
`
export const MenuButton = ({ toggleMenuPanel }) => (
  <MenuButtonWrapper onClick={toggleMenuPanel}>
    <IconWrapper24>
      <HiMenu />
    </IconWrapper24>
  </MenuButtonWrapper>
)
export const HeaderWrapper = styled(FlexScrollWrapper)`
  z-index: 1;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.color_P1};
  color: ${(props) => props.theme.color_T1};
  ${ArrowButtonLeftWrapper} {
    left: 64px;
  }
  ${Shadow} {
    display: none;
  }
  ${media.desktop`${FlexRight}{display:none;} ${Shadow}{display:block;}`}
`
export const HeaderItemContainer = styled(FlexScrollWrapper)`
  margin-left: 64px;
  margin-right: 22px;
  ${FlexSpaceBetween(48)}
  position: relative;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`
export const HeaderItemWrapper = styled(FlexCenter)`
  position: relative;
  padding: 0 8px;
  height: 48px;
  margin-right: 8px;
  white-space: nowrap;
  padding-right: ${(props) => props.counter && '20px'};
  ${CounterWrapper} {
    top: 6px;
    right: 20px;
    transform: translate3d(100%, 0, 0);
    padding: 0px 4%;
  }
  /* background: ${(props) =>
    props.active ? `${props.theme.color_P2};` : 'transparent'}; */
  color: ${(props) =>
    props.active ? `${props.theme.color_T2};` : `${props.theme.color_T1};`};
  ${AbsoluteRightCenter} {
    top: ${(props) => props.favorite && '25%'};
    g {
      fill: ${(props) => props.favorite && props.theme.color_P2_1};
    }
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_P2_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P1_Lmin8};
  }
  &:before {
    content: ${(props) => props.withBadge && `''`};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.theme.color_A5_1};
    position: absolute;
    top: 10px;
    right: -2px;
  }
`
export const HeaderItem = ({
  competition,
  active,
  switchPage,
  counter,
  withBadge,
  favorite,
}) => (
  <HeaderItemWrapper
    active={active}
    onClick={switchPage}
    counter={counter}
    data-btn-competition={`${competition}`}
    withBadge={withBadge}
    favorite={favorite}
  >
    <F14 uppercase={1}>{competition}</F14>
    {counter && <Counter counter={counter} />}
    {favorite && (
      <AbsoluteRightCenter>
        <IconWrapper8>
          <Icons.Favorite_event_active />
        </IconWrapper8>
      </AbsoluteRightCenter>
    )}
  </HeaderItemWrapper>
)
export const BottomNavWrapper = styled(Flex)`
  position: fixed;
  width: 100%;
  bottom: 0;
  box-sizing: content-box;
  z-index: 2;
  ${FlexSpaceBetween(56)};
  background: ${(props) => props.theme.color_P1};
  display: none;
  ${media.desktop`
    display: flex;
  `}
  @media (max-width: 812px) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
`

export const BottomNavItemWrapper = styled(FlexCenterColumn)`
  user-select: none;
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  ${IconWrapper24} {
    margin: 0 auto;
    width: 24px;
    height: 24px;
  }
  background: ${(props) =>
      props.betSlip
        ? `
    ${props.theme.color_A9};
    `
        : `
    ${props.theme.color_P1};
    `}
    g {
    fill: ${(props) =>
      props.disabled
        ? props.theme.color_P4_1_OP24
        : props.active
        ? `
        ${props.theme.color_P2_1};;`
        : `
        ${props.theme.color_P4_1_OP64};
`};
  }
  ${F11} {
    padding-top: 4px;
    text-align: center;
    ${Truncate(1)}
    color: ${(props) =>
      props.disabled
        ? `${props.theme.color_P4_1_OP24};
        `
        : props.active
        ? `${props.theme.color_P2_1};
        `
        : props.betSlip
        ? `${props.theme.color_P4_3};
        `
        : `${props.theme.color_P4_1_OP64};`};
  }
  &:before {
    content: ${(props) => props.withBadge && `''`};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.theme.color_A5_1};
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translate3d(12px, 0, 0);
  }
  ${(props) =>
    props.betSlip &&
    `${IconWrapper24}{display: none;} ${F11}{padding-top:0px;}`};
  ${F32} {
    color: ${(props) => props.theme.color_P4_3};
    margin-top: -2px;
  }
  ${AbsoluteRightCenter} {
    top: ${(props) => props.favorite && '10%'};
    right: ${(props) => props.favorite && '26%'};
    g {
      fill: ${(props) => props.favorite && props.theme.color_P2_1};
    }
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      g {
        fill: ${(props) =>
          props.disabled
            ? props.theme.color_P4_1_OP24
            : props.theme.color_P2_1};
      }
      ${F11} {
        color: ${(props) =>
          props.betSlip
            ? props.theme.color_P4_3
            : props.disabled
            ? props.theme.color_P4_1_OP24
            : props.theme.color_P2_1};
      }
      background: ${(props) => props.betSlip && props.theme.color_A9_Lplus4};
    }
  }
  &:active {
    g {
      fill: ${(props) =>
        props.disabled ? props.theme.color_P4_1_OP24 : props.theme.color_P2_1};
    }
    ${F11} {
      color: ${(props) =>
        props.betSlip
          ? props.theme.color_P4_1_OP64
          : props.disabled
          ? props.theme.color_P4_1_OP24
          : props.theme.color_P2_1};
      color: ${(props) => props.betSlip && props.theme.color_P4_3};
    }
    background: ${(props) =>
      props.betSlip
        ? props.theme.color_A9_Lmin8
        : props.disabled
        ? props.theme.color_P1
        : props.theme.color_P1_Lmin8};
  }
`
export const BottomNavItem = ({
  filterIcon,
  active,
  filter,
  disabled,
  BetSlip,
  BetSlipCount,
  switchBottomNavTab,
  withBadge,
  counter,
  favorite,
}) => (
  <BottomNavItemWrapper
    active={active}
    disabled={disabled}
    betSlip={BetSlip}
    onClick={switchBottomNavTab}
    withBadge={withBadge}
    favorite={favorite}
  >
    <IconWrapper24>{filterIcon}</IconWrapper24>
    <F32>{BetSlipCount}</F32>
    <F11>{filter}</F11>
    {counter && <Counter counter={counter} />}
    {favorite && (
      <AbsoluteRightCenter>
        <IconWrapper8>
          <Icons.Favorite_event_active />
        </IconWrapper8>
      </AbsoluteRightCenter>
    )}
  </BottomNavItemWrapper>
)
//-------------------- Page Structure --------------------//
export const RightPanelFixedWrapper = styled(PageScrollWrapper)`
  padding: ${(props) =>
    props.theme.iframe ? `8px 8px 64px 8px` : `56px  8px 64px 8px`};
  box-sizing: border-box;
  height: calc(100vh - 48px);
  overflow-y: auto;
  ${(props) => (props.theme.iframe ? `position:fixed;width:33%` : ``)};

  ${media.desktopMedium` 
    ${(props) => (props.theme.iframe ? `width:33.4%` : ``)};
  `}
`
export const RightPanelWrapper = styled(PageScrollWrapper)`
  background: ${(props) => props.theme.color_P4_26};
  padding: 0;
  ${CompetitionTabWrapper} > ${Flex} {
    background: ${(props) => props.theme.color_P4_26};
  }
`
export const LeftSportsWrapper = styled.div`
  background: ${(props) => props.theme.color_P1};

  padding: 8px;
  ${media.desktopMedium` 
    padding: 0px;   
    ${IconWrapper8}{
        display: none;
      }
  `}
`
export const LeftSportsItemsWrapper = styled(FlexCenter)`
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  position: relative;
  g {
    fill: ${(props) =>
      props.active ? props.theme.color_P2_1 : props.theme.color_P4_1_OP64};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      g {
        fill: ${(props) => props.theme.color_P2_1};
      }
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P1_Lmin8};
  }
  ${(props) =>
    props.favorite &&
    `
      &:nth-last-child(1){
        padding-bottom: 8px;
        border-bottom: 2px solid ${props.theme.color_P4_1_OP24};
    }
    ${IconWrapper8}{ 
      g { 
        fill: ${props.theme.color_P2_1};
      };
      position: absolute;
      top: 0px;
      right: 4px;
    }
  `};
`

export const LeftSportsItems = ({
  active,
  sportIcon,
  favorite,
  switchSport,
  ...rest
}) => (
  <LeftSportsItemsWrapper
    active={active}
    favorite={favorite}
    onClick={switchSport}
  >
    {sportIcon}
    {favorite && (
      <IconWrapper8>
        <Icons.Favorite_event_active />
      </IconWrapper8>
    )}
  </LeftSportsItemsWrapper>
)
export const CenterPanelWrapper = styled.div`
  background: ${(props) => props.theme.color_P4_28};
  width: 100%;
  padding: 0px 16px;
  ${(props) => props.myBets && 'padding: 0px'};
  margin-top: ${(props) =>
    props.withFilter || props.withCoupon || props.hideTopGap ? '0px' : '16px'};
  ${GreyOut} {
    margin-top: 0px;
  }
  ${media.desktop`padding: 0px;`}
`
export const EventPanelWrapper = styled(RelativeWrapper)`
  top: ${(props) => props.minusTop};
  ${PageBottomSpace} {
    min-height: ${(props) =>
      props.minusTop && `calc(200px + ${props.minusTop})`};
  }
`

export const HighlightsPanelWrapper = styled.div`
  background: ${(props) => props.theme.color_P4_28};
  padding: 0px 16px 32px 16px;
  ${media.desktop`padding: 0px 0px 16px 0px;`}
`
export const FooterWrapper = styled(FlexCenter)`
  background: ${(props) => props.theme.color_P3_OP24};
`
export const RightPanelBannerWrapper = styled(ScaledContainer)`
  background: ${(props) => props.theme.color_P3_OP64};
  color: ${(props) => props.theme.color_P4_2};
  ${FlexCenter} {
    height: 100%;
  }
  ${media.tablet`
    max-width: 480px;
    max-height: 270px;
    background-color: ${(props) => props.theme.color_A14};`}
`
export const RightPanelBanner = ({ text }) => (
  <RightPanelBannerWrapper>
    <ScaledContent>
      <FlexCenter>
        <F16 bold={1}>{text}</F16>
      </FlexCenter>
    </ScaledContent>
  </RightPanelBannerWrapper>
)

export const RightPanelBannerContainer = styled(ScaledContainer)`
  /* padding-bottom: 0;
  height: auto; */
`
export const InfoContentButtonWrapper = styled(FlexCenter)`
  height: 56px;
  ${F14} {
    text-align: center;
    line-height: 24px;
  }
  color: ${(props) => props.theme.color_A12_1};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_A12_1_Lplus4};
    }
  }
  &:active {
    color: ${(props) => props.theme.color_A12_1_Lmin8};
  }
`
export const InfoContentButton = ({ text, toggleInfoContent }) => (
  <InfoContentButtonWrapper onClick={toggleInfoContent}>
    <F14>{text}</F14>
  </InfoContentButtonWrapper>
)

export const InfoContentWrapper = styled(FlexCenter)`
  padding: 16px 0;
  color: ${(props) => props.theme.color_P3_OP72};
  line-height: 16px;
`
export const InfoContent = ({ text }) => (
  <InfoContentWrapper>
    <F14>{text}</F14>
  </InfoContentWrapper>
)
export const FantasyMatchInfoWrapper = styled(Flex)`
  height: 48px;
  padding: 16px 0px;
  g {
    fill: ${(props) => props.theme.color_A6_2};
  }
  ${FlexLeft} {
    margin-left: 8px;
  }
  color: ${(props) => props.theme.color_A12_1};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_A12_1_Lplus4};
    }
  }
  &:active {
    color: ${(props) => props.theme.color_A12_1_Lmin8};
  }
`
export const FantasyMatchInfo = ({ text, toggleInfo }) => (
  <FantasyMatchInfoWrapper onClick={toggleInfo}>
    <Icons.Information />
    <FlexLeft>
      <F14>{text}</F14>
    </FlexLeft>
  </FantasyMatchInfoWrapper>
)
const CopyRightTextWrapper = styled(FlexCenter)`
  text-align: center;
  color: ${(props) => props.theme.color_P3_4_OP40};

  width: 100%;
  height: 40px;
  padding: 4px 16px;
`
export const CopyRightText = ({ text }) => (
  <CopyRightTextWrapper>
    <F12>{text}</F12>
  </CopyRightTextWrapper>
)

export const AmpContentCenterWrapper = styled.div`
  height: auto;
`
export const MopCenterScrollWrapper = styled(PageScrollWrapper)`
  ${(props) => props.disableScroll && `overflow: hidden;`};
  @media screen and (min-width: 1024px) {
    overflow-y: auto;
    height: calc(100vh - 48px);
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  position: relative;
  padding-top: ${(props) =>
    props.theme.iframe ? `0` : `${props.theme.headerHeight}px`};
`

//-------------------- PopUp --------------------//
export const PopUpWrapper = styled(FlexStickyBottom)`
  background: none;
  height: ${(props) =>
    props.theme.iPadInnerheight > 0
      ? `${props.theme.iPadInnerheight}px`
      : `calc(100vh - 48px)`};
  width: 100%;
  overflow: hidden;
  bottom: 0;
`
export const CenterPopUpWrapper = styled(PopUpWrapper)`
  pointer-events: none;
  height: ${(props) =>
    props.theme.iPadInnerheight > 0
      ? `${props.theme.iPadInnerheight + 48}px`
      : ``};
  color: ${(props) => props.theme.color_P3_5_OP64};

  ${ContentContainer} {
    width: 100%;
    margin: 0px;
  }
  ${ContentScrollWrapper} {
    padding: ${(props) =>
      props.betDetail
        ? '0px 0px 16px 0px'
        : props.financialDisplayPreference
        ? '16px 0px 48px 0px'
        : '16px 16px 48px 16px'};
  }
  ${FlexEndWrapper} {
    margin: 0 auto;
    max-width: 640px;
    height: calc(100vh - 48px);
    height: calc(
      ${(props) =>
          props.theme.iPadInnerheight > 0
            ? `${props.theme.iPadInnerheight + 96}px`
            : `100vh`} - 48px
    );
    ${ContentScrollWrapper} {
      max-height: calc(
        ${(props) =>
            props.theme.iPadInnerheight > 0
              ? `${props.theme.iPadInnerheight + 48}px`
              : `100vh`} - 96px
      );
      box-sizing: border-box;
      padding-bottom: 148px;
    }
  }
  ${GreyOut} {
    position: absolute;
    width: 100%;
  }
  ${media.desktop`
    height: ${(props) =>
      props.theme.iPadInnerheight > 0
        ? props.theme.iPadInnerheight + 48 + 'px'
        : '100vh'};
    margin: 0px; 
    width: 100%;
    ${ContentContainer} {
      width: 100%;
      margin: 0px;
    }
    ${FlexEndWrapper}{
      margin: ${(props) => (props.betDetail ? '0px' : '0 21px')};
      max-width: calc(100% - 21px);
      height: ${(props) =>
        props.theme.iPadInnerheight > 0
          ? props.theme.iPadInnerheight + 48 + 'px'
          : '100vh'};
      
      box-sizing:content-box;
    }
  `}
  ${media.tablet`
    ${FlexEndWrapper}{
      margin: 0px;
      max-width: 100%;
    }
  `}
`
export const RightPanelPopUpWrapper = styled(PopUpWrapper)`
  position: absolute;
  height: ${(props) =>
    props.theme.iframe
      ? `${
          props.theme.iPadInnerheight > 0
            ? props.theme.iPadInnerheight + 'px'
            : 'calc(100vh - 48px)'
        }`
      : `calc(100vh - ${props.theme.headerHeight}px )`};
  ${media.desktop`height: 100%;`};
  ${FlexEndWrapper} {
    /* height: 100%; */
    height: calc(
      ${(props) =>
        props.theme.iPadInnerheight > 0
          ? props.theme.iPadInnerheight + 48 + 'px'
          : '100% '}
    );
    ${media.desktop`height: 100%;`}
  }
  ${InfoContentWrapper} {
    padding: 16px;
  }
  ${ContentContainer} {
    ${(props) =>
      props.hide ? null : `margin-left: 15px;width: calc(100% - 15px);`};
    ${media.desktop`
      width: 100%;
      margin-left: 0px;
    `}
  }
  ${GreyOut} {
    ${(props) =>
      props.theme.iPadInnerheight > 0
        ? `height:${props.theme.iPadInnerheight + 48}px`
        : ``};
    margin-left: ${(props) => (props.theme.iframe ? `15px` : `15px`)};
    width: 100%;
    position: absolute;
    left: auto;
    ${media.desktop`
      position:fixed;
      width: 100%;
      margin-top: 0px;
      margin-left: 0px;
    `}
  }

  ${(props) => (props.from === 'infocontent' ? 'height: auto!important;' : ``)};
`
//-------------------- PageWrapper --------------------//
export const FilterLocateWrapper = styled.div`
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 1fr 33%;
  ${media.desktopMedium`
    grid-template-columns: minmax(640px,1fr) 33.4%;
  `}
  ${media.desktop`
  grid-template-columns: 100% 0;
  `}
`
export const FilterLocateWrapperInner = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(534px, 1fr);
  ${media.desktopMedium`
    grid-template-columns: 0 100% 0;
  `}
`
export const PageWrapper = styled.div`
  overflow-y: hidden;
  background: ${(props) => props.theme.color_P4_28};
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 33%;
  height: 100%;
  ${MopCenterScrollWrapper} {
    display: grid;
    grid-template-columns: 64px minmax(534px, 1fr);
    ${LeftSportsWrapper} {
      grid-row-start: 1;
      grid-row-end: 4;
    }
  }
  ${AmpContentCenterWrapper} {
    display: none;
  }
  ${(props) =>
    props.rightPanelPopUp &&
    `
      grid-template-columns: 1fr calc(33% + 15px);
    `}
  ${media.desktopMedium`
    grid-template-columns: minmax(640px, 1fr) 33.4%;
    ${(props) =>
      props.rightPanelPopUp &&
      `grid-template-columns: minmax(calc(640px - 15px), 1fr) calc(33.4% + 15px);`}
    ${MopCenterScrollWrapper}{
      display: block;
      ${LeftSportsWrapper} {display: none;}
    }
  `}
  ${media.desktop`
    display: block;
    ${AmpContentCenterWrapper} {
      display: block;
    }
    ${CenterPanelWrapper} {
      padding-bottom: 0px;
    }
    ${RightPanelWrapper}{
      display: none;
    }
  `}
`
export const PageContainer = styled.div`
  -webkit-overflow-scrolling: touch;
  background: ${(props) => props.theme.color_S6};
`
export const HomePageWrapper = styled.div`
  padding-top: ${(props) =>
    props.theme.iframe ? `0` : `${props.theme.headerHeight}px`};
  @media screen and (min-width: 1024px) {
    ${(props) =>
      props.iframe ? `body {overflow: hidden;margin-top:0!important;}` : ``}
  }
  background: ${(props) => props.theme.color_P4_28};
  grid-template-columns: 64px minmax(790px, 1fr) 33%;
  ${media.desktopMedium`
    grid-template-columns: 0px minmax(640px, 1fr) minmax(342px, 426px);
    ${CenterPanelWrapper}{
      grid-column-start: 1;
      grid-column-end: 3;
    }
  `}
  ${media.desktop`
    grid-template-columns:0px 100%;
  `}
  display: grid;
  width: 100%;
  ${CenterPopUpWrapper} {
    width: 640px;
    margin: 0px auto;
  }
  ${LeftSportsWrapper} {
    grid-row-start: 1;
    grid-row-end: 10;
  }
  ${SportCarouselWrapper} {
    grid-column-start: 2;
    grid-column-end: 4;
    ${media.desktop`
      grid-column-start: 2;
      grid-column-end: 3;
    `}
    margin: 8px 0px 16px 0px;
  }
  ${CenterPanelWrapper} {
    grid-column-start: 2;
    grid-column-end: 3;
    margin-top: 0px;
    ${media.desktop`
      padding-bottom: 0px;
    `}
  }
  ${CenterPanelWrapper} > ${BannerImg} {
    margin-bottom: 16px;
  }
  ${FooterWrapper} {
    grid-column-start: 1;
    grid-column-end: 4;
    ${media.desktop`
      grid-column-start: 1;
      grid-column-end: 3;
    `}
  }
  ${RightPanelWrapper} {
    height: auto;
    padding: 0px 16px 16px 0px;
    grid-row: span 6;
    ${media.desktop`
    padding: 0px;
    `}
    ${OddsTypeWrapper} {
      height: 56px;
    }
    ${CompetitionTabWrapper}:nth-child(1) {
      display: none;
      ${media.desktop`
        display: grid;
      `}
    }
    ${NonPremiumPanelWrapper} {
      ${NPDetailWrapper} {
        ${FlexLeft} > ${TvWrapper} {
          display: block;
        }
        ${FlexRight} > ${TvWrapper} {
          display: none;
        }
      }
    }
    ${media.desktop`
      grid-row: span 1;
    `}
  }
`

//-------------------- Header Filter --------------------//
const HeaderFilterPeriod = styled.span`
  max-width: 50%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  margin-right: 4px;
  color: ${(props) =>
    props.periodLive ? props.theme.color_A3_4 : props.theme.color_P3_2_OP56};
`
const HeaderFilterScore = styled.span`
  max-width: 50%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  color: ${(props) => props.theme.color_A3_4};
`

export const BetTypeTextWrapper = styled.div`
  width: 100%;
  ${F14} {
    color: ${(props) => props.theme.color_P3_2_OP56};
  }
  ${F16} {
    ${Truncate(2)};
    text-align: ${(props) => (props.outright ? 'center' : 'left')};
    color: ${(props) => props.theme.color_P3_2};
  }
  ${F18} {
    line-height: ${(props) => props.sportIcon && '40px'};
    padding: ${(props) => props.sportIcon && '4px 0px'};
    color: ${(props) => props.theme.color_P3_1};

    ${Truncate(1)}
  }
`
export const HeaderFilterContainer = styled(RelativeWrapper)`
  background: ${(props) => (props.withBg ? props.theme.color_S4 : 'initial')};
`
export const HeaderFilterWrapper = styled(Flex)`
  min-height: ${(props) =>
    props.period || props.score || (props.period && props.score)
      ? '64px'
      : props.outright || props.betType
      ? '48px'
      : props.favorite || props.withInfo
      ? '56px'
      : '48px'};
  color: ${(props) => props.theme.color_P3_1};
  align-items: center;
  text-align: center;
  justify-content: space-between;
  ${FlexLeft} {
    width: 100%;
  }
  ${(props) => props.collapse && 'margin-bottom: 4px'};
  ${(props) =>
    props.outright &&
    `justify-content: center; ${FlexLeft}{justify-content: center;}${Period}{justify-content: center;}`}
  width: 100%;
  padding-right: ${(props) =>
    props.withInfo
      ? '80px'
      : props.icon || props.favorite
      ? '56px'
      : props.outright
      ? '16px'
      : '0px'};
  padding-left: ${(props) =>
    props.betType || props.outright ? '16px' : '0px'};
  padding-top: ${(props) => props.period && props.score && '2px'};
  padding-bottom: ${(props) => props.period && props.score && '2px'};
  cursor: ${(props) => props.soonSports && 'pointer!important;'};
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
      background: ${(props) =>
        props.clickable
          ? props.theme.color_P3_1_OP4_1
          : props.outright && props.clickable
          ? props.theme.color_S4_Lplus4
          : 'initial'};
    }
  }
  &:active {
    background: ${(props) =>
      props.outright && props.clickable
        ? props.theme.color_S4_Lmin8
        : props.clickable
        ? props.theme.color_P3_1_OP8_2
        : 'initial'};
  }
  ~ ${AbsoluteRightCenter} {
    margin-right: ${(props) => (props.icon ? '16px' : '8px')};
    ${(props) => props.showInfo && `z-index: 3`};
    ${InfoIconWrapper}:after {
      top: 32px;
      left: 10px;
    }
    ${InfoPopUpContainer} {
      top: 35px;
      left: auto;
      right: 0px;
    }
    ${FavoriteWrapper} {
      padding-left: 16px;
    }
  }
  ${IconWrapper48} {
    margin-right: ${(props) => props.sportIcon && `8px`};
    min-width: 48px;
    g {
      fill: ${(props) => props.theme.color_P3_1_OP64};
    }
  }
`

export const HeaderFilter = ({
  betType,
  icon,
  infoIcon,
  infoActive,
  showInfo,
  period,
  periodLive,
  score,
  sport,
  sportIcon,
  match,
  outright,
  clickHandler,
  clickable,
  favorite,
  favoriteActive,
  addFavorite,
  toggleInfo,
  withMatchTracker,
  matchTrackerActive,
  toggleMatchTracker,
  infoTitleText,
  infoContentText,
  collapse,
  soonSports,
}) => (
  <HeaderFilterContainer withBg={betType || outright}>
    <HeaderFilterWrapper
      withInfo={infoIcon}
      icon={icon}
      betType={betType}
      sportIcon={sportIcon}
      favorite={favorite}
      outright={outright}
      onClick={clickHandler}
      clickable={clickable}
      period={period}
      score={score}
      showInfo={showInfo}
      match={match}
      withMatchTracker={withMatchTracker}
      soonSports={soonSports}
    >
      {sportIcon && (
        <IconWrapper48>
          <IconWrapper16>{sportIcon}</IconWrapper16>
        </IconWrapper48>
      )}
      {icon && outright && <IconWrapper48 />}
      <BetTypeTextWrapper
        sportIcon={sportIcon}
        outright={outright}
        data-txt-comp={sport || betType}
      >
        {outright && sport ? (
          <F16 bold={1} condensed={1} uppercase={1}>
            {sport}
          </F16>
        ) : sport ? (
          <F18 bold={1} condensed={1} uppercase={1}>
            {sport}
          </F18>
        ) : betType ? (
          <F16 bold={1} condensed={1} uppercase={1}>
            {betType}
          </F16>
        ) : null}
        {(period || score) && (
          <FlexLeft>
            {period && (
              <HeaderFilterPeriod periodLive={periodLive}>
                {period}
              </HeaderFilterPeriod>
            )}
            {score && <HeaderFilterScore>{score}</HeaderFilterScore>}
          </FlexLeft>
        )}
      </BetTypeTextWrapper>
      {match ? (
        <Match>
          <F14 bold={1} condensed={1}>
            {match}
          </F14>
        </Match>
      ) : favorite || infoIcon || outright || icon ? null : (
        <IconWrapper48 />
      )}
    </HeaderFilterWrapper>
    <AbsoluteRightCenter>
      <Flex>
        {showInfo && (
          <InfoPopUp
            titleText={infoTitleText}
            contentText={infoContentText}
            closeInfoPopUp={toggleInfo}
          />
        )}
        {infoIcon && (
          <Information16
            onClick={toggleInfo}
            activeArrowDown={infoActive}
            eventHeader={1}
          />
        )}
        {favorite && (
          <Favorite marketline onClick={addFavorite} active={favoriteActive} />
        )}
        {icon && <IconWrapper24>{icon}</IconWrapper24>}
        {withMatchTracker && (
          <MatchTrackerIconWrapper matchTrackerActive={matchTrackerActive}>
            <IconWrapper32 onClick={toggleMatchTracker}>
              <AbsoluteCenter>
                <Icons.Match_tracker_motor_sports_active />
              </AbsoluteCenter>
              <AbsoluteCenter>
                <Icons.Match_tracker_motor_sports_normal />
              </AbsoluteCenter>
            </IconWrapper32>
          </MatchTrackerIconWrapper>
        )}
      </Flex>
    </AbsoluteRightCenter>
  </HeaderFilterContainer>
)

export const Match = styled(FlexCenter)`
  color: ${(props) => props.theme.color_P3_1_OP56};
  padding: 0px 16px 0px 8px;
  margin-left: 8px;
  min-width: 56px;
  height: 16px;
  border-left: 1px solid ${(props) => props.theme.color_P3_1_OP16};
  ${F13} {
    line-height: 15px;
    width: 24px;
  }
`
//-------------------- Filter Item --------------------//
export const FilterStickyWrapper = styled(FlexStickyTop)`
  /* z-index: 3; */
  ${(props) => props.noSticky && `position: relative;`}
`
export const FilterWrapperItemContainer = styled(FlexScrollWrapper)`
  padding: 16px 0px;
  &:after {
    content: '';
    background: ${(props) => props.theme.color_P4_2};
    width: 100%;
    height: 72px;
    padding-top: 16px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
`
export const FilterWrapper = styled(FlexCenter)`
  width: 100%;
  white-space: nowrap;
  ${media.desktop`
    padding-left: 16px;
  `}
`
export const FilterItemContainer = styled.div`
  position: relative;
  ${(props) => props.showDropdownList && `height:${props.list * 40 + 64}px;`};
`
export const FilterItemWrapper = styled(FlexCenter)`
  min-width: 105px;
  background: ${(props) => props.theme.color_P4_28};
  position: relative;
  ${F12}:nth-child(2) {
    color: ${(props) =>
      props.active ? props.theme.color_A3_OP56 : props.theme.color_P3_9_OP64};
    text-transform: capitalize;
    display: none;
    ${media.desktopLarge`display: block;`}
    ${media.desktop`display: none;`}
    ${media.tabletLandscape`display: block;`}
  }
  color: ${(props) =>
    props.active ? props.theme.color_A3 : props.theme.color_P3_9_OP64};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_A3};

      border: 1px solid ${(props) => props.theme.color_A3};
      ${F12}:nth-child(2) {
        color: ${(props) => props.theme.color_A3_OP56};
      }
      g {
        fill: ${(props) => props.theme.color_A3};
      }
    }
  }
  &:active {
    color: ${(props) => props.theme.color_A3};

    border: 1px solid ${(props) => props.theme.color_A3};
    ${F12}:nth-child(2) {
      color: ${(props) => props.theme.color_A3_OP56};
    }
    g {
      fill: ${(props) => props.theme.color_A3};
    }
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_9_OP32};
  g {
    fill: ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_OP40};
  }
  border-radius: 4px;
  padding: 0px 16px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 16px;
  text-align: center;
  cursor: pointer;
  ${ChevronUpDownContainer} {
    margin-left: 12px;
  }
  text-align: left;
`

export const FilterItem = ({
  marketline,
  active,
  showChevron,
  chevronUp,
  switchFilter,
  betType,
}) => (
  <FilterItemWrapper
    active={active}
    onClick={switchFilter}
    data-btn={marketline}
  >
    <FlexColumn>
      <F12 uppercase={1}>{marketline}</F12>
      {betType && <F12 uppercase={1}>{betType}</F12>}
    </FlexColumn>
    <Chevron show={showChevron} marketline={marketline} chevronUp={chevronUp} />
  </FilterItemWrapper>
)

//-------------------- Overlay Panel --------------------//
export const RightPanelOverlayContainer = styled(FixedPage3)`
  box-sizing: content-box;
  left: 0;
  bottom: 0px;
  top: inherit;
  height: 100%;
  pointer-events: none;
  position: fixed;
  ${(props) =>
    props.theme.iframe
      ? `height:${
          props.theme.iPadInnerheight > 0
            ? props.theme.iPadInnerheight + 'px'
            : ''
        }`
      : `height:${
          props.theme.iPadInnerheight > 0
            ? props.theme.iPadInnerheight + 'px'
            : ''
        }`};
  ${PageWrapper} {
    background: none;
    height: 100%;
  }
  ${RightPanelWrapper} {
    position: relative;
    padding: 0px;
    background: none;
    ${(props) =>
      props.theme.iframe
        ? `height:${
            props.theme.iPadInnerheight > 0
              ? props.theme.iPadInnerheight + 'px'
              : ''
          }`
        : ``};
  }
  ${media.desktop`
    bottom: 0px;
    ${PopUpWrapper}{
      height: 100%;
    }
    ${PageScrollWrapper}{
      height: 100%;
    }
    ${RightPanelWrapper}{
      display: block;
    }
    ${MopCenterScrollWrapper}{
      display: none;
    }
  `}
  @media (max-width: 812px) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
`
export const AbsoluteExpandWrapper = styled.div``
export const CenterPanelOverlayContainer = styled(FixedPage3)`
  pointer-events: none;
  ${(props) =>
    props.homePage &&
    `
      ${PageWrapper}{grid-template-columns: 1fr;}
      ${ContentContainer} {
        max-width: 640px;
        margin: 0 auto;
      }
    `}
  ${PageWrapper},${RightPanelWrapper} {
    background: none;
  }
  ${MopCenterScrollWrapper} {
    position: relative;
    padding: 0px;
    background: none;
  }
  ${TooltipContainer} {
    z-index: 10;
  }
  ${media.desktop`
    top: 0px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    ${RightPanelWrapper}{
      display: block;
    }
    ${MopCenterScrollWrapper}{
      display: block;
      height: 100vh;
    }
  `}
`
//-------------------- Outright Market Line --------------------//

const MarketLineWrapper = styled(FlexCenterColumn)`
  position: relative;
  height: 48px;
  text-align: center;
  padding: 0 16px;
  @media (hover: hover) {
    &:hover {
      ${(props) =>
        props.toggle
          ? `cursor: pointer; background: ${props.theme.color_P3_1_OP4_1};`
          : 'inherit'};
    }
  }
  &:active {
    background: ${(props) =>
      props.toggle ? props.theme.color_P3_1_OP8_1 : 'inherit'};
  }
  ${F14} {
    color: ${(props) =>
      props.active
        ? props.theme.color_A3
        : props.priceBoost
        ? props.theme.color_A1
        : props.theme.color_P3_7};
    line-height: 16px;
    ${Truncate(2)};
  }
  ${Period} {
    color: ${(props) =>
      props.periodLive
        ? `${props.theme.color_A3_6};`
        : props.marketline
        ? `${props.theme.color_P3_7_OP56};`
        : props.theme.color_P3_7_OP56};
  }
  ${media.desktop`
    padding: 0px 16px;
  `}
`

export const MarketLine = ({
  market,
  period,
  periodLive,
  active,
  clickHandler,
  toggle,
  priceBoost,
}) => (
  <MarketLineWrapper
    active={active}
    periodLive={periodLive}
    toggle={clickHandler}
    onClick={clickHandler}
    priceBoost={priceBoost}
  >
    <FlexCenter>
      <F14 bold={1} condensed={1} uppercase={1}>
        {market}
      </F14>
    </FlexCenter>
    <Period>
      <F12>{period}</F12>
    </Period>
  </MarketLineWrapper>
)

//-------------------- DateFilter --------------------//
export const DateFilterItemContainer = styled(FlexScrollWrapper)`
  margin-bottom: 16px;
`
export const DateFilterItemWrapper = styled(FlexCenter)`
  display: block;
  text-align: center;
  height: 64px;
  width: 56px;
  padding: ${(props) => (props.allDate ? '0 2px' : '0px')};
  border-radius: 8px;
  flex-shrink: 0;
  margin-right: 16px;
  background: ${(props) =>
    props.allDate && props.active && props.theme.color_A3};
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_9_OP32};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.color_A3};

      ${F12}:first-child {
        background: ${(props) => props.theme.color_A3};
      }
      ${F12},${F14} {
        color: ${(props) => props.theme.color_A3};
      }
      background: ${(props) => props.allDate && props.theme.color_P4_2};
    }
  }
  ${F12}:first-child {
    ${Truncate(1)};
    line-height: 20px;
    color: ${(props) => props.theme.color_P4_12};

    background: ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_5_OP32};
    height: 21px;
    width: 54px;
    border-radius: 7px 7px 0px 0px;
  }
  ${FlexCenterColumn} {
    justify-content: ${(props) => (props.allDate ? 'center' : 'start')};
    height: ${(props) => (props.allDate ? '64px' : '43px')};
    color: ${(props) =>
      props.allDate && props.active
        ? props.theme.color_P4_2
        : props.active
        ? props.theme.color_A3
        : props.theme.color_P3_9_OP64};
    ${F12}, ${F14} {
      height: ${(props) => (props.allDate ? 'auto' : '16px')};
      ${(props) => (props.allDate ? `${Truncate(2)}` : `${Truncate(1)}`)};
    }
    ${F14} {
      margin: ${(props) => (props.allDate ? '0px' : '4px 0px 1px 0px')};
      ${(props) =>
        props.allDate &&
        `font-weight:normal;font-size: 12px;white-space: pre-wrap;`};
    }
  }
  &:active {
    border: 1px solid ${(props) => props.theme.color_A3};

    ${F12}:first-child {
      background: ${(props) => props.theme.color_A3};
    }
    background: ${(props) =>
      props.allDate ? props.theme.color_A3 : props.theme.color_P3_1_OP8_1};
    ${FlexCenterColumn} {
      ${F12},${F14} {
        color: ${(props) =>
          props.allDate ? props.theme.color_P4_2 : props.theme.color_A3};
      }
    }
  }
`

export const DateFilterItem = ({
  week,
  date,
  month,
  active,
  switchDate,
  allDate,
}) => (
  <DateFilterItemWrapper active={active} onClick={switchDate} allDate={allDate}>
    {week && <F12 uppercase={1}>{week}</F12>}
    <FlexCenterColumn>
      <F14 bold={1} uppercase={1}>
        {date}
      </F14>
      {month && <F12 uppercase={1}>{month}</F12>}
    </FlexCenterColumn>
  </DateFilterItemWrapper>
)

//-------------------- Schedule Event --------------------//
const ScheduleEventIconWrapper = styled(IconWrapper16)`
  g {
    fill: ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_OP72};
  }
`

export const ScheduleEventWrapper = styled(FlexLeft)`
  height: 56px;
  padding: 4px 16px;
  background: ${(props) => props.theme.color_P4_2};
  color: ${(props) => props.theme.color_P3_OP72};
  ${F14} {
    ${Truncate(2)}
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
  ${IconWrapper16} {
    margin: 0px 16px;
  }
`

export const ScheduleEvent = ({
  media,
  sport,
  active,
  event,
  time,
  enterEvent,
  tv,
  tvActive,
}) => {
  return (
    <>
      <ScheduleEventWrapper
        event={event}
        time={time}
        onClick={enterEvent}
        tv={tv}
        tvActive={tvActive}
      >
        <IconWrapper32>
          {media && <IconWrapper16>{media}</IconWrapper16>}
          {tv && (
            <ScheduleEventIconWrapper active={tvActive}>
              {tvActive ? <Icons.Cc_tv_active /> : <Icons.Tv_button_mop />}
            </ScheduleEventIconWrapper>
          )}
          {time && <F12>{time}</F12>}
        </IconWrapper32>
        <ScheduleEventIconWrapper active={active}>
          {sport}
        </ScheduleEventIconWrapper>
        <F14>{event}</F14>
      </ScheduleEventWrapper>
    </>
  )
}

export const ScheduleDateWrapper = styled.div`
  height: 24px;
  padding: 4px 16px;
  background: ${(props) => props.theme.color_S4};
  color: ${(props) => props.theme.color_P3_OP56};
`
export const ScheduleDate = ({ date }) => {
  return (
    <ScheduleDateWrapper>
      <F12 uppercase={1}>{date}</F12>
    </ScheduleDateWrapper>
  )
}
export const SchedulePanelWrapper = styled.div``

//-------------------- Top 10 Competitions --------------------//

export const SpecialEventWrapper = styled(RelativeWrapper)`
  margin: 0 16px;
  background: ${(props) => props.theme.color_S1_2};

  ${media.desktop`
    margin: 0;
  `}
`

const SpecialEventItemWrapper = styled.div`
  background: ${(props) =>
    props.darkerBg ? props.theme.color_S1_2 : props.theme.color_P4_2_OP4};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_S1_2_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_S1_2_Lmin8};
  }
  flex-shrink: 0;
  height: 128px;
  width: 104px;
  padding: 16px 8px;
  ${IconWrapper24} {
    margin: 16px auto 8px auto;
  }
  ${F12} {
    color: ${(props) => props.theme.color_P4_6};

    ${Truncate(3)}
    line-height: 15px;
    text-align: center;
  }
`
export const SpecialEventItemContainer = styled(FlexScrollWrapper)``

export const SpecialEventItem = ({
  specialEventName,
  image,
  enterSpecialEvent,
  darkerBg,
}) => (
  <SpecialEventItemWrapper darkerBg={darkerBg} onClick={enterSpecialEvent}>
    <IconWrapper24>{image}</IconWrapper24>
    <F12>{specialEventName}</F12>
  </SpecialEventItemWrapper>
)

//-------------------- Regional Coupon --------------------//
export const CouponButtonEdgeWrapper = styled(Flex)`
  g {
    fill: ${(props) => props.theme.color_S1_1};
  }
`
const RegionalCouponWrapper = styled(FlexCenter)`
  ${CouponButtonEdgeWrapper} {
    &:first-child {
      margin-right: -3px;
    }
    &:last-child {
      margin-left: -4px;
      transform: rotate(180deg);
    }
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      cursor: pointer;
      ${FlexCenter}, ${IconWrapper32} {
        background: ${(props) => props.theme.color_S1_1_Lplus4};
      }
      ${CouponButtonEdgeWrapper} {
        g {
          fill: ${(props) => props.theme.color_S1_1_Lplus4};
        }
      }
    }
  }
  &:active {
    ${FlexCenter}, ${IconWrapper32} {
      background: ${(props) => props.theme.color_S1_1_Lmin8};
    }
    ${CouponButtonEdgeWrapper} {
      g,
      use {
        fill: ${(props) => props.theme.color_S1_1_Lmin8};
      }
    }
  }
  ${FlexCenter} {
    ${FlexSpaceBetween(56)}
    background: ${(props) => props.theme.color_S1_1};

    border-radius: 4px;
    ${IconWrapper32} {
      margin-left: 4px;
    }
  }
  ${F16} {
    color: ${(props) => props.theme.color_P4_8};

    ${Truncate(2)}
  }
  ${FlexRight} {
    g {
      fill: ${(props) => props.theme.color_P4_8_OP56};
    }
    ${F16} {
      margin-right: 3px;
      margin-left: 8px;
      width: 28px;
      text-align: right;
      white-space: nowrap;
    }
  }
`

export const RegionalCoupon = ({ text, icon, match, enterOop }) => (
  <RegionalCouponWrapper onClick={enterOop}>
    <CouponButtonEdgeWrapper>
      <Icons.Coupon_buttonedge_left />
    </CouponButtonEdgeWrapper>
    <FlexCenter>
      <IconWrapper32>{icon}</IconWrapper32>
      <F16 bold={1} uppercase={1}>
        {text}
      </F16>
      <FlexRight>
        <F16 bold={1} uppercase={1} condensed={1}>
          {match}
        </F16>
        <Icons.Caret_right />
      </FlexRight>
    </FlexCenter>
    <CouponButtonEdgeWrapper>
      <Icons.Coupon_buttonedge_left />
    </CouponButtonEdgeWrapper>
  </RegionalCouponWrapper>
)

//-------------------- GMT info --------------------//
const GMTInfoWrapper = styled(FlexCenter)`
  background: ${(props) => props.theme.color_S3_1};

  color: ${(props) => props.theme.color_P4_17};
  width: 100%;
  height: 32px;
  ${IconWrapper12} {
    padding: 8px;
    g {
      fill: ${(props) => props.theme.color_P4_17_OP64};
    }
  }
`

export const GMTInfo = ({ text }) => (
  <GMTInfoWrapper>
    <IconWrapper12>
      <Icons.Information_dark />
    </IconWrapper12>
    <F12>{text}</F12>
  </GMTInfoWrapper>
)

//-------------------- No Events --------------------//
const NoEventsWrapper = styled(FlexCenterColumn)`
  height: 300px;
  ${F12} {
    padding: 9px 16px 0 16px;
    color: ${(props) => props.theme.color_P3_OP56};
    text-align: center;
  }
`
export const NoEvents = ({ text }) => (
  <NoEventsWrapper>
    <FlexCenter>
      <Icons.No_competitions />
    </FlexCenter>
    <F12>{text}</F12>
  </NoEventsWrapper>
)
const NoBetsWrapper = styled.div`
  ${FlexCenterColumn} {
    height: 300px;
  }
  ${(props) =>
    props.betSlip &&
    `
      background: ${props.theme.color_P4_2};
      height: calc(100% - 68px);
      padding: 16px 0px;
      justify-content: flex-start;
  `};
  ${F12} {
    padding: 16px;
    color: ${(props) => props.theme.color_P3_OP56};
    text-align: center;
  }
`
export const NoBets = ({ text, betSlip }) => (
  <NoBetsWrapper betSlip={betSlip}>
    <FlexCenterColumn>
      <FlexCenter>
        <Icons.No_bets />
      </FlexCenter>
      <F12 uppercase={1}>{text}</F12>
    </FlexCenterColumn>
  </NoBetsWrapper>
)
const NoMarketsWrapper = styled.div`
  ${FlexCenterColumn} {
    height: 300px;
  }
  ${(props) =>
    props.betSlip &&
    `
      background: ${props.theme.color_P4_2};
      height: calc(100% - 68px);
      padding: 16px 0px;
      justify-content: flex-start;
  `};
  ${F12} {
    padding: 16px;
    color: ${(props) => props.theme.color_P3_OP56};
    text-align: center;
  }
`
export const NoMarkets = ({ text, betSlip }) => (
  <NoMarketsWrapper betSlip={betSlip}>
    <FlexCenterColumn>
      <FlexCenter>
        <Icons.No_markets />
      </FlexCenter>
      <F12>{text}</F12>
    </FlexCenterColumn>
  </NoMarketsWrapper>
)

const EmptyMyEventsWrapper = styled(FlexCenter)`
  height: 422px;
  ${F12} {
    color: ${(props) => props.theme.color_P3_OP56};
    text-align: center;
    min-height: 50px;
    margin-bottom: 8px;
  }
  span:nth-child(2) {
    font-weight: bold;
    text-transform: uppercase;
  }
  ${media.tablet`
    ${F12} {
      min-height: 88px;
    }
  `}
  ${FlexEndWrapper} {
    width: 576px;
    height: 360px;
    padding-bottom: 24px;
    ${media.tablet`
      height: 390px;
      width: 256px;
    `}
  }
`
const EmptyMyEventsBorderWrapper = styled(AbsoluteCenter)`
  svg:first-child {
    display: none;
  }
  ${media.tablet`
    svg:first-child{display: block;}
    svg:last-child{display: none;}
  `}
`
export const EmptyMyEvents = ({ text1, text2, highlightText }) => (
  <EmptyMyEventsWrapper>
    <RelativeWrapper>
      <EmptyMyEventsBorderWrapper>
        <Icons.Myevents_border_icon />
        <Icons.Myevents_border_icon_big />
      </EmptyMyEventsBorderWrapper>
      <AbsoluteCenter>
        <FlexEndWrapper>
          <F12>
            <span>{text1}</span>&nbsp;
            {highlightText && <span>{highlightText}</span>}&nbsp;
            {text2 && <span>{text2}</span>}
          </F12>
          <FlexCenter>
            <BannerImg
              // img={Images.My_events_animation}
              height={'174px'}
              width={'256px'}
            />
          </FlexCenter>
        </FlexEndWrapper>
      </AbsoluteCenter>
    </RelativeWrapper>
  </EmptyMyEventsWrapper>
)

//-------------------- All Selection Button --------------------//
const AllSelectionButtonWrapper = styled(FlexCenter)`
  position: relative;
  background: ${(props) => props.theme.color_S3};
  color: ${(props) => props.theme.color_P4_7};
  margin: 16px 0px;
  border-radius: 4px;
  height: 48px;
  g {
    fill: ${(props) => props.theme.color_P4_7_OP56};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_S3_Lplus4};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_S3_Lmin8};
  }
  ${media.desktop`margin: 16px 16px;`}
`
export const AllSelectionButton = ({ text, enterAll }) => (
  <AllSelectionButtonWrapper onClick={enterAll}>
    <F14 uppercase={1}>{text}</F14>
    <Icons.Caret_right />
  </AllSelectionButtonWrapper>
)
//-------------------- Dropdown --------------------//
export const DropdownListContainer = styled.div`
  position: absolute;
`
export const DropdownListWrapper = styled.div`
  ${(props) => props.showLastDropdownList && `transform: translateX(-50%);`};
  position: relative;
  background: ${(props) => props.theme.color_P4_2};
  box-shadow: 0 2px 8px 0px ${(props) => props.theme.color_P3_OP24};
  border-radius: 4px;
  width: 240px;
  max-height: 336px;
  padding: 12px 0;
  z-index: 10;
  overflow-x: hidden;
`
export const DropdownListItemWrapper = styled(FlexLeft)`
  color: ${(props) =>
    props.active ? props.theme.color_A3 : props.theme.color_P3_9_OP64};
  height: 40px;
  padding: 4px 16px;
  ${F14} {
    line-height: 16px;
    white-space: pre-wrap;
    width: 100%;
    ${Truncate(2)};
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_A3};

      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    color: ${(props) => props.theme.color_A3};

    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const DropdownListItem = ({ text, ...rest }) => (
  <DropdownListItemWrapper {...rest}>
    <F14>{text}</F14>
  </DropdownListItemWrapper>
)
export const DropdownList = ({
  toggleDropdownList,
  showLastDropdownList,
  list = [],
}) => {
  // if (!list || list.length  === 0) return null
  return (
    <DropdownListContainer>
      <DropdownListWrapper showLastDropdownList={showLastDropdownList}>
        {list &&
          list.length > 0 &&
          list.map(({ optionText, selectItem, onClick, ...rest }, index) => (
            <DropdownListItem
              key={'dropdownListItem' + index}
              text={optionText}
              onClick={() => {
                toggleDropdownList && toggleDropdownList()
                selectItem && selectItem()
                onClick && onClick()
              }}
              {...rest}
            />
          ))}
      </DropdownListWrapper>
    </DropdownListContainer>
  )
}
//-------------------- Default Select --------------------//
export const SelectContainer = styled(RelativeWrapper)`
  ${AbsoluteRightCenter} {
    pointer-events: none;
  }
  ${AbsoluteLeftCenter} {
    pointer-events: none;
    height: 100%;
    width: 100%;
  }
`

export const SelectWrapper = styled.select`
  outline: none;
  appearance: none;
  width: 100%;
  height: 40px;
  padding: 4px 16px;
  line-height: 16px;
  ${Truncate(1)};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color_P3_9_OP32};
  background: ${(props) => props.theme.color_P4_2};
  color: ${(props) => props.theme.color_P3_9_OP64};

  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const Option = styled.option`
  outline: none;
  appearance: none;
  z-index: 0;
  color: black;
  display: flex;
  white-space: pre;
  width: 100%;
  height: 40px;
  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
  ${(props) => props.hidden && `display: none;`};
`
export const Select = ({ toggleSelector, list = [] }) => (
  <SelectContainer>
    <SelectWrapper>
      {list &&
        list.length > 0 &&
        list.map(({ optionText, onClick, handleChange, ...rest }, index) => (
          <>
            <Option
              value={index}
              onClick={toggleSelector}
              {...rest}
              key={'option' + index}
            >
              {optionText}
            </Option>
            <AbsoluteLeftCenter>{optionText}</AbsoluteLeftCenter>
          </>
        ))}
    </SelectWrapper>
    <AbsoluteRightCenter onClick={toggleSelector}>
      <IconWrapper48>
        <Chevron show={1} />
      </IconWrapper48>
    </AbsoluteRightCenter>
  </SelectContainer>
)

export const FAQContentWrapper = styled.div`
  padding-bottom: 16px;
  ${F16} {
    color: ${(props) => props.theme.color_P3_18};
    padding-bottom: 16px;
    letter-spacing: normal;
  }
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP72};
  }
`
export const FAQContent = ({
  title,
  content,
  content1,
  content2,
  content3,
  content4,
}) => (
  <FAQContentWrapper>
    <F16 bold={1} uppercase={1}>
      {title}
    </F16>
    <F14>{content || content1}</F14>
    <br />
    {content2 && (
      <>
        <F14>{content2}</F14>
        <br />
      </>
    )}
    {content3 && (
      <>
        <F14>{content3}</F14>
        <br />
      </>
    )}
    {content4 && <F14>{content4}</F14>}
  </FAQContentWrapper>
)
//---------------------------- SportsRules  ----------------------------//
export const RulesContentWrapper = styled.div`
  padding-bottom: 16px;
  ${F16} {
    color: ${(props) => props.theme.color_P3_18};
    padding-bottom: 16px;
    letter-spacing: -1px;
  }
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP64};
    line-height: 1.2;
  }
  ${F12} {
    color: ${(props) => props.theme.color_P3_OP56};
    font-style: italic;
  }
  ul {
    list-style-type: none;
    counter-reset: li;
    margin-left: 16px;
    li {
      counter-increment: li;
      padding-left: 8px;
      &::before {
        content: counter(li) '.';
        display: inline-block;
        width: 1em;
        margin-left: -1.5em;
        margin-right: 0.5em;
      }
      ul {
        list-style-type: disc;
        margin: 4px 16px;
        li {
          counter-increment: none;
          &::before {
            content: '';
          }
        }
      }
    }
  }
`
export const RulesRelativeWrapper = styled(RelativeWrapper)`
  ${AbsoluteRightCenter} {
    pointer-events: none;
  }
`
export const RulesSelectWrapper = styled.div`
  outline: none;
  appearance: none;
  width: 100%;
  height: 40px;
  padding: 4px 16px;
  line-height: 30px;
  ${Truncate(1)};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color_P3_9_OP32};
  background: ${(props) => props.theme.color_P4_2};
  color: ${(props) => props.theme.color_P3_9_OP64};

  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const RulesSelectContainer = styled.div`
  position: relative;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
  line-height: 40px;
  ${AbsoluteRightCenter} {
    pointer-events: none;
  }
`
export const RulesDropdownListWrapper = styled(DropdownListWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
export const RulesCenterPanelWrapper = styled(CenterPanelWrapper)`
  ${media.desktop`padding: 0 16px;`}
`
export const RulesSelect = ({ toggleDropdown, text }) => (
  <RulesRelativeWrapper onClick={toggleDropdown}>
    <RulesSelectWrapper>
      <F12>{text}</F12>
    </RulesSelectWrapper>
    <AbsoluteRightCenter>
      <IconWrapper48>
        <Chevron show={1} />
      </IconWrapper48>
    </AbsoluteRightCenter>
  </RulesRelativeWrapper>
)
export const RulesDropdownList = ({
  activeValue,
  toggle,
  onSelect,
  list = [],
}) => {
  return (
    <RulesDropdownListWrapper>
      {list.length > 0 &&
        list.map(({ text, value }, index) => (
          <DropdownListItem
            key={'dropdownListItem' + index}
            text={text}
            active={value === activeValue}
            onClick={() => {
              toggle && toggle()
              onSelect && onSelect(value)
            }}
          />
        ))}
    </RulesDropdownListWrapper>
  )
}
export const RulesContent = ({
  title,
  content,
  content1,
  content2,
  content3,
  content4,
  italic,
  list,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  listItem7,
  listItem8,
  listItem9,
  listItem10,
  listItem11,
  listItem12,
  listItem121,
  listItem122,
  listItem123,
  listItem124,
  listItem13,
}) => (
  <RulesContentWrapper>
    <F16 bold={1} uppercase={1}>
      {title}
    </F16>
    <F14>{content || content1}</F14>
    <br />
    {content2 && (
      <>
        <F14>{content2}</F14>
        <br />
      </>
    )}
    {content3 && (
      <>
        <F14>{content3}</F14>
        <br />
      </>
    )}
    {content4 && (
      <>
        <F14>{content4}</F14>
        <br />
      </>
    )}
    {italic && (
      <>
        <F12>{italic}</F12>
        <br />
      </>
    )}
    {list && (
      <>
        <F14>
          <ul>
            <li>{listItem1}</li>
            <li>{listItem2}</li>
            <li>{listItem3}</li>
            <li>{listItem4}</li>
            <li>{listItem5}</li>
            <li>{listItem6}</li>
            <li>{listItem7}</li>
            <li>{listItem8}</li>
            <li>{listItem9}</li>
            <li>{listItem10}</li>
            <li>{listItem11}</li>
            <li>
              {listItem12}
              <ul>
                <li>{listItem121}</li>
                <li>{listItem122}</li>
                <li>{listItem123}</li>
                <li>{listItem124}</li>
              </ul>
            </li>
            <li>{listItem13}</li>
          </ul>
        </F14>
      </>
    )}
  </RulesContentWrapper>
)
//---------------------------- Bet Process  ----------------------------//
//-------------------- BetSlip ControlBar  --------------------//
export const PlaceBetButton = styled(FlexCenterColumn)`
  text-align: center;
  height: 100%;
  width: 100%;
  ${(props) =>
    props.placeBetActive
      ? `background: ${props.theme.color_A1_2};
      @media (hover: hover) {
        &:hover {
          cursor: ${props.loading ? 'default' : 'pointer'};
          background: ${
            props.loading
              ? props.theme.color_A1_2
              : props.theme.color_A1_2_Lplus4
          };
        }
      }
      &:active {
        background: ${
          props.loading ? props.theme.color_A1_2 : props.theme.color_A1_2_Lmin8
        };
      }
      color: ${props.theme.color_P4_10};
      ${F14}:nth-child(2) {
        color: ${props.theme.color_P4_OP64};
      }
      `
      : props.okText
      ? `background: ${props.theme.color_S1_2};
      @media (hover: hover) {
        &:hover{
          cursor: pointer;
          background: ${props.theme.color_S1_2_Lplus4};
        }
      }
      &:active{
        background: ${props.theme.color_S1_2_Lmin8};
      }
      color: ${props.theme.color_P4_8};`
      : `background: ${props.theme.color_P3_22_OP24};
        color: ${props.theme.color_P3_22_OP64}`};
`
export const TickboxWrapper = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.color_A1_8 : props.theme.color_P3_22_OP32};
  position: relative;
  @media (hover: hover) {
    &:hover {
      border: 1px solid ${(props) => props.theme.color_A1_8};
    }
  }
  &:after {
    content: ${(props) => props.selected && `''`};
    width: 12px;
    height: 12px;
    margin: 5px;
    background: ${(props) => props.theme.color_A1_8};

    border: 1px solid ${(props) => props.theme.color_A1_8};
    position: absolute;
  }
  &:active::after {
    content: '';
    content: ${(props) => props.lock && 'none'};
  }
`
export const Tickbox = ({ onClick, selected }) => {
  const [inSideTickboxActive, setInSideTickboxActive] = useState(false)
  const isControlByProps = !!onClick
  const toggleFunc = () => {
    if (isControlByProps) {
      onClick(!selected)
    } else {
      setInSideTickboxActive(!inSideTickboxActive)
    }
  }
  return (
    <TickboxWrapper
      onClick={() => toggleFunc()}
      selected={isControlByProps ? selected : inSideTickboxActive}
    />
  )
}
// export const RememberStakeChecked = styled(RelativeWrapper)`
//   margin: 0px 4px 0px 12px;
//   width: 16px;
//   height: 16px;
//   border: 1px solid ${(props) => props.theme.color_P3_OP64};
//   border-radius: 50%;
//   background: ${(props) => props.theme.color_P4_2};
//   &::after {
//     display: block;
//     position: absolute;
//     border-radius: 50%;
//     top: 7px;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 10px;
//     height: 10px;
//     background: ${(props) => props.theme.color_A1_1};
//     z-index: 1;
//   }
// `
const RememberStakeButton = styled(FlexLeft)`
  width: 50%;
  background: ${(props) => props.theme.color_S4_2};

  color: ${(props) => props.theme.color_P3_10_OP64};
  ${TickboxWrapper} {
    background: ${(props) => props.theme.color_P4_25};
  }
  ${(props) =>
    props.selectedRememberStake &&
    `  
    ${TickboxWrapper} {
      border: 1px solid ${props.theme.color_A1_1};
      &::after {content: ''};
    }
  `}
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_S4_2_Lplus4};

      ${TickboxWrapper} {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.color_A1_1};
      }
    }
  }
  &:active {
    background: ${(props) => props.theme.color_S4_2_Lmin8};
    ${TickboxWrapper}:after {
      content: '';
    }
  }
  ${IconWrapper24} {
    margin: 0px 8px 0px 16px;
  }
`
const AddtoBetSlipButton = styled(FlexCenter)`
  padding: 4px 8px;
  background: ${(props) => props.theme.color_S4_2};

  color: ${(props) => props.theme.color_P3_10_OP64};
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) => (props.loading ? 'default' : 'pointer')};
      background: ${(props) =>
        props.loading ? props.theme.color_S4_2 : props.theme.color_S4_2_Lplus4};
    }
  }
  &:active {
    background: ${(props) =>
      props.loading ? props.theme.color_S4_2 : props.theme.color_S4_2_Lmin8};
  }
  width: ${(props) => (props.retainSelection ? `100%` : `calc(50% - 48px)`)};
`
export const ControlBarWrapper = styled(Flex)`
  position: sticky;
  bottom: 0;
  z-index: 5;
  height: 56px;
  width: 100%;
  background: ${(props) => props.theme.color_P4_25};
  ${IconWrapper16} {
    padding: 0 8px 0 16px;
  }
  ${PlaceBetButton} {
    width: ${(props) => (props.quickBetslip ? `50%` : `100%`)};
  }
  ${IconWrapper48} {
    min-width: 48px;
    height: 100%;
    background: ${(props) => props.theme.color_S4_2};
    ${(props) =>
      props.quickBetslip &&
      `border-right: 1px solid ${props.theme.color_P4_25}`};

    @media (hover: hover) {
      &:hover {
        cursor: ${(props) => (props.loading ? 'default' : 'pointer')};
        background: ${(props) =>
          props.loading
            ? props.theme.color_S4_2
            : props.theme.color_S4_2_Lplus4};
      }
    }
    &:active {
      background: ${(props) =>
        props.loading ? props.theme.color_S4_2 : props.theme.color_S4_2_Lmin8};
    }
    g {
      fill: ${(props) => props.theme.color_P3_10_OP64};
    }
  }
`
export const ControlBar = ({
  toggleSettings,
  retainSelectionText,
  retainSelection,
  clickHandler,
  placeBetButtonText,
  placeBetActive,
  okText,
  amount,
  currency,
  addtoBetslipText,
  addtoBetslip,
  rememberStake,
  rememberStakeText,
  selectedRememberStake,
  clickSelectedRememberStake,
  touchSelectedRememberStaket,
  loginText,
  loading,
}) => (
  <ControlBarWrapper
    quickBetslip={addtoBetslipText || rememberStake}
    loading={loading}
  >
    {addtoBetslipText || rememberStake || retainSelection ? (
      <>
        {rememberStake ? (
          <RememberStakeButton
            onClick={clickSelectedRememberStake}
            onTouchStart={touchSelectedRememberStaket}
            selectedRememberStake={selectedRememberStake}
          >
            <IconWrapper16>
              <TickboxWrapper selected={selectedRememberStake} />
            </IconWrapper16>
            <F14>{rememberStakeText}</F14>
          </RememberStakeButton>
        ) : toggleSettings ? (
          <>
            <IconWrapper48 onClick={toggleSettings}>
              <Icons.Bet_settings />
            </IconWrapper48>
            <AddtoBetSlipButton
              onClick={addtoBetslip}
              loading={loading}
              data-btn-add-betslip
            >
              {addtoBetslipText && <F14>{addtoBetslipText}</F14>}
            </AddtoBetSlipButton>
          </>
        ) : (
          <>
            <AddtoBetSlipButton
              onClick={retainSelection}
              retainSelection={retainSelection}
              loading={loading}
              data-btn-retain-selection={retainSelectionText}
              data-btn-add-betslip={addtoBetslipText}
            >
              <F14>{addtoBetslipText || retainSelectionText}</F14>
            </AddtoBetSlipButton>
          </>
        )}
      </>
    ) : (
      <IconWrapper48 onClick={toggleSettings} data-btn-settings>
        <Icons.Bet_settings />
      </IconWrapper48>
    )}
    <PlaceBetButton
      onClick={clickHandler}
      placeBetActive={placeBetActive}
      okText={okText}
      loading={loading}
      data-btn-placebet={placeBetButtonText}
      data-btn-ok={okText}
    >
      {(loginText || placeBetButtonText || okText) && (
        <F14 bold={1} uppercase={1}>
          {loginText || placeBetButtonText || okText}
        </F14>
      )}
      {amount && (
        <F14 data-txt-stake-amount={amount}>
          {amount || 0}&nbsp;{currency}
        </F14>
      )}
      {loading && <GenericLoading width24={1} white={1} />}
    </PlaceBetButton>
  </ControlBarWrapper>
)

//-------------------- BetSlip TotalBets  --------------------//
const TotalBetsWrapper = styled.div`
  ${Grid(2)};
  background: ${(props) => props.theme.color_P4_25};
  height: ${(props) => (props.freeBet ? '88px' : '68px')};
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.color_A4_1};

  padding: 16px;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4px;
  ${FlexLeft} > ${F14}:first-child {
    color: ${(props) => props.theme.color_P3_22_OP64};
  }
  /* ${FlexLeft}:first-child > ${F14}:first-child {
    border-right: 1px solid ${(props) => props.theme.color_P3_22_OP24};
    padding-right: 8px;
    margin-right: 8px;
  } */
  &:last-child {
    color: ${(props) => props.theme.color_P3_22};
  }
  ${FlexRight} {
    color: ${(props) => props.theme.color_P3_22_OP64};
    &:nth-last-child(1) {
      color: ${(props) => props.theme.color_A1_1};
    }
  }
`
const TotalBetsCountWrapper = styled(FlexLeft)`
  ${F14}:first-child {
    border-right: 1px solid ${(props) => props.theme.color_P3_22_OP24};
    padding-right: 8px;
    margin-right: 8px;
  }
`
export const TotalBets = ({
  totalBetsText,
  totalBetsCount,
  totalBetsCash,
  cashCurrency,
  freeBetsText,
  freeBetsCount,
  freeBetsCash,
  cashBetsText,
  cashBetsCount,
  cashBetsCash,
  totalBetsWinningsText,
  totalBetsWinningsCash,
  winningsCurrency,
}) => (
  <TotalBetsWrapper freeBet={freeBetsText}>
    {freeBetsText || cashBetsText ? (
      <>
        <TotalBetsCountWrapper>
          <F14 bold={1} condensed={1}>
            {cashBetsCount}
          </F14>
          <F14>{cashBetsText}</F14>
        </TotalBetsCountWrapper>
        <FlexRight>
          <F14>{cashBetsCash}</F14>&nbsp;
          <F14 condensed={1}>{cashCurrency}</F14>
        </FlexRight>
        <TotalBetsCountWrapper>
          <F14 bold={1} condensed={1}>
            {freeBetsCount}
          </F14>
          <F14>{freeBetsText}</F14>
        </TotalBetsCountWrapper>
        <FlexRight>
          <F14>{freeBetsCash}</F14>&nbsp;
          <F14 condensed={1}>{cashCurrency}</F14>
        </FlexRight>
      </>
    ) : (
      <>
        <TotalBetsCountWrapper data-txt-bet-count={cashBetsCount}>
          <F14>{totalBetsText}</F14>
          <F14 bold={1} condensed={1}>
            {totalBetsCount}
          </F14>
        </TotalBetsCountWrapper>
        <FlexRight>
          <F14>{totalBetsCash}</F14>&nbsp;
          <F14 condensed={1}>{cashCurrency}</F14>
        </FlexRight>
      </>
    )}
    <FlexLeft>
      <F14>{totalBetsWinningsText}</F14>
    </FlexLeft>
    <FlexRight>
      <F14 data-txt-to-win-amount>{totalBetsWinningsCash}</F14>&nbsp;
      <F14>{winningsCurrency}</F14>
    </FlexRight>
  </TotalBetsWrapper>
)

//-------------------- BetSlip Rotate Device --------------------//

const RotateDeviceAlertWrapper = styled(FlexCenterColumn)`
  position: absolute;
  bottom: 72px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 608px;
  height: 88px;
  z-index: 6;
  box-shadow: 0 1px 20px 0 ${(props) => props.theme.color_P3_OP16};
  background: ${(props) => props.theme.color_P4_25};
  text-align: center;
  pointer-events: auto;
  ${F14}:first-child {
    height: 24px;
    color: ${(props) => props.theme.color_P3_22};
    margin-bottom: 8px;
  }
  ${F14}:last-child {
    height: 16px;
    color: ${(props) => props.theme.color_A12};
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color_A12_1_Lplus4};
      }
    }
    &:active {
      color: ${(props) => props.theme.color_A12_1_Lmin8};
    }
  }
`

export const RotateDeviceAlert = ({
  rotateDeviceText,
  removeAllText,
  removeAll,
}) => (
  <RotateDeviceAlertWrapper>
    <F14>{rotateDeviceText}</F14>
    <F14 onClick={removeAll}>{removeAllText}</F14>
  </RotateDeviceAlertWrapper>
)
//-------------------- BetSlip Selection  --------------------//

const InputWrapper = styled(FlexColumn)`
  position: relative;
  padding: 0 8px 0 16px;
  margin-top: 16px;
  ${FlexLeft} {
    height: 40px;
    width: 50%;
  }
  ${FlexRight} {
    width: 50%;
    justify-content: ${(props) => props.multiply && `space-between`};
  }
  ${F14} {
    padding-left: 8px;
    color: ${(props) => props.theme.color_P3_22_OP64};
  }
  input {
    appearance: none;
    -webkit-appearance: none;
    background: ${(props) =>
      props.useFreeBet
        ? props.theme.color_P3_22_OP4
        : props.lockBackground
        ? 'transparent'
        : props.theme.color_P4_25};
    color: ${(props) =>
      props.useFreeBet
        ? props.theme.color_P3_22_OP64
        : props.theme.color_P3_22};

    font-weight: bold;
    font-size: 16px;
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.useFreeBet
          ? props.theme.color_P3_22_OP32
          : props.theme.color_P3_22_OP24};
    border-radius: 3px;
    padding: 8px;
    height: 40px;
    &:focus {
      outline: transparent;
    }
    ${(props) => props.active && `border: 1px solid ${props.theme.color_A1_1};`}
    &::placeholder {
      color: ${(props) => props.theme.color_P3_22_OP24};
      font-weight: normal;
    }
    @media (hover: hover) {
      &:hover {
        border: 1px solid
          ${(props) =>
            props.useFreeBet
              ? props.theme.color_P3_22_OP32
              : props.lockBackground
              ? props.theme.color_P3_22_OP24
              : props.theme.color_A1_1};
      }
    }
  }
`
const MaxBetLimitTextWrapper = styled.span`
  margin-top: 16px;
  color: ${(props) => props.theme.color_A7_5};
`
const ToWin = styled.div`
  text-align: right;
  padding-right: 8px;
  ${F12} {
    color: ${(props) => props.theme.color_A1_1};
    &:first-child {
      padding-bottom: 4px;
      color: ${(props) => props.theme.color_P3_22_OP64};
    }
  }
`

const MaxBetButtonWrapper = styled(FlexColumn)`
  text-align: right;
  padding-right: 8px;
  ${(props) => props.noMaxBet && `display: none`};
  ${(props) => props.theme.icons.generic_loading} svg {
    height: 16px;
    width: 16px;
  }
`
const MaxBetTextWrapper = styled.div`
  color: ${(props) => props.theme.color_A12};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_A12_Lplus4};
    }
  }
  &:active {
    color: ${(props) => props.theme.color_A12_Lmin8};
  }
`
const MaxBetStake = styled.div`
  margin-bottom: 4px;
  color: ${(props) => props.theme.color_P3_OP64};
`
export const MaxBetButton = ({
  showMaxbet,
  maxBetText,
  maxBetStake,
  setStakeText,
  showSetStake,
  setStake,
  loading,
  noMaxBet,
}) => {
  return (
    <MaxBetButtonWrapper
      onClick={() => showMaxbet && showMaxbet()}
      noMaxBet={noMaxBet}
    >
      {showSetStake ? (
        <>
          <MaxBetStake data-txt-maxbet_amt>
            <F12 uppercase={1}>{maxBetStake}</F12>
          </MaxBetStake>
          <MaxBetTextWrapper onClick={setStake} data-btn-set-stake>
            <F12 uppercase={1}>{setStakeText}</F12>
          </MaxBetTextWrapper>
        </>
      ) : loading ? (
        <GenericLoading />
      ) : (
        <MaxBetTextWrapper data-btn-maxbet>
          <F12 uppercase={1}>{maxBetText}</F12>
        </MaxBetTextWrapper>
      )}
    </MaxBetButtonWrapper>
  )
}

export const EachWayTickboxWrapper = styled(FlexLeft)`
  color: ${(props) =>
    props.lockEachWay || props.lockBackground
      ? props.theme.color_P3_22_OP40
      : props.theme.color_P3_22_OP64};
  ${IconWrapper24} {
    background: ${(props) =>
      props.lockEachWay
        ? props.theme.color_P3_22_OP4
        : props.lockBackground
        ? 'transparent'
        : props.theme.color_P4_25};
  }
  ${F14} {
    white-space: nowrap;
  }
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) => (props.lockEachWay ? 'default' : 'pointer')};
      ${TickboxWrapper} {
        border: 1px solid
          ${(props) =>
            props.selected && (props.lockEachWay || props.lockBackground)
              ? props.theme.color_A1_8_OP64
              : props.lockEachWay || props.lockBackground
              ? props.theme.color_P3_22_OP32
              : props.theme.color_A1_8};
      }
    }
  }
`
export const EachWayTickbox = ({
  onClick,
  selected,
  eachWayText,
  lockBackground,
  lockEachWay,
}) => {
  return (
    <EachWayTickboxWrapper
      onClick={onClick}
      lockEachWay={lockEachWay}
      lockBackground={lockBackground}
      selected={selected}
    >
      <IconWrapper24>
        <TickboxWrapper
          selected={selected}
          lock={lockEachWay || lockBackground}
        />
      </IconWrapper24>
      <F14>{eachWayText}</F14>
    </EachWayTickboxWrapper>
  )
}
const EachWayFreeBetText = styled.div`
  color: ${(props) => props.theme.color_A12_1};
`
const EachWayFreeBetMultipleAmount = styled.div`
  border-left: 1px solid ${(props) => props.theme.color_P3_22_OP16};
  padding-left: 8px;
  margin-left: 8px;
  color: ${(props) => props.theme.color_A12_1};
`
const EachWayFreeBetMultipleText = styled(EachWayFreeBetMultipleAmount)`
  color: ${(props) => props.theme.color_P3_22_OP64};
`
const EachWayFreeBetSportText = styled.div`
  color: ${(props) => props.theme.color_P3_22_OP64};
  width: calc(100% - 48px);
  ${F14} {
    ${Truncate(1)};
  }
`
const EachWayFreeBetWrapper = styled(RelativeWrapper)`
  ${FlexSpaceBetween(48)};
  color: ${(props) => props.theme.color_P3_22_OP64};
  ${FlexLeft} {
    height: 100%;
  }
  ${FlexLeftColumn} {
    padding: 8px 8px 8px 16px;
    width: 100%;
    height: 100%;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.color_P3_1_OP4_2};
        g {
          fill: ${(props) => props.theme.color_A6_4_Lplus4};
        }
      }
    }
    &:active {
      background: ${(props) => props.theme.color_P3_1_OP8_2};
    }
  }
  ${(props) =>
    props.freeBetMultiple &&
    `
    ${AbsoluteRightCenter}{display: none;}
  `}
  ${(props) =>
    props.lockFreeBet &&
    `
    ${EachWayFreeBetText},${EachWayFreeBetMultipleAmount},${EachWayFreeBetMultipleText}{
      color: ${props.theme.color_P3_22_OP40};
    }
    ${EachWayFreeBetSportText}{
      color: ${props.theme.color_P3_22_OP24};
    }
    ${FlexLeftColumn}{
      @media (hover: hover) {
        &:hover {
          cursor: default;
          background: transparent;
        }
      }
      &:active {
        background: transparent;
      }
    }
  `}
`
export const EachWayFreeBet = ({
  onClick,
  onFreeBetsDetails,
  freeBetClickHandler,
  freeBetText,
  freeBetMultipleText,
  freeBetAmount,
  freeBetSportText,
  lockFreeBet,
  id,
}) => {
  return (
    <EachWayFreeBetWrapper
      freeBetAmount={freeBetAmount}
      freeBetMultiple={freeBetMultipleText}
      lockFreeBet={lockFreeBet}
      key={id}
      id={`eachWayFreeBet_${id}`}
    >
      <FlexLeftColumn onClick={freeBetClickHandler}>
        <FlexLeft>
          <EachWayFreeBetText>
            <F14 condensed={1}>{freeBetText}</F14>
          </EachWayFreeBetText>
          {freeBetAmount && (
            <EachWayFreeBetMultipleAmount condensed={1}>
              <F14>{freeBetAmount}</F14>
            </EachWayFreeBetMultipleAmount>
          )}
          {freeBetMultipleText && (
            <EachWayFreeBetMultipleText condensed={1}>
              <F14>{freeBetMultipleText}</F14>
            </EachWayFreeBetMultipleText>
          )}
        </FlexLeft>
        {freeBetSportText && (
          <EachWayFreeBetSportText>
            <F14 condensed={1}>{freeBetSportText}</F14>
          </EachWayFreeBetSportText>
        )}
      </FlexLeftColumn>
      <AbsoluteRightCenter>
        <IconWrapper48 onClick={onFreeBetsDetails}>
          <Information16 />
        </IconWrapper48>
      </AbsoluteRightCenter>
    </EachWayFreeBetWrapper>
  )
}
const EachWayWrapper = styled(RelativeWrapper)`
  ${FlexSpaceBetween(32)}
  padding:0 8px 0 16px;
  margin-top: 12px;
  color: ${(props) => props.theme.color_P3_22_OP64};
  ${F14} {
    padding: 0px 8px;
  }
  ${FlexRight} {
    g {
      fill: ${(props) => props.theme.color_A6_4};
    }
    ${F14} {
      ${Truncate(2)};
    }
    @media (hover: hover) {
      &:hover {
        g {
          fill: ${(props) => props.theme.color_A6_4_Lplus4};
        }
      }
    }
  }
  ${(props) =>
    props.freeBet &&
    `
    ${FlexRight} {
      color: ${props.theme.color_A12};
    }
    ${InfoIconWrapper} {display: none;}
  `};
`
const BetSlipCompetitionName = styled.span`
  text-align: left;
  position: relative;
  line-height: 32px;
  color: ${(props) => props.theme.color_P3_20};
`
const BetSlipHandicap = styled.span`
  padding: 0 1px;
  white-space: nowrap;
  ${(props) =>
    props.handicapChange && `background: ${props.theme.color_A3_11}`};
  color: ${(props) =>
    props.handicapChange ? props.theme.color_P4_22 : props.theme.color_A3_11};
`
const BetSlipAtWrapper = styled.span`
  color: ${(props) => props.theme.color_P3_20};
`
const BetSlipOdds = styled.span`
  padding: ${(props) => (props.freeBetOdds ? '0px 1px 0px 8px' : '0px 1px')};
  background: ${(props) => props.oddsChange && `${props.theme.color_A3_11}`};
  color: ${(props) =>
    props.oddsChange ? props.theme.color_P4_22 : props.theme.color_P3_20};
`
const BetSlipCompetitionNameWrapper = styled.div`
  margin: 7px 40px 8px 16px;
`
const BetSlipCompetition = styled.div`
  padding-top: 8px;
  color: ${(props) => props.theme.color_P3_22_OP64};
  ${Truncate(2)};
`
const BetSlipBetType = styled.div`
  flex-wrap: wrap;
  color: ${(props) => props.theme.color_P3_22};
  span {
    font-size: 14px;
  }
  span:first-child {
    margin-right: 5px;
  }
  span:last-child {
    white-space: nowrap;
    background: ${(props) => props.scoreChange && `${props.theme.color_A3_11}`};
    color: ${(props) =>
      props.scoreChange ? props.theme.color_P4_22 : props.theme.color_P3_20};
  }
`
const BetSlipPriceBoostTitle = styled.div`
  color: ${(props) => props.theme.color_A1_6};
  padding-bottom: 7px;
`
export const BetSlipSelectionWrapper = styled.div`
  ${CloseButtonWrapper} {
    top: 0;
    transform: translate3d(0, 0%, 0);
    background: transparent;
  }
  ${BetSlipCompetitionName},${BetSlipHandicap},${BetSlipAtWrapper},${BetSlipOdds} {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }
  ${BetSlipCompetitionName},${BetSlipHandicap},${BetSlipAtWrapper} {
    margin-right: 8px;
  }
  ${BetSlipCompetition},${BetSlipBetType} {
    margin: 0 8px 0 16px;
  }
`
export const BetSlipWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: ${(props) =>
    props.priceBoostText ? '16px 0px 16px 0px' : '8px 0px 16px 0px'};
  background: ${(props) =>
    props.lockBackground ? props.theme.color_P3_22_OP4 : 'transparent'};
`
export const BetSlipContainer = styled(RelativeWrapper)`
  background: ${(props) =>
    props.multipleSelections
      ? props.theme.color_S2_1
      : props.theme.color_P4_25};
  &:not(:first-child) {
    border-top: 2px solid ${(props) => props.theme.color_A4_1};
  }
`
export const MultiplesInfoContentWrapper = styled.div`
  padding: 16px;
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP72};
    padding-bottom: 16px;
  }
`
export const MultiplesInfoContent = ({ content, list = [] }) => (
  <MultiplesInfoContentWrapper>
    {list &&
      list.length > 0 &&
      list.map(({ content, ...rest }, index) => (
        <F14 key={'content' + index}>{content}</F14>
      ))}
  </MultiplesInfoContentWrapper>
)
export const FullBetSlipWrapper = styled(ContentContainer)`
  ${(props) =>
    props.show &&
    `box-shadow: -2px -2px 15px 0px ${props.theme.color_P3_OP24}`};
  height: ${(props) =>
    props.theme.iframe
      ? `${
          props.theme.iPadInnerheight > 0
            ? props.theme.iPadInnerheight + 'px'
            : `calc(${
                props.theme.iPadInnerheight > 0
                  ? `${props.theme.iPadInnerheight}+px`
                  : `100vh`
              } - 48px)`
        }`
      : `calc(${
          props.theme.iPadInnerheight > 0
            ? `${props.theme.iPadInnerheight + 48}px`
            : `100vh`
        } - 48px - ${props.theme.headerHeight}px)`};

  transition: transform 0.3s ease;
  ${ContentScrollWrapper} {
    margin-bottom: 48px;
    background: ${(props) => props.theme.color_A4_1};
    height: ${(props) =>
      props.showKeypad && props.errorMessageHeight
        ? `${
            props.theme.iframe
              ? `calc(${
                  props.theme.iPadInnerheight > 0
                    ? props.theme.iPadInnerheight + 48 + 'px'
                    : '100vh'
                } - 144px - 152px - ${props.errorMessageHeight})`
              : `calc(${
                  props.theme.iPadInnerheight > 0
                    ? props.theme.iPadInnerheight + 48 + 'px'
                    : '100vh'
                } - 144px - 152px - ${props.errorMessageHeight} - 48px)`
          }`
        : props.showKeypad
        ? `calc(${
            props.theme.iPadInnerheight > 0
              ? props.theme.iPadInnerheight + 48 + 'px'
              : '100vh'
          } - 144px - 152px)`
        : props.errorMessageHeight
        ? `calc(${
            props.theme.iPadInnerheight > 0
              ? props.theme.iPadInnerheight + 48 + 'px'
              : '100vh'
          } - 152px - ${props.errorMessageHeight} ${
            props.theme.iframe ? `` : `- ${props.theme.headerHeight}px`
          })`
        : `calc(${
            props.theme.iPadInnerheight > 0
              ? props.theme.iPadInnerheight + 48 + 'px'
              : '100vh'
          } - 152px)`};

    transition: height 0.3s;
  }
  ${RotateDeviceAlertWrapper} {
    width: 100%;
    bottom: 56px;
    height: calc(100% - 104px);
    box-shadow: none;
  }
  ${(props) =>
    props.show
      ? `transform: translate3d(0,${
          props.theme.iframe ? '0%' : props.theme.headerHeight
        }px,0)`
      : `transform: translate3d(0,${
          props.theme.iframe ? 'calc(100% - 48px)' : '100%'
        },0)`};
  ${media.desktop`
    height: ${(props) =>
      props.theme.iframe
        ? '100%'
        : `calc(100% - ${props.theme.headerHeight}px)`};
    ${ContentScrollWrapper}{
      height: ${(props) =>
        props.showKeypad && props.errorMessageHeight
          ? `calc(100% - 104px - 96px - ${props.errorMessageHeight}  )`
          : props.showKeypad
          ? `calc(100% - 104px - 96px)`
          : props.errorMessageHeight
          ? `calc(100% - 104px - ${props.errorMessageHeight})`
          : `calc(100% - 104px)`};
    }
    ${(props) =>
      props.show
        ? ``
        : `${
            props.theme.iframe
              ? `transform: translate3d(0,100%,0)`
              : `transform: translate3d(0,calc(100% + ${props.theme.headerHeight}px),0)`
          }`};
  `}
  ${media.tablet`
    ${ContentScrollWrapper}{
      height: ${(props) =>
        props.showKeypad && props.errorMessageHeight
          ? `calc(100% - 104px - 144px - ${props.errorMessageHeight})`
          : props.showKeypad
          ? `calc(100% - 104px - 144px)`
          : props.errorMessageHeight
          ? `calc(100% - 104px - ${props.errorMessageHeight})`
          : `calc(100% - 104px)`};
    }
  `}
`
//-------------------- QuickBetSlip Panel --------------------//

export const QuickBetSlipTotalAmount = styled(FlexLeft)`
  height: 24px;
  width: 100%;
  padding: 2px 16px;
  background: ${(props) => props.theme.color_P1};
  color: ${(props) => props.theme.color_A8_1};
`
export const QuickBetHeader = ({ amount, currency }) => (
  <QuickBetSlipTotalAmount data-txt-balance={amount}>
    <F14>
      {amount || 0}&nbsp;{currency}
    </F14>
  </QuickBetSlipTotalAmount>
)

export const QuickBetSlipWrapper = styled(ContentContainer)`
  ${(props) =>
    props.show &&
    `box-shadow: -2px -2px 15px 0px ${props.theme.color_P3_OP24}`};
  height: auto;
  transition: transform 0.3s ease;
  ${BetSlipContainer} {
    border-top: none;
  }
  ${ContentScrollWrapper} {
    background: ${(props) => props.theme.color_P4_2};
    max-height: ${(props) =>
      props.showKeypad && props.errorMessageHeight
        ? `calc(100vh - 96px - 144px - ${props.errorMessageHeight})`
        : props.showKeypad
        ? `calc(100vh - 96px - 144px)`
        : props.errorMessageHeight
        ? `calc(100vh - 96px - ${props.errorMessageHeight})`
        : `calc(100vh - 96px)`};
  }
  ${KeypadTransition} {
    transform: unset;
  }
  ${KeypadWrapper} {
    bottom: 0px;
    ${(props) => (props.showKeypad ? `height: 144px;` : `height: 0px;`)};
    transition: height 0.3s;
  }
  ${(props) =>
    props.show
      ? `transform: translate3d(0,0%,0)`
      : `transform: translate3d(0,100%,0);`};
  ${media.desktop`
    width: 100%;
    margin-left: 0px;
    ${ContentScrollWrapper}{
      max-height: ${(props) =>
        props.showKeypad && props.errorMessageHeight
          ? `calc(100vh - 48px - 96px - ${props.errorMessageHeight})`
          : props.showKeypad
          ? `calc(100vh - 48px - 96px)`
          : props.errorMessageHeight
          ? `calc(100vh - 48px - ${props.errorMessageHeight})`
          : `calc(100vh - 48px)`};
    }
    ${KeypadWrapper} {
      ${(props) => (props.showKeypad ? `height: 96px;` : `height: 0px;`)};
    }
  `}
  ${media.tablet`
    ${ContentScrollWrapper}{
      max-height: ${(props) =>
        props.showKeypad && props.errorMessageHeight
          ? `calc(100vh - 48px - 144px - ${props.errorMessageHeight})`
          : props.showKeypad
          ? `calc(100vh - 48px - 144px)`
          : props.errorMessageHeight
          ? `calc(100vh - 48px - ${props.errorMessageHeight})`
          : `calc(100vh - 48px)`};
    }
    ${KeypadWrapper} {
      ${(props) => (props.showKeypad ? `height: 144px;` : `height: 0px;`)};
    }
  `}
`
export const BetSlipSelection = ({
  selectionName,
  handicap,
  odds,
  freeBetOdds,
  competitionTitle,
  competition,
  betType,
  betTypeScore,
  scoreChange,
  removeSelection,
  inputValue,
  multiply,
  handleChange,
  placeholder,
  inputClickHandler,
  readOnly,
  onFocus,
  onTouchStart,
  onBlur,
  toWinText,
  toWinStakeValue,
  toWinEachWayStakeValue,
  maxBet,
  maxBetText,
  showMaxbet,
  loading,
  setStake,
  showSetStake,
  setStakeText,
  maxBetStake,
  eachWayText,
  freeBetText,
  freeBetAmount,
  freeBetMultipleText,
  freeBetSportText,
  onFreeBetsDetails,
  useFreeBet,
  freeBetClickHandler,
  lockBackground,
  lockFreeBet,
  lockEachWay,
  oddsInfoText,
  selected,
  toggleSelected,
  multipleSelections,
  noMaxBet,
  toggleMultiplesInfo,
  toggleEachWayInfo,
  inputActive,
  inputDisabled,
  priceBoostText,
  oddsChange,
  freeBetOddsChange,
  handicapChange,
  showParlayBlocker,
  maxBetLimitExceededText,
  list = [],
  scrollRef,
}) => (
  <BetSlipContainer ref={scrollRef} multipleSelections={multipleSelections}>
    <BetSlipWrapper lockBackground={lockBackground} priceBoost={priceBoostText}>
      {lockBackground && <LockBackground />}
      <BetSlipSelectionWrapper>
        <BetSlipCompetitionNameWrapper>
          {showParlayBlocker && <ParlayBlocker priceBoost={priceBoostText} />}
          {priceBoostText && (
            <BetSlipPriceBoostTitle>
              <F14 condensed={1} uppercase={1}>
                {priceBoostText}
              </F14>
            </BetSlipPriceBoostTitle>
          )}
          <BetSlipCompetitionName data-txt-selection-name>
            {selectionName}
          </BetSlipCompetitionName>
          {handicap && (
            <BetSlipHandicap handicapChange={handicapChange} data-txt-handicap>
              {handicap}
            </BetSlipHandicap>
          )}
          {odds && <BetSlipAtWrapper>@</BetSlipAtWrapper>}
          {odds && (
            <BetSlipOdds oddsChange={oddsChange} data-txt-odds>
              {odds}
            </BetSlipOdds>
          )}
          {freeBetOdds && (
            <BetSlipOdds
              oddsChange={freeBetOddsChange}
              freeBetOdds={freeBetOdds}
            >
              {freeBetOdds}
            </BetSlipOdds>
          )}
        </BetSlipCompetitionNameWrapper>
        {multipleSelections ? (
          <BetMultiplesInfoButton onClick={toggleMultiplesInfo} />
        ) : (
          <CloseButton onClick={removeSelection} betSlip={1} />
        )}
        <BetSlipCompetition>
          {competitionTitle && <F14 bold={1}>{competitionTitle}</F14>}
          <F14 data-txt-event-name>{competition}</F14>
        </BetSlipCompetition>
        {list &&
          list.length > 0 &&
          list.map(({ competitionTitle, competition, ...rest }, index) => (
            <BetSlipCompetition key={'betSlipCompetition' + index}>
              {competitionTitle && <F14 bold={1}>{competitionTitle}</F14>}
              <F14 data-txt-event-name>{competition}</F14>
            </BetSlipCompetition>
          ))}
        {betType && (
          <BetSlipBetType scoreChange={scoreChange}>
            <span data-txt-marketline-name>{betType}</span>
            <span>{betTypeScore}</span>
          </BetSlipBetType>
        )}
      </BetSlipSelectionWrapper>
      <InputWrapper
        active={inputActive}
        multiply={multiply}
        lockBackground={lockBackground}
        useFreeBet={useFreeBet}
      >
        <Flex>
          <FlexLeft>
            <input
              placeholder={placeholder}
              readOnly={readOnly && 'readonly'}
              onFocus={onFocus}
              onBlur={onBlur}
              type="text"
              onClick={inputClickHandler}
              onTouchStart={onTouchStart}
              value={inputValue}
              onChange={handleChange}
              disabled={inputDisabled}
              data-ctr-stake-box={inputValue}
            />
          </FlexLeft>
          <FlexRight>
            {multiply && <F14 condensed={1}>x&nbsp;{multiply}</F14>}
            {maxBet ? (
              <MaxBetButton
                maxBetText={maxBetText}
                showMaxbet={showMaxbet}
                showSetStake={showSetStake}
                setStake={setStake}
                setStakeText={setStakeText}
                maxBetStake={maxBetStake}
                loading={loading}
                noMaxBet={noMaxBet}
              />
            ) : (
              <ToWin>
                <F12 data-txt-to-win={toWinText}>{toWinText}</F12>
                <F12 data-txt-to-win-amount={toWinStakeValue}>
                  {toWinStakeValue}
                </F12>
                {selected && <F12>{toWinEachWayStakeValue}</F12>}
              </ToWin>
            )}
          </FlexRight>
        </Flex>
        {maxBetLimitExceededText && (
          <MaxBetLimitTextWrapper>
            <F12>{maxBetLimitExceededText}</F12>
          </MaxBetLimitTextWrapper>
        )}
      </InputWrapper>
      {eachWayText && (
        <EachWayWrapper freeBet={freeBetText}>
          <EachWayTickbox
            onClick={toggleSelected}
            selected={selected}
            eachWayText={eachWayText}
            lockBackground={lockBackground}
            lockEachWay={lockEachWay}
          />
          {oddsInfoText && (
            <FlexRight>
              <F14>{oddsInfoText}</F14>
              <Information16 onClick={toggleEachWayInfo} />
            </FlexRight>
          )}
        </EachWayWrapper>
      )}
      {freeBetText && (
        <EachWayFreeBet
          freeBetText={freeBetText}
          freeBetAmount={freeBetAmount}
          freeBetMultipleText={freeBetMultipleText}
          freeBetSportText={freeBetSportText}
          freeBetClickHandler={freeBetClickHandler}
          onFreeBetsDetails={onFreeBetsDetails}
          lockFreeBet={lockFreeBet}
        />
      )}
    </BetSlipWrapper>
  </BetSlipContainer>
)
//-------------------- Statistics Panel --------------------//

export const FullContentContainer = styled(ContentContainer)`
  z-index: 5;
  ${ContentScrollWrapper} {
    height: calc(100vh - 48px);
  }
  ${media.tablet`width:100%;`}
`

export const StatisticsPanelWrapper = styled(ContentContainer)`
  height: auto;
  transition: transform 0.3s ease;
  ${ContentScrollWrapper} {
    background: ${(props) => props.theme.color_P4_2};
    height: calc(100vh - 96px);
  }
  ${(props) =>
    props.show
      ? `transform: translate3d(0,${
          props.theme.iframe ? '0%' : props.theme.headerHeight
        }px,0)`
      : `transform: translate3d(0,${
          props.theme.iframe ? 'calc(100% - 48px)' : '100%'
        },0)`};
  ${media.desktop`
    height: 100%;
    ${ContentScrollWrapper}{
      height: calc(100vh - 48px);
    }
    ${(props) =>
      props.show
        ? ``
        : `${
            props.theme.iframe
              ? `transform: translate3d(0,100%,0)`
              : `transform: translate3d(0,calc(100% + ${props.theme.headerHeight}px),0)`
          }`};
  `}
`
//-------------------- BetReceipt Selection --------------------//

const BetReceiptStateWrapper = styled.div`
  ${FlexSpaceBetween(48)}
  padding: 0px 16px;
  ${FlexLeft} {
    color: ${(props) =>
      props.pending
        ? props.theme.color_A3_13
        : props.rejected
        ? props.theme.color_A7_5
        : props.theme.color_A1_8};
    ${F14} {
      ${(props) => props.pending && `padding-left: 8px;`};
    }
  }
  ${FlexRight} {
    color: ${(props) => props.theme.color_P3_22_OP64};
  }
`

const BetReceiptStakeWrapper = styled.div`
  ${FlexSpaceBetween(48)}
  padding: 0px 16px;
  ${FlexLeftColumn}, ${FlexRightColumn} {
    ${F14} {
      color: ${(props) => props.theme.color_P3_22_OP64};
      padding: 4px 0px;
    }
    ${F16} {
      color: ${(props) => props.theme.color_P3_22};
    }
  }
  ${FlexRightColumn} {
    text-align: right;
    ${F16} {
      color: ${(props) =>
        props.rejected ? props.theme.color_P3_22 : props.theme.color_A1_7};
    }
  }
`
export const BetReceiptWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 16px 0px;
  &:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.color_A4_1};
  }
  background: ${(props) => props.theme.color_P4_25};
`
export const BetReceiptMultipleBetsWrapper = styled(FlexLeft)`
  height: 48px;
  padding: 4px 16px;
  background: ${(props) => props.theme.color_S4_4};
  color: ${(props) => props.theme.color_P3_22};
`
export const BetReceiptMultipleBets = ({ multipleBetstext }) => (
  <BetReceiptMultipleBetsWrapper>
    <F16>{multipleBetstext}</F16>
  </BetReceiptMultipleBetsWrapper>
)
export const BetReceiptSelection = ({
  selectionName,
  handicap,
  odds,
  freeBetOdds,
  competitionTitle,
  competition,
  betType,
  betTypeScore,
  scoreChange,
  priceBoostText,
  oddsChange,
  freeBetOddsChange,
  handicapChange,
  showParlayBlocker,
  stateText,
  selectionNumber,
  stakeText,
  stakeAmount,
  toWinText,
  toWinAmount,
  maxBetLimitExceededText,
  confirmed,
  pending,
  rejected,
  list = [],
}) => (
  <BetReceiptWrapper>
    <BetSlipSelectionWrapper>
      <BetSlipCompetitionNameWrapper>
        {showParlayBlocker && <ParlayBlocker />}
        <BetSlipPriceBoostTitle>
          <F14 uppercase={1}>{priceBoostText}</F14>
        </BetSlipPriceBoostTitle>
        <BetSlipCompetitionName data-txt-selection-name>
          {selectionName}
        </BetSlipCompetitionName>
        {handicap && (
          <BetSlipHandicap handicapChange={handicapChange}>
            {handicap}
          </BetSlipHandicap>
        )}
        {odds && <BetSlipAtWrapper>@</BetSlipAtWrapper>}
        {odds && <BetSlipOdds oddsChange={oddsChange}>{odds}</BetSlipOdds>}
        {freeBetOdds && (
          <BetSlipOdds oddsChange={freeBetOddsChange} freeBetOdds={freeBetOdds}>
            {freeBetOdds}
          </BetSlipOdds>
        )}
      </BetSlipCompetitionNameWrapper>
      <BetSlipCompetition>
        {competitionTitle && <F14 bold={1}>{competitionTitle}</F14>}
        <F14 data-txt-event-name>{competition}</F14>
      </BetSlipCompetition>
      {list &&
        list.length > 0 &&
        list.map(({ competitionTitle, competition, ...rest }, index) => (
          <BetSlipCompetition key={'betSlipCompetition' + index}>
            {competitionTitle && <F14 bold={1}>{competitionTitle}</F14>}
            <F14>{competition}</F14>
          </BetSlipCompetition>
        ))}
      {betType && (
        <BetSlipBetType scoreChange={scoreChange}>
          <span data-txt-marketline-name>{betType}</span>
          <span>{betTypeScore}</span>
        </BetSlipBetType>
      )}
      {(confirmed || pending || rejected) && (
        <>
          <BetReceiptStateWrapper pending={pending} rejected={rejected}>
            <FlexLeft data-txt-bet-status={stateText}>
              <Flex>
                {pending && <GenericLoading pending={pending} />}
                <F14>{stateText}</F14>
              </Flex>
            </FlexLeft>
            {confirmed && (
              <FlexRight data-txt-wager-number>
                <F14>{selectionNumber}</F14>
              </FlexRight>
            )}
          </BetReceiptStateWrapper>
          <BetReceiptStakeWrapper rejected={rejected}>
            <FlexLeftColumn>
              <F14>{stakeText}</F14>
              <F16 bold={1} data-txt-stake-amt>
                {stakeAmount}
              </F16>
            </FlexLeftColumn>
            <FlexRightColumn>
              <F14>{toWinText}</F14>
              <F16 bold={1} data-txt-to-win-return-amt>
                {toWinAmount}
              </F16>
            </FlexRightColumn>
          </BetReceiptStakeWrapper>
        </>
      )}
    </BetSlipSelectionWrapper>
  </BetReceiptWrapper>
)
const BetReceiptStateInfoWrapper = styled(FlexCenter)`
  position: sticky;
  bottom: 56px;
  padding: 4px 16px;
  width: 100%;
  min-height: 24px;
  text-transform: uppercase;
  background: ${(props) =>
    props.pending
      ? props.theme.color_A3_10
      : props.rejected
      ? props.theme.color_A7_3
      : props.theme.color_A1_5};
  color: ${(props) => props.theme.color_P4_20};
  ${F12} {
    text-align: center;
  }
`
export const BetReceiptStateInfo = ({ stateInfoText, rejected, pending }) => (
  <>
    <BetReceiptStateInfoWrapper
      rejected={rejected}
      pending={pending}
      data-txt-bet-message={stateInfoText}
    >
      <F12>{stateInfoText}</F12>
    </BetReceiptStateInfoWrapper>
  </>
)

//-------------------- BetSlip Remove Closed Selections  --------------------//
export const BetErrorsMessageWrapper = styled.div`
  opacity: 1;
  transition: opacity 0.07s;
  z-index: 5;
  border-top: 2px solid ${(props) => props.theme.color_A4_1};
  height: ${(props) => props.errorMessageHeight && props.errorMessageHeight};
  text-align: center;
  position: sticky;
  bottom: 56px;
  background: ${(props) => props.theme.color_P4_25};
  ${FlexCenterColumn} {
    width: 100%;
    height: 100%;
    padding: 0px 16px 8px 16px;
    @media (hover: hover) {
      &:hover {
        background: ${(props) =>
          props.removeClosedSelectionsText && props.theme.color_P3_1_OP4_2};
      }
    }
    &:active {
      background: ${(props) =>
        props.removeClosedSelectionsText && props.theme.color_P3_1_OP8_2};
    }
  }
  ${F12} {
    padding-top: 8px;
    color: ${(props) => props.theme.color_A7_5};
  }
  ${F14} {
    cursor: pointer;
    padding-top: 2px;
    color: ${(props) => props.theme.color_A12};
  }
`

export const BetErrorsMessage = ({
  betClosedMessageText,
  removeClosedSelectionsText,
  removeClosedSelections,
  errorMessageHeight,
  list = [],
}) => (
  <BetErrorsMessageWrapper
    onClick={removeClosedSelections}
    removeClosedSelectionsText={removeClosedSelectionsText}
    errorMessageHeight={errorMessageHeight}
    data-txt-bet-message
  >
    <FlexCenterColumn>
      {list &&
        list.length > 0 &&
        list.map(
          (
            {
              betErrorsMessageText,
              removeClosedSelectionsText,
              removeClosedSelections,
              ...rest
            },
            index
          ) => (
            <Fragment key={'betErrorsMessageText' + index}>
              <F12>{betErrorsMessageText}</F12>
              {removeClosedSelectionsText && (
                <F14>{removeClosedSelectionsText}</F14>
              )}
            </Fragment>
          )
        )}
      {betClosedMessageText && <F12>{betClosedMessageText}</F12>}
    </FlexCenterColumn>
  </BetErrorsMessageWrapper>
)
//-------------------- BetSlip Remove Closed Selections  --------------------//
export const BlockedMultiplesWrapper = styled(RelativeWrapper)`
  background: ${(props) => props.theme.color_P4_25};
  color: ${(props) => props.theme.color_A7_5};
  border-top: 2px solid ${(props) => props.theme.color_A4_1};
  ${ParlayBlockerWrapper} {
    top: 6px;
  }
  ${F12} {
    padding: 8px 16px;
  }
`

export const BlockedMultiples = ({ blockedMultiplesText }) => (
  <BlockedMultiplesWrapper>
    <ParlayBlocker />
    <F12>{blockedMultiplesText}</F12>
  </BlockedMultiplesWrapper>
)
//----------- View Bet Details Button -----------//

export const ViewBetDetailWrapper = styled(FlexCenterColumn)`
  height: 40px;
  width: 100%;
  text-align: center;
  ${(props) =>
    props.cashout &&
    `
    margin: 4px 0; 
    position: absolute;
    bottom: 0px;
    `};
  cursor: pointer;
  ${F12} {
    line-height: 16px;
    color: ${(props) => props.theme.color_A12_1};

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color_A12_1_Lplus4};
      }
    }
    &:active {
      color: ${(props) => props.theme.color_A12_1_Lmin8};
    }
    &:nth-last-child(2) {
      color: ${(props) => props.theme.color_P3_OP56};
    }
  }
  ${media.tablet`
    padding-right: 0px;
    ${(props) =>
      props.cashout &&
      `
      position: relative;
      margin: 0; 
    `}; 
  `}
`
//-------------------- Cash Out --------------------//

export const CashoutButtonTextWrapper = styled(FlexCenterColumn)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  color: ${(props) =>
    props.cashoutSuccessful
      ? props.theme.color_A1_3
      : props.cashoutUnavailable
      ? props.theme.color_P3_OP64
      : props.theme.color_P4_15};
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) =>
        props.cashoutLoading ||
        props.cashoutSuccessful ||
        props.cashoutUnavailable
          ? 'unset'
          : 'pointer'};
      background: ${(props) =>
        props.cashoutLoading ||
        props.cashoutSuccessful ||
        props.cashoutUnavailable
          ? `transparent`
          : props.cashoutValueChanged
          ? props.theme.color_A7_3_Lplus4
          : props.cashoutConfirm
          ? props.theme.color_A3_1_Lplus4
          : props.theme.color_A1_3_Lplus4};
    }
  }
  &:active {
    background: ${(props) =>
      props.cashoutLoading ||
      props.cashoutSuccessful ||
      props.cashoutUnavailable
        ? `transparent`
        : props.cashoutValueChanged
        ? props.theme.color_A7_3_Lmin8
        : props.cashoutConfirm
        ? props.theme.color_A3_1_Lmin8
        : props.theme.color_A1_3_Lmin8};
  }
  user-select: none;
  ${(props) =>
    props.cashoutUnavailable &&
    `
    ${F14}:first-child{color:${props.theme.color_P3_OP40};}
  `}
  ${F14} {
    ${(props) =>
      props.cashoutSuccessfulAnimation &&
      css`
        animation: ${dropVertical} 0.3s 1 ease;
      `};
  }
  ${F16} {
    animation: ${(props) =>
      props.cashoutSuccessfulAnimation
        ? css`
            ${dropVertical} 0.5s 1 ease-in-out;
          `
        : props.cashoutValueChanged
        ? css`
            ${shakeHorizontal} 0.5s 1 ease-in-out;
          `
        : null};
  }
`
export const Ripple = styled.div`
  margin: auto;
  background: ${(props) => props.theme.color_P4_2};
  width: 1px;
  height: 1px;
  border-radius: 50%;
  position: absolute;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
  }
  animation: ${ripple} 0.6s linear 1;
  &:before,
  &:after {
    animation: ${ripple} 0.6s linear 1 0.1s;
  }
  &:after {
    animation: ${ripple} 0.6s linear 1 0.2s;
  }
`
export const CashoutButtonWrapper = styled(FlexCenter)`
  background: ${(props) =>
    props.cashoutLoading || props.cashoutSuccessful
      ? `transparent`
      : props.cashoutUnavailable
      ? props.theme.color_S4_1
      : props.cashoutValueChanged
      ? props.theme.color_A7_3
      : props.cashoutConfirm
      ? props.theme.color_A3_1
      : props.theme.color_A1_3};
  position: relative;
  border-radius: 4px;
  height: 48px;
  text-align: center;
  g {
    fill: ${(props) =>
      props.cashoutActive
        ? props.theme.color_P4_15
        : props.theme.color_P4_15_OP64};
  }
  ${AbsoluteRightCenter} {
    background: ${(props) =>
      props.cashoutActive
        ? props.theme.color_A1_3_Lmin8
        : props.cashoutValueChanged
        ? props.theme.color_A7_3
        : props.cashoutConfirm
        ? props.theme.color_A3_1
        : props.theme.color_A1_3};

    border-left: 1px solid ${(props) => props.theme.color_P3_OP24};
    margin-left: auto;
    pointer-events: auto;
    border-radius: 0px 4px 4px 0px;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background: ${(props) =>
          props.cashoutValueChanged
            ? props.theme.color_A7_3_Lplus4
            : props.cashoutConfirm
            ? props.theme.color_A3_1_Lplus4
            : props.theme.color_A1_3_Lplus4};
        g {
          fill: ${(props) => props.theme.color_P4_15};
        }
      }
    }
    &:active {
      background: ${(props) =>
        props.cashoutValueChanged
          ? props.theme.color_A7_3_Lmin8
          : props.cashoutConfirm
          ? props.theme.color_A3_1_Lmin8
          : props.theme.color_A1_3_Lmin8};
      g {
        fill: ${(props) => props.theme.color_P4_15};
      }
    }
  }
`
const CashoutButtonContainer = styled.div`
  grid-row: span 2;
`
const CashoutValueChangedWrapper = styled(FlexCenter)`
  color: ${(props) => props.theme.color_A7_3};
  margin-top: 8px;
  height: 32px;
  ${media.tablet`height:auto;`}
`
const PartialCashoutNotAvailableWrapper = styled(CashoutValueChangedWrapper)`
  ${media.tablet`height:auto;margin-top: 0px;margin-bottom: 8px;`}
`
const CashoutAmountTextWrapper = styled(FlexCenter)`
  color: ${(props) => props.theme.color_P3_21_OP64};
  height: 48px;
`
const CashoutButtoninfoWrapper = styled(FlexCenter)`
  color: ${(props) => props.theme.color_P3_21_OP64};
  height: 48px;
  margin-top: 16px;
  ${media.tablet`height:auto;`}
`

export const CashoutButton = ({
  cashoutActive,
  cashoutLoading,
  clickHandler,
  rightClickHandler,
  cashoutConfirm,
  cashoutButtonText,
  cashoutOdds,
  cashoutValueChanged,
  cashoutValueChangedText,
  partialCashoutNotAvailableText,
  cashoutAmountText,
  cashoutInfoText,
  cashoutSuccessful,
  cashoutSuccessfulAnimation,
  cashoutUnavailable,
  rippleEffect,
  sliderInput,
  sliderValue,
}) => (
  <CashoutButtonContainer>
    <>
      <CashoutButtonWrapper
        cashoutConfirm={cashoutConfirm}
        cashoutValueChanged={cashoutValueChanged}
        cashoutLoading={cashoutLoading}
        cashoutSuccessful={cashoutSuccessful}
        cashoutUnavailable={cashoutUnavailable}
        cashoutActive={cashoutActive}
        data-btn-cashout
      >
        {cashoutLoading ? (
          <GenericLoading width24={1} />
        ) : (
          <>
            {rippleEffect && <Ripple />}
            <CashoutButtonTextWrapper
              cashoutConfirm={cashoutConfirm}
              cashoutValueChanged={cashoutValueChanged}
              cashoutSuccessful={cashoutSuccessful}
              cashoutSuccessfulAnimation={cashoutSuccessfulAnimation}
              cashoutUnavailable={cashoutUnavailable}
              onClick={clickHandler}
            >
              <F14>{cashoutButtonText}</F14>
              {cashoutOdds &&
                (cashoutUnavailable ? (
                  <F14 bold={1} data-txt-cashout-amt>
                    {cashoutOdds}
                  </F14>
                ) : (
                  <F16 bold={1} data-txt-cashout-amt>
                    {cashoutOdds}
                  </F16>
                ))}
            </CashoutButtonTextWrapper>
            {cashoutSuccessful || cashoutUnavailable ? null : (
              <AbsoluteRightCenter onClick={rightClickHandler}>
                <IconWrapper48>
                  {cashoutConfirm || cashoutValueChanged ? (
                    <IconWrapper16>
                      <Icons.Close />
                    </IconWrapper16>
                  ) : (
                    <Icons.Cashout_slider data-btn-partial-cashout />
                  )}
                </IconWrapper48>
              </AbsoluteRightCenter>
            )}
          </>
        )}
      </CashoutButtonWrapper>
      {cashoutValueChangedText && (
        <>
          <CashoutValueChangedWrapper>
            <F12>{cashoutValueChangedText}</F12>
          </CashoutValueChangedWrapper>
        </>
      )}
      {cashoutActive && (
        <>
          <CashoutAmountTextWrapper>
            <F12>{cashoutAmountText}</F12>
          </CashoutAmountTextWrapper>
          {partialCashoutNotAvailableText ? (
            <PartialCashoutNotAvailableWrapper>
              <F12>{partialCashoutNotAvailableText}</F12>
            </PartialCashoutNotAvailableWrapper>
          ) : (
            <Slider sliderInput={sliderInput} sliderValue={sliderValue} />
          )}
        </>
      )}
      {cashoutInfoText && (
        <CashoutButtoninfoWrapper>
          <F12>{cashoutInfoText}</F12>
        </CashoutButtoninfoWrapper>
      )}
    </>
  </CashoutButtonContainer>
)

//-------------------------- My Bets  --------------------------//
const BetAgainHoverWrapper = styled(AbsoluteCenter)`
  display: none;
`
const BetAgainWrapper = styled.div`
  ${F16} {
    color: ${(props) => props.theme.color_A3_12};
    user-select: none;
  }
  fill: ${(props) => props.theme.color_A3_12};
  @media (hover: hover) {
    &:hover {
      ${F16} {
        color: ${(props) => props.theme.color_P4_23};
      }
      fill: ${(props) => props.theme.color_A3_12_Lplus4};
      ${BetAgainHoverWrapper} {
        display: block;
      }
    }
  }
  &:active {
    ${F16} {
      color: ${(props) => props.theme.color_P4_23};
    }
    fill: ${(props) => props.theme.color_A3_12_Lmin8};
    ${BetAgainHoverWrapper} {
      display: block;
    }
  }
`

const MyBetsSettledIconWrapper = styled(FlexRight)`
  align-items: start;
  margin-left: 8px;
  ${media.tablet`display: none;`}
  ${(props) =>
    props.priceBoost &&
    `
    position: absolute;
    top: 0;
    right: 0;
  `};
  g {
    fill: ${(props) => props.cancel && props.theme.color_P3_OP64};
  }
`
const MyBetsSelectionName = styled.span`
  color: ${(props) => props.theme.color_P3_19};
`
const MyBetsHandicap = styled.span`
  white-space: nowrap;
  color: ${(props) => props.theme.color_A3_8};
`
const MyBetsAtWrapper = styled.span`
  color: ${(props) => props.theme.color_P3_19};
`
const MyBetsOdds = styled.span`
  color: ${(props) => props.theme.color_P3_19};
`
export const MyBetsSelectionTitleWrapper = styled(Flex)`
  justify-content: space-between;
  ${RelativeWrapper} {
    text-align: left;
    display: inline;
    ${MyBetsSelectionName},${MyBetsHandicap}, ${MyBetsAtWrapper}, ${MyBetsOdds} {
      font-size: 16px;
      font-weight: bold;
      margin-right: 8px;
      padding-bottom: 8px;
    }
  }
  ${MyBetsSettledIconWrapper} {
    padding-bottom: 8px;
    display: none;
    ${media.tablet`display: flex;`}
  }
`
export const ParticipantName = styled.div`
  color: ${(props) => props.theme.color_P3_OP64};
`
const MyBetsBetType = styled.span`
  margin-right: 8px;
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  color: ${(props) => props.theme.color_P3_OP100};
`
const MyBetsScoreSeparator = styled.span`
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  color: ${(props) => props.theme.color_P3_OP100};
`
const MyBetsScore = styled.span`
  color: ${(props) =>
    props.confirmed
      ? props.theme.color_P3_OP100
      : props.tennisSet
      ? props.theme.color_A3_5
      : props.tennisGame
      ? props.theme.color_P3_OP100
      : props.tennisPoints
      ? props.theme.color_P3_OP56
      : props.theme.color_A3_8};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  height: 16px;
  margin-right: 8px;
  white-space: nowrap;
`
const MyBetsBaseballRound = styled.span`
  color: ${(props) => props.theme.color_P3_8};
  font-size: 14px;
  margin-right: 2px;
`
const MyBetsBaseballInning = styled.span`
  g {
    fill: ${(props) => props.theme.color_A1_1};
  }
  display: inline-flex;
`
const MyBetsPeriod = styled.span`
  font-size: 14px;
  height: 16px;
  color: ${(props) => props.theme.color_P3_OP100};
`
const MyBetsCompetitionName = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.color_P3_OP64};
`
const MyBetsCompetitionEventName = styled(Flex)`
  color: ${(props) => props.theme.color_P3_OP64};
  justify-content: space-between;
  ${F14} {
    font-weight: ${(props) => props.active && `bold`};
    ${Truncate(2)};
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.color_S4_Lplus4};
      }
    }
    &:active {
      background: ${(props) => props.theme.color_S4_Lmin8};
    }
  }
  ${media.tablet`height:auto;padding-right: 0px;`}
`
export const MyBetsSelectionDetailContainer = styled(RelativeWrapper)`
  ${FlexLeftColumn} {
    padding-bottom: 8px;
  }
  color: ${(props) => props.theme.color_P3_OP100};
  ${F16} {
    margin-right: 8px;
  }
  ${MyBetsBetType},${MyBetsScoreSeparator}, ${MyBetsScore} {
    margin-right: 8px;
  }
  ${media.tablet`padding-bottom: 16px;`}
`

const PriceBoostsMyBetsSelectionDetailContainer = styled(
  MyBetsSelectionDetailContainer
)`
  display: grid;
  grid-gap: 8px 0;
`

export const MyBetsSelectionDetailWrapper = styled.div`
  display: inline;
`
export const MyBetsStateWrapper = styled(Flex)`
  padding-top: 8px;
  ${GenericLoadingWrapper} {
    padding-right: 8px;
  }
  ${F14} {
    color: ${(props) =>
      props.pending
        ? props.theme.color_A3_1
        : props.win
        ? props.theme.color_A1_1
        : props.lose
        ? props.theme.color_A7_2
        : props.theme.color_P3_OP64};
  }
  ${(props) => props.theme.icons.generic_loading} svg {
    height: 16px;
    width: 16px;
  }
  ${media.tablet`padding-top: 0px;`}
`
const MyBetsToReturnWrapper = styled(FlexColumn)`
  padding: 4px 0;
  text-align: right;
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP64};
    line-height: 16px;
  }
  ${F16} {
    color: ${(props) =>
      props.rejected ? props.theme.color_P3_OP100 : props.theme.color_A1_9};
    line-height: 16px;
  }
`
const ViewBetDetailContainer = styled(Flex)`
  position: relative;
  ${(props) => (props.cashout ? `${Grid(1)}` : `${Grid(2)}`)};
  padding: 4px 0px;
  ${MyBetsToReturnWrapper} {
    text-align: left;
    ${media.tablet`display: none;`}
    ${(props) => props.cashout && `display: none;`}
  }
  ${ViewBetDetailWrapper} {
    text-align: ${(props) => (props.cashout ? 'center' : 'right')};
    ${media.tablet`
      text-align: center;
      border-top: 1px solid ${(props) => props.theme.color_A4};
      height: 56px;
      margin-top: ${(props) => (props.cashout ? '16px;' : '8px;')};
      `}
  }
  ${media.tablet`display: block; padding:0;`}
`
const MyBetsStakeTextWrapper = styled(FlexLeftColumn)`
  padding: 4px 0;
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP64};
    line-height: 16px;
  }
  ${F16} {
    color: ${(props) => props.theme.color_P3_OP100};
    line-height: 16px;
  }
`
const MyBetsStakeWrapper = styled.div`
  padding: 4px 0px;
  ${Grid(2)}
  ${MyBetsToReturnWrapper} {
    /* text-align: right; */
    display: none;
    ${(props) => props.cashout && `display: flex;`};
    ${media.tablet`display: block;`}
  }
  ${(props) =>
    props.betDetail &&
    `
      grid-column: span 2;
    ${MyBetsToReturnWrapper} {
      display: flex;
    }
  `};
`
export const MyBetsSelectionContainer = styled.div`
  padding: 0px 16px;
  ${media.desktop`padding: 0px;`}
`
export const MyBetsSelectionWrapper = styled.div`
  ${Grid(2)}
  grid-template-rows: min-content 1fr;
  grid-gap: 8px 27px;
  margin: ${(props) =>
    props.betDetail
      ? '16px 16px 0px 16px'
      : props.cashout
      ? '16px 16px 4px 16px'
      : '16px 16px 16px 16px'};
  ${Separator2} {
    margin-top: 8px;
    grid-column: span 2;
    ${media.tablet`margin-top: 16px;margin-bottom: 8px;`}
  }
  ${media.tablet`
    display: block;
    margin: 16px 0px 0px 0px;
    ${MyBetsSelectionTitleWrapper},${MyBetsSelectionDetailContainer},${MyBetsStateWrapper},${MyBetsStakeWrapper},${Separator2}{
      margin-left: 16px;
      margin-right: 16px;
    }
    ${CashoutButtonWrapper}{
      margin: 8px 16px;
    }
    ${MyBetsSelectionDetailContainer}{
      ${(props) => props.settledMultiple && `display: none;`}
    }
    ${MyBetsSelectionTitleWrapper}{
      ${(props) => props.settledMultiple && `margin-bottom:13px;`}
    }
  `}
`
export const MyBetsSelection = ({
  win,
  lose,
  push,
  pending,
  half_push_half_win,
  half_push_half_lose,
  dead_heat,
  cancel,
  selectionName,
  handicap,
  odds,
  multipleSelections,
  stateText,
  stakeText,
  stakeAmount,
  toReturnText,
  toReturnAmount,
  confirmed,
  viewBetDetailButtonText,
  partiallyCashoutText,
  viewBetDetail,
  cashout,
  clickHandler,
  rightClickHandler,
  cashoutConfirm,
  cancelCashout,
  cashoutButtonText,
  cashoutLoading,
  cashoutValueChanged,
  cashoutValueChangedText,
  partialCashoutNotAvailableText,
  cashoutAmountText,
  cashoutInfoText,
  cashoutOdds,
  cashoutActive,
  cashoutSuccessful,
  cashoutSuccessfulAnimation,
  cashoutUnavailable,
  rippleEffect,
  sliderInput,
  sliderValue,
  settled,
  settledMultiple,
  toggleSlider,
  list = [],
  priceBoost,
  priceBoostList = [],
  ...rest
}) => (
  <>
    <MyBetsSelectionWrapper
      {...rest}
      settledMultiple={settledMultiple}
      cashout={cashout}
    >
      {list &&
        list.length > 0 &&
        list.map(
          (
            {
              betErrorsMessageText,
              selectionName,
              handicap,
              odds,
              competitionEventName,
              enterAmp,
              betType,
              score,
              score1,
              score2,
              tennisSet,
              tennisGame,
              tennisPoints,
              baseballRound,
              baseballInningUp,
              baseballInningDown,
              period,
              win,
              lose,
              half_push_half_win,
              half_push_half_lose,
              dead_heat,
              cancel,
              push,
              ...rest
            },
            index
          ) => (
            <Fragment key={'myBetsSelectionWrapper' + index}>
              <MyBetsSelectionTitleWrapper>
                <RelativeWrapper>
                  {selectionName && (
                    <MyBetsSelectionName data-txt-selection-name>
                      {selectionName}
                    </MyBetsSelectionName>
                  )}
                  {handicap && (
                    <MyBetsHandicap data-txt-handicap>
                      {handicap}
                    </MyBetsHandicap>
                  )}
                  <MyBetsAtWrapper>@</MyBetsAtWrapper>
                  {odds && <MyBetsOdds data-txt-odds>{odds}</MyBetsOdds>}
                </RelativeWrapper>
                <MyBetsSettledIconWrapper cancel={cancel || push}>
                  {win ? (
                    <Icons.Bet_status_win />
                  ) : half_push_half_win ? (
                    <Icons.Bet_status_half_push_half_win />
                  ) : half_push_half_lose ? (
                    <Icons.Bet_status_half_push_half_lose />
                  ) : lose ? (
                    <Icons.Bet_status_lose />
                  ) : dead_heat ? (
                    <Icons.Bet_status_dead_heat />
                  ) : cancel || push ? (
                    <Icons.Bet_status_void />
                  ) : (
                    ''
                  )}
                </MyBetsSettledIconWrapper>
              </MyBetsSelectionTitleWrapper>
              <MyBetsSelectionDetailContainer>
                <MyBetsCompetitionEventName>
                  <F14 onClick={enterAmp} data-txt-event-name>
                    {competitionEventName}
                  </F14>
                  <MyBetsSettledIconWrapper cancel={cancel || push}>
                    {win ? (
                      <Icons.Bet_status_win />
                    ) : half_push_half_win ? (
                      <Icons.Bet_status_half_push_half_win />
                    ) : half_push_half_lose ? (
                      <Icons.Bet_status_half_push_half_lose />
                    ) : lose ? (
                      <Icons.Bet_status_lose />
                    ) : dead_heat ? (
                      <Icons.Bet_status_dead_heat />
                    ) : cancel || push ? (
                      <Icons.Bet_status_void />
                    ) : (
                      ''
                    )}
                  </MyBetsSettledIconWrapper>
                </MyBetsCompetitionEventName>
                {(betType ||
                  score ||
                  period ||
                  score1 ||
                  score2 ||
                  tennisSet ||
                  tennisGame ||
                  tennisPoints) && (
                  <MyBetsSelectionDetailWrapper>
                    {betType && (
                      <MyBetsBetType data-txt-marketline-name>
                        {betType}
                      </MyBetsBetType>
                    )}
                    {(score || score1 || tennisSet) && (
                      <>
                        <MyBetsScoreSeparator>|</MyBetsScoreSeparator>
                        <MyBetsScore
                          confirmed={
                            win ||
                            half_push_half_win ||
                            half_push_half_lose ||
                            lose ||
                            dead_heat ||
                            cancel ||
                            settled ||
                            push
                          }
                          tennisSet={tennisSet}
                          data-txt-score
                        >
                          {score || score1 || tennisSet}
                        </MyBetsScore>
                      </>
                    )}
                    {(tennisGame || score2) && (
                      <MyBetsScore tennisGame={1} data-txt-score>
                        {tennisGame || score2}
                      </MyBetsScore>
                    )}
                    {baseballRound && (
                      <MyBetsBaseballRound>{baseballRound}</MyBetsBaseballRound>
                    )}
                    {(baseballInningUp || baseballInningDown) && (
                      <MyBetsBaseballInning>
                        <IconWrapper10>
                          {baseballInningUp && <Icons.Baseball_inning_up />}
                          {baseballInningDown && <Icons.Baseball_inning_down />}
                        </IconWrapper10>
                      </MyBetsBaseballInning>
                    )}
                    {tennisPoints && (
                      <MyBetsScore tennisPoints={1} data-txt-score>
                        {tennisPoints}
                      </MyBetsScore>
                    )}
                    {period && (
                      <MyBetsPeriod data-txt-period>{period}</MyBetsPeriod>
                    )}
                  </MyBetsSelectionDetailWrapper>
                )}
              </MyBetsSelectionDetailContainer>
            </Fragment>
          )
        )}
      {priceBoost && (
        <>
          <MyBetsSelectionTitleWrapper {...rest}>
            <RelativeWrapper>
              {selectionName && (
                <MyBetsSelectionName data-txt-selection-name>
                  {selectionName}
                </MyBetsSelectionName>
              )}
              {handicap && (
                <MyBetsHandicap data-txt-handicap>{handicap}</MyBetsHandicap>
              )}
              <MyBetsAtWrapper>@</MyBetsAtWrapper>
              {odds && <MyBetsOdds data-txt-odds>{odds}</MyBetsOdds>}
            </RelativeWrapper>
            <MyBetsSettledIconWrapper cancel={cancel || push}>
              {win ? (
                <Icons.Bet_status_win />
              ) : half_push_half_win ? (
                <Icons.Bet_status_half_push_half_win />
              ) : half_push_half_lose ? (
                <Icons.Bet_status_half_push_half_lose />
              ) : lose ? (
                <Icons.Bet_status_lose />
              ) : dead_heat ? (
                <Icons.Bet_status_dead_heat />
              ) : cancel || push ? (
                <Icons.Bet_status_void />
              ) : (
                ''
              )}
            </MyBetsSettledIconWrapper>
          </MyBetsSelectionTitleWrapper>
          <PriceBoostsMyBetsSelectionDetailContainer>
            {priceBoostList.length > 0 &&
              priceBoostList.map(
                (
                  {
                    participantName,
                    competitionEventName,
                    selectionName,
                    handicap,
                    odds,
                    ...rest
                  },
                  index
                ) => (
                  <div key={'priceBoostList' + index}>
                    <ParticipantName>
                      <F14 bold={1}>{participantName}</F14>
                    </ParticipantName>
                    <MyBetsCompetitionEventName>
                      <F14 data-txt-event-name>{competitionEventName}</F14>
                    </MyBetsCompetitionEventName>
                  </div>
                )
              )}
            <MyBetsSettledIconWrapper priceBoost cancel={cancel}>
              {win ? (
                <Icons.Bet_status_win />
              ) : half_push_half_win ? (
                <Icons.Bet_status_half_push_half_win />
              ) : half_push_half_lose ? (
                <Icons.Bet_status_half_push_half_lose />
              ) : lose ? (
                <Icons.Bet_status_lose />
              ) : dead_heat ? (
                <Icons.Bet_status_dead_heat />
              ) : cancel ? (
                <Icons.Bet_status_void />
              ) : (
                ''
              )}
            </MyBetsSettledIconWrapper>
          </PriceBoostsMyBetsSelectionDetailContainer>
        </>
      )}
      <MyBetsStateWrapper
        win={win || half_push_half_win || confirmed}
        lose={lose || half_push_half_lose}
        pending={pending || dead_heat}
        {...rest}
      >
        {pending && <GenericLoading />}
        <F14 data-txt-bet-status={stateText}>{stateText}</F14>
      </MyBetsStateWrapper>
      <Separator2 dotted />
      <MyBetsStakeWrapper cashout={cashout}>
        <MyBetsStakeTextWrapper>
          <F14>{stakeText}</F14>
          <F16 bold={1} data-txt-stake-amt>
            {stakeAmount}
          </F16>
        </MyBetsStakeTextWrapper>
        {toReturnText && (
          <MyBetsToReturnWrapper rejected={push || lose || half_push_half_lose}>
            <F14 data-txt={toReturnText}>{toReturnText}</F14>
            <F16 bold={1} data-txt-to-win-amt>
              {toReturnAmount}
            </F16>
          </MyBetsToReturnWrapper>
        )}
      </MyBetsStakeWrapper>
      {cashout && (
        <CashoutButton
          cashoutButtonText={cashoutButtonText}
          cashoutOdds={cashoutOdds}
          clickHandler={clickHandler}
          rightClickHandler={rightClickHandler}
          cashoutConfirm={cashoutConfirm}
          toggleSlider={toggleSlider}
          cancelCashout={cancelCashout}
          cashoutActive={cashoutActive}
          cashoutLoading={cashoutLoading}
          cashoutValueChanged={cashoutValueChanged}
          cashoutValueChangedText={cashoutValueChangedText}
          partialCashoutNotAvailableText={partialCashoutNotAvailableText}
          cashoutAmountText={cashoutAmountText}
          cashoutInfoText={cashoutInfoText}
          cashoutSuccessful={cashoutSuccessful}
          cashoutSuccessfulAnimation={cashoutSuccessfulAnimation}
          cashoutUnavailable={cashoutUnavailable}
          rippleEffect={rippleEffect}
          sliderInput={sliderInput}
          sliderValue={sliderValue}
        />
      )}
      <ViewBetDetailContainer cashout={cashout}>
        {toReturnText && (
          <MyBetsToReturnWrapper rejected={push || lose || half_push_half_lose}>
            <F14>{toReturnText}</F14>
            <F16 bold={1}>{toReturnAmount}</F16>
          </MyBetsToReturnWrapper>
        )}
        <ViewBetDetailWrapper
          onClick={viewBetDetail}
          cashout={cashout}
          data-btn-view-bet-details
        >
          {partiallyCashoutText && <F12>{partiallyCashoutText}</F12>}
          <F12>{viewBetDetailButtonText}</F12>
        </ViewBetDetailWrapper>
      </ViewBetDetailContainer>
    </MyBetsSelectionWrapper>
  </>
)
//------------------- My Bets Total Stake -------------------//
export const MyBetsTotalStakeWrapper = styled.div`
  ${FlexSpaceBetween(40)}
  width: 100%;
  padding: 4px 16px;
  color: ${(props) => props.theme.color_P4_1};
  background: ${(props) => props.theme.color_P1};
  ${FlexRightColumn} {
    text-align: right;
  }
`
export const MyBetsTotalStake = ({
  stakeText,
  stakeAmount,
  toReturnText,
  toReturnAmount,
}) => (
  <MyBetsTotalStakeWrapper>
    <FlexLeftColumn>
      <F14>{stakeText}</F14>
      <F14 bold={1}>{stakeAmount}</F14>
    </FlexLeftColumn>
    <FlexRightColumn>
      <F14>{toReturnText}</F14>
      <F14 bold={1}>{toReturnAmount}</F14>
    </FlexRightColumn>
  </MyBetsTotalStakeWrapper>
)
//------------------- My Bets Details Selection -------------------//
export const BetDetailHeaderWrapper = styled.div`
  ${FlexSpaceBetween(48)}
  ${F16} {
    padding-left: 16px;
  }
`
export const BetDetailHeader = ({ headerText, closePanel }) => (
  <BetDetailHeaderWrapper>
    <F16 bold={1} uppercase={1}>
      {headerText}
    </F16>
    <IconWrapper48 onClick={closePanel}>
      <Icons.Close />
    </IconWrapper48>
  </BetDetailHeaderWrapper>
)
const BetIDWrapper = styled.div`
  color: ${(props) => props.theme.color_P3_21_OP64};
  height: 16px;
  text-align: left;
  margin-top: 6px;
  ${media.tablet`margin-left: 16px;`}
`
const BetPlacedWrapper = styled(BetIDWrapper)`
  color: ${(props) => props.theme.color_P3_21_OP64};
  text-align: right;
  ${media.tablet`text-align: left;margin-left: 16px;margin-top: 0px;`}
`

export const BetDetailSelection = ({
  win,
  lose,
  push,
  pending,
  half_push_half_win,
  half_push_half_lose,
  dead_heat,
  cancel,
  selectionName,
  handicap,
  odds,
  participantName,
  competitionEventName,
  betType,
  score,
  period,
  competitionName,
  time,
  onClick,
  multipleSelections,
  inplay,
  stateText,
  stakeText,
  stakeAmount,
  toWinText,
  toWinAmount,
  toReturnText,
  toReturnAmount,
  confirmed,
  settled,
  betIDText,
  betPlacedText,
  toggleSlider,
  list = [],
  priceBoost,
  priceBoostList = [],
  ...rest
}) => (
  <>
    <MyBetsSelectionWrapper betDetail {...rest}>
      {list &&
        list.length > 0 &&
        list.map(
          (
            {
              betErrorsMessageText,
              selectionName,
              handicap,
              odds,
              competitionEventName,
              betType,
              score,
              score1,
              score2,
              tennisSet,
              tennisGame,
              tennisPoints,
              baseballRound,
              baseballInningUp,
              baseballInningDown,
              period,
              competitionName,
              time,
              win,
              lose,
              half_push_half_win,
              half_push_half_lose,
              dead_heat,
              cancel,
              push,
              ...rest
            },
            index
          ) => (
            <>
              <MyBetsSelectionTitleWrapper>
                <RelativeWrapper>
                  <MyBetsSelectionName>{selectionName}</MyBetsSelectionName>
                  {handicap && <MyBetsHandicap>{handicap}</MyBetsHandicap>}
                  <MyBetsAtWrapper>@</MyBetsAtWrapper>
                  <MyBetsOdds>{odds}</MyBetsOdds>
                </RelativeWrapper>
                <MyBetsSettledIconWrapper>
                  {win ? (
                    <Icons.Bet_status_win />
                  ) : half_push_half_win ? (
                    <Icons.Bet_status_half_push_half_win />
                  ) : half_push_half_lose ? (
                    <Icons.Bet_status_half_push_half_lose />
                  ) : lose ? (
                    <Icons.Bet_status_lose />
                  ) : dead_heat ? (
                    <Icons.Bet_status_dead_heat />
                  ) : cancel || push ? (
                    <Icons.Bet_status_void />
                  ) : (
                    ''
                  )}
                </MyBetsSettledIconWrapper>
              </MyBetsSelectionTitleWrapper>
              <MyBetsSelectionDetailContainer>
                <MyBetsCompetitionEventName>
                  <F14>{competitionEventName}</F14>
                  <MyBetsSettledIconWrapper>
                    {win ? (
                      <Icons.Bet_status_win />
                    ) : half_push_half_win ? (
                      <Icons.Bet_status_half_push_half_win />
                    ) : half_push_half_lose ? (
                      <Icons.Bet_status_half_push_half_lose />
                    ) : lose ? (
                      <Icons.Bet_status_lose />
                    ) : dead_heat ? (
                      <Icons.Bet_status_dead_heat />
                    ) : cancel || push ? (
                      <Icons.Bet_status_void />
                    ) : (
                      ''
                    )}
                  </MyBetsSettledIconWrapper>
                </MyBetsCompetitionEventName>
                {(betType ||
                  score ||
                  score1 ||
                  score2 ||
                  tennisSet ||
                  tennisGame ||
                  tennisPoints ||
                  competitionName ||
                  period ||
                  time) && (
                  <MyBetsSelectionDetailWrapper>
                    <div style={{ paddingRight: '24px' }}>
                      {betType && <MyBetsBetType>{betType}</MyBetsBetType>}
                      {(score || score1 || tennisSet) && (
                        <>
                          <MyBetsScoreSeparator>|</MyBetsScoreSeparator>
                          <MyBetsScore
                            confirmed={
                              win ||
                              half_push_half_win ||
                              half_push_half_lose ||
                              lose ||
                              dead_heat ||
                              cancel ||
                              settled ||
                              push
                            }
                            tennisSet={tennisSet}
                          >
                            {score || score1 || tennisSet}
                          </MyBetsScore>
                        </>
                      )}
                      {(tennisGame || score2) && (
                        <MyBetsScore tennisGame={1}>
                          {tennisGame || score2}
                        </MyBetsScore>
                      )}
                      {baseballRound && (
                        <MyBetsBaseballRound>
                          {baseballRound}
                        </MyBetsBaseballRound>
                      )}
                      {(baseballInningUp || baseballInningDown) && (
                        <MyBetsBaseballInning>
                          <IconWrapper10>
                            {baseballInningUp && <Icons.Baseball_inning_up />}
                            {baseballInningDown && (
                              <Icons.Baseball_inning_down />
                            )}
                          </IconWrapper10>
                        </MyBetsBaseballInning>
                      )}
                      {tennisPoints && (
                        <MyBetsScore tennisPoints={1}>
                          {tennisPoints}
                        </MyBetsScore>
                      )}
                      {period && <MyBetsPeriod>{period}</MyBetsPeriod>}
                      {competitionName && (
                        <>
                          <FlexBreak />
                          <MyBetsCompetitionName>
                            {competitionName}
                          </MyBetsCompetitionName>
                        </>
                      )}
                      {time && <F14>{time}</F14>}
                    </div>
                  </MyBetsSelectionDetailWrapper>
                )}
              </MyBetsSelectionDetailContainer>
            </>
          )
        )}
      {priceBoost && (
        <>
          <MyBetsSelectionTitleWrapper {...rest} settled={settled}>
            <RelativeWrapper>
              <MyBetsSelectionName>{selectionName}</MyBetsSelectionName>
              {handicap && <MyBetsHandicap>{handicap}</MyBetsHandicap>}
              <MyBetsAtWrapper>@</MyBetsAtWrapper>
              <MyBetsOdds>{odds}</MyBetsOdds>
            </RelativeWrapper>
            <MyBetsSettledIconWrapper>
              {win ? (
                <Icons.Bet_status_win />
              ) : half_push_half_win ? (
                <Icons.Bet_status_half_push_half_win />
              ) : half_push_half_lose ? (
                <Icons.Bet_status_half_push_half_lose />
              ) : lose ? (
                <Icons.Bet_status_lose />
              ) : dead_heat ? (
                <Icons.Bet_status_dead_heat />
              ) : cancel || push ? (
                <Icons.Bet_status_void />
              ) : (
                ''
              )}
            </MyBetsSettledIconWrapper>
          </MyBetsSelectionTitleWrapper>
          <MyBetsSelectionDetailContainer>
            {priceBoostList.length > 0 &&
              priceBoostList.map(
                (
                  {
                    participantName,
                    competitionEventName,
                    betType,
                    competitionName,
                    time,
                    ...rest
                  },
                  index
                ) => (
                  <FlexLeftColumn>
                    {participantName && (
                      <ParticipantName>
                        <F14 bold={1}>{participantName}</F14>
                      </ParticipantName>
                    )}
                    {competitionEventName && (
                      <MyBetsCompetitionEventName>
                        <F14>{competitionEventName}</F14>
                      </MyBetsCompetitionEventName>
                    )}
                    {betType && <MyBetsBetType>{betType}</MyBetsBetType>}
                    {competitionName && (
                      <MyBetsCompetitionName>
                        <F14>{competitionName}</F14>
                      </MyBetsCompetitionName>
                    )}
                    {time && <F14>{time}</F14>}
                  </FlexLeftColumn>
                )
              )}
            <MyBetsSettledIconWrapper priceBoost cancel={cancel}>
              {win ? (
                <Icons.Bet_status_win />
              ) : half_push_half_win ? (
                <Icons.Bet_status_half_push_half_win />
              ) : half_push_half_lose ? (
                <Icons.Bet_status_half_push_half_lose />
              ) : lose ? (
                <Icons.Bet_status_lose />
              ) : dead_heat ? (
                <Icons.Bet_status_dead_heat />
              ) : cancel ? (
                <Icons.Bet_status_void />
              ) : (
                ''
              )}
            </MyBetsSettledIconWrapper>
          </MyBetsSelectionDetailContainer>
        </>
      )}
      <MyBetsStateWrapper
        win={win || half_push_half_win || confirmed}
        lose={lose || half_push_half_lose}
        pending={pending || dead_heat}
        {...rest}
      >
        <F14>{stateText}</F14>
      </MyBetsStateWrapper>
      <Separator2 dotted />
      <MyBetsStakeWrapper betDetail>
        <MyBetsStakeTextWrapper>
          <F14>{stakeText}</F14>
          <F16 bold={1}>{stakeAmount}</F16>
        </MyBetsStakeTextWrapper>
        {toReturnText && (
          <MyBetsToReturnWrapper rejected={push || lose}>
            <F14>{toReturnText}</F14>
            <F16 bold={1}>{toReturnAmount}</F16>
          </MyBetsToReturnWrapper>
        )}
      </MyBetsStakeWrapper>
      <BetIDWrapper>
        <F14>{betIDText}</F14>
      </BetIDWrapper>
      <BetPlacedWrapper>
        <F14>{betPlacedText}</F14>
      </BetPlacedWrapper>
    </MyBetsSelectionWrapper>
  </>
)

//------------------- My Bets Detail Cashout History -------------------//
export const CashoutHistoryWrapper = styled(FlexColumn)`
  border-top: 1px solid ${(props) => props.theme.color_A4};
  padding-top: 16px;
  margin: 16px;
  color: ${(props) => props.theme.color_P3_OP100};
  &:first-child {
    border-top: none;
    padding-top: 0px;
  }
  ${F16} {
    padding-bottom: 8px;
  }
  ${F12} {
    color: ${(props) => props.theme.color_P3_21_OP64};
  }
`
export const CashoutHistoryStakeWrapper = styled.div`
  ${Grid(2)}
  grid-gap: 8px 32px;
  color: ${(props) =>
    props.viod ? props.theme.color_P3_OP40 : props.theme.color_P3_21_OP64};
  margin-bottom: 16px;
  ${Flex} {
    ${FlexSpaceBetween(16)}
    margin-top: 8px;
  }
  ${media.tablet`display: block;`}
`
export const StakeTypeAmount = styled(RelativeWrapper)`
  ${(props) =>
    props.viod &&
    ` ${F14}{
        color: ${props.theme.color_P3_OP40};
        &::after {
          content: '';
          border-bottom: 1px solid ${props.theme.color_P3_OP40};
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%,-50%,0);
          width: 100%;
        }
      }
    `}
`
export const CashoutHistoryVoidWrapper = styled(FlexCenterColumn)`
  margin-top: 16px;
  padding: 8px 16px;
  border: 2px solid ${(props) => props.theme.color_P3_OP24};
  background: ${(props) => props.theme.color_S4_1};
  border-style: dotted;
  color: ${(props) => props.theme.color_P3_OP64};
  text-align: center;
  ${F12} {
    padding-top: 4px;
  }
`
export const CashoutHistory = ({
  cashoutHistoryText,
  stakeType,
  stakeTypeAmount,
  cashoutTime,
  cashoutVoidText,
  cashoutVoidReasonText,
  cashoutVoidTime,
  list = [],
}) => (
  <CashoutHistoryWrapper>
    {cashoutHistoryText && <F16 bold={1}>{cashoutHistoryText}</F16>}
    <CashoutHistoryStakeWrapper viod={cashoutVoidText}>
      {list && list.length > 0 ? (
        list.map(
          ({ stakeType, stakeTypeAmount, cashoutTime, ...rest }, index) => (
            <Flex key={'stakeType' + index}>
              <F14>{stakeType}</F14>
              <StakeTypeAmount viod={cashoutVoidText}>
                <F14 bold={1}>{stakeTypeAmount}</F14>
              </StakeTypeAmount>
            </Flex>
          )
        )
      ) : (
        <Flex>
          <F14>{stakeType}</F14>
          <StakeTypeAmount viod={cashoutVoidText}>
            <F14 bold={1}>{stakeTypeAmount}</F14>
          </StakeTypeAmount>
        </Flex>
      )}
    </CashoutHistoryStakeWrapper>
    <F12>{cashoutTime}</F12>
    {cashoutVoidText && (
      <CashoutHistoryVoidWrapper>
        <F14 bold={1} uppercase={1}>
          {cashoutVoidText}
        </F14>
        <F12>{cashoutVoidReasonText}</F12>
        <F12>{cashoutVoidTime}</F12>
      </CashoutHistoryVoidWrapper>
    )}
  </CashoutHistoryWrapper>
)

export const CashoutHistoryContainer = styled.div`
  margin-top: 16px;
  border-top: 1px solid ${(props) => props.theme.color_A4};
`
//------------------- My Bets Pagination -------------------//

export const PaginationWrapper = styled(FlexCenter)`
  height: 56px;
  width: 100%;
  user-select: none;
  ${IconWrapper48} {
    &:nth-last-child(2) {
      border-radius: 2px;
      border: 1px solid ${(props) => props.theme.color_P3_9_OP24};
      background: ${(props) => props.theme.color_P4_28};
      g {
        fill: ${(props) => props.theme.color_P3_OP56};
      }
      @media (hover: hover) {
        &:hover {
          cursor: pointer;
          background: ${(props) => props.theme.color_P3_1_OP4_1};
        }
      }
    }
  }
`
export const PaginationItemWrapper = styled(FlexCenter)`
  width: 48px;
  height: 48px;
  border-radius: 2px;
  margin-right: 8px;
  color: ${(props) => props.theme.color_P3_OP56};
  background: ${(props) => props.theme.color_P4_28};
  border: 1px solid ${(props) => props.theme.color_P3_9_OP24};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_P3_1_OP4_1};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
  ${(props) =>
    props.active &&
    `
      color: ${props.theme.color_P4_2};
      background:${props.theme.color_P3_OP56}; 
      
      border: 1px solid ${(props) => props.theme.color_P4_2};
      @media (hover: hover) {
        &:hover{
          cursor: pointer;
          background: ${props.theme.color_P3_OP56};
        }
      }
      &:active {
        background: ${props.theme.color_P3_OP56};
      }
    `}
`
export const PaginationItem = ({ page, onClick, ...rest }) => (
  <PaginationItemWrapper onClick={onClick} {...rest}>
    <F14>{page}</F14>
  </PaginationItemWrapper>
)
export const PaginationItemContainer = styled(FlexCenter)`
  margin-right: 8px;
  border-right: 1px solid ${(props) => props.theme.color_P3_9_OP24};
`

export const Pagination = ({
  togglePageSelector,
  doubleLeft,
  left,
  right,
  disabledDoubleleft,
  disabledLeft,
  disabledRight,
  list = [],
}) => (
  <PaginationWrapper>
    <Chevron_doubleleft
      disabledDoubleleft={disabledDoubleleft}
      doubleLeft={doubleLeft}
    />
    <Chevron_left disabledLeft={disabledLeft} left={left} />
    <PaginationItemContainer>
      {list &&
        list.length > 0 &&
        list.map(({ onClick, ...rest }, index) => (
          <PaginationItem
            key={'paginationItem' + index}
            onClick={onClick}
            {...rest}
          />
        ))}
    </PaginationItemContainer>
    {togglePageSelector && (
      <IconWrapper48>
        <Icons.Chevron_up onClick={togglePageSelector} />
      </IconWrapper48>
    )}
    <Chevron_right disabledRight={disabledRight} right={right} />
  </PaginationWrapper>
)

//--------------------- My Bets Slider ---------------------//

const trackH = '4px'
const thumbD = '16px'
const trackColor = (props) => props.theme.color_S4_1
const fillColor = (props) => props.theme.color_A1_1

const track = css`
  box-sizing: border-box;
  border: none;
  height: 4px;
  background: ${trackColor};
  border-radius: 8px;
`
const trackFill = css`
  ${track};
  height: 6px;
  background-color: transparent;
  background-image: linear-gradient(${fillColor}, ${fillColor}),
    linear-gradient(${trackColor}, ${trackColor});
  background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
`
const fill = css`
  height: ${trackH};
  background: ${fillColor};
  border-radius: 4px;
`
const thumb = css`
  box-sizing: border-box;
  border: none;
  width: ${thumbD};
  height: ${thumbD};
  border-radius: 50%;
  background: ${fillColor};
  &:hover,
  &:active {
    -webkit-transform: scale(1.5);
  }
`
const SliderWrapper = styled.input`
  margin: 0;
  padding: 30px 0px;
  height: ${thumbD};
  background: transparent;
  ${media.tablet`padding: 30px 16px;`}
  &, &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb {
      outline: none;
    }
  }
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * ${thumbD} + var(--ratio) * (100% - ${thumbD}));
  font: 1em/1 arial, sans-serif;
  &::-webkit-slider-runnable-track {
    ${trackFill};
  }
  &::-moz-range-track {
    ${trackFill};
  }
  &::-moz-range-track,
  &::-ms-track {
    ${track};
  }
  &::-moz-range-progress,
  &::-ms-fill-lower {
    ${fill};
  }
  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (${trackH} - ${thumbD}));
    ${thumb};
  }
  &::-moz-range-thumb {
    ${thumb};
  }
  &::-ms-thumb {
    margin-top: 0;
    ${thumb};
  }
  &::-ms-tooltip {
    display: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
`

export const Slider = ({ sliderInput, sliderValue }) => {
  return (
    <SliderWrapper
      onInput={sliderInput}
      type="range"
      min="0"
      max="301"
      value={sliderValue}
      style={{
        width: '100%',
        '--min': 0,
        '--max': 301,
        '--val': sliderValue,
      }}
    />
  )
}

//----------- My Bets Single/Multiple Bet Header -----------//
export const BetHeaderWrapper = styled.div`
  position: relative;
  ${FlexSpaceBetween(48)}
  background: ${(props) => props.theme.color_S4_3};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.color_S4_3_Lplus4};
    }
  }
  ${FlexLeft} {
    padding: 0px 16px;
    height: 100%;
    width: 100%;
    &:active {
      background: ${(props) => props.theme.color_S4_3_Lmin8};
    }
    ${FlexColumn} {
      width: ${(props) =>
        props.withRightButton ? `calc(100% - 96px)` : `100%`};
    }
    ${Flex} {
      &:nth-child(1) {
        color: ${(props) => props.theme.color_P3_17_OP56};
        ${F14} {
          &:nth-child(2) {
            padding-left: 8px;
            margin-left: 8px;
            border-left: 1px solid ${(props) => props.theme.color_P3_17_OP16};
          }
        }
      }
    }
  }
`
const BetHeaderSelectionName = styled.span`
  color: ${(props) => props.theme.color_P3_17};

  border-left: 1px solid ${(props) => props.theme.color_P3_1_OP16};
  padding: 0px 8px;
  &:first-child {
    border-left: none;
    padding-left: 0px;
  }
`
const BetHeaderHandicap = styled.span`
  color: ${(props) => props.theme.color_A3_12};

  padding-right: 8px;
`
export const BetHeaderDetail = styled.span`
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${BetHeaderSelectionName},${BetHeaderHandicap} {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
`
export const BetHeaderCashoutButton = styled(FlexCenterColumn)`
  width: 88px;
  height: 32px;
  border-radius: 4px;
  padding: 2px 4px;
  margin: 0px 8px;
  text-align: center;
  color: ${(props) =>
    props.cashoutSuccessful
      ? props.theme.color_A1_3
      : props.cashoutUnavailable
      ? props.theme.color_P3_OP64
      : props.cashoutSettled
      ? props.theme.color_P3_17_OP64
      : props.theme.color_P4_15};
   'color_A1_3')};
  background: ${(props) =>
    props.cashoutLoading ||
    props.cashoutSuccessful ||
    props.cashoutUnavailable ||
    props.cashoutSettled
      ? `transparent`
      : props.cashoutValueChangeds
      ? props.theme.color_A7_3
      : props.cashoutConfirm
      ? props.theme.color_A3_1
      : props.theme.color_A1_3};
  ${(props) =>
    props.cashoutSettled &&
    `
    ${F12}{
      color:${
        props.cashoutSettledWin
          ? props.theme.color_A1_3
          : props.theme.color_P3_17_OP64
      };
    }
  `};
  ${F12} {
    ${(props) =>
      props.cashoutUnavailable ? `${Truncate(2)}` : `${Truncate(1)}`};
  }
  ${F12}:first-child {
    ${(props) =>
      props.cashoutSuccessfulAnimation &&
      css`
        animation: ${dropVertical} 0.3s 1 ease;
      `};
  }
  ${F12}:last-child {
    animation: ${(props) =>
      props.cashoutSuccessfulAnimation
        ? css`
            ${dropVertical} 0.5s 1 ease-in-out;
          `
        : props.cashoutValueChanged
        ? css`
            ${shakeHorizontal} 0.5s 1 ease-in-out;
          `
        : null};
  }
  @media (hover: hover) {
    &:hover {
      cursor: ${(props) =>
        props.cashoutLoading ||
        props.cashoutSuccessful ||
        props.cashoutUnavailable ||
        props.cashoutSettled
          ? 'default'
          : 'pointer'};
      background: ${(props) =>
        props.cashoutLoading ||
        props.cashoutSuccessful ||
        props.cashoutUnavailable ||
        props.cashoutSettled
          ? `transparent`
          : props.cashoutValueChanged
          ? props.theme.color_A7_3_Lplus4
          : props.cashoutConfirm
          ? props.theme.color_A3_1_Lplus4
          : props.theme.color_A1_3_Lplus4};
    }
  }
  &:active {
    background: ${(props) =>
      props.cashoutLoading ||
      props.cashoutSuccessful ||
      props.cashoutUnavailable ||
      props.cashoutSettled
        ? `transparent`
        : props.cashoutValueChanged
        ? props.theme.color_A7_3_Lmin8
        : props.cashoutConfirm
        ? props.theme.color_A3_1_Lmin8
        : props.theme.color_A1_3_Lmin8};
    
  }
  ${Ripple} {
    left: 50%;
  }
`
export const Bet_slip_add_selection = () => (
  <IconWrapper32>
    <Icons.Bet_slip_add_selection />
  </IconWrapper32>
)
export const CashoutCounter = styled(Flex)`
  margin-right: 8px;
  ${IconWrapper32}:first-child {
    background: ${(props) => props.theme.color_S5_2};
    color: ${(props) => props.theme.color_P4_18};
    g {
      fill: ${(props) => props.theme.color_P4_18};
    }
  }
  ${IconWrapper32}:last-child {
    background: ${(props) => props.theme.color_A3_12};
    color: ${(props) => props.theme.color_P4_23};
  }
  @media (hover: hover) {
    &:hover {
      ${IconWrapper32}:first-child {
        background: ${(props) => props.theme.color_S5_2_Lplus4};
      }
      ${IconWrapper32}:last-child {
        background: ${(props) => props.theme.color_A3_12_Lplus4};
      }
    }
  }
  &:active {
    ${IconWrapper32}:first-child {
      background: ${(props) => props.theme.color_S5_2_Lmin8};
    }
    ${IconWrapper32}:last-child {
      background: ${(props) => props.theme.color_A3_12_Lmin8};
    }
  }
`

export const BetHeader = ({
  betType,
  odds,
  cashoutText,
  cashoutOdds,
  toggleBetHeader,
  cashout,
  count,
  addSelection,
  cashoutLoading,
  cashoutConfirm,
  cashoutValueChanged,
  cashoutSuccessful,
  cashoutSuccessfulAnimation,
  cashoutUnavailable,
  cashoutSettled,
  cashoutSettledWin,
  clickHandler,
  rippleEffect,
  bold,
  list = [],
}) => (
  <BetHeaderWrapper
    withRightButton={
      cashout ||
      cashoutText ||
      cashoutLoading ||
      cashoutConfirm ||
      cashoutValueChanged ||
      cashoutSuccessful ||
      cashoutUnavailable ||
      cashoutSettled ||
      count
    }
  >
    <FlexLeft onClick={toggleBetHeader}>
      <FlexColumn>
        <Flex>
          <F14 uppercase={1} bold={bold}>
            {betType}
          </F14>
          {odds && <F14>{odds}</F14>}
        </Flex>

        {list && (
          <Flex>
            <BetHeaderDetail>
              {list &&
                list.length > 0 &&
                list.map(({ selectionName, handicap }, index, ...rest) => (
                  <Fragment key={'betHeaderSelectionName' + index}>
                    <BetHeaderSelectionName>
                      {selectionName}
                    </BetHeaderSelectionName>
                    {handicap && (
                      <BetHeaderHandicap>{handicap}</BetHeaderHandicap>
                    )}
                  </Fragment>
                ))}
            </BetHeaderDetail>
          </Flex>
        )}
      </FlexColumn>
    </FlexLeft>

    <AbsoluteRightCenter>
      {cashoutLoading ? (
        <BetHeaderCashoutButton cashoutLoading={1}>
          <GenericLoading />
        </BetHeaderCashoutButton>
      ) : cashoutText ? (
        <BetHeaderCashoutButton
          onClick={clickHandler}
          cashout={cashout}
          cashoutConfirm={cashoutConfirm}
          cashoutValueChanged={cashoutValueChanged}
          cashoutSuccessful={cashoutSuccessful}
          cashoutSuccessfulAnimation={cashoutSuccessfulAnimation}
          cashoutUnavailable={cashoutUnavailable}
          cashoutSettled={cashoutSettled}
          cashoutSettledWin={cashoutSettledWin}
        >
          {cashoutText && (
            <>
              {rippleEffect && <Ripple />}
              <F12>{cashoutText}</F12>
              <F12 bold={1}>{cashoutOdds}</F12>
            </>
          )}
        </BetHeaderCashoutButton>
      ) : null}
      {count && (
        // <CashoutCounter onClick={addSelection}>
        //   <Bet_slip_add_selection />
        //   <IconWrapper32>
        //     <F12 bold={1}>{count}</F12>
        //   </IconWrapper32>
        // </CashoutCounter>
        <BetAgainWrapper onClick={addSelection}>
          <IconWrapper48>
            <RelativeWrapper>
              <IconWrapper32>
                <AbsoluteCenter>
                  <Icons.Bet_again />
                </AbsoluteCenter>
                <BetAgainHoverWrapper>
                  <Icons.Bet_again_pressed />
                </BetAgainHoverWrapper>
                <AbsoluteCenter>
                  <F16 bold>{count}</F16>
                </AbsoluteCenter>
              </IconWrapper32>
            </RelativeWrapper>
          </IconWrapper48>
        </BetAgainWrapper>
      )}
    </AbsoluteRightCenter>
  </BetHeaderWrapper>
)
//-------------------- Preloader Shape--------------------//
export const PreLoadingAnimation = styled.div`
  height: fit-content;
  background-image: linear-gradient(
    268deg,
    ${(props) => props.theme.color_P3_4_OP24},
    rgb(236, 236, 236),
    ${(props) => props.theme.color_P3_4_OP24},
    rgb(236, 236, 236),
    ${(props) => props.theme.color_P3_4_OP24}
  );
  background-size: 1000%;
  border-radius: 4px;
  animation: ${preLoading} 3s ease 0s infinite;
`
export const PreLoadingBarFullWidth = styled(PreLoadingAnimation)`
  width: 100%;
`
export const PreLoaderBarWidth85p = styled(PreLoadingAnimation)`
  width: 85%;
`
export const PreLoadingCircle = styled(PreLoadingAnimation)`
  width: 24px;
  max-width: 24px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
`
//-------------------- Preloader --------------------//
export const PreLoaderWrap = styled.div`
  ${MarketWrapper2},${MarketWrapper3} {
    grid-gap: 8px;
  }
  ${TeamNameWrapper} {
    padding: 8px 0px 8px 16px;
    height: 88px;
    align-items: center;
    ${FlexCenter},${Score} {
      display: none;
    }
  }
`
export const SbkHeaderPreLoaderWrapper = styled(FlexScrollWrapper)`
  margin-top: 56px;
  background: ${(props) => props.theme.color_S6_1};
  ${Shadow} {
    display: none;
  }
  ${media.desktop`${FlexRight}{display:none;} ${Shadow}{display:none;}`}
`
export const LoadingBarItem = styled.div`
  width: 56px;
  height: 8px;
  border-radius: 4px;
`
export const PreLoaderBarWrapper = styled(FlexLeft)`
  padding: 0 8px;
  height: 48px;
  margin-right: 8px;
`
export const PreLoaderItemWrapper = styled(FlexCenter)`
  height: 32px;
  padding: 0 8px;
  margin-right: 8px;
`
export const SelectionFilterWrapperItemContainer = styled(FlexScrollWrapper)`
  margin: 16px 0px;
`
export const SbkHeaderPreLoader = () => (
  <MarketT1BPreLoaderWrapper>
    <PreLoadingAnimation>
      <LoadingBarItem />
    </PreLoadingAnimation>
  </MarketT1BPreLoaderWrapper>
)
export const MenuButtonPreLoaderWrapper = styled(FlexCenter)`
  width: 64px;
  position: absolute;
  height: 100%;
  left: 0;
  background: ${(props) => props.theme.color_S6_1};
`
export const MenuButtonPreLoader = () => (
  <MenuButtonPreLoaderWrapper>
    <PreLoadingAnimation>
      <LoadingBarItem />
    </PreLoadingAnimation>
  </MenuButtonPreLoaderWrapper>
)
export const SportCarouselText = styled(PreLoadingAnimation)`
  width: 56px;
  height: 6px;
  margin: 8px 4px;
`
export const SportCarouselPreLoader = ({ circle, text }) => (
  <>
    {(circle || text) && (
      <SportCarouselItemWrapper>
        <FlexCenter>{circle && <PreLoadingCircle />}</FlexCenter>
        {text && (
          <FlexCenter>
            <SportCarouselText />
          </FlexCenter>
        )}
      </SportCarouselItemWrapper>
    )}
  </>
)
export const MarketT1BPreLoaderWrapper = styled(FlexCenter)`
  padding: 0 8px;
  height: 48px;
  margin-right: 8px;
`
export const ScoreBoardPreLoaderWrapper = styled(MarketT1BPreLoaderWrapper)`
  height: 8px;
`
export const FullWidthPreLoader = () => (
  <PreLoadingBarFullWidth>
    <LoadingBarItem />
  </PreLoadingBarFullWidth>
)
export const Width85pPreLoader = () => (
  <PreLoaderBarWidth85p>
    <LoadingBarItem />
  </PreLoaderBarWidth85p>
)
export const OddsPreLoaderWrapper = styled(FlexCenter)`
  border-radius: 4px;
  height: ${(props) => (props.height64 ? `64px` : `48px`)};
  min-width: 64px;
  padding: 8px 4px;
`
export const OddsPreLoader = () => (
  <PreLoadingAnimation>
    <OddsPreLoaderWrapper />
  </PreLoadingAnimation>
)
export const FilterPreloaderWrapper = styled(PreLoadingAnimation)`
  min-width: 66px;
  height: 48px;
  border-radius: 4px;
  margin-left: 16px;
`
export const SelectionMarketWrapper1 = styled(MarketWrapper1)`
  margin: 16px 0;
`
export const SelectionMarketWrapper2to1 = styled(MarketWrapper2to1)`
  margin: 16px 0;
`
export const SelectionFullWidthWrapper = styled(PreLoadingAnimation)`
  width: 100%;
  height: 48px;
  border-radius: 4px;
`
export const OddsPanelPreloaderWrapper = styled(NonPremiumPanelWrapper)`
  ${OddsPanelContainer}:nth-child(1) {
    grid-template-rows: 152px;
    display: grid;
    align-items: center;
  }
  ${OddsPanelContainer} {
    grid-template-rows: 152px;
    display: grid;
    align-items: center;
  }
  ${MarketWrapper2} {
    margin-top: 41px;
  }
  ${MarketWrapper3} {
    margin-top: 41px;
    margin-bottom: 0;
  }
`
export const ScoreBoardPreloader = styled(HeaderBg)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${(props) => props.theme.color_S7_OP56};
  ${MarketWrapper1} {
    width: 100%;
  }
`
export const AmpScoreBoardPreloader = styled(AmpContentCenterWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  background: ${(props) => props.theme.color_S7_OP56};
  ${MarketWrapper1} {
    width: 100%;
  }
  ${media.desktopLarge`display: none;`}
  ${media.desktopMedium`display: none;`}
  ${media.desktop`display: none;`}
  ${media.tablet`display: block;`}
  ${media.mobile`display: block;`}
`
export const RightPanelBannerPreLoader = styled(FlexCenter)`
  width: 100%;
  height: ${(props) =>
    props.preStart ? '112px' : props.preStartBanner ? '100vh' : '393px'};
  ${media.desktop`height: ${(props) => props.contentCenter && '310px'};`}
  background: ${(props) =>
    props.second ? props.theme.color_S4_OP32 : props.theme.color_S4_1};
  ${MarketWrapper1} {
    width: 100%;
    grid-gap: 20px;
  }
`
export const GenericLoadingPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.grey ? props.theme.color_S4_1 : props.theme.color_P4_1};
`
export const PreloaderMarketWrapper1 = styled.div`
  ${Grid('1')};
  grid-row-gap: 32px;
  margin: 16px;
  ${media.tablet`margin: 16px 0;`}
  ${media.mobile`margin: 16px 0;`}
`
export const PreloaderMarketWrapper2to1 = styled(MarketWrapper2to1)`
  grid-gap: unset;
  margin-bottom: 32px;
  ${media.tablet`grid-row-gap: 32px;`}
  ${media.mobile`grid-row-gap: 32px;`}
`
//----------- Content Center / Bet Radar -----------//

export const ContentCenterWrapper = styled.div`
  width: 100%;
  overflow: auto;
  background: ${(props) => props.theme.color_P4_2};
  z-index: 1;
  position: relative;
`
export const MatchTrackerItemsWrapper = styled(FlexCenter)`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.color_S1_3};
`
export const MatchTrackerItemWrapper = styled(FlexCenter)`
  width: auto;
  height: 100%;
  padding: 0px 8px;
  color: ${(props) =>
    props.active ? props.theme.color_P2_5 : props.theme.color_P4_16_OP64};
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.color_P2_5};
    }
  }
  &:active {
    background: ${(props) => props.theme.color_S1_3_Lmin8};
  }
`
export const MatchTrackerItem = ({ active, onClick, text }) => (
  <MatchTrackerItemWrapper active={active} onClick={onClick}>
    <F14 uppercase={1}>{text}</F14>
  </MatchTrackerItemWrapper>
)

export const MatchTrackerContentWrapper = styled.div`
  margin-top: 8px;
  height: 244px;
  background: ${(props) =>
    props.noLiveTv ? props.theme.color_S3_1 : props.theme.color_P4_2};
  color: ${(props) =>
    props.noLiveTv ? props.theme.color_P4_2 : props.theme.color_S3_1};
  ${ScaledContainer} {
    z-index: 1;
  }
  ${FlexCenter} {
    height: 100%;
  }
`
export const MatchTrackerContent = ({ text, noLiveTv }) => (
  <MatchTrackerContentWrapper noLiveTv={noLiveTv}>
    <FlexCenter>{text}</FlexCenter>
  </MatchTrackerContentWrapper>
)
export const BetRadarItemContainer = styled(FlexScrollWrapper)`
  position: relative;
  width: 100%;
  height: 56px;
  background: ${(props) => props.theme.color_P4_2};
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.color_A4};
`

export const BetRadarIconWrapper = styled(FlexCenter)`
  min-width: 48px;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      g {
        fill: ${(props) => props.theme.color_A3_7};
      }
    }
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
    height: 48px;
    margin-top: 4px;
  }
  g {
    fill: ${(props) =>
      props.disabled
        ? props.theme.color_P4_OP64
        : props.active
        ? props.theme.color_A3
        : props.theme.color_P3_12_OP64};
  }
`
export const BetRadarIcon = ({ icon, switchTab, active }) => (
  <BetRadarIconWrapper onClick={switchTab} active={active}>
    {icon}
  </BetRadarIconWrapper>
)
export const BetRadarChevronUp = styled(FlexCenter)`
  position: absolute;
  right: 0;
  height: 56px;
  width: 48px;
  /* z-index: 9; */
  background: ${(props) => props.theme.color_P4_2};
  border-left: 1px solid ${(props) => props.theme.color_A4};
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
    width: 32px;
    height: 32px;
    right: 24px;
    top: 28px;
    transform: translate3d(50%, -50%, 0);
  }
`

//----------- Baseball Icons -----------//

export const IconBaseballBase = styled.div`
  position: relative;
  height: 5.5px;
  width: 5.5px;
  margin-left: 6px;
  margin-top: -6px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  background-color: ${(props) => props.theme.color_S7_OP56};
  /* Base_1 */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 7px;
    height: 5.5px;
    width: 5.5px;
    background-color: ${(props) => props.theme.color_S7_OP56};
  }
  /* Base_3 */
  &:after {
    content: '';
    position: absolute;
    top: 7px;
    height: 5.5px;
    width: 5.5px;
    background-color: ${(props) => props.theme.color_S7_OP56};
  }
`
export const IconBaseballBase_1 = styled(IconBaseballBase)`
  &:before {
    background-color: ${(props) => props.theme.color_A3};
  }
`
export const IconBaseballBase_1_2 = styled(IconBaseballBase)`
  background-color: ${(props) => props.theme.color_A3};
  &:before {
    background-color: ${(props) => props.theme.color_A3};
  }
`
export const IconBaseballBase_1_2_3 = styled(IconBaseballBase)`
  background-color: ${(props) => props.theme.color_A3};
  &:before {
    background-color: ${(props) => props.theme.color_A3};
  }
  &:after {
    background-color: ${(props) => props.theme.color_A3};
  }
`
export const IconBaseballBase_1_3 = styled(IconBaseballBase)`
  &:before {
    background-color: ${(props) => props.theme.color_A3};
  }
  &:after {
    background-color: ${(props) => props.theme.color_A3};
  }
`
export const IconBaseballBase_2 = styled(IconBaseballBase)`
  background-color: ${(props) => props.theme.color_A3};
`
export const IconBaseballBase_2_3 = styled(IconBaseballBase)`
  background-color: ${(props) => props.theme.color_A3};
  &:after {
    background-color: ${(props) => props.theme.color_A3};
  }
`
export const IconBaseballBase_3 = styled(IconBaseballBase)`
  &:after {
    background-color: ${(props) => props.theme.color_A3};
  }
`

//----------- Unsupported -----------//

export const UnsupportedIcon = styled.div`
  margin: 0 auto;
  background: ${(props) =>
    props.img
      ? `url(${props.img}) center center no-repeat;`
      : props.theme.color_S9};
  background-size: cover;
  width: 158px;
  height: 125px;
`
export const UnsupportedContentWrapper = styled(RelativeWrapper)`
  margin-bottom: 32px;
  ${F12} {
    color: ${(props) => props.theme.color_P3_OP56};
    text-align: center;
    padding: 0 16px;
  }
  ${F24} {
    color: ${(props) => props.theme.color_P3_14_OP56};

    padding-top: 24px;
    padding-bottom: 16px;
    text-align: center;
  }
`
export const UnsupportedContentPreviousWrapper = styled(RelativeWrapper)`
  ${F12} {
    color: ${(props) => props.theme.color_A12_1};

    text-align: center;
    line-height: 40px;
    cursor: pointer;
    &:active {
      color: ${(props) => props.theme.color_A12_1_Lmin8};
    }
  }
`
export const UnsupportedContentIconWrapper = styled(FlexCenter)`
  margin-bottom: 16px;
  svg {
    margin: 0 12px;
    fill: ${(props) => props.theme.color_P3_11_OP64};

    cursor: pointer;
  }
`
export const UnsupportedContentPopup = styled.div`
  width: 640px;
  /* min-height: 480px; */
  min-height: 448px;
  max-height: 640px;
  background: ${(props) => props.theme.color_P4_2};
  border-radius: 4px;
  padding: 0 16px 16px;
  ${media.desktop`width:calc(100vw - 32px); height: auto;`}
  @media (max-width: 480px) and (orientation: landscape) {
    height: 100vh;
    overflow-y: scroll;
  }
`
export const UnsupportedContentSubmitButton = styled(FlexCenter)`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  margin: 16px 0;
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.color_P4_10};

  background: ${(props) => props.theme.color_A1_2};

  &:active {
    background: ${(props) => props.theme.color_A1_2_Lmin8};
  }
`
export const UnsupportedContentSelectionWrapper = styled(FlexLeft)`
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP64};
    margin-left: 8px;
  }
`
export const UnsupportedGreyOut = styled(GreyOut)`
  z-index: 99;
`
export const UnsupportedContentScrollWrapper = styled(ContentScrollWrapper)`
  /* max-height: 368px; */
  max-height: 328px;
`
export const Unsupported = ({
  img,
  title,
  text,
  text2,
  onClick,
  goBackText,
  chrome,
  safari,
  firefox,
  uc,
  submitText,
  submit,
  selected,
  toggleSelected,
  selectedText,
  toggleChromeAlert,
  toggleSafariAlert,
  toggleFirefoxAlert,
  toggleUcAlert,
  isMobile,
}) => (
  <>
    {isMobile ? (
      <>
        <UnsupportedContentScrollWrapper>
          <UnsupportedIcon img={img} />
          <UnsupportedContentWrapper>
            <F24 bold={1} uppercase={1}>
              {title}
            </F24>
            <F12>{text}</F12>
            <br />
            <F12>{text2}</F12>
          </UnsupportedContentWrapper>
          {(chrome || safari || firefox || uc) && (
            <UnsupportedContentIconWrapper>
              {chrome && (
                <div onClick={toggleChromeAlert}>
                  <Icons.browser_chrome />
                </div>
              )}
              {safari && (
                <div onClick={toggleSafariAlert}>
                  <Icons.browser_safari />
                </div>
              )}
              {firefox && (
                <div onClick={toggleFirefoxAlert}>
                  <Icons.browser_firefox />
                </div>
              )}
              {uc && (
                <div onClick={toggleUcAlert}>
                  <Icons.browser_uc />
                </div>
              )}
            </UnsupportedContentIconWrapper>
          )}
        </UnsupportedContentScrollWrapper>
        {goBackText && (
          <UnsupportedContentPreviousWrapper onClick={onClick}>
            <F12>{goBackText}</F12>
          </UnsupportedContentPreviousWrapper>
        )}
        {submitText && (
          <UnsupportedContentSubmitButton onClick={submit}>
            <F12 uppercase={1}>{submitText}</F12>
          </UnsupportedContentSubmitButton>
        )}
        {selectedText && (
          <UnsupportedContentSelectionWrapper>
            <IconWrapper24>
              <Tickbox onClick={toggleSelected} selected={selected} />
            </IconWrapper24>
            <F14>{selectedText}</F14>
          </UnsupportedContentSelectionWrapper>
        )}
      </>
    ) : (
      <>
        <UnsupportedIcon img={img} />
        <UnsupportedContentWrapper>
          <F24 bold={1} uppercase={1}>
            {title}
          </F24>
          <F12>{text}</F12>
          <br />
          <F12>{text2}</F12>
        </UnsupportedContentWrapper>
        {(chrome || safari || firefox || uc) && (
          <UnsupportedContentIconWrapper>
            {chrome && (
              <div onClick={toggleChromeAlert}>
                <Icons.browser_chrome />
              </div>
            )}
            {safari && (
              <div onClick={toggleSafariAlert}>
                <Icons.browser_safari />
              </div>
            )}
            {firefox && (
              <div onClick={toggleFirefoxAlert}>
                <Icons.browser_firefox />
              </div>
            )}
            {uc && (
              <div onClick={toggleUcAlert}>
                <Icons.browser_uc />
              </div>
            )}
          </UnsupportedContentIconWrapper>
        )}
        {goBackText && (
          <UnsupportedContentPreviousWrapper onClick={onClick}>
            <F12>{goBackText}</F12>
          </UnsupportedContentPreviousWrapper>
        )}
        {submitText && (
          <UnsupportedContentSubmitButton onClick={submit}>
            <F12 uppercase={1}>{submitText}</F12>
          </UnsupportedContentSubmitButton>
        )}
        {selectedText && (
          <UnsupportedContentSelectionWrapper>
            <IconWrapper24>
              <Tickbox onClick={toggleSelected} selected={selected} />
            </IconWrapper24>
            <F14>{selectedText}</F14>
          </UnsupportedContentSelectionWrapper>
        )}
      </>
    )}
  </>
)
//----------- Announcement -----------//
export const AnnouncementContainer = styled(FlexCenter)`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 98;
`
export const AnnouncementIframe = styled.iframe`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 98;
`
export const Announcement = ({ url }) => (
  <>
    <AnnouncementContainer>
      <AnnouncementIframe src={url} />
    </AnnouncementContainer>
  </>
)
export const FeaturesContainer = styled(FlexCenter)`
  width: 100%;
`
export const Features = ({ url }) => (
  <>
    <FeaturesContainer>
      <AnnouncementIframe src={url} />
    </FeaturesContainer>
  </>
)
//----------- WLB Logged In/My Accounts  -----------//
export const WlbHeaderWrapper = styled.div`
  ${FlexSpaceBetween(56)}
  width: 100%;
  background: ${(props) => props.theme.color_P1_Lplus4};
  padding-left: 16px;
  ${F12} {
    color: ${(props) => props.theme.color_P4_3};
    font-weight: bold;
    text-transform: uppercase;
  }
  ${IconWrapper48} {
    &:hover {
      cursor: pointer;
    }
    path {
      fill: ${(props) => (props.loggedIn ? null : props.theme.color_P4_1_OP64)};
    }
  }
  ${FlexRow} {
    align-items: center;
  }
  ${SelectContainer} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    opacity: ${(props) => (props.showList ? '1' : '0')};
  }
`
export const WlbLogoWrapper = styled(FlexLeft)`
  width: 120px;
  height: 40px;
  background: ${(props) => `url(${props.logoUrl}) no-repeat left center`};
`
export const WlbHeaderLogInButton = styled(FlexCenter)`
  width: 56px;
  height: 32px;
  background: ${(props) => props.theme.color_A9};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #36baab;
  }
  &:active {
    background: #268378;
  }
`
export const WlbHeader = ({
  loggedIn,
  icon,
  onLogInClick,
  onRightPanelClick,
  logoUrl,
  onFlagClick,
  onLogoClick,
  list = [],
  value,
  onChange,
}) => {
  return (
    <WlbHeaderWrapper loggedIn={loggedIn}>
      <WlbLogoWrapper logoUrl={logoUrl} onClick={onLogoClick} />
      {loggedIn ? (
        <FlexRow>
          <WlbHeaderLogInButton onClick={onLogInClick}>
            <F12>log in</F12>
          </WlbHeaderLogInButton>
          <RelativeWrapper>
            <IconWrapper48 onClick={onFlagClick}>{icon}</IconWrapper48>
            <SelectContainer>
              <SelectWrapper onChange={onChange}>
                <Option></Option>
                {list &&
                  list.length > 0 &&
                  list.map((value, index) => (
                    <Option value={value} key={index}>
                      {value}
                    </Option>
                  ))}
              </SelectWrapper>
            </SelectContainer>
          </RelativeWrapper>
        </FlexRow>
      ) : (
        <IconWrapper48 onClick={onRightPanelClick}>
          <Icons.User />
        </IconWrapper48>
      )}
    </WlbHeaderWrapper>
  )
}
export const WlbRightPanelPopUpTransition = styled(LeftPanelPopUpTransition)`
  height: 100%;
  top: 0;
  right: 0;
  left: unset;
  z-index: 1002;
  ${media.tablet`width:320px;`}
  ${FlexLeft} {
    padding-left: 0;
  }
  ${(props) =>
    props.show
      ? `transform: translate3d(0%,0,0);`
      : `transform: translate3d(100%,0,0);`};
  /* transition: width 3s ease;
  ${(props) => (props.show ? `width: 100%;` : `width: 0px;`)};  */
  ${media.tablet`width:320px;`}
`
export const LogOutButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 47px;
  padding: 4px 16px 4px 16px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.color_P3_13_OP64};
  margin: 16px;
  &:hover {
    background: ${(props) => props.theme.color_P3_1_OP4_1};
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
  ${F12} {
    font-weight: bold;
    color: ${(props) => props.theme.color_P3_13_OP64};
    text-transform: uppercase;
  }
`
export const LogOutButton = ({ text, onLogOutClick }) => (
  <LogOutButtonWrap onClick={onLogOutClick}>
    <F12>{text}</F12>
  </LogOutButtonWrap>
)
//----------- WLB My Accounts ItemPopup  -----------//
export const MenuPanelItemPopupWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 56px;
  width: 240px;
  height: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
  background-color: #ffffff;
  pointer-events: auto;
`
const WlbSettingsItemWrapper = styled(SettingsItemWrapper)`
  height: 40px;
  margin: 0;
  pointer-events: auto;
  ${F14} {
    color: ${(props) =>
      props.active ? props.theme.color_A3 : props.theme.color_P3_13_OP64};
    margin-left: 32px;
  }
`
const WlbRadioButtonLabel = styled(RadioButtonLabel)`
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
`
export const WlbRightPanelSettingsItem = ({
  text,
  value,
  checked,
  onChange,
  readOnly,
  active,
}) => (
  <WlbSettingsItemWrapper
    onClick={() => {
      onChange(value)
    }}
    active={active}
  >
    <RadioButton
      type="radio"
      value={value}
      checked={checked}
      readOnly={readOnly && 'readonly'}
    />
    <WlbRadioButtonLabel htmlFor="input" />
    <F14>{text}</F14>
  </WlbSettingsItemWrapper>
)

export const BalanceButtonWrapper = styled(CashoutButtonTextWrapper)`
  width: calc(100% - 32px);
  height: 48px;
  line-height: 48px;
  padding: 4px 16px;
  margin: 16px;
  background: ${(props) => props.theme.color_A9};
  color: ${(props) => props.theme.color_P4_3};
  text-align: center;
  font-weight: bold;
  &:hover {
    background: ${(props) => props.theme.color_A9_Lplus4};
  }
  &:active {
    background: ${(props) => props.theme.color_A9_Lmin8};
  }
`
export const BalanceButton = ({
  text,
  onBalanceButtonClick,
  genericLoading,
}) => (
  <BalanceButtonWrapper onClick={onBalanceButtonClick}>
    {genericLoading ? <GenericLoading obtPanel={1} /> : <F16>{text}</F16>}
  </BalanceButtonWrapper>
)
export const EventAnnouncementsWrapper = styled.div`
  width: 100%;
  padding: 16px 37px 0;
  ${media.tablet`padding: 16px;`} ${Separator1} {
    margin: 16px 0 0;
  }
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP64};
  }
`
export const EventAnnouncements = ({ title, text }) => (
  <EventAnnouncementsWrapper>
    <F14 bold>{title}</F14>
    <F14>{text}</F14>
    <Separator1 />
  </EventAnnouncementsWrapper>
)
//-------------------- FreeBet --------------------//

export const FreeBetTokenTitleWrapper = styled(FootballPriceBoostTitleWrapper)`
  height: 64px;
  padding: 8px 8px 8px 16px;
  ${F15} {
    color: ${(props) =>
      props.tokenUsed ? props.theme.color_P3_OP40 : props.theme.color_P3_4};
    ${Truncate(1)};
    word-break: break-all;
  }
`
export const FreeBetTokenCurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${(props) => (props.tokenUsed ? '16px' : null)};
  height: ${(props) => (props.tokenUsed ? '56px' : '24px')};
  ${IconWrapper48} {
    g {
      fill: ${(props) =>
        props.tokenUsed
          ? props.theme.color_P3_OP40
          : props.theme.color_P3_OP64};
    }
  }
  ${F14} {
    color: ${(props) => props.theme.color_A5_2};
  }
  ${F18} {
    color: ${(props) => props.theme.color_P3_OP40};
  }
  ${F22} {
    color: ${(props) => props.theme.color_P3_OP100};
  }
`
export const FreeBetTokenDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${(props) => (props.details ? '100px' : '80px')};
  padding: ${(props) =>
    props.tokenUsed
      ? '0 16px 16px'
      : props.details
      ? '16px 16px 24px'
      : '16px'};
  ${F14} {
    color: ${(props) => props.theme.color_P3_OP56};
  }
`
export const ExpiresText = styled.div`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: ${(props) => props.bold && 'bold'};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  color: ${(props) => props.theme.color_P3_OP64};
`
export const FreeBetUseButton = styled(FlexCenter)`
  width: 112px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.color_A1_2};
  border-radius: 3px;
  cursor: pointer;
  ${F12} {
    color: ${(props) => props.theme.color_A1_2};
  }
  &:hover {
    background: ${(props) => props.theme.color_P3_1_OP4_1};
  }
  &:active {
    background: ${(props) => props.theme.color_P3_1_OP8_1};
  }
`
export const FreeBetTokenWrapper = styled.div`
  ${(props) => props.tokenUsed && `background: ${props.theme.color_P3_OP4};`};
`
export const TokenInfoTextWrapper = styled.div`
  padding: ${(props) => (props.useFreeBet ? '16px 16px 0' : '16px')};
  ${F14} {
    color: ${(props) =>
      props.useFreeBet ? props.theme.color_P3_OP64 : props.theme.color_P3_OP40};
  }
`
export const ConditionsDetailsTextWrapper = styled(F14)`
  color: ${(props) =>
    props.clickable ? props.theme.color_A12_1 : props.theme.color_P3_OP64};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  padding-bottom: ${(props) => (props.clickable ? ' 16px' : '4px')};
  &:nth-last-child(1) {
    ${(props) => props.clickable && 'padding-bottom: 0;'};
  }
  @media (hover: hover) {
    &:hover {
      ${(props) =>
        props.clickable && `color: ${props.theme.color_A12_1_Lplus4};`};
    }
  }
  &:active {
    ${(props) => props.clickable && `color: ${props.theme.color_A12_1_Lmin8};`};
  }
`
export const ConditionsDetailsWrapper = styled.div`
  padding: 16px 16px 0;
  ${F12} {
    height: 20px;
    padding-bottom: 4px;
    color: ${(props) => props.theme.color_P3_OP64};
  }
`
export const FreeBetDefaultViewWrapper = styled(FlexCenterColumn)`
  width: 100%;
  height: 160px;
  padding: 20px 16px 36px;
  align-items: center;
  text-align: center;
  ${IconWrapper56} {
    padding: 8px;
    margin-bottom: 8px;
    g {
      fill: ${(props) => props.theme.color_P3_OP64};
    }
  }
  ${F12} {
    color: ${(props) => props.theme.color_P3_OP56};
  }
`
export const FreeBetToken = ({
  defaultViewText,
  freeBetTokenText,
  currency,
  activeTitle,
  activeText,
  expiresTitle,
  expiresText,
  buttonText,
  separator1,
  tokenUsed,
  tokenMoreThen30,
  details,
  issuedTitle,
  issuedText,
  FreeBetIdTitle,
  FreeBetIdText,
  onClick,
  onFreeBetsDetails,
  onFreeBetsUsePanel,
  onCompetitionsClick,
}) => {
  return (
    <>
      {defaultViewText ? (
        <FreeBetDefaultViewWrapper>
          <IconWrapper56>
            <Icons.No_freebets />
          </IconWrapper56>
          <F12 uppercase={1}>{defaultViewText}</F12>
        </FreeBetDefaultViewWrapper>
      ) : (
        <>
          <FreeBetTokenTitleWrapper tokenUsed={tokenUsed}>
            <Flex>
              <F15 bold={1} uppercase={1}>
                {freeBetTokenText}
              </F15>
            </Flex>
            {details ? null : (
              <IconWrapper32 onClick={onFreeBetsDetails}>
                <Information16 />
              </IconWrapper32>
            )}
          </FreeBetTokenTitleWrapper>
          <FreeBetTokenCurrencyWrapper tokenUsed={tokenUsed}>
            <FlexLeft>
              <IconWrapper48 onClick={onClick}>
                <Icons.Freebets />
              </IconWrapper48>
              {tokenUsed ? (
                <FlexLeftColumn>
                  <F18 bold={1} uppercase={1}>
                    {currency}
                  </F18>
                  <F14 bold={1} uppercase={1}>
                    {tokenUsed}
                  </F14>
                </FlexLeftColumn>
              ) : (
                <F22 bold={1} uppercase={1}>
                  {currency}
                </F22>
              )}
            </FlexLeft>
          </FreeBetTokenCurrencyWrapper>
          {activeTitle && (
            <FreeBetTokenDateWrapper details={details}>
              <Flex>
                <FlexLeftColumn>
                  {issuedTitle && (
                    <Flex>
                      <F14>{issuedTitle}</F14>
                      <F14>&nbsp;{issuedText}</F14>
                    </Flex>
                  )}
                  <Flex>
                    <F14>{activeTitle}</F14>
                    <F14>&nbsp;{activeText}</F14>
                  </Flex>
                  <Flex>
                    <F14>{expiresTitle}</F14>
                    <ExpiresText>{expiresText}</ExpiresText>
                  </Flex>
                  {FreeBetIdTitle && (
                    <Flex>
                      <F14>{FreeBetIdTitle}</F14>
                      <ExpiresText>&nbsp;{FreeBetIdText}</ExpiresText>
                    </Flex>
                  )}
                </FlexLeftColumn>
              </Flex>
              {buttonText && (
                <FreeBetUseButton onClick={onFreeBetsUsePanel}>
                  <F12 bold={1} uppercase={1}>
                    {buttonText}
                  </F12>
                </FreeBetUseButton>
              )}
            </FreeBetTokenDateWrapper>
          )}
          {separator1 && <Separator1 />}
          {tokenMoreThen30 && (
            <TokenInfoTextWrapper>
              <F14>{tokenMoreThen30}</F14>
            </TokenInfoTextWrapper>
          )}
        </>
      )}
    </>
  )
}
export const FreeBetConditions = ({ useFreeBetText, onClick, list = [] }) => {
  return (
    <>
      {useFreeBetText && (
        <TokenInfoTextWrapper useFreeBet={1}>
          <F14>{useFreeBetText}</F14>
        </TokenInfoTextWrapper>
      )}
      {list &&
        list.length > 0 &&
        list.map(
          (
            {
              conditionTitleText,
              conditionText,
              clickable,
              conditionList,
              ...rest
            },
            index
          ) => (
            <ConditionsDetailsWrapper key={'condition' + index}>
              <F12 uppercase={1}>{conditionTitleText}</F12>
              {conditionText && (
                <ConditionsDetailsTextWrapper bold={1} clickable={onClick}>
                  {conditionText}
                </ConditionsDetailsTextWrapper>
              )}
              {conditionList &&
                conditionList.length > 0 &&
                conditionList.map(
                  ({ conditionText, onClick, ...rest }, index) => (
                    <ConditionsDetailsTextWrapper
                      bold={1}
                      onClick={onClick}
                      clickable={onClick}
                      key={'conditionItem' + index}
                    >
                      {conditionText}
                    </ConditionsDetailsTextWrapper>
                  )
                )}
            </ConditionsDetailsWrapper>
          )
        )}
    </>
  )
}
export const SoonSportsSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 8px;
  margin: 16px 0;
  ${F18} {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
  ${Match} {
    color: ${(props) => props.theme.color_P3_2_OP64};
    border-left: 1px solid ${(props) => props.theme.color_P3_2_OP16};
  }
  ${HeaderBg} {
    border-radius: 4px;
  }
  ${media.tablet`
    margin: 16px;
    ${F14}, ${F18} {
      font-size: 1.2rem;
    }
    ${Match} {
      min-width: 36px;
    }
    ${IconWrapper48} {
      width: 32px;
      max-width: 32px;
      min-width: 32px;
      height: 32px;
      g {
        fill: ${(props) => props.theme.color_P3_2_OP64};
      }
    }
  `}
`
