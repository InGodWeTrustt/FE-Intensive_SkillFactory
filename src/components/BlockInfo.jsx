import React from 'react'
import styled from 'styled-components'
import { Button } from './UI/Button.jsx'

const Paragraph = styled.p`
        font-weight: ${props => props.weight ? props.weight : 400};
        font-size: ${props => props.size || '18px'};
        line-height: ${props => props.lh || '28px'};
        padding-bottom: 32px;
        margin-top: ${props => props.mt || 0};
`

const Wrapper = styled.div`
    display: block;
    font-size: 54px;
    max-width: ${props => props.maxw || 0}
`

export const BlockInfo = ({ title, description }) => {
    return (
        <Wrapper maxw="590px">
            <Paragraph size="54px" weight="700" lh="64px" mt="27px">
                {title}
            </Paragraph>
            <Paragraph size=".5em" lh="38px">{description}
            </Paragraph>
            <Button primary size="default" padding="16px 32px">
                Присоединяйтесь
            </Button>
        </Wrapper>
    )
}
