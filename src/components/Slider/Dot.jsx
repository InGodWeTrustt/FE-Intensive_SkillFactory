import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display : flex;
    justify-content: center;
    margin: 44px auto;
`

const StyledDots = styled.div`
    margin: 0 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid #0896a7;
    background-color: ${ ({active}) => active ? '#0896a7' : ''};
    transition: background-color .15s;

    &:hover, &:active{
        background-color: #0896a7;
    }
`

const Dot = props => {
    const { list, changeSlide, activeSlideIdx } = props
    const dotsList = Array.from({ length: list.length }).map((_, idx) => {
       return (
        <StyledDots onClick={changeSlide} data-slideIdx={idx} active={+activeSlideIdx === idx}/>
       )
    })
    return (
        <Container>
                {dotsList}
        </Container>
    )
}


export default Dot