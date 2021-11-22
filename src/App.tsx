import { ActivityIndicator } from 'react-native';

/* eslint-disable camelcase */
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import { Routes } from './routes';
import { ThemeProvider } from './theme';

function App() {
  /* eslint-disable camelcase */
  const [fontsLoaded] = useFonts({
    OpenSansLight: OpenSans_300Light,
    OpenSans: OpenSans_400Regular,
    OpenSansBold: OpenSans_700Bold,
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
