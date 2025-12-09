import React from 'react'

import {ButtonConainer} from './styles'
function Button({onClick}) {
  return (
    <ButtonConainer onClick={onClick}>
      Buscar
    </ButtonConainer>
  )
}

export default Button
