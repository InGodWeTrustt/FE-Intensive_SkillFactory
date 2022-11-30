import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
        padding: 47px 0;
        background: rgba(66, 74, 87, 0.5);
`

const FooterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items:center;
`

const Footer = props => {
    return (
        <Wrapper>
            <FooterContainer {...props}/>
        </Wrapper>
    )
}

export default Footer