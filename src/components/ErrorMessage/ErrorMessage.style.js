import styled from "styled-components";
import { HIGHLIGHT_COLOR } from "../../common/colors";

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  color: ${HIGHLIGHT_COLOR};
  font-size: 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default {
  ErrorMessageWrapper,
};
