import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { MdPlayArrow } from 'react-icons/md'
export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 1rem;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Video = styled.video`
  ${fadeIn({ time: '1s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;

`

export const PlayIcon = styled(MdPlayArrow)`
  cursor: pointer;
  height: 50px;
  width: 50px;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 50%;
  margin-top: -25px;
  color: white
`
