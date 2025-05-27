import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stng = ({navigation}) => {
    
  return (
    <SafeAreaView>
         <View>
        <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')}>
            <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        </View>
        <View >
            <Text style={{fontWeight:'bold', fontSize:25,textAlign:'center'}}>Settings</Text>
        <View style={{flexDirection:'row',marginTop:50,marginLeft:60,backgroundColor:'#e5ecef',width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:20,}}>
    <Ionicons name="notifications" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginTop:2}}> Notifications</Text>
    <TouchableOpacity>
        <Text style={{marginLeft:100,color:'blue'}}>ON</Text>
    </TouchableOpacity>
</View>
        <View style={{flexDirection:'row',marginTop:40,marginLeft:60,backgroundColor:'#e5ecef',width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:20}}>
    <FontAwesome name="language" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginTop:2}}> Language</Text>
    <TouchableOpacity>
        <Text style={{marginLeft:100,color:'blue'}}>English</Text>
    </TouchableOpacity>

    
</View>

<View style={{flexDirection:'row',marginTop:30,marginLeft:60,backgroundColor:'#e5ecef',width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:20}}>
    <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginTop:2}}> Theme</Text>
    <TouchableOpacity>
        <Text style={{marginLeft:100,color:'blue'}}>Light mode</Text>
    </TouchableOpacity>

    </View>
    
    <View >
        <TouchableOpacity>
<View style={{flexDirection:'row',marginTop:90,marginLeft:60,backgroundColor:'#e5ecef',width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:20}}>
    <MaterialIcons style={{marginLeft:-70}} name="support-agent" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginTop:2,marginLeft:10}}> Help and Support</Text>
   

    </View>
    </TouchableOpacity>

    
  <View>
        <TouchableOpacity>
<View style={{flexDirection:'row',marginTop:40,marginLeft:60,backgroundColor:'#e5ecef',width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:20}}>
    <AntDesign  style={{marginLeft:-110}} name="contacts" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginTop:2,marginLeft:10}}> Contact us</Text>
   

    </View>
    </TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity>
<View style={{flexDirection:'row',marginTop:40,marginLeft:60,backgroundColor:'#e5ecef',width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:20}}>
    <MaterialIcons style={{marginLeft:-80}} name="privacy-tip" size={24} color="black" />
    <Text style={{fontWeight:'bold',marginTop:2,marginLeft:10}}> Privacy Policies</Text>
   

    </View>
    </TouchableOpacity>
    </View>
</View>
</View>
</SafeAreaView>

  )
}

export default Stng

const styles = StyleSheet.create({})
