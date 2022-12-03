import React, { useState } from 'react'
import styled from 'styled-components'
import { BlockInfo } from '../BlockInfo'
import Container from '../Container'
import Image from '../UI/Image'
import Dot from './Dot'


const Slider = ({ data }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const changeSlide = ({ target }) => {
    const slideIdx = target.getAttribute('data-slideIdx')
    setActiveSlideIndex(slideIdx)
  };

  const { title, description, src } = data[activeSlideIndex]

  return (
    <Container maxw="1240px">
      <Image src={src} w="590px" h="450px" alt={title} />
      <BlockInfo title={title} description={description} />
      <Dot
        list={data}
        activeSlideIdx = {activeSlideIndex}
        changeSlide={changeSlide}
      />
    </Container>
  )
}

export default Slider