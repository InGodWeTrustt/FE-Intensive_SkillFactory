import React from 'react'
import { createGlobalStyle } from 'styled-components';
import CopyRight from './components/Footer/CopyRight';
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
      <Footer>
        <CopyRight text="2000-2022 © System" />
      </Footer>
    </>
  )
}

export default App;
