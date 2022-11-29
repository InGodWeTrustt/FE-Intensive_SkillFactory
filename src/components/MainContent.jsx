import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { BlockInfo } from './BlockInfo'
import Image from './UI/Image'
import image1 from '../images/image1.jpg'

const Wrapper = styled.div`
    display: flex;
 `

export const MainContent = () => {
    return (
        <Wrapper>
            <Container padding="100px">
                <Image src={image1} w="590px" h="450px" alt="Разработано 2000+ приложений" />
                <BlockInfo />
            </Container>
        </Wrapper>
    )
}
