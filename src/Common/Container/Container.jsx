import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  width: 80%;
  min-height: 91vh;
  margin: 0 auto;
  margin-top: 2%;
  padding: 30px;
  border: 5px solid grey;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette.background.default}
`;

export default Container;
