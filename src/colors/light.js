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
const color_White = '#ffffff'
const color_Black = '#000000'
const primary = '#302E44' // > Luxury Purple

// // const primary = '#263238' //900
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

// desaturate
const pDesaturate01 = `${desaturate('0.1', `${primary}`)}`
// setSaturation
const pSaturation05 = `${setSaturation(0.5, `${primary}`)}`
const pSaturate08 = `${setSaturation(0.8, `${primary}`)}`
// tint
const pTint02 = `${tint(0.2, `${primary}`)}`
const pTint04 = `${tint(0.4, `${primary}`)}`
const pTint06 = `${tint(0.6, `${primary}`)}`
const pTint08 = `${tint(0.8, `${primary}`)}`
const pTint10 = `${tint(1.0, `${primary}`)}`
// lighten
const pLighten02 = `${lighten(0.1, `${primary}`)}`
// darken
const pDarken02 = `${darken(0.2, `${primary}`)}`
const pDarken04 = `${darken(0.4, `${primary}`)}`
const pDarken06 = `${darken(0.6, `${primary}`)}`
const pDarken08 = `${darken(0.8, `${primary}`)}`
//Transparent
const pTransparent08 = `${transparentize(0.8, `${primary}`)}`

// invert
const pInvert = `${invert(`${primary}`)}`
//Gray
const pGrayscale = `${grayscale(`${primary}`)};`

const secondary = `${setHue('42', `${primary}`)}`

// Text
const textLightBg = `${pDarken04}`
const textDarkBg = `${pTint06}`

const textLightBgActive = `${invert(`${setHue('42', `${primary}`)}`)}`
const textDarkBgActive = `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`

const mixWhite20 = `${mix(0.2, '#fff', `${primary}`)}`
const mixWhite80 = `${mix(0.8, '#fff', `${primary}`)}`
const mixBlack5 = `${mix(0.05, '#000', `${primary}`)}`
const mixBlack10 = `${mix(0.1, '#000', `${primary}`)}`
const mixBlack60 = `${mix(0.6, '#000', `${primary}`)}`
const mixBlack80 = `${mix(0.8, '#000', `${primary}`)}`
const shadowLight = `${mix(0.8, `${primary}`, '#fff')}`
const shadowDark = `${mix(0.8, `${primary}`, '#000')}`

const color_P1 = `${primary}`
const color_P1_hover = `${pTint02}`
const color_P1_active = `${mixBlack10}`
const color_P1_OP80 = `${transparentize(0.8, `${primary}`)}`
const color_P1_OP0 = `${transparentize(1, `${primary}`)}`
const color_P2 = `${darken(0.1, `${invert(`${primary}`)}`)}`
const color_Shadow = `${readableColor(
  `${primary}`,
  `${shadowDark}`,
  `${shadowLight}`,
  false
)}`
const color_T1 = `${readableColor(
  `${primary}`,
  `${pDarken04}`,
  `${pTint08}`,
  false
)}`
const color_T1_hover = `${readableColor(
  `${primary}`,
  `${pDarken06}`,
  `${pTint10}`,
  false
)}`
const color_T1_active = `${readableColor(
  `${primary}`,
  `${pDarken06}`,
  `${pTint10}`,
  false
)}`
const color_T2 = `${readableColor(
  `${primary}`,
  `${textLightBgActive}`,
  `${textDarkBgActive}`,
  false
)}`
const color_B1 = `${readableColor(
  `${primary}`,
  `${mixWhite80}`,
  `${mixBlack60}`,
  false
)}`
const color_B2 = `${readableColor(
  `${primary}`,
  `${pTint04}`,
  `${pDesaturate01}`,
  false
)}`

export default {
  color_T1,
  color_T1_hover,
  color_T1_active,
  color_T2,
  color_P1,
  color_P1_hover,
  color_P1_active,
  color_P1_OP80,
  color_P1_OP0,
  color_P2,
  color_B1,
  color_B2,
  color_Shadow,
  color_White,
  color_Black,
}
