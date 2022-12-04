import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      max-width: ${props => props.maxw || "1440px"};
      padding: ${ ({ padding }) => padding || '0 100px' };
      margin: ${props => props.margin || '0 auto'};
      ${'' /* justify-content : ${ ({ justifyContent }) => justifyContent || 'center' };   */}
      align-items: center;
      gap: ${({gap}) => gap || 0}
`
const Container = props => <StyledContainer {...props} />;

export default Container;