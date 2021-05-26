import React, { useEffect } from 'react'
import Key from '../Key/Key'
import { handleKeyPlayEvents, handleKeyStopEvents } from '../../PianoEngine'
import { StyledPiano } from './PianoStyles'

const Piano: React.FC = () => {
  useEffect(() => {
    document.addEventListener('keydown', event => {
      handleKeyPlayEvents(event.key)
    })
    document.addEventListener('keyup', event => {
      handleKeyStopEvents(event.key)
    })
  }, [])

  return (
    <StyledPiano id="piano">
      <Key keyTone="C4" keyName="D" blackKeyTone="C#4" blackKeyName="R" />
      <Key keyTone="D4" keyName="F" blackKeyTone="D#4" blackKeyName="T" />
      <Key keyTone="E4" keyName="G" />
      <Key keyTone="F4" keyName="H" blackKeyTone="F#4" blackKeyName="U" />
      <Key keyTone="G4" keyName="J" blackKeyTone="G#4" blackKeyName="I" />
      <Key keyTone="A4" keyName="K" blackKeyTone="A#4" blackKeyName="O" />
      <Key keyTone="B4" keyName="L" />
    </StyledPiano>
  )
}

export default Piano
