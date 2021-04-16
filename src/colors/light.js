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
// const primary = '#1a237e' //900
// const primary = '#263238' //900
// const primary = '#fbc02d' //900
// const primary = '#ad1457' //800
// const primary = '#0097a7' //700
// const primary = '#e53935' //600
// const primary ='#ffcdd2'; //100
const primary = '#80cbc4' //200
// const primary = "#7986cb"; //300
const secondary = `${setHue('42', `${primary}`)}`
const mixWhite = `${tint(0.2, `${primary}`)}`
const textLight = `${tint(0.6, `${primary}`)}`
const textDark = `${darken(0.2, `${primary}`)}`
const textLightActive = `${setLightness(0.6, `${setHue('42', `${primary}`)}`)}`
const textDarkActive = `${invert(`${setHue('42', `${primary}`)}`)}`
const bgLight = `${mix(0.25, `${primary}`, '#fff')};`
const bgDark = `${mix(0.25, `${primary}`, '#000')};`

const color_P1 = `${setSaturation(0.5, `${primary}`)}`
const color_P1_g = `${grayscale(`${primary}`)}`
const color_P1_t02 = `${tint(0.2, `${primary}`)}`
const color_P2 = `${darken(0.1, `${invert(`${primary}`)}`)}`
const color_T1 = `${readableColor(
  `${primary}`,
  `${textDark}`,
  `${textLight}`,
  false
)}`
const color_T2 = `${readableColor(
  `${primary}`,
  `${textDarkActive}`,
  `${textLightActive}`,
  false
)}`
const color_Bg = `${readableColor(
  `${primary}`,
  `${bgLight}`,
  `${bgDark}`,
  false
)}`

export default {
  color_T1,
  color_T2,
  color_P1,
  color_P1_g,
  color_P1_t02,
  color_P2,
  color_Bg,
}
