import { useMemo } from 'react';

import { LinkingOptions, NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDripsyTheme } from 'dripsy';

import { HomeScreen, ConfigScreen } from '../screens';
import { BaseRootParamList } from './params';

const Stack = createNativeStackNavigator<BaseRootParamList>();

const linking: LinkingOptions<BaseRootParamList> = {
  prefixes: [],
  config: {
    screens: {
      Home: '/home',
      Config: '/config',
    },
  },
};

export function Routes() {
  const { theme } = useDripsyTheme();

  const navigationTheme: Theme = useMemo(
    () => ({
      colors: {
        background: theme.colors.background,
        border: theme.colors.secondary,
        card: theme.colors.secondary,
        notification: theme.colors.primary,
        primary: theme.colors.primary,
        text: theme.colors.textPrimary,
      },
      dark: false,
    }),
    [theme]
  );

  return (
    <NavigationContainer linking={linking} theme={navigationTheme}>
      <Stack.Navigator defaultScreenOptions={{ headerTitleStyle: { fontFamily: 'OpenSans' } }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Config" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
