import React from 'react'

import {InputConainer} from './styles'
function Input({value, onChange}) {
  return (
    <InputConainer>
      <input value={value} onChange={onChange} />
    </InputConainer>
  )
}

export default Input
