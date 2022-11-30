import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDots = styled.div`
margin: 0 8px;
width: 24px;
height: 24px;
border-radius: 50%;
cursor: pointer;
border: 4px solid #0896a7;
`

const renderDots = (list) => {
  const dots = Array.from({ length: list.length }).map(el => {
    <Dot key={el} />
  })

  return <StyledDots>{dots}</StyledDots>
}


const StyledSlider = styled.section.attrs(props => {
  id:
})`
margin-bottom: 84px;
`


const SliderWithTabs = ({ listSlider, listTabs }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const changeSlide = e => setActiveSlideIndex(e.target.dataset.slideIdx);
  const changeTab = e => setActiveSlideIndex(e.target.dataset.tabIdx);

  return (
    
  )
}

export default SliderWithTabs