import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { MdPlayArrow, MdFullscreen } from 'react-icons/md'

export const Video = styled.video`
  ${fadeIn({ time: '1s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: contain;
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
  color: white;
`

export const FullScreenIcon = styled(MdFullscreen)`
  cursor: pointer;
  height: 36px;
  width: 36px ;
  position: absolute;
  z-index: 1;
  left: 90%;
  margin-left: -18px;
  top: 90%;
  margin-top: -18px;
  color: white;
  -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3));
  svg {
    
  }
 
`
