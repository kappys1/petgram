import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Article = styled.article`
  height: 70px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 238, 238);
  max-width: 350px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`
export const Link = styled(LinkRouter)`
  text-decoration: none;
  display: block;
  text-align: center;
  color: rgb(0, 0, 0);
  margin: 0px;
  font-size: 0.8em;  
  & b {
    color: rgba(var(--d69,0,149,246),1);
    font-weight: bold; 
  }
`
