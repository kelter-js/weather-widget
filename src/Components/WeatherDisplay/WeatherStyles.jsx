import styled from "styled-components";

export const DisplayContainer = styled.div`
  grid-row: 1 / 2; 
  grid-column: 2 / 3;
  display: flex;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  flex: 1;
  flex-basis: 20%;
  margin-right: 30px;
  text-align: center;
  border: 2px solid #d3d3d3;
  border-radius: 0.3rem;

  &:nth-child(4) {
    margin-right: 0px;
  }

  &:last-child {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;