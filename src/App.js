import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
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
      <Footer/>
    </>
  )
}

export default App;
