import React from 'react'



export const Link = ({children, ...props}) => {
    return (
        <a href={"#"} {...props}>
            {children}
        </a>
    )
}
