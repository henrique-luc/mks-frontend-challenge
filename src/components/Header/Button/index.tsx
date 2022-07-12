import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

export const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer>
      {Icon && <Icon color="#000" size={17} />}
      <p>{children}</p>
    </ButtonContainer>
  );
};
