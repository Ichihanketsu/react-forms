import {
  PRIMARY_COLOR,
  TEXT_COLOR_LIGHT,
  DISABLED_COLOR,
} from "../../common/colors";
import { Col, Container, Row } from "../../components/Grid/Grid.component";
import { Link } from "react-router-dom";
import styled from "styled-components";

const forms = [
  {
    name: "User Form",
    path: "/form",
    number: "1",
  },
  {
    name: "Edit Form",
    path: "/editForm",
    number: "2",
  },
];

const FormHolder = styled.div`
  border: 2px solid ${PRIMARY_COLOR};
  background: ${DISABLED_COLOR};
  height: 150px;
  line-height: 150px;
  border-radius: 5px;
  margin: 15px 0;
  font-size: 25px;
  color: ${TEXT_COLOR_LIGHT};
  text-align: center;

  &:hover {
    background: ${PRIMARY_COLOR};
  }
`;

const Home = () => (
  <Container>
    <Row>
      {forms.map((form) => (
        <Col key={form.number} sm={3}>
          <Link to={form.path} style={{ textDecoration: "none" }}>
            <FormHolder>{form.name}</FormHolder>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;
