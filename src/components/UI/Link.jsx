import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  &:hover{
    color: green;
  }
`


export const Link = ({children, ...props}) => <StyledLink  {...props} children={children}/>

