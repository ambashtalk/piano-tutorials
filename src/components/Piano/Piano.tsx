import React, { useEffect } from 'react'
import Key from 'src/components/Key/Key'
import { handleKeyPlayEvents, handleKeyStopEvents } from 'src/utils/PianoEngine'
import { StyledPiano } from './PianoStyles'
import { pressedKeys } from '../../utils/PianoEngine'

const Piano: React.FC = () => {
  let map: pressedKeys = {}
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (!event.repeat && !map[event.key]) {
        map[event.key] = true
        handleKeyPlayEvents(map)
        console.log(event.key, 'down')
      }
    })

    document.addEventListener('keyup', (event) => {
      map[event.key] = false
      console.log(event.key, 'up')
      handleKeyStopEvents(map)
    })
  })

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
