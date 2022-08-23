import styled from "styled-components";

export const DisplayContainer = styled.div`
  grid-row: 1 / 2; 
  grid-column: 2 / 3;
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  flex: 1;
  margin-right: 15px;
  text-align: center;
  border: 2px solid #d3d3d3;
  border-radius: 0.3rem;

  &:last-child {
    margin-right: 0px;
  }
`;