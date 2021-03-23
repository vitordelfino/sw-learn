import styles from 'styled-components'

type MonsterCardProps = {
  image: string
}

export const MonsterCard = styles.div<MonsterCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;
  height: 120px;
  border: 1px solid ${props => props.theme.colors.text};
  margin: 25px;
  cursor: pointer;
  transition: transform .2s;
  text-align: center;
  
  

  &:hover {
    transform: scale(1.2);
  }

  .monster-image {
    background: url(${props => props.image}) no-repeat;
    width: 100%;
    height: 100px;
    flex: 1 0 21%;
  }

  .monster-name {
    color: ${props => props.theme.colors.text};
    font-weight: 600;
  }
`
