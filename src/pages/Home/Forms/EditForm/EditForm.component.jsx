import PropTypes from "prop-types";
import {
  Col,
  Row,
  ColCenter,
} from "../../../../components/Grid/Grid.component";
import { useFormContext } from "react-hook-form";

import Button from "../../../../components/Button/Button.component";
import BorderInput from "../../../../components/Form/BorderInput/BorderInput.component";
import MultiButton from "../../../../components/Form/MultiButton/MultiButton.component";

const EditFormComponent = ({ submit }) => {
  const { handleSubmit } = useFormContext();

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div>
      <Row>
        <Col>
          <BorderInput
            name="firstName"
            registerOptions={{ required: "Please enter a First Name." }}
            label="First Name"
          />
        </Col>
        <Col>
          <BorderInput
            name="lastName"
            registerOptions={{ required: "Please enter a Last Name." }}
            label="Last Name"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BorderInput
            name="email"
            registerOptions={{ required: "Please enter a email." }}
            label="Email Address"
          />
        </Col>
      </Row>
      <ColCenter>
        <MultiButton
          name="status"
          registerOptions={{ required: "Please enter a status." }}
          options={options}
        />
      </ColCenter>

      <div style={{ width: "100%", textAlign: "center" }}>
        <Button.Primary
          type="button"
          onClick={handleSubmit(submit)}
          value="Submit"
        />
      </div>
    </div>
  );
};

EditFormComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default EditFormComponent;
