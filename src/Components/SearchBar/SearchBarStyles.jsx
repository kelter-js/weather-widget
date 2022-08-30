import styled from "styled-components";
import { CircularProgress } from "@mui/material";

export const TextLabel = styled.label`
  position: relative;
  display: block;

  .length {
    margin-top: 6px;
    font-size: 12px;
    color: ${(props) => props.theme.palette?.mode === 'light'
    ? '#000'
    : '#fff'
  };
    display: block;

    @media (max-width:700px) {
      font-size: 10px;
    }
  }
`;

export const TextLabelName = styled.p`
  margin: 0 0 6px 0;
  font-size: 12px;

  @media (max-width:700px) {
    font-size: 10px;
  }
`;

export const Input = styled.input`
  background: #F8F8F8;
  border-radius: 6px;
  border: 0;
  padding: 12px 9px;
  display: block;
  width: 100%;
  font-family: 'Open Sans',sans-serif;
  font-size: 14px;

  @media (max-width:700px) {
    font-size: 12px;
  }

  &:focus, &:active {
    outline: none;
  }
`;

export const PlaceList = styled.ul`
  position: absolute;
  left: 0;
  top: 59%;
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  z-index: 10;
`;

export const Li = styled.li`
  display: block;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  color: #000;
  
  &:hover {
    color: ${(props) => props.theme.palette?.primary.main};
  }
`;

export const PlaceLoader = styled(CircularProgress)`
  position: absolute;
  right: 10px;
  top: 24%;
  margin-top: 5px;
`;