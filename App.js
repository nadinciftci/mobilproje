import React from 'react';
import { SafeAreaView, StyleSheet,Text, View,Image,ImageBackground, Settings} from 'react-native';
import Home from './components/Home';
import AppNavigation from './components/AppNavigation';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import Stng from './components/Stng';
import Notification from './components/Notification';
import Anasayfa from './components/Anasayfa';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <AppNavigation></AppNavigation>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text1:{
    fontWeight:'bold',
    fontSize:20,
  },
  
 
});
