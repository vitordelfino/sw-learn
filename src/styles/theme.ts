import { darken, lighten } from 'polished'

const theme = {
  dark: {
    colors: {
      background: '#121214',
      text: '#e1e1e6',
      textHover: darken(0.2, '#e1e1e6'),
      primary: '#2953efcf'
    }
  },
  light: {
    colors: {
      background: '#e1e1e6',
      text: '#121214',
      textHover: lighten(0.2, '#121214'),
      primary: '#2953efcf'
    }
  }
}

export type Theme = typeof theme.dark

export default theme
