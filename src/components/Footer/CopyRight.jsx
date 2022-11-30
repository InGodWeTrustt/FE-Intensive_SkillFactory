import React from 'react'
import styled from 'styled-components'

const StyledCopyRight = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
    color: #fff;
`

const CopyRight = ({ text }) => {
    return (
        <StyledCopyRight>
            {text}
        </StyledCopyRight>
    )
}

export default CopyRight