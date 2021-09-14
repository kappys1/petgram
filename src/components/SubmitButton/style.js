import styled from 'styled-components'

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
