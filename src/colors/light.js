import styled, { keyframes } from "styled-components";
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
  toColorString
} from "polished";
const primary = '#1a237e'


const color_P1 =`${primary}`
const color_P1_Lmin8 =`rgba(41,41,41,1)`
const color_P1_OP0 =`rgba(61,61,61,0)`
const color_P1_Lplus4 =`rgba(71,71,71,1)`
const color_P2_1 =`rgba(255,146,0,1)`
const color_P2_2 =`rgba(255,146,0,1)`
const color_P2_3 =`rgba(255,146,0,1)`
const color_P2_4 =`rgba(255,146,0,1)`
const color_P2_4_Lplus42 =`rgba(255,237,214,1)`
const color_P2_5 =`rgba(255,146,0,1)`
const color_P3_1 =`rgba(0,0,0,1)`
const color_P3_1_OP56 =`rgba(0,0,0,0.56)`
const color_P3_1_OP64 =`rgba(0,0,0,0.64)`
const color_P3_1_OP16 =`rgba(0,0,0,0.16)`
const color_P3_2 =`rgba(0,0,0,1)`
const color_P3_2_OP40 =`rgba(0,0,0,0.40)`
const color_P3_2_OP56 =`rgba(0,0,0,0.56)`
const color_P3_2_OP64 =`rgba(0,0,0,0.64)`
const color_P3_2_OP16 =`rgba(0,0,0,0.16)`
const color_P3_3 =`rgba(0,0,0,1)`
const color_P3_4 =`rgba(0,0,0,1)`
const color_P3_4_OP64 =`rgba(0,0,0,0.64)`
const color_P3_4_OP56 =`rgba(0,0,0,0.56)`
const color_P3_4_OP40 =`rgba(0,0,0,0.40)`
const color_P3_4_OP24 =`rgba(0,0,0,0.24)`
const color_P3_5 =`rgba(0,0,0,1)`
const color_P3_5_OP32 =`rgba(0,0,0,0.32)`
const color_P3_5_OP24 =`rgba(0,0,0,0.24)`
const color_P3_5_OP16 =`rgba(0,0,0,0.16)`
const color_P3_5_OP64 =`rgba(0,0,0,0.64)`
const color_P3_6 =`rgba(0,0,0,1)`
const color_P3_6_OP56 =`rgba(0,0,0,0.56)`
const color_P3_6_OP64 =`rgba(0,0,0,0.64)`
const color_P3_7 =`rgba(0,0,0,1)`
const color_P3_7_OP56 =`rgba(0,0,0,0.54)`
const color_P3_8 =`rgba(0,0,0,1)`
const color_P3_8_OP56 =`rgba(0,0,0,0.54)`
const color_P3_9_OP64 =`rgba(0,0,0,0.64)`
const color_P3_9_OP32 =`rgba(0,0,0,0.32)`
const color_P3_9_OP24 =`rgba(0,0,0,0.24)`
const color_P3_10_OP64 =`rgba(0,0,0,0.64)`
const color_P3_11_OP64 =`rgba(0,0,0,0.64)`
const color_P3_11_OP56 =`rgba(0,0,0,0.56)`
const color_P3_11_OP40 =`rgba(0,0,0,0.40)`
const color_P3_12_OP64 =`rgba(0,0,0,0.64)`
const color_P3_13_OP64 =`rgba(0,0,0,0.64)`
const color_P3_14_OP56 =`rgba(0,0,0,0.56)`
const color_P3_15_OP56 =`rgba(0,0,0,0.56)`
const color_P3_15_OP64 =`rgba(0,0,0,0.64)`
const color_P3_16_OP40 =`rgba(0,0,0,0.40)`
const color_P3_16_OP64 =`rgba(0,0,0,0.64)`
const color_P3_17 =`rgba(0,0,0,1)`
const color_P3_17_OP56 =`rgba(0,0,0,0.56)`
const color_P3_17_OP64 =`rgba(0,0,0,0.64)`
const color_P3_17_OP16 =`rgba(0,0,0,0.16)`
const color_P3_18 =`rgba(0,0,0,1)`
const color_P3_19 =`rgba(0,0,0,1)`
const color_P3_20 =`rgba(0,0,0,1)`
const color_P3_21_OP64 =`rgba(0,0,0,0.64)`
const color_P3_23_OP56 =`rgba(0,0,0,0.56)`
const color_P3_24 =`rgba(0,0,0,1)`
const color_P3_25 =`rgba(0,0,0,1)`
const color_P3_22 =`rgba(0,0,0,1)`
const color_P3_OP56 =`rgba(0,0,0,0.56)`
const color_P3_22_OP64 =`rgba(0,0,0,0.64)`
const color_P3_22_OP56 =`rgba(0,0,0,0.56)`
const color_P3_22_OP40 =`rgba(0,0,0,0.40)`
const color_P3_22_OP32 =`rgba(0,0,0,0.32)`
const color_P3_22_OP24 =`rgba(0,0,0,0.24)`
const color_P3_22_OP16 =`rgba(0,0,0,0.16)`
const color_P3_22_OP4 =`rgba(0,0,0,0.04)`
const color_P3_1_OP4_1 =`rgba(0,0,0,0.04)`
const color_P3_1_OP4_2 =`rgba(0,0,0,0.04)`
const color_P3_1_OP8_1 =`rgba(0,0,0,0.08)`
const color_P3_1_OP8_2 =`rgba(0,0,0,0.08)`
const color_P4_1 =`rgba(255,255,255,1)`
const color_P4_1_OP64 =`rgba(255,255,255,0.64)`
const color_P4_1_OP56 =`rgba(255,255,255,0.56)`
const color_P4_1_OP24 =`rgba(255,255,255,0.24)`
const color_P4_3 =`rgba(255,255,255,1)`
const color_P4_5 =`rgba(255,255,255,1)`
const color_P4_6 =`rgba(255,255,255,1)`
const color_P4_7 =`rgba(255,255,255,1)`
const color_P4_7_OP56 =`rgba(255,255,255,0.56)`
const color_P4_8 =`rgba(255,255,255,1)`
const color_P4_8_OP56 =`rgba(255,255,255,0.56)`
const color_P4_9 =`rgba(255,255,255,1)`
const color_P4_10 =`rgba(255,255,255,1)`
const color_P4_11 =`rgba(255,255,255,1)`
const color_P4_12 =`rgba(255,255,255,1)`
const color_P4_13 =`rgba(255,255,255,1)`
const color_P4_14 =`rgba(255,255,255,1)`
const color_P4_15 =`rgba(255,255,255,1)`
const color_P4_15_OP64 =`rgba(255,255,255,0.64)`
const color_P4_16_OP64 =`rgba(255,255,255,0.64)`
const color_P4_17 =`rgba(255,255,255,1)`
const color_P4_17_OP64 =`rgba(255,255,255,0.64)`
const color_P4_18 =`rgba(255,255,255,1)`
const color_P4_19 =`rgba(255,255,255,1)`
const color_P4_20 =`rgba(255,255,255,1)`
const color_P4_21 =`rgba(255,255,255,1)`
const color_P4_22 =`rgba(255,255,255,1)`
const color_P4_23 =`rgba(255,255,255,1)`
const color_P4_26 =`rgba(255,255,255,1)`
const color_P4_27 =`rgba(255,255,255,1)`
const color_P4_28 =`rgba(255,255,255,1)`
const color_S1_1 =`rgba(82,82,82,1)`
const color_S1_1_OP0 =`rgba(82,82,82,0)`
const color_S1_1_Lmin8 =`rgba(61,61,61,1)`
const color_S1_1_Lplus4 =`rgba(92,92,92,1)`
const color_S1_2 =`rgba(82,82,82,1)`
const color_S1_2_OP0 =`rgba(82,82,82,0)`
const color_S1_2_Lmin8 =`rgba(61,61,61,1)`
const color_S1_2_Lplus4 =`rgba(92,92,92,1)`
const color_S1_3 =`rgba(82,82,82,1)`
const color_S1_3_OP0 =`rgba(82,82,82,0)`
const color_S1_3_Lmin8 =`rgba(61,61,61,1)`
const color_S3 =`rgba(122,122,122,1)`
const color_S3_Lmin8 =`rgba(102,102,102,1)`
const color_S3_Lplus4 =`rgba(133,133,133,1)`
const color_S3_1 =`rgba(122,122,122,1)`
const color_S4 =`rgba(237,237,237,1)`
const color_S4_OP32 =`rgba(237,237,237,0.32)`
const color_S4_Lmin8 =`rgba(217,217,217,1)`
const color_S4_Lplus4 =`rgba(247,247,247,1)`
const color_S4_2 =`rgba(237,237,237,1)`
const color_S4_2_Lmin8 =`rgba(217,217,217,1)`
const color_S4_2_Lplus4 =`rgba(247,247,247,1)`
const color_S4_3 =`rgba(237,237,237,1)`
const color_S4_3_Lplus4 =`rgba(247,247,247,1)`
const color_S4_3_Lmin8 =`rgba(217,217,217,1)`
const color_S4_4 =`rgba(237,237,237,1)`
const color_S5_2 =`rgba(69,69,69,1)`
const color_S5_2_Lmin8 =`rgba(48,48,48,1)`
const color_S5_2_Lplus4 =`rgba(79,79,79,1)`
const color_A1 =`rgba(51,153,122,1)`
const color_A1_Lmin8 =`rgba(41,122,98,1)`
const color_A1_Lplus4 =`rgba(56,168,135,1)`
const color_A1_2 =`rgba(51,153,122,1)`
const color_A1_2_Lmin8 =`rgba(41,122,98,1)`
const color_A1_2_Lplus4 =`rgba(56,168,135,1)`
const color_A1_3 =`rgba(51,153,122,1)`
const color_A1_3_Lmin8 =`rgba(41,122,98,1)`
const color_A1_3_Lplus4 =`rgba(56,168,135,1)`
const color_A1_4 =`rgba(51,153,122,1)`
const color_A1_5 =`rgba(51,153,122,1)`
const color_A1_6 =`rgba(51,153,122,1)`
const color_A1_7 =`rgba(51,153,122,1)`
const color_A1_9 =`rgba(51,153,122,1)`
const color_A2_1 =`rgba(61,184,147,1)`
const color_A2_2 =`rgba(61,184,147,1)`
const color_A3 =`rgba(184,104,0,1)`
const color_A3_OP56 =`rgba(184,104,0,0.56)`
const color_A3_Lmin8 =`rgba(143,81,0,1)`
const color_A3_3 =`rgba(184,104,0,1)`
const color_A3_4 =`rgba(184,104,0,1)`
const color_A3_5 =`rgba(184,104,0,1)`
const color_A3_6 =`rgba(184,104,0,1)`
const color_A3_7 =`rgba(184,104,0,1)`
const color_A3_8 =`rgba(184,104,0,1)`
const color_A3_9 =`rgba(184,104,0,1)`
const color_A3_10 =`rgba(184,104,0,1)`
const color_A3_11 =`rgba(184,104,0,1)`
const color_A3_12 =`rgba(184,104,0,1)`
const color_A3_12_Lmin8 =`rgba(143,81,0,1)`
const color_A3_12_Lplus4 =`rgba(204,116,0,1)`
const color_A5_1 =`rgba(231,101,101,1)`
const color_A5_4 =`rgba(231,101,101,1)`
const color_A6_1 =`rgba(0,161,219,1)`
const color_A6_1_Lmin8 =`rgba(0,131,179,1)`
const color_A6_1_Lplus4 =`rgba(0,176,240,1)`
const color_A6_2 =`rgba(0,161,219,1)`
const color_A6_2_Lmin8 =`rgba(0,131,179,1)`
const color_A6_2_Lplus4 =`rgba(0,176,240,1)`
const color_A6_3 =`rgba(0,161,219,1)`
const color_A6_5 =`rgba(0,161,219,1)`
const color_A6_5_Lplus4 =`rgba(0,176,240,1)`
const color_A7_1 =`rgba(206,54,54,1)`
const color_A7_1_Lmin8 =`rgba(177,43,43,1)`
const color_A7_1_Lplus8 =`rgba(214,87,87,1)`
const color_A7_3 =`rgba(206,54,54,1)`
const color_A7_3_Lmin8 =`rgba(177,43,43,1)`
const color_A7_3_Lplus4 =`rgba(210,70,70,1)`
const color_A7_6 =`rgba(206,54,54,1)`
const color_A8_1 =`rgba(209,240,231,1)`
const color_A9 =`rgba(173,99,0,1)`
const color_A9_Lmin8 =`rgba(133,75,0,1)`
const color_A9_Lplus4 =`rgba(194,110,0,1)`
const color_A12 =`rgba(0,123,168,1)`
const color_A12_Lmin8 =`rgba(0,94,128,1)`
const color_A12_Lplus4 =`rgba(0,138,189,1)`
const color_A12_1 =`rgba(0,123,168,1)`
const color_A12_1_Lmin8 =`rgba(0,94,128,1)`
const color_A12_1_Lplus4 =`rgba(0,138,189,1)`
const color_A14 =`rgba(237,237,237,1)`
const color_A11 =`rgba(250,250,250,1)`
const color_A11_Lmin8 =`rgba(230,230,230,1)`
const color_A11_Lplus4 =`rgba(255,255,255,1)`
const color_P3_OP100 =`rgba(0,0,0,1)`
const color_P3_OP16 =`rgba(0,0,0,0.16)`
const color_P3_OP24 =`rgba(0,0,0,0.24)`
const color_P3_OP64 =`rgba(0,0,0,0.64)`
const color_P3_OP72 =`rgba(0,0,0,0.72)`
const color_P3_OP72_1 =`rgba(0,0,0,0.72)`
const color_P3_OP32 =`rgba(0,0,0,0.32)`
const color_P3_OP40 =`rgba(0,0,0,0.4)`
const color_P3_OP4 =`rgba(0,0,0,0.04)`
const color_P4_2 =`rgba(255,255,255,1)`
const color_P4_2_OP4 =`rgba(255,255,255,0.04)`
const color_P4_2_OP0 =`rgba(255,255,255,0)`
const color_P4_4 =`rgba(255,255,255,1)`
const color_P4_4_OP56 =`rgba(255,255,255,0.56)`
const color_P4_24_OP64 =`rgba(255,255,255,0.64)`
const color_P4_24_OP56 =`rgba(255,255,255,0.56)`
const color_P4_24_OP24 =`rgba(255,255,255,0.24)`
const color_P4_29 =`rgba(255,255,255,1)`
const color_S2 =`rgba(250,249,245,1)`
const color_S4_1 =`rgba(237,237,237,1)`
const color_S5 =`rgba(69,69,69,1)`
const color_S5_1 =`rgba(69,69,69,1)`
const color_S5_Lmin8 =`rgba(48,48,48,1)`
const color_S5_Lplus4 =`rgba(79,79,79,1)`
const color_S6 =`rgba(216,216,216,1)`
const color_S6_1 =`rgba(216,216,216,1)`
const color_S8 =`rgba(153,153,153,1)`
const color_S7_OP56 =`rgba(128,128,128,0.56)`
const color_A1_1 =`rgba(51,153,122,1)`
const color_A3_1 =`rgba(184,104,0,1)`
const color_A3_1_Lmin8 =`rgba(132,74,1,1)`
const color_A3_1_Lplus4 =`rgba(205,116,1,1)`
const color_A3_2 =`rgba(184,104,0,1)`
const color_A4 =`rgba(230,230,230,1)`
const color_A5_2 =`rgba(231,101,101,1)`
const color_A5_3 =`rgba(231,101,101,1)`
const color_A7_2 =`rgba(206,54,54,1)`
const color_A7_4 =`rgba(206,54,54,1)`
const color_A8 =`rgba(209,240,231,1)`
const color_P4_25 =`rgba(255,255,255,1)`
const color_S2_1 =`rgba(250,249,245,1)`
const color_A1_8 =`rgba(51,153,122,1)`
const color_A1_8_OP64 =`rgba(51,153,122,0.64)`
const color_A3_13 =`rgba(184,104,0,1)`
const color_A4_1 =`rgba(230,230,230,1)`
const color_A5_5 =`rgba(231,101,101,1)`
const color_S6_2 =`rgba(216,216,216,1)`
const color_A6_4 =`rgba(0,161,219,1)`
const color_A6_4_Lplus4 =`rgba(5,189,255,1)`
const color_A7_5 =`rgba(206,54,54,1)`
const color_A8_2 =`rgba(209,240,231,1)`
const color_A13 =`rgba(255,255,255,1)`
const color_A13_Lmin8 =`rgba(235,235,235,1)`

export default {
color_P1,
color_P1_Lmin8,
color_P1_OP0,
color_P1_Lplus4,
color_P2_1,
color_P2_2,
color_P2_3,
color_P2_4,
color_P2_4_Lplus42,
color_P2_5,
color_P3_1,
color_P3_1_OP56,
color_P3_1_OP64,
color_P3_1_OP16,
color_P3_2,
color_P3_2_OP40,
color_P3_2_OP56,
color_P3_2_OP64,
color_P3_2_OP16,
color_P3_3,
color_P3_4,
color_P3_4_OP64,
color_P3_4_OP56,
color_P3_4_OP40,
color_P3_4_OP24,
color_P3_5,
color_P3_5_OP32,
color_P3_5_OP24,
color_P3_5_OP16,
color_P3_5_OP64,
color_P3_6,
color_P3_6_OP56,
color_P3_6_OP64,
color_P3_7,
color_P3_7_OP56,
color_P3_8,
color_P3_8_OP56,
color_P3_9_OP64,
color_P3_9_OP32,
color_P3_9_OP24,
color_P3_10_OP64,
color_P3_11_OP64,
color_P3_11_OP56,
color_P3_11_OP40,
color_P3_12_OP64,
color_P3_13_OP64,
color_P3_14_OP56,
color_P3_15_OP56,
color_P3_15_OP64,
color_P3_16_OP40,
color_P3_16_OP64,
color_P3_17,
color_P3_17_OP56,
color_P3_17_OP64,
color_P3_17_OP16,
color_P3_18,
color_P3_19,
color_P3_20,
color_P3_21_OP64,
color_P3_23_OP56,
color_P3_24,
color_P3_25,
color_P3_22,
color_P3_OP56,
color_P3_22_OP64,
color_P3_22_OP56,
color_P3_22_OP40,
color_P3_22_OP32,
color_P3_22_OP24,
color_P3_22_OP16,
color_P3_22_OP4,
color_P3_1_OP4_1,
color_P3_1_OP4_2,
color_P3_1_OP8_1,
color_P3_1_OP8_2,
color_P4_1,
color_P4_1_OP64,
color_P4_1_OP56,
color_P4_1_OP24,
color_P4_3,
color_P4_5,
color_P4_6,
color_P4_7,
color_P4_7_OP56,
color_P4_8,
color_P4_8_OP56,
color_P4_9,
color_P4_10,
color_P4_11,
color_P4_12,
color_P4_13,
color_P4_14,
color_P4_15,
color_P4_15_OP64,
color_P4_16_OP64,
color_P4_17,
color_P4_17_OP64,
color_P4_18,
color_P4_19,
color_P4_20,
color_P4_21,
color_P4_22,
color_P4_23,
color_P4_26,
color_P4_27,
color_P4_28,
color_S1_1,
color_S1_1_OP0,
color_S1_1_Lmin8,
color_S1_1_Lplus4,
color_S1_2,
color_S1_2_OP0,
color_S1_2_Lmin8,
color_S1_2_Lplus4,
color_S1_3,
color_S1_3_OP0,
color_S1_3_Lmin8,
color_S3,
color_S3_Lmin8,
color_S3_Lplus4,
color_S3_1,
color_S4,
color_S4_OP32,
color_S4_Lmin8,
color_S4_Lplus4,
color_S4_2,
color_S4_2_Lmin8,
color_S4_2_Lplus4,
color_S4_3,
color_S4_3_Lplus4,
color_S4_3_Lmin8,
color_S4_4,
color_S5_2,
color_S5_2_Lmin8,
color_S5_2_Lplus4,
color_A1,
color_A1_Lmin8,
color_A1_Lplus4,
color_A1_2,
color_A1_2_Lmin8,
color_A1_2_Lplus4,
color_A1_3,
color_A1_3_Lmin8,
color_A1_3_Lplus4,
color_A1_4,
color_A1_5,
color_A1_6,
color_A1_7,
color_A1_9,
color_A2_1,
color_A2_2,
color_A3,
color_A3_OP56,
color_A3_Lmin8,
color_A3_3,
color_A3_4,
color_A3_5,
color_A3_6,
color_A3_7,
color_A3_8,
color_A3_9,
color_A3_10,
color_A3_11,
color_A3_12,
color_A3_12_Lmin8,
color_A3_12_Lplus4,
color_A5_1,
color_A5_4,
color_A6_1,
color_A6_1_Lmin8,
color_A6_1_Lplus4,
color_A6_2,
color_A6_2_Lmin8,
color_A6_2_Lplus4,
color_A6_3,
color_A6_5,
color_A6_5_Lplus4,
color_A7_1,
color_A7_1_Lmin8,
color_A7_1_Lplus8,
color_A7_3,
color_A7_3_Lmin8,
color_A7_3_Lplus4,
color_A7_6,
color_A8_1,
color_A9,
color_A9_Lmin8,
color_A9_Lplus4,
color_A12,
color_A12_Lmin8,
color_A12_Lplus4,
color_A12_1,
color_A12_1_Lmin8,
color_A12_1_Lplus4,
color_A14,
color_A11,
color_A11_Lmin8,
color_A11_Lplus4,
color_P3_OP100,
color_P3_OP16,
color_P3_OP24,
color_P3_OP64,
color_P3_OP72,
color_P3_OP72_1,
color_P3_OP32,
color_P3_OP40,
color_P3_OP4,
color_P4_2,
color_P4_2_OP4,
color_P4_2_OP0,
color_P4_4,
color_P4_4_OP56,
color_P4_24_OP64,
color_P4_24_OP56,
color_P4_24_OP24,
color_P4_29,
color_S2,
color_S4_1,
color_S5,
color_S5_1,
color_S5_Lmin8,
color_S5_Lplus4,
color_S6,
color_S6_1,
color_S8,
color_S7_OP56,
color_A1_1,
color_A3_1,
color_A3_1_Lmin8,
color_A3_1_Lplus4,
color_A3_2,
color_A4,
color_A5_2,
color_A5_3,
color_A7_2,
color_A7_4,
color_A8,
color_P4_25,
color_S2_1,
color_A1_8,
color_A1_8_OP64,
color_A3_13,
color_A4_1,
color_A5_5,
color_S6_2,
color_A6_4,
color_A6_4_Lplus4,
color_A7_5,
color_A8_2,
color_A13,
color_A13_Lmin8,
}