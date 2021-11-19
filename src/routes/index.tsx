import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Config" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
