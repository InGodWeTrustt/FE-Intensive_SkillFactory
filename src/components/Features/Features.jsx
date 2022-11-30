import React from 'react'
import styled from 'styled-components'

const StyledFeaturesList = styled.div`
    display: flex;
    align-items: start;
`

const StyledFeaturesItem = styled.div`
    width: calc(100%/3);
    display: flex;
    align-items: start;
    gap:20px;
`

const StyledFeaturesTitle = styled.h3`
    color: #424A57;
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
    margin-bottom: 14px;
`

const Features = () => {
    return (
        <div>Features</div>
    )
}

export default Features