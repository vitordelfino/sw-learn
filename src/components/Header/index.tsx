import React from 'react'
import { HeaderStyled } from './styled'

const Header: React.FC = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>
}

export default Header
