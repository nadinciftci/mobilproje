import { StyleSheet, Text, View, Image, SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
     <View>
       <View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')}>
            <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        </View>
    <View style={{padding:20}}>
      <Image style={styles.img2 }source={require('../components/images.jpg')}></Image>
      <Text style={styles.prftxt}>Taylor Gomez</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',}}>
        <Text>899</Text>
        <Text>1033</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={{fontWeight:'bold'}}>Followers</Text>
        <Text style={{fontWeight:'bold'}}>Following</Text>
    </View>

   <View  style={styles.bio}>
    <Text > Harvard Uni &#128187;</Text>
    <Text > Love dogs &#128021;</Text>
   </View>

        <View style={{alignItems:'center',padding:30,}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Editprofile')} style={{backgroundColor:'#3380ff',borderRadius:20,width:100,height:25,}}>
            <Text style={styles.txtprf}>Edit Profile</Text>
        </TouchableOpacity>
        
    </View>

       
    
       <View style={{borderBlockStartColor:'lightgray',borderTopWidth:1,height:180,marginTop:40,flexDirection:'row',marginLeft:-20,justifyContent:'space-evenly'}}>
      
        <TouchableOpacity>
           <Text style={{marginLeft:20,color:'gray',fontWeight:'bold'}}>My recipes</Text>
        <Image style={styles.sfl} source={require('../components/sufle.jpg')}></Image>
         
         <Text style={{textAlign:'center',fontWeight:'bold',color:'white',backgroundColor:'#3380ff',borderRadius:30,width:100,marginLeft:40,marginTop:10}}>Sufle</Text>
        </TouchableOpacity>

          <TouchableOpacity style={{marginTop:20}}>
        <Image style={styles.sfl} source={require('../components/ftcn.jpg')}></Image>
         
         <Text style={{textAlign:'center',fontWeight:'bold',color:'white',backgroundColor:'#3380ff',borderRadius:30,width:100,marginLeft:40,marginTop:10}}>Fettucini</Text>
        </TouchableOpacity>
      


       </View>

       <View style={{flexDirection:'row',marginLeft:-20,justifyContent:'space-evenly'}}  >
         <TouchableOpacity style={{marginTop:30}}>
        <Image style={styles.sfl} source={require('../components/şntzl.jpg')}></Image>
         
         <Text style={{textAlign:'center',fontWeight:'bold',color:'white',backgroundColor:'#3380ff',borderRadius:30,width:100,marginLeft:40,marginTop:10}}>Şinitzel</Text>
        </TouchableOpacity>


         <TouchableOpacity style={{marginTop:20}}>
        <Image style={styles.sfl} source={require('../components/chsck.jpg')}></Image>
         
         <Text style={{textAlign:'center',fontWeight:'bold',color:'white',backgroundColor:'#3380ff',borderRadius:30,width:100,marginLeft:40,marginTop:10}}>Cheescake</Text>
        </TouchableOpacity>
        



        
       </View>


       
        
      </View>
     </ScrollView>
   
  )
}

export default Profile

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
   cont2:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:620,
    borderTopWidth:1,
    borderTopColor:'#aaaaa8'
  },
  txtprf:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
  },
  bio:{
    marginBlock:5,
    marginLeft:30,
    marginTop:20
  },
  sfl:{
    width:150,
    height:150,
    borderRadius:40,
    marginLeft:20,
    marginTop:30
  }



})
