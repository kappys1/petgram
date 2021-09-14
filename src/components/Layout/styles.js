import styled from 'styled-components'

export const Div = styled.div`
  padding: 16px;
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  padding-bottom: 8px;
`
export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  padding-bottom: 4px;
`
export const SectionOut = styled.section`
  max-width: 1024px;
  margin: 0px auto;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px){
    margin: 0px 1em;
  }

  & div {
    width: 100%;
    max-width: 350px;
    height: 100%;
    max-height: 450px;
  }
`
export const SectionInApp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 750px;
`
