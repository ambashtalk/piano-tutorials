import React from 'react'
import { handleMousePlayEvents, handleMouseStopEvents } from 'src/PianoEngine'
import { StlyedBlackKey } from './BlackKeyStyles'

interface props {
  keyName: string
  keyTone: string
}

const BlackKey: React.FC<props> = ({ keyName, keyTone }) => {
  const handleMouseDownEvent = () => {
    handleMousePlayEvents(keyTone)
  }
  const handleMouseUpEvent = () => {
    handleMouseStopEvents()
  }
  return (
    <StlyedBlackKey data-note={keyTone} onMouseDown={handleMouseDownEvent} onMouseUp={handleMouseUpEvent}>
      {keyName}
    </StlyedBlackKey>
  )
}

export default BlackKey
