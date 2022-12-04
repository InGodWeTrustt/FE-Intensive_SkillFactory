import React, { useState } from 'react'
import styled from 'styled-components'
import { BlockInfo } from '../BlockInfo'
import Container from '../Container'
import Image from '../UI/Image'
import Section from '../UI/Section'
import Dot from './Dot'


const StyledSection = styled(Section)`
  padding-top: 100px;
`

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Slider = ({ data }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const changeSlide = ({ target }) => {
    const slideIdx = target.getAttribute('data-slideIdx')
    setActiveSlideIndex(slideIdx)
  };

  const { title, description, src } = data[activeSlideIndex]

  return (
    <StyledSection>
      <Container>
        <StyledContent>
          <Image src={src} w="590px" h="450px" alt={title} mr="60px" />
          <BlockInfo title={title} description={description} />
          <Dot
            list={data}
            activeSlideIdx={activeSlideIndex}
            changeSlide={changeSlide}
          />
        </StyledContent>
      </Container>
    </StyledSection>
  )
}

export default Slider