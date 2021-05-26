import * as Tone from 'tone'

// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth()
// Set the tone to sine
synth.oscillator.type = 'sine'
// connect it to the master output (your speakers)
synth.toDestination()

Tone.start()

const handleKeyStopEvents = (keyName: string) => {
  switch (keyName) {
    case 'd':
    case 'r':
    case 'f':
    case 't':
    case 'g':
    case 'h':
    case 'u':
    case 'j':
    case 'i':
    case 'k':
    case 'o':
    case 'l':
      synth.triggerRelease()
  }
}

const handleKeyPlayEvents = (keyName: string) => {
  switch (keyName) {
    case 'd':
      return synth.triggerAttack('C4')
    case 'r':
      return synth.triggerAttack('C#4')
    case 'f':
      return synth.triggerAttack('D4')
    case 't':
      return synth.triggerAttack('D#4')
    case 'g':
      return synth.triggerAttack('E4')
    case 'h':
      return synth.triggerAttack('F4')
    case 'u':
      return synth.triggerAttack('F#4')
    case 'j':
      return synth.triggerAttack('G4')
    case 'i':
      return synth.triggerAttack('G#4')
    case 'k':
      return synth.triggerAttack('A4')
    case 'o':
      return synth.triggerAttack('A#4')
    case 'l':
      return synth.triggerAttack('B4')
    default:
      return
  }
}

const handleMousePlayEvents = (keyNote: string) => {
  synth.triggerAttack(keyNote)
}

const handleMouseStopEvents = () => {
  synth.triggerRelease()
}

export { handleKeyPlayEvents, handleKeyStopEvents, handleMousePlayEvents, handleMouseStopEvents }
