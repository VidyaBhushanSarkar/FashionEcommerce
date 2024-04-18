import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/screens/HomeScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import ProductsDetails from './src/screens/ProductsDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
        }}
        initialRouteName="Cart">
        <Tab.Screen
          name="Home_Stack"
          component={MyHomeStack}
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
  );
}
