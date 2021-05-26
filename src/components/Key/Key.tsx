import React from 'react'
import { handleMousePlayEvents, handleMouseStopEvents } from 'src/PianoEngine'
import BlackKey from '../BlackKey/BlackKey'
import { StyledKey } from './KeyStyles'

interface props {
  keyTone: string
  keyName: string
  blackKeyTone?: string
  blackKeyName?: string
}

const Key: React.FC<props> = ({ keyName, keyTone, blackKeyName, blackKeyTone }) => {
  const handleMouseDownEvent = () => {
    handleMousePlayEvents(keyTone)
  }
  const handleMouseUpEvent = () => {
    handleMouseStopEvents()
  }
  return (
    <StyledKey onMouseDown={handleMouseDownEvent} onMouseUp={handleMouseUpEvent}>
      {blackKeyName && blackKeyTone && <BlackKey keyName={blackKeyName} keyTone={blackKeyTone} />}
      {keyName}
    </StyledKey>
  )
}

export default Key
