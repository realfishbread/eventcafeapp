import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen'; // 메인 화면
import LoginScreen from './LoginScreen'; // (사용 중이지 않지만 유지)

const Stack = createStackNavigator();

const AppNavigator = ({ onLoginPress }) => {
  return (
    <Stack.Navigator initialRouteName="Main">
      {/* MainScreen으로 onLoginPress 전달 */}
      <Stack.Screen name="Main">
        {() => <MainScreen onLoginPress={onLoginPress} />}
      </Stack.Screen>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;