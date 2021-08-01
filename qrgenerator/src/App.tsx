/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from 'src/features/home';
import { StackProps } from 'src/types/routes';
import { FirstAccessHome } from './features/first-access';

const Stack = createStackNavigator<StackProps>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeFirstAccess" component={FirstAccessHome} />
        <Stack.Screen
          name="Home"
          options={{ gestureEnabled: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
