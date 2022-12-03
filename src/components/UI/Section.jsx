import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section.attrs(props => ({
    id: props.id || '#'
}))`
 margin-bottom: 85px;
`
const Section = props => <StyledSection {...props}/>

export default Section