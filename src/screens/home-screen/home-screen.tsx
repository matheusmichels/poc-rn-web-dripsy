import { Link } from '@react-navigation/native';
import { MotiText } from 'moti';

import { Container, styles, Title } from './home-screen.styles';

export function HomeScreen() {
  return (
    <Container>
      <Title>Home Screen</Title>

      <MotiText
        from={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 500, loop: true, type: 'timing' }}
        style={styles.animatedText}
      >
        Welcome
      </MotiText>

      <Link to={{ screen: 'Config' }}>Go to config</Link>
    </Container>
  );
}
