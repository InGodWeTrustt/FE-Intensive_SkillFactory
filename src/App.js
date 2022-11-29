import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

const Global = createGlobalStyle`
*{
  box-sizing: border-box;
}

body{
  font-family: 'Montserrat';
}

a{
  text-decoration: none;
  color: white;
}
`

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <MainContent />
    </>
  )
}

export default App;
