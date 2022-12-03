import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: ${props => props.maxw || 0};
      margin: ${props => props.margin || 0};
      padding: ${ ({ padding }) => padding || 0 };
      justify-content : ${ ({ justifyContent }) => justifyContent || 'center' };
      align-items: center;
      gap: 60px;
`
const Container = props => <StyledContainer {...props} />;

export default Container;