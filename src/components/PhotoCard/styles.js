import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Img = styled.img`
  ${fadeIn({ time: '1s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
