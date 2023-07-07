import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  height: ${(props) => (props.height ? props.height : "48px")};
  width: ${(props) => (props.width ? props.width : "50%")};
  border-radius: 10px;
  padding: ${(props) => (props.padding ? props.padding : "16px 24px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  cursor: pointer;
  color: ${COLOR_PRIMARY_BUTTON_FONT};
  background: ${COLOR_PRIMARY_BUTTON};
  border: none;
  font-size: 16px;
  font-weight: 700;
  margin-top: 15px;
  :disabled {
    background: ${COLOR_BUTTON_DISABLED};
  }

  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  :active {
    background: #04a982;
  }
`;
