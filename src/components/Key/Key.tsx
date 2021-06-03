import React from 'react'
import { handleMousePlayEvents, handleMouseStopEvents } from 'src/utils/PianoEngine'
import BlackKey from 'src/components/BlackKey/BlackKey'
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
    handleMouseStopEvents(keyTone)
  }

  return (
    <StyledKey onMouseDown={handleMouseDownEvent} onMouseUp={handleMouseUpEvent} onMouseOut={handleMouseUpEvent}>
      {blackKeyName && blackKeyTone && <BlackKey keyName={blackKeyName} keyTone={blackKeyTone} />}
      {keyName}
    </StyledKey>
  )
}

export default Key
