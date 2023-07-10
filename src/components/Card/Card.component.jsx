import styled from "styled-components";
import {
  Row as RowGrid,
  Col as ColGrid,
  Container as ContainerGrid,
} from "react-grid-system";
import { BACKGROUND_COLOR } from "../../common/colors";

export const Card = styled.div`
  padding-top: 15px;
  max-width: 100% !important;
  background: ${BACKGROUND_COLOR};
  border: 2px solid #fff;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
`;
