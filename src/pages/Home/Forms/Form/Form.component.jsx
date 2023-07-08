import PropTypes from "prop-types";
import { Col, Row } from "../../../../components/Grid/Grid.component";
import { useFormContext } from "react-hook-form";

const FormComponent = ({ submit }) => {
  const { register, handleSubmit } = useFormContext();
  return (
    <Row>
      <Col xs={6}>
        <p>TEST 1</p>
      </Col>
      <Col xs={6}>
        <p>TEST 2</p>
      </Col>
      <Col xs={12}>
        <p>TEST 3</p>
      </Col>
    </Row>
  );
};

FormComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default FormComponent;
