import styled from 'styled-components'
import { ImSpinner8 } from 'react-icons/im'
import { iconSpin } from '../../styles/animations'

export const Button = styled.button`
background: #8d00ff;
border-radius: 3px;
color: #fff;
height: 32px;
display: block;
width: 50%;
text-align: center;
margin: 1em auto 0px;
&[disabled] {
  opacity: .3;
}
`

export const Spinner = styled(ImSpinner8)`
   ${iconSpin({ time: '1s' })}
`
