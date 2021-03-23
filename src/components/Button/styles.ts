import { darken } from 'polished'
import styled from "styled-components";

export const Btn = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100px;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 400;
  color: #FFF;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.colors.primary)}
  }
`