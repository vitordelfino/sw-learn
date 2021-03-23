import React from 'react'
import { SwitchThemeStyled } from './styled'

type SwitchThemeProps = {
  onDark: () => void
  onLight: () => void
  checked: 'light' | 'dark'
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({
  onDark,
  onLight,
  checked
}) => {
  return (
    <SwitchThemeStyled>
      <div className="check-box">
        <input type="radio" onChange={onDark} checked={checked === 'dark'} />
        Dark
      </div>
      <div className="check-box">
        <input type="radio" onChange={onLight} checked={checked === 'light'} />
        Light
      </div>
    </SwitchThemeStyled>
  )
}

export default SwitchTheme
