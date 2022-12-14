import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import { Logo } from '../UI/Logo'
import { Menu } from '../Menu/Menu'

const StyledHeader = styled.header`
    background-color: #424A57;
    padding: 50px 0px;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Container justifyContent="space-between">
                <Logo />
                <Menu />
            </Container>
        </StyledHeader>
    )
}
