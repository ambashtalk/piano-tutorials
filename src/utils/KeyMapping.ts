const keymap: { [key: string]: string } = {
  d: 'C4',
  r: 'C#4',
  f: 'D4',
  t: 'D#4',
  g: 'E4',
  h: 'F4',
  u: 'F#4',
  j: 'G4',
  i: 'G#4',
  k: 'A4',
  o: 'A#4',
  l: 'B4',
}

export const mappedKeys = Object.keys(keymap)

export const mappedValues = Object.values(keymap)

export default keymap
