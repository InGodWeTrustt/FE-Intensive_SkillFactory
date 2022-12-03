import React from 'react'
import styled from 'styled-components'
import CopyRight from './CopyRight'
import { Social } from './Social'

const Wrapper = styled.footer`
        padding: 47px 0;
        background: rgba(66, 74, 87, 0.5);
`

const FooterContainer = styled.div`
        display: flex;
        max-width: 1240px;
        margin: 0 auto;
        justify-content: space-between;
        align-items:center;
`

const Footer = () => {
    return (
        <Wrapper>
            <FooterContainer>
                <CopyRight text="2000-2022 © System" />
                <Social/>
            </FooterContainer>
        </Wrapper>
    )
}

export default Footer