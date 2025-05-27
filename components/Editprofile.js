import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity,TextInput,searchText } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';



const Editprofile = ({navigation}) => {

  return (
    
    <SafeAreaView>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        </View>
    <View >
        <View style={{marginTop:-10}}>
            <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25,}}>Edit Profile</Text>
        </View>
    <View style={{padding:20}}>
      <Image style={styles.img2 }source={require('../components/images.jpg')}></Image>
            <TouchableOpacity style={{marginTop:-40,marginLeft:220}}>
                <View style={{backgroundColor:'lightgray',borderRadius:50,width:30,height:30,}}>
            <FontAwesome5 style={{marginLeft:8,marginTop:2}}name="pen" size={20} color="black" />
            </View>
            </TouchableOpacity>
    </View>
    <View style={{padding:50,}}>
        <View style={{backgroundColor:'#e5ecef',borderRadius:20,margin:10,height:50,alignItems:'center'}}>
            
            <TextInput 
                      
                      value={searchText}
                      placeholder='Name...'
                      onChangeText={text => setSearchText(text)}
                      placeholderTextColor="black"
                      
                    />
        
        </View>
       
        <View style={{backgroundColor:'#e5ecef',borderRadius:20,margin:10,height:50,alignItems:'center'}}>
        <TextInput 
                    
                      value={searchText}
                      placeholder='Gender...'
                      onChangeText={text => setSearchText(text)}
                      placeholderTextColor="black"
                      
                    />
        </View>

        <View style={{backgroundColor:'#e5ecef',borderRadius:20,margin:10,height:50,alignItems:'center'}}>
         <TextInput 
                      
                      value={searchText}
                      placeholder='Biography...'
                      onChangeText={text => setSearchText(text)}
                      placeholderTextColor="black"
                      
                    />
        </View>

        <View style={{backgroundColor:'#e5ecef',borderRadius:20,margin:10,height:50,alignItems:'center'}}>
         <TextInput 
                      
                      value={searchText}
                      placeholder='E-mail...'
                      onChangeText={text => setSearchText(text)}
                      placeholderTextColor="black"
                      
                    />
        </View>

        <View style={{backgroundColor:'#e5ecef',borderRadius:20,margin:10,height:50,alignItems:'center'}}>
         <TextInput 
                      
                      value={searchText}
                      placeholder='Phone number...'
                      onChangeText={text => setSearchText(text)}
                      placeholderTextColor="black"
                      
                    />
        </View>

    </View>
    <View style={{marginTop:-40}}>
        <TouchableOpacity style={{backgroundColor:'#3380ff',width:200,height:50,borderRadius:20,marginLeft:100}}>
            <Text style={{fontWeight:'bold',color:'white',textAlign:'center',marginTop:15}}>SUBMIT</Text>
        </TouchableOpacity>
    </View>


      
      
      
    </View>
    </SafeAreaView>
  )
}

export default Editprofile

const styles = StyleSheet.create({
img2:{
    borderRadius:200,
    width:100,
    height:100,
    marginLeft:150
   },
   prftxt:{
    marginLeft:140,
    padding:10,
    fontWeight:'bold'
   },
  
   


})
