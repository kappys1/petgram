import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { breakpoints } from '../../styles/breakpoints'

export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  margin-bottom: 1rem;
  padding-left: 1rem;
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left:0;
    margin: 0 auto;
    max-width: ${breakpoints.tablet};
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    ${fadeIn({ time: '.5s' })}
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
