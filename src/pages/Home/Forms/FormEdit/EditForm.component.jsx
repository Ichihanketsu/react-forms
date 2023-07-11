import PropTypes from "prop-types";
import { Col, Row } from "../../../../components/Grid/Grid.component";
import { useFormContext } from "react-hook-form";

import Button from "../../../../components/Button/Button.component";
import BorderInput from "../../../../components/BorderInput/BorderInput.component";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage.component";
import MultiButton from "../../../../components/Form/MultiButton/MultiButton.component";

const FormEditComponent = ({ submit }) => {
  const { handleSubmit } = useFormContext();

  console.log(MultiButton);

  return (
    <div>
      <Row>
        <Col xs={6}>
          <BorderInput
            name="firstName"
            registerOptions={{ required: "Please enter a First Name." }}
          />
        </Col>
        <Col xs={6}>
          <BorderInput
            name="lastName"
            registerOptions={{ required: "Please enter a Last Name." }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <BorderInput
            name="email"
            registerOptions={{ required: "Please enter a email." }}
          />
        </Col>
        <Col xs={6}>
          <MultiButton
            name="status"
            registerOptions={{ required: "Please enter a status." }}
          />
        </Col>
      </Row>

      <div>
        <Button.Primary
          type="button"
          onClick={handleSubmit(submit)}
          value="Submit"
        />
      </div>
    </div>
  );
};

FormEditComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default FormEditComponent;
