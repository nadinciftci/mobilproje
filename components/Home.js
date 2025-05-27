import { Button, StyleSheet, Text, View,TouchableOpacity,Image, ImageBackground,width,height } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Home = ({ navigation }) => {
  return (
    
    <View style={{justifyContent:'center',alignItems:'center',marginTop:400, }}>
        <ImageBackground style={styles.background1} resizeMode="cover" source={require('../assets/recipe.jpg')}>
        <View style={{flexDirection:'column',marginBottom:-500}}>
      <Text style={styles.txt1}>Start Cooking</Text>
      <Text style={styles.txt2}>Come join us!</Text>
      </View>
      </ImageBackground>
      <View style={{backgroundColor:'#3380ff',borderRadius:50,width:200,marginTop:90}} >
        
        <View style={{paddingHorizontal: 18,
    paddingVertical: 10, }}>
       <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        <MaterialIcons name="start" size={24} color="white" />
        
      </TouchableOpacity>
       </View>
       </View>
      </View>
    
      
  )
}

export default Home

const styles = StyleSheet.create({
    txt1:{
     fontWeight:'bold',
     fontSize:30,
     color:'white'
     
    },
    txt2:{
      padding:20,
      color:'white',
      fontSize:20
    },
    buttonText:{
      color:'white',
      fontSize:17,
      fontWeight:'bold'
    },
    button:{
        
        position: 'absolute',
        bottom: -200,         
        left: 20,
        right: 20,
        backgroundColor: '#3380ff',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-around',

      
    },
    background1:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        width:500,
        height:1000,
        marginTop:-500,
        opacity:0.8
        
    }

})