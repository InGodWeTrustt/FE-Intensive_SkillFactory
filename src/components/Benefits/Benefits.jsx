import React from 'react'
import styled from 'styled-components'
import BenefitsItem from './BenefitsItem'

const StyledBenefits = styled.div`
display: block;
`

const StyledBenefitsList = styled.div`
  display: flex;
  max-width: 1440px;
  gap: 20px;
`

const StyledTitle = styled.h3`
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 32px;
`

const Benefits = ({ data }) => {
  return (
    <StyledBenefits>
      <StyledTitle children={'Преимущества'}/>
      <StyledBenefitsList>
        {data.map(elem => <BenefitsItem key={elem.id} {...elem}/>)}
      </StyledBenefitsList>
    </StyledBenefits>
  )
}

export default Benefits