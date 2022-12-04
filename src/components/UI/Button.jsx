import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
        display: inline-block;
        text-transform: uppercase;
        border-radius: 50px;
        border: 1px solid black;
        background: ${({ primary }) => primary ? '#0096A7' : 'white'};
        font-size: ${({ size }) => size.default ? '16px' : '14px'};
        padding: ${({ padding }) => padding || 0};
        color: white;
        cursor:pointer;
        transition: background-color .5s;
        transition: color .5s;
        &:hover{
        background-color: white; 
        color: black;
        }
`
export const Button = props => {

        return (
                
                <StyledButton {...props} />
        )
}
