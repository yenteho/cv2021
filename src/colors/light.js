import styled, { keyframes } from 'styled-components'
import {
  lighten,
  adjustHue,
  darken,
  complement,
  desaturate,
  getLuminance,
  grayscale,
  invert,
  mix,
  opacify,
  readableColor,
  rgba,
  saturate,
  setHue,
  setLightness,
  setSaturation,
  shade,
  tint,
  transparentize,
  toColorString,
} from 'polished'

// const primary = '#263238' //900
// const primary = '#0A365E' // > professional blue
// const primary ='#0A3331';// > professional Green (10,51,49)
// const primary = '#1F052C'// > luxury purple

// const primary = '#fbc02d' //900
// const primary = '#ad1457' //800
// const primary = '#0097a7' //700

// const primary ='#F37022' // > Hermes Orange
// const primary = '#DFC4AC' // > milk tea
// const primary = '#849E72' // > nature
// const primary = '#BCC8A2'
// const primary = '#F7DBE5' // > 櫻花粉
// const primary ='#EAB3BE' // > 櫻花粉2
// const primary = '#BFBDB4'
// const primary = '#80cbc4' //200
// const primary = "#7986cb"; //300

const primary = '#302E44' // > Luxury Purple

const color_White = '#ffffff'
const color_Black = '#000000'
const color_P1 = `${primary}`
const color_P1_hover = `${tint(0.2, `${primary}`)}`
const color_P1_active = `${mix(0.1, '#000', `${primary}`)}`
const color_P1_OP50 = `${transparentize(0.5, `${primary}`)}`
const color_P1_OP70 = `${transparentize(0.3, `${primary}`)}`
const color_P1_OP80 = `${transparentize(0.2, `${primary}`)}`
const color_P1_OP90 = `${transparentize(0.1, `${primary}`)}`
const color_P1_OP0 = `${transparentize(1, `${primary}`)}`
const color_P2 = `${darken(0.1, `${invert(`${primary}`)}`)}`
const color_B1 = `#504B69`
const color_B2 = `#BFB9C5`
const color_B2_OP50 = `${transparentize(0.5, `${color_B2}`)}`
const color_B2_OP70 = `${transparentize(0.3, `${color_B2}`)}`
const color_B2_hover = `${tint(0.2, `${color_B2}`)}`
const color_B2_active = `${mix(0.1, '#000', `${color_B2}`)}`
const color_B3 = `#27263A`
const color_T1 = `${readableColor(
  `${primary}`,
  `${darken(0.4, `${primary}`)}`,
  `${tint(0.8, `${primary}`)}`,
  false
)}`
const color_T1_hover = `${tint(1.0, `${primary}`)}`
const color_T1_active = `${tint(1.0, `${primary}`)}`
const color_T2 = `${primary}`
const color_T2_hover = `${mix(0.2, '#000', `${primary}`)}`
const color_T2_active = `${mix(0.5, '#000', `${primary}`)}`
const color_T2s = `${tint(0.4, `${color_T2}`)}`
const color_T2s_hover = `${mix(0.2, '#000', `${color_T2s}`)}`
const color_T2s_active = `${mix(0.5, '#000', `${color_T2s}`)}`
const color_TH = `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`
const color_TH_hover = `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`
const color_TH_active = `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`
const color_Shadow = `${readableColor(
  `${primary}`,
  `${mix(0.8, `${primary}`, '#000')}`,
  `rgba(0, 0, 0, 0.25)`,
  false
)}`
const color_GreyOut = `rgba(0, 0, 0, 0.6)`
// const color_T1 = `${readableColor(
//   `${primary}`,
//   `${darken(0.4, `${primary}`)}`,
//   `${tint(0.8, `${primary}`)}`,
//   false
// )}`
// const color_T1_hover = `${readableColor(
//   `${primary}`,
//   `${darken(0.6, `${primary}`)}`,
//   `${tint(1.0, `${primary}`)}`,
//   false
// )}`
// const color_T1_active = `${readableColor(
//   `${primary}`,
//   `${darken(0.6, `${primary}`)}`,
//   `${tint(1.0, `${primary}`)}`,
//   false
// )}`
// const color_T2 = `${readableColor(
//   `${primary}`,
//   `${invert(`${setHue('42', `${primary}`)}`)}`,
//   `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`,
//   false
// )}`

export default {
  color_T1,
  color_T1_hover,
  color_T1_active,
  color_T2,
  color_T2_hover,
  color_T2_active,
  color_T2s,
  color_T2s_hover,
  color_T2s_active,
  color_TH,
  color_TH_hover,
  color_TH_active,
  color_P1,
  color_P1_hover,
  color_P1_active,
  color_P1_OP50,
  color_P1_OP70,
  color_P1_OP80,
  color_P1_OP90,
  color_P1_OP0,
  color_P2,
  color_B1,
  color_B2_OP50,
  color_B2_OP70,
  color_B2,
  color_B2_hover,
  color_B2_active,
  color_B3,
  color_Shadow,
  color_GreyOut,
  color_White,
  color_Black,
}

// // desaturate
// const pDesaturate01 = `${desaturate('0.1', `${primary}`)}`
// // setSaturation
// const pSaturation05 = `${setSaturation(0.5, `${primary}`)}`
// const pSaturate08 = `${setSaturation(0.8, `${primary}`)}`
// // tint
// const pTint02 = `${tint(0.2, `${primary}`)}`
// const pTint04 = `${tint(0.4, `${primary}`)}`
// const pTint06 = `${tint(0.6, `${primary}`)}`
// const pTint08 = `${tint(0.8, `${primary}`)}`
// const pTint10 = `${tint(1.0, `${primary}`)}`
// // lighten
// const pLighten02 = `${lighten(0.1, `${primary}`)}`
// // darken
// const pDarken02 = `${darken(0.2, `${primary}`)}`
// const pDarken04 = `${darken(0.4, `${primary}`)}`
// const pDarken06 = `${darken(0.6, `${primary}`)}`
// const pDarken08 = `${darken(0.8, `${primary}`)}`
// //Transparent
// const pTransparent08 = `${transparentize(0.8, `${primary}`)}`

// // invert
// const pInvert = `${invert(`${primary}`)}`
// //Gray
// const pGrayscale = `${grayscale(`${primary}`)};`

// const secondary = `${setHue('42', `${primary}`)}`

// // Text
// const textLightBg = `${darken(0.4, `${primary}`)}`
// const textDarkBg = `${tint(0.6, `${primary}`)}`

// const textLightBgActive = `${invert(`${setHue('42', `${primary}`)}`)}`
// const textDarkBgActive = `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`
// const mixWhite20 = `${mix(0.2, '#fff', `${primary}`)}`
// const mixWhite80 = `${mix(0.8, '#fff', `${primary}`)}`
// const mixBlack5 = `${mix(0.05, '#000', `${primary}`)}`
// const mixBlack10 = `${mix(0.1, '#000', `${primary}`)}`
// const mixBlack60 = `${mix(0.6, '#000', `${primary}`)}`
// const mixBlack80 = `${mix(0.8, '#000', `${primary}`)}`
// const shadowLight = `${mix(0.8, `${primary}`, '#fff')}`
// const shadowDark = `${mix(0.8, `${primary}`, '#000')}`
