import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a``


export const Link = ({children, ...props}) => {
    return (
        <a  {...props}>
            {children}
        </a>
    )
}
