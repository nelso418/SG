import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TeamScreen from './screens/TeamScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import GiveawayDetail from './screens/GiveawayDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="GiveawayDetail" component={GiveawayDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}