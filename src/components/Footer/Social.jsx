import React from 'react'
import styled from 'styled-components'
import social_facebook from '../../images/social_facebook.jpg'
import social_instagram from '../../images/social_instagram.jpg'
import social_twitter from '../../images/social_twitter.jpg'
import Image from '../UI/Image'

const Wrapper = styled.div`
  display:flex;
  gap:24px;
  max-width: 198px;
`

export const Social = () => {
  return (
    <Wrapper>
        {[social_facebook, social_twitter,social_instagram].map( (img, id) => {
          return <Image src={img} alt="социальные сети" key={id} w="50" h="50" br="50%"/>
        })}
    </Wrapper>
  )
}
