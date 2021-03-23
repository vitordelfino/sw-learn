import React from 'react'
import { Helmet } from 'react-helmet';

import logo from '../../assets/logo.png';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <img src={logo} alt="logo" />
      <h1>Summoner War</h1>
      <p>A ReactJS + Next.js made by Vitor Delfino.</p>
    </Container>
  )
}

export default Home