import styled from "styled-components";
import {
  DISABLED_COLOR,
  PRIMARY_COLOR,
  TEXT_COLOR_LIGHT,
} from "../../common/colors";

export const PrimaryButton = styled.button`
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
  color: ${TEXT_COLOR_LIGHT};
  background: ${PRIMARY_COLOR};
  border: none;
  font-size: 16px;
  font-weight: 700;
  margin-top: 15px;
  :disabled {
    background: ${DISABLED_COLOR};
  }

  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  :active {
    background: #04a982;
  }
`;
