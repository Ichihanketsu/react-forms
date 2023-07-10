import PropTypes from "prop-types";
import { Col, Row } from "../../../../components/Grid/Grid.component";
import { useFormContext } from "react-hook-form";

import Button from "../../../../components/Button/Button.component";
import BorderInput from "../../../../components/BorderInput/BorderInput.component";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage.component";

const FormComponent = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Row>
        <Col xs={6}>
          <BorderInput
            // labelAbove
            label="Last Name"
            placeholder="First Name"
            register={register}
            required={{
              required: "Please provide a first name.",
            }}
            name="firstName"
            error={
              errors.firstName && (
                <ErrorMessage message={errors.firstName.message} />
              )
            }
          />
        </Col>
        <Col xs={6}>
          <BorderInput
            // labelAbove
            label="First Name"
            placeholder="Last Name"
            register={register}
            required={{
              required: "Please provide a last name.",
            }}
            name="lastName"
            error={
              errors.lastName && (
                <ErrorMessage message={errors.lastName.message} />
              )
            }
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <BorderInput
            type="number"
            label="Age"
            placeholder="Age"
            register={register}
            required={{
              required: "Please provide your age.",
            }}
            min={1}
            max={99}
            name="age"
            error={errors.age && <ErrorMessage message={errors.age.message} />}
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

FormComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default FormComponent;
