import styled from "styled-components";
import {
  TERTIARY_COLOR,
  TEXT_COLOR_DARK,
  ERROR_COLOR,
} from "../../common/colors";

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: none;
  box-shadow: none;
  padding: 10px 8px 10px;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  color: white;
`;

export const InputHeader = styled.div`
  margin-bottom: 10px;
  color: ${TEXT_COLOR_DARK};
  font-size: 12px;
  font-weight: 400;
  align-self: flex-start;
`;

const getWidth = (props) => {
  if (props.width) return props.width;
  return "100%";
};

const getMargin = (props) => {
  if (props.labelAbove && props.main) return "0 0 20px 0";
  if (props.margin) return props.margin;
  return "0";
};

export const Container = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  width: ${getWidth};
  margin: ${getMargin};
  display: flex;
  flex-direction: ${(props) => (props.main ? "column" : "row")};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  justify-content: center;
  border: ${(props) => (props.main ? "none" : `1px solid ${TERTIARY_COLOR}`)};
  font-size: 17px;
  align-items: center;
  border-radius: 4px;
  @media (max-width: 900px) {
    width: ${getWidth};
  }

  &.error {
    border-color: ${ERROR_COLOR};
  }
`;
