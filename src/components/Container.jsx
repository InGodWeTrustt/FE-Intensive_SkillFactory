import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
      display: flex;
      max-width: ${props => props.maxw || "1240px"};
      margin: 0;
      padding: ${ ({ padding }) => padding || 0 };
      justify-content : ${ ({ justifyContent }) => justifyContent || 'center' };
      align-items: center;
      gap: 60px;
`
const Container = props => <StyledContainer {...props} />;
export default Container;