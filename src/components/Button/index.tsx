import React from 'react';
import { Btn } from './styles';

type IButtonProps = {
  onClick: () => void;
}
const Button: React.FC<IButtonProps>  = ({children, onClick}) => {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  )
}

export default Button;