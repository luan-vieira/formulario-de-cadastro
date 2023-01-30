import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
     
    }
  body {
    background-image: radial-gradient(#ff8a00, #e52e71);
    
  }
  button {
      cursor: pointer ;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  gap: ${(props) => props.gap || "20px"};
  padding: 4rem;
  max-width: 22rem;
`;
