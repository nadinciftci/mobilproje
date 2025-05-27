import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const SearchBar = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(data => {setRecipes(data.recipes);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.mealType &&
    recipe.mealType.join(' ').toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeItem}
      onPress={() => setSelectedRecipe(item)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.recipeName}>{item.name}</Text>
        <Text style={styles.mealType}>{item.mealType.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
   
  



     < View style={{margin:5}}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <AntDesign name="arrowleft" size={26} color="black" />
              </TouchableOpacity>
              </View>

              <View style={styles.header}>
        <AntDesign  name="search1" size={20} color="gray" />
      <TextInput
        placeholder="Search by the meal type...(Dinner,breakfeast etc.)"
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#888"
      />
      
      </View>

       <View>
         <Text style={styles.txt2}>Categories</Text>

      </View>
       <View style={styles.cnt1}>
       <ScrollView horizontal>
  <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Breakfast</Text>
    </TouchableOpacity>
  </View>
     <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Lunch</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Dinner</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Dessert</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Snack</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Appetizer</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.ctg1}>
    <TouchableOpacity>
      <Text style={styles.ctgtxt}>Beverage</Text>
    </TouchableOpacity>
  </View>
</ScrollView>

  
</View>
   
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />

      {selectedRecipe && (
        <View style={styles.instructionsBox}>
          <Text style={styles.instructionTitle}>{selectedRecipe.name}</Text>

          <Text style={styles.sectionHeader}>Instructions</Text>
          <Text style={styles.instructions}>{selectedRecipe.instructions}</Text>

          <Text style={styles.sectionHeader}>Ingredients</Text>
    {selectedRecipe.ingredients.map((item, index) => (
      <Text key={index} style={styles.ingredientItem}> {item}</Text>
    ))}

    
        </View>
      )}
 <View style={styles.cubuk}>
   <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>

    <AntDesign style={{marginLeft:5}}name="home" size={24} color="black" />
    
    <Text>Home</Text>
    </TouchableOpacity>
   </View>
   <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Stng')}>

       <Feather style={{marginLeft:15}} name="settings" size={24} color="black" />
    
    <Text>Setting</Text>
    </TouchableOpacity>
   </View>
    <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>

     <Ionicons style={{marginLeft:20}} name="notifications-outline" size={24} color="black" />
    
    <Text>Notification</Text>
    </TouchableOpacity>
   </View>
    <View>
    <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>

      <MaterialCommunityIcons style={{marginLeft:5}} name="face-woman-profile" size={24} color="black" />
    
    <Text>Profile</Text>
    </TouchableOpacity>
   </View>
   </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mealType: {
    fontSize: 14,
    color: '#666',
  },
  instructionsBox: {
    marginTop: 20,
    backgroundColor: '#e9e9e9',
    padding: 15,
    borderRadius: 10,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
  
    color: '#333',
  },
  header:{
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'lightgray',
    alignItems:'center',
    width:380,
    height:50,
    borderRadius:30,
    padding:10
  },
  txt2: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
    marginVertical: 10,
  },
    ctg1: {
    backgroundColor: 'lightgray',
    width: 100,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ctgtxt: {
    fontWeight: 'bold',
  },
  cubuk:{
      justifyContent:'space-between',

    borderTopWidth:1,
    borderTopColor:'#acb6b0',
    flexDirection:'row'
  },
  sectionHeader:{
    fontSize:15,
    fontWeight:'bold'
  }


});

export default SearchBar;
