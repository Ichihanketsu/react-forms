import PropTypes from "prop-types";
import ErrorMessage from "../ErrorMessage/ErrorMessage.component";
import { Container, StyledInput } from "./BorderInput.style";
import { useFormContext } from "react-hook-form";

const BorderInput = ({ name, registerOptions, label, placeholder }) => {
  const {
    register,
    formState: { errors, isLoading },
  } = useFormContext();
  return (
    <>
      <Container className={errors[name] ? "error" : ""}>
        <StyledInput
          placeholder={placeholder || label}
          name={name}
          {...register(name, registerOptions)}
          disabled={isLoading}
        />
      </Container>
      <ErrorMessage errors={errors} name={name} />
    </>
  );
};

BorderInput.defaultProps = {
  registerOptions: {},
  label: "",
};

BorderInput.prototype = {
  name: PropTypes.string.isRequired,
  registerOptions: PropTypes.object.isRequired,
  label: PropTypes.string,
};

export default BorderInput;
