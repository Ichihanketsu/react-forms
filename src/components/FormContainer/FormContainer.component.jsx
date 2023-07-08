import { StyledFormContainer } from "./FormContainer.style";

export const FormContainer = ({ heading }) => {
  return (
    <StyledFormContainer>
      <h2>{heading}</h2>
    </StyledFormContainer>
  );
};
