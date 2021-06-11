import { SiAdobephotoshop, SiAdobexd,SiAdobeillustrator } from 'react-icons/si'
import { AiOutlineSketch } from 'react-icons/ai'

export const skillsetData = [
  {
    icon: <AiOutlineSketch />,
    move: '50px',
    bounceDuration: '1500ms',
    ballSize: '90px',
    bounceHeight: 'calc(300px - 100vh)',
  },
  {
    icon: <SiAdobeillustrator />,
    move: '150px',
    bounceDuration: '800ms',
    ballSize: '60px',
  },
  {
    icon: <SiAdobephotoshop />,
    move: '200px',
    bounceDuration: '1200ms',
    ballSize: '120px',
  },
  {
    icon: <SiAdobexd />,
    move: '250px',
    bounceDuration: '800ms',
    ballSize: '60px',
  },
]
