import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Anasayfa from './Anasayfa'
import Profile from './Profile'
import Editprofile from './Editprofile'
import Stng from './Stng'
import Notification from './Notification'

const Stack=createStackNavigator()
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='Anasayfa' component={Anasayfa} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='Editprofile' component={Editprofile} options={{ headerShown:false }} />
        <Stack.Screen name='Stng' component={Stng} options={{ headerShown:false }} />
        <Stack.Screen name='Notification' component={Notification} options={{ headerShown:false }} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})