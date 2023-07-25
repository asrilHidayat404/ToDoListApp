import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home'
import About from './Components/About'
import Checked from './Components/Checked'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Bawah = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Bawah.Navigator screenOptions={{headerShown:false}}>
      <Bawah.Screen name='Home' component={Home}/>
      <Bawah.Screen name='Checked' component={Checked}/>
      <Bawah.Screen name='About' component={About}/>
    </Bawah.Navigator>
  )
}
const Pindah = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Pindah.Navigator screenOptions={{headerShown:false}}>
        <Pindah.Screen name='Utama' component={Tabs}/>
      </Pindah.Navigator>
    </NavigationContainer>
  )
}

export default App