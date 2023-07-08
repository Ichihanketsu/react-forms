import styled from "styled-components";
import { HIGHLIGHT_COLOR } from "../../common/colors";

export const StyledFormContainer = styled.div`
  display: flex;
  background: #4e4e50;
  width: 800px;
  height: auto;
  padding: 10px 20px;
  margin: 5px;
  border: 2px ${HIGHLIGHT_COLOR} solid;
  border-radius: 5px;
  color: #ffffff;
`;
