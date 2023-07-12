
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground , ScrollView} from 'react-native';
import Header from '../components/Header';

export default function Menu({navigation}) {
  return (
    <View style={{ flex: 1, marginTop:20}}>
      <Header navigation={navigation} />

      
    
       
    
  </View>
);

}
const styles = StyleSheet.create({
  img:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#fff',
    elevation: 4,
    marginTop:-58,
    fontSize:18
    
  },
  container:{
      flex:1
  },  
  imgback:{
   
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    backgroundColor:'blue'
  },
  imgthan1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginVertical:4
    
  }
});


