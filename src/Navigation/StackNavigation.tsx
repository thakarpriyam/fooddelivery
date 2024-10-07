import React from 'react';
import IScreen from './IScreen';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={IScreen.Login} component={Login} />
      <Stack.Screen name={IScreen.Register} component={Register} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
