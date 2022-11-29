import styled from "styled-components";

const StyledImage = styled.img.attrs(({ w, h, src, alt }) => ({
    src: src,
    alt: alt ? alt : 'Изображение недоступно'
}))`
    width: ${({ w }) => w || 100};
    height: ${({ h }) => h || 100};
`

const Image = props => <StyledImage {...props}/>

export default Image