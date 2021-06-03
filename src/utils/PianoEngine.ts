import * as Tone from 'tone'
import keymap, { mappedKeys } from './KeyMapping'
// Tone.Synth is a basic synthesizer with a single oscillator

const synth = new Tone.PolySynth(Tone.Synth).toDestination()

Tone.start()

export interface pressedKeys {
  [key: string]: boolean
}

const handleKeyStopEvents = async (map: pressedKeys) => {
  Object.keys(map).forEach((keyName) => {
    if (!map[keyName] && mappedKeys.includes(keyName)) {
      synth.triggerRelease(keymap[keyName])
    }
  })
}

const handleKeyPlayEvents = async (map: pressedKeys) => {
  Object.keys(map).forEach((keyName) => {
    if (map[keyName] && mappedKeys.includes(keyName)) {
      synth.triggerAttack(keymap[keyName])
    }
  })
}

const handleMousePlayEvents = (keyNote: string) => {
  synth.triggerAttack(keyNote)
}

const handleMouseStopEvents = (keyNote: string) => {
  synth.triggerRelease(keyNote)
}

export { handleKeyPlayEvents, handleKeyStopEvents, handleMousePlayEvents, handleMouseStopEvents }
