import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
const StyledComponents = () => {
  return (
    <>
      <HeaderText>Clarusway</HeaderText>
      <HeaderText headerColor="purple">Styled Components</HeaderText>
      <Button primary>Primary</Button>
      <Button>Primary</Button>
    </>
  );
};
export default StyledComponents;
