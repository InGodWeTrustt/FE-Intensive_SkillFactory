import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { Logo } from './UI/Logo'
import { Menu } from './Menu'

const StyledHeader = styled.header`
    background-color: #424A57;
    padding: 36px 100px;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Container justifyContent="space-between" maxw="1240px">
                <Logo />
                <Menu />
            </Container>
        </StyledHeader>
    )
}
