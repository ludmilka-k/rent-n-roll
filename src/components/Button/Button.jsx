import { ButtonStyled, Text } from './Button.styled';

const Button = ({ text, onClick, width }) => {
  return (
    <ButtonStyled
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      <Text>{text}</Text>
    </ButtonStyled>
  );
};

export default Button;
