import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { BlockInfo } from './BlockInfo'
import Image from './UI/Image'
import image1 from '../images/image1.jpg'

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    padding: 100px;
 `

export const MainContent = () => {
    return (
        <Wrapper>
            <Container>
                <Image src={image1} w="590px" h="450px" alt="Разработано 2000+ приложений" />
                <BlockInfo />
            </Container>
        </Wrapper>
    )
}
