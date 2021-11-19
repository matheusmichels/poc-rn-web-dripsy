import { ActivityIndicator } from 'react-native';

/* eslint-disable camelcase */
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';

import { Routes } from './routes';
import { ThemeProvider } from './theme';

function App() {
  /* eslint-disable camelcase */
  const [fontsLoaded] = useFonts({
    'Inter-Light': Inter_300Light,
    Inter: Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
