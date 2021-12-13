import styled from "styled-components";
export const Button = styled.button`
  border: none;
  margin: 2px;
  color: rgb(164, 139, 159);
  padding: 12px 28px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  bacground-color: ${(props) => (props.primary ? "blue" : "purple")};
`;
