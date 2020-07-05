import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ColorColumn = styled.div`
  flex: 1;
  background-color: ${(props) => props.bgColor};
`;

const ColorDetails = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WhiteSpan = styled.span`
  background-color: #fff;
  padding: 5px;
`;

export { Container, ColorColumn, ColorDetails, WhiteSpan };
