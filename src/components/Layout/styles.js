import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'
export const Div = styled.div`
  padding: 16px;
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  padding: 0 .5rem;
  padding-bottom: .5rem;
  
`
export const SectionOut = styled.section`
  width: 100%;
  max-width: ${breakpoints.tablet};
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${breakpoints.tablet}){
    padding: 0px .5em;
  }

  & div {
    width: 100%;
    max-width: 350px;
    height: 100%;
    max-height: 450px;
  }
`
export const SectionInApp = styled.section`
  margin: 0 auto;
  height: 100%;
  width: 100%;
`
