import {
  HIGHLIGHT_COLOR,
  TERTIARY_COLOR,
  TEXT_COLOR_LIGHT,
} from "../../../common/colors";
import { styled } from "styled-components";

export const Option = styled.div`
  width: auto;
  height: 25px;
  border: 1px solid
    ${(props) => (props.active ? "transparent" : HIGHLIGHT_COLOR)};
  background: ${(props) => (props.active ? HIGHLIGHT_COLOR : TERTIARY_COLOR)};
  color: ${TEXT_COLOR_LIGHT};
  border-radius: 5px;
  padding: 0 15px;
  display: inline-block;
  margin: 5px;
  padding: 10px 10px 5px 10px;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
`;
