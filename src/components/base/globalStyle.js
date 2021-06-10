import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
F13,
F12,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var,
b {
  font-weight: normal;
  font-style: normal;
}

abbr,
acronym {
  border: 0;
}
/* #sbkheader.collapsed{
  transform:translate3d(0,-48px,0);
  overflow-y: inherit;
}
#sbkheader.collapsed.In-Play #headerfilter{
  display:grid;
}
#sbkheader.In-Play.showfilter{
  overflow-y: inherit;
}
#sbkheader.In-Play.showfilter #headerfilter{
  display:grid;
} */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote {
  &:before,
  &:after {
    content: '';
    content: none;
  }
}

q {
  &:before,
  &:after {
    content: '';
    content: none;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption,
th {
  text-align: left;
}

textarea {
  resize: none;
}

button {
  padding: 0;
  border: none;
  background: none;
}


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-size-adjust: 100%;
  overflow-x: hidden;
}
body {
  line-height: 1;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  cursor: pointer;
}
`

export const GlobalStyle = createGlobalStyle`
  /* Customize website's scrollbar like Mac OS Not supports in Firefox and IE */
  * {
    -webkit-tap-highlight-color: transparent;
  }
  @media screen and (min-width: 1024px) {
    *{
      &::-webkit-scrollbar {
          background-color:#f0f0f0;
          width:8px;
          height: 0px;
      }
      &::-webkit-scrollbar-track {
          background-color:#f0f0f0;
      }
      &::-webkit-scrollbar-thumb {
          background-color:#babac0;
          border-radius: 6px;
      }
    }
    body {
      ${(props) =>
        props.iframe &&
        props.currentPage === 'Home' &&
        `body {overflow: scroll; margin-top:0!important;}`}
    }
  }
  @media (max-width: 1024px) {
    *{
      user-select: none;
    }
  }
  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica;
  }
  a {
    cursor: pointer;
  }
  section {
    padding: 24px;
    &.pay {
      padding-right: 0px;
    }
  }
  body {
    height: 100%;
    font-family: Helvetica;
    overscroll-behavior: none;
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
`
// padding-top: constant(safe-area-inset-top); /* iOS 11.0-iOS 11.1 */
// padding-top: env(safe-area-inset-top); /*iOS 11.2 */
// padding-bottom: constant(safe-area-inset-bottom); /* iOS 11.0-iOS 11.1 */
// padding-bottom: env(safe-area-inset-bottom); /*iOS 11.2 */

// font-family: 'HelveticaNeue', Helvetica, Arial, 'Lucida Grande', sans-serif;

// body {
//   height: 100%;
//   overflow: hidden;
// }
