import React from 'react';
import { Link } from '@react-navigation/native';

import { Container, Title } from './home-screen.styles';

export function HomeScreen() {
  return (
    <Container>
      <Title>Home Screen</Title>

      <Link to={{ screen: 'Config' }}>Go to config</Link>
    </Container>
  );
}
