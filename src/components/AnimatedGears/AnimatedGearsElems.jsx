import styled, {keyframes} from 'styled-components'

import GearImage from '../../images/smallGear.png'

const Rotate = keyframes`
  0%{
    transform: rotate(0deg)
  }
  25%{
    transform: rotate(90deg)
  }
  50%{
    transform: rotate(180deg)
  }
  75%{
    transform: rotate(270deg)
  }
  100%{
    transform: rotate(360deg)
  }
`

const InvertRotate = keyframes`
  0%{
    transform: rotate(360deg)
  }
  25%{
    transform: rotate(270deg)
  }
  50%{
    transform: rotate(180deg)
  }
  75%{
    transform: rotate(90deg)
  }
  100%{
    transform: rotate(0deg)
  }
`

export const Gear = styled.img.attrs({
  src:GearImage
})`

  transform: rotate(0deg);

  animation-name: ${Rotate};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

export const InvertGear = styled.img.attrs({
  src:GearImage
})`

  transform: rotate(0deg);

  animation-name: ${InvertRotate};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`