import React from 'react'
import styled from 'styled-components'
import { Link } from '../UI/Link'

const StyledMenuList = styled.ul`
            display:flex;
            gap:32px;
            color: white;
            font-size: 24px;
            font-weight: 700;
            line-height:44px;
`


export const MenuList = ({ data }) => {
    const sections = ['app', 'features', 'benefits']
    const listElem = data.map(({ el, id }) => {
     const href = `#${sections.shift()}`
        return (
            <li key={id}>
                <Link children={el} href={href} />
            </li>
        )
    })
    return (
        <StyledMenuList>
            {listElem}
        </StyledMenuList>
    )
}
