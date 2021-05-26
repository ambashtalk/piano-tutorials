import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Piano from './components/Piano/Piano'

const App: React.FC = () => {
  const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  `

  return (
    <>
      <GlobalStyles />
      <Piano />
    </>
  )
}

export default App
