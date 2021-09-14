import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}

to {
  filter: blur(0);
  opacity: 1;
}
`

const iconSpinFrames = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`

export const iconSpin = ({ time = '1s', type = 'infinite' } = {}) => css`
  animation: ${time} ${iconSpinFrames} ${type} linear;
`
