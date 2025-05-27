import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
const Notification = ({navigation}) => {
        
  return (
   
    <View style={{borderBlockEndColor:'lightgray',borderBottomWidth:1,height:180}}>
      
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')}>
            <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        </View>
       
       <View style={{marginTop:50,marginLeft:30}}>
      <Text style={{fontWeight:'bold'}}>New</Text>
      </View>
       
       <View style={{marginTop:20,marginLeft:30}}>
      <Image style={styles.rhnimg} source={require('../components/rihn.jpg')}></Image>
      </View>
      
       <View style={{marginTop:-50,marginLeft:120}}>
      <Text>Jessica Aniston</Text>
      <Text style={{color:'#aeb9bf'}}>has followed you</Text>
      </View>

      <View style={{marginLeft:300,marginTop:-25,backgroundColor:'#3380ff',borderRadius:20,width:100,height:30}}>
        <TouchableOpacity>
        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginTop:5}}>Follow</Text>
        </TouchableOpacity>
      </View>
      
      <View >
      <Text style={{marginTop:70,marginLeft:30,fontWeight:'bold'}}>Today</Text>
      <Image style={styles.imgtheo}source={require('../components/theojames.jpg')}></Image>
      <Image style={styles.imgtyl}source={require('../components/tyl.jpg')}></Image>
       </View>
      
      <View style={{marginLeft:120,marginTop:-60}}>
        <Text>Theo Hill and</Text>
         <Text>Ashley James</Text>
         <Text style={{color:'#aeb9bf'}}>liked yor recipe   1 hour</Text>
      </View>

       <View style={{borderBlockEndColor:'lightgray',borderBottomWidth:1,height:70}}>
       <Image style={styles.imgymkb}source={require('../components/ymkb.jpg')}></Image>
      </View>

      <View >
        <Text style={{marginTop:40,marginLeft:30,fontWeight:'bold'}}>Yesterday</Text>
        <Image style={styles.ceimg} source={require('../components/ce.jpg')}></Image>
        <View style={{marginLeft:120,marginTop:-50}}>
        <Text> Chris Pitt</Text>
        <Text style={{color:'#aeb9bf'}}>has shared a recipe</Text>
        </View>
        <Image style={styles.ymk2} source={require('../components/ymk2.jpg')}></Image>
      </View>

      <View>
        <Image style={styles.dt}source={require('../components/dt.jpg')}></Image>
        <Text style={{marginLeft:120,marginTop:-50}}>Dean Perry</Text>
        <Text style={{marginLeft:120,marginTop:5,color:'#aeb9bf'}}>has followed you</Text>
          <View style={{marginLeft:300,marginTop:-25,backgroundColor:'#3380ff',borderRadius:20,width:100,height:30}}>
        <TouchableOpacity>
        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginTop:5}}>Follow</Text>
        </TouchableOpacity>
      </View>
      
      </View>

         <View>
          <Image style={styles.edimg} source={require('../components/ed.jpg')}></Image>
          <Text style={{marginLeft:120,marginTop:-50}}>David Johnson</Text>
          <Text style={{marginLeft:120,marginTop:5,color:'#aeb9bf'}}>has followed you</Text>
             <View style={{marginLeft:300,marginTop:-25,backgroundColor:'#2ec366',borderRadius:20,width:100,height:30}}>
        <TouchableOpacity>
        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginTop:5}}>Followed</Text>
        </TouchableOpacity>
      </View>
         </View>

    </View>
    
  )
}

export default Notification

const styles = StyleSheet.create({
    rhnimg:{
        borderRadius:200,
        width:60,
        height:60
    },
    imgtheo:{
      borderRadius:200,
        width:60,
        height:60,
        marginTop:20,
        marginLeft:30
    },
    imgtyl:{
        borderRadius:200,
        width:60,
        height:60,
        marginTop:-40,
        marginLeft:10
    },
    imgymkb:{
      width:80,
      height:80,
      borderRadius:5,
      marginLeft:300,
      marginTop:-70
    },
    ceimg:{
        borderRadius:200,
        width:60,
        height:60,
        marginTop:20,
        marginLeft:30
    },
    ymk2:{
      width:80,
      height:80,
      borderRadius:5,
      marginLeft:300,
      marginTop:-70
    },
    dt:{
        borderRadius:200,
        width:60,
        height:60,
        marginTop:50,
        marginLeft:30
    },
    edimg:{
       borderRadius:200,
        width:60,
        height:60,
        marginTop:50,
        marginLeft:30
    }
})
