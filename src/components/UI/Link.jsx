import React from 'react'

export const Link = ({children, ...props}) => {
    return (
        <a  {...props}>
            {children}
        </a>
    )
}
