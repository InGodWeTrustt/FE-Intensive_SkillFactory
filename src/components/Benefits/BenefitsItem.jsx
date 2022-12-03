import React from "react"
import styled from "styled-components"
import Image from "../UI/Image"

const StyledBenefitsItem = styled.div`
    display: block;
    max-width: 400px;
`

const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
`

const SubTitle = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
`

const BenefitsItem = ({ imageSrc, title, description }) => {
    return (
        <StyledBenefitsItem>
            <Image src={imageSrc}/>
            <Title children={title} />
            <SubTitle children={description} />
        </StyledBenefitsItem>
    )
}


export default BenefitsItem