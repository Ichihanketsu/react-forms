// import { COLOR_PRIMARY } from "common/styles/Colors";
import { Col, Container, Row } from "../../components/Grid/Grid.component";
import { Link } from "react-router-dom";
import styled from "styled-components";

const forms = [
  {
    name: "Form",
    path: "/form",
    number: "1",
  },
];

const FormHolder = styled.div`
  border: 1px solid #e4e4e4;
  height: 150px;
  border-radius: 5px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  outline: 0;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <h1 style={{ color: "white" }}>Forms:</h1>
      </Col>
    </Row>
    <Row>
      {forms.map((form) => (
        <Col sm={4}>
          <Link to={form.path} style={{ textDecoration: "none" }}>
            <FormHolder>
              {form.number}) {form.name}
            </FormHolder>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;
