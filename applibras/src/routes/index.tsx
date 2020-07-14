import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Sinal from '../pages/Sinal';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Sinal" component={Sinal} />
  </App.Navigator>
);

export default AppRoutes;
