// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// function Home() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
//   export default Home
import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text,ScrollView ,Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { Ionicons } from "@expo/vector-icons";
import Header from './Header'

const Home =({navigation})=>{
    return(
        
        <ScrollView >
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <View style={styles.category}>
                    <View style ={styles.house}>

                      <TouchableOpacity  onPress={() => navigation.navigate("Houses")}>
                      
                         <Image 
                            source={require('../assets/categori/1.png')}
                            style={styles.anhcategory}
                          />
                     </TouchableOpacity>

                    </View>

                    <View style ={styles.house}>
                     <TouchableOpacity  onPress={() => navigation.navigate("Apartments")}>
                     
                      <Image 
                            source={require('../assets/categori/2.png')}
                            style={styles.anhcategory}
                        />
                      </TouchableOpacity>
                      
                    </View>

                    <View style ={styles.house}>
                    <TouchableOpacity  onPress={() => navigation.navigate("Apartments")}>

                        <Image 
                            source={require('../assets/categori/2.png')}
                            style={styles.anhcategory1}
                        />
                    </TouchableOpacity>
                     
                    </View>
                </View>

                <Text style={styles.title}>Houses</Text>


            <ScrollView>

            
                <View style={{flexDirection:'row'}}>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Houses")}>
                     
                        <Image style={styles.houses}
                            source={require('../assets/categori/4.png')}
                        />
                        <Text style={styles.misson1}>One Mission Bay</Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                     </TouchableOpacity>
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Houses")}>
                    
                        <Image  style={styles.houses}
                            source={require('../assets/categori/5.png')}
                        />
                        
                        <Text style={styles.misson1}>1410 Stayner ST </Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                        
                     </TouchableOpacity>
                    </View> 
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Houses")}>
                     
                        <Image style={styles.houses}
                            source={require('../assets/categori/6.png')}
                        />
                        <Text style={styles.misson1}>246 Suses St</Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                     </TouchableOpacity>
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Houses")}>
                    
                        <Image  style={styles.houses}
                            source={require('../assets/categori/7.png')}
                        />
                        
                        <Text style={styles.misson1}>1206 Maket ST </Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                     </TouchableOpacity>
                        
                    </View> 
                </View>
                
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Houses")} style={styles.btn}>
                        <Text style={{textAlign:'center', fontSize:20, color:'#20C065',marginTop:8}}>Show all(6) </Text>
                    </TouchableOpacity>
                
            </ScrollView>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor: 'black'
    },
    title:{
        fontSize:28,
        marginTop:30,
        marginBottom:5,

    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    // category1:{
    //     flexDirection:'row',
    //     justifyContent:'space-between',
    //     height:30
    // },
    house:{
        borderColor:'black',
        borderWidth:0.1,
        borderRadius:3,
        width: 120,
        height:100,
        marginBottom: 20,
    }, 
    anhcategory:{
        //width: 80,
        //height:30
    },
    houses:{
        height:160,
        width:180
        ,
        marginHorizontal:10,
    }
,
    btn:{
        borderColor:'#20C065',
        borderWidth:1.5,
        borderRadius:5,
        width:'90%',
        height:50,
        marginHorizontal:17,
        marginTop:26,
    },
    sp:{
        marginTop:20,
    },
    misson1:{
        marginLeft:40,
        fontWeight:600
    },
    misson2:{
        marginLeft:35,
    }
})
export default Home;