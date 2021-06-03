import React, { MouseEvent } from 'react'
import { handleMousePlayEvents, handleMouseStopEvents } from 'src/utils/PianoEngine'
import { StlyedBlackKey } from './BlackKeyStyles'

interface props {
  keyName: string
  keyTone: string
}

const BlackKey: React.FC<props> = ({ keyName, keyTone }) => {
  const handleMouseDownEvent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    handleMousePlayEvents(keyTone)
  }
  const handleMouseUpEvent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    handleMouseStopEvents(keyTone)
  }
  return (
    <StlyedBlackKey data-note={keyTone} onMouseDown={handleMouseDownEvent} onMouseUp={handleMouseUpEvent}>
      {keyName}
    </StlyedBlackKey>
  )
}

export default BlackKey
