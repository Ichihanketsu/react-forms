import PropTypes from "prop-types";
import { PrimaryButton } from "./Button.style";

export const Primary = ({
  onClick,
  value,
  loading,
  width,
  margin,
  disabled,
  style,
  id,
}) => {
  const canClick = () => {
    if (!loading) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <PrimaryButton
      id={id}
      value={value}
      onClick={canClick}
      disabled={loading || disabled}
      width={width}
      margin={margin}
      style={style}
    >
      {!loading && value}
      {loading && "Loading ..."}
    </PrimaryButton>
  );
};

Primary.prototype = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  margin: PropTypes.string,
  style: PropTypes.object,
};

Primary.defaultProps = {
  id: "",
  onClick: undefined,
  loading: false,
  disabled: false,
  width: undefined,
  margin: undefined,
  style: undefined,
};

const Button = {
  Primary,
};

export default Button;
