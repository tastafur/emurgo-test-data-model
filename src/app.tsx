import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Ordering: undefined;
};

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PropsOrdering = NativeStackScreenProps<
  RootStackParamList,
  'Ordering'
>;

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/home';
import OrderingScreen from './screens/ordering';

function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Ordering"
          component={OrderingScreen}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
