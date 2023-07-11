import PropTypes from "prop-types";
import ErrorMessage from "../ErrorMessage/ErrorMessage.component";
import { Controller, useFormContext } from "react-hook-form";
import { Option, Container } from "./MultiButton.style";

export const MultiButton = ({ name, options, registerOptions }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        rules={registerOptions}
        render={({ field: { onChange, value } }) => (
          <>
            {options.map((option) => (
              <Option
                key={option.value}
                active={value === option.value}
                onClick={() => onChange(option.value)}
              >
                {option.label}
              </Option>
            ))}
            <ErrorMessage errors={errors} name={name} />
          </>
        )}
      />
    </Container>
  );
};

MultiButton.defaultProps = {
  registerOptions: {},
};

MultiButton.prototype = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  registerOptions: PropTypes.object.isRequired,
};

export default MultiButton;
