import { Link } from '@react-navigation/native';
import { MotiText } from '@motify/components';

import { Container, Title } from './home-screen.styles';

export function HomeScreen() {
  return (
    <Container>
      <Title>Home Screen</Title>

      <MotiText
        from={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 500, loop: true, type: 'timing' }}
        style={{ marginVertical: 10 }}
      >
        Welcome
      </MotiText>

      <Link to={{ screen: 'Config' }}>Go to config</Link>
    </Container>
  );
}
