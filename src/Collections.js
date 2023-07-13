
import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text,ScrollView ,Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Collections =({navigation})=>{
    return(
        
        <View >
        <View style={{  justifyContent: 'space-between', marginVertical:20}}>
           
            <Text style={{fontSize: 20, textAlign:'center'}}>Categories </Text>
           
        </View>
          
            <ScrollView style={styles.container}>
            <View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image style={styles.houses}
                            source={require('../assets/collections/8.png')}
                        />
                        
                    </View> 
                </View>
                <View >
                 <TouchableOpacity  onPress={() => navigation.navigate("Apartments")}>
                    
                   <View style={styles.sp}>
                        <Image  style={styles.houses}
                            source={require('../assets/collections/9.png')}
                        />
                    </View> 
                 </TouchableOpacity>
                </View>
                
                
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image style={styles.houses}
                            source={require('../assets/collections/10.png')}
                        />
                    </View> 
                </View>
                <View >
                   <View style={styles.sp}>
                        <Image  style={styles.houses}
                            source={require('../assets/collections/11.png')}
                        />
                        
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image style={styles.houses}
                            source={require('../assets/collections/12.png')}
                        />
                    </View> 
                </View>
                <View >
                   <View style={styles.sp}>
                    
                        <Image  style={styles.houses}
                            source={require('../assets/collections/10.png')}
                        />
                        
                    </View> 
                </View>
               
            </View>
            </ScrollView>
        </View>
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
        height:80,
        width:'90%',
        marginHorizontal:'5%',
        marginVertical:'1.5%'
    }

    
})
export default Collections;