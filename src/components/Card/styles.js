import styled from 'styled-components'

export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 1rem;
`

export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  height: 60px;
  padding: 14px 4px 14px 16px;
  
`

export const HeaderImage = styled.img`
    display: flex;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
`

export const NameAccount = styled.span`
    font-weight: bold;
    margin-left: .7rem;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const ContentDescription = styled.section`
padding: 8px;
`

export const Description = styled.span`
padding-left: 4px;
margin-top: 8px;
display: block;
line-height: 1.3
`
