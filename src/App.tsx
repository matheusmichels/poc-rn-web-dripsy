import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';

import { Routes } from './routes';
import { ThemeProvider } from './theme';

function App() {
  let [fontsLoaded] = useFonts({
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
