import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b4b7bd;
    }
  }
  
  a, h2, p {
    text-decoration: none;
    color: ${(props) => {
    return props.theme.palette.mode === 'light' ? (
      props.theme.palette.text.primary
    ) : (
      props.theme.palette.common.white
    );
  }};
  }

  body {
    font-size: 16px;
    line-height: 1.4;
    font-family: 'Oswald', sans-serif;
    color: ${(props) => props.theme.palette.background.primary};
    background: ${props => props.theme.palette.background.paper};
  }
`;

export default GlobalStyles;