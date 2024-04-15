import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/screens/HomeScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#E96E6E',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <Icon name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Reorder"
            component={ReorderScreen}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <Icon name="reorder" size={size} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <Icon name="shopping-cart" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <MIcon name="account" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
=======
    <View>
      <Text>Hello from App</Text>
    </View>
>>>>>>> da5b4db7e4eb3ed0fbb84b99302594851c42878d
  );
}
