import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  img {
    width: 300px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`