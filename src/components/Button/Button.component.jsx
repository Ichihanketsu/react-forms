import PropTypes from "prop-types";
import { PrimaryButton } from "./Button.style";
import { useFormContext } from "react-hook-form";
export const Primary = ({ onClick, value, loading, disabled, id }) => {
  const {
    formState: { isLoading },
  } = useFormContext();
  const canClick = () => {
    if (!loading) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <PrimaryButton
      className={isLoading ? "disabled" : ""}
      id={id}
      value={value}
      onClick={canClick}
      disabled={isLoading || disabled}
    >
      {!isLoading && value}
      {isLoading && "Loading..."}
    </PrimaryButton>
  );
};

Primary.prototype = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Primary.defaultProps = {
  id: "",
  onClick: undefined,
  loading: false,
  disabled: false,
};

const Button = {
  Primary,
};

export default Button;
