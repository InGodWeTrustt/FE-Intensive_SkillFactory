import React from 'react'
import styled from 'styled-components'
import { Button } from './UI/Button.jsx'

const Paragraph = styled.p`
        font-weight: ${props => props.weight ? props.weight : 400};
        font-size: ${props => props.size};
        line-height: ${props => props.lh};
        padding-bottom: 32px;
        margin-top ${props => props.mt || 0};
`

const Wrapper = styled.div`
    display: block;
    font-size: 54px;
    min-width: ${ props => props.minw || 0}
`

export const BlockInfo = () => {
    return (
        <Wrapper minw="590px">
            <Paragraph weight="700" lh="64px" mt="27px">
                Разработано 2000+ приложений
            </Paragraph>
            <Paragraph size=".5em" lh="38px">Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток
            </Paragraph>
            <Button primary size="default" padding="16px 32px">
                Присоединяйтесь
            </Button>
        </Wrapper>
    )
}
