import styled, { css } from 'styled-components'

export const OpenBtn = styled.div<{ active: boolean }>`
  cursor: pointer; 
  span {
    font-size: 30px;
  }
  ${props =>
    props.active
      ? css`
          & {
            display: 250px;
            visibility: hidden;
          }
        `
      : css`
          & {
            animation: fadeIn ease 3s;
            margin-left: 5px;
            visibility: visible;
          }
        `}
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export type SidenavProps = {
  active: boolean
  width: string
}
export const SidenavStyled = styled.div<SidenavProps>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: ${props => props.theme.colors.text};
    display: block;
    transition: 0.3;
  }

  a:hover {
    color: ${props => props.theme.colors.textHover};
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
  }

  ${props =>
    props.active
      ? css`
          & {
            width: ${props.width};
            border-right: 1px solid ${props.theme.colors.text};
          }
        `
      : css`
          & {
            width: 0;
            border-right: none;
          }
        `}
`
