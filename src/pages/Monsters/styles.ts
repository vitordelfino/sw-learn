import styled from "styled-components";

export const MonstersPage = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const MonsterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1000px;

  /* & {
    .monster-card {
      flex: 1 0 21%;
    }
  } */
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
`