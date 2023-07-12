// import { View, Text } from 'react-native'
// import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();

// const Houses = ({navigation}) => {
//   return (
//     <View>
//       <Text>Houses</Text>
//     </View>
//   )
// }

// export default Houses
import {  View, TouchableOpacity, Image,StyleSheet, Text  } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Houses = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
       <Tab.Navigator initialRouteName='Home' >
           <Tab.Screen name="Home" component={Home} />
           <Tab.Screen name="Collection" component={Collections} />
           <Tab.Screen name="Saved" component={Saved} />
           <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
    </View>
  )
}

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Houses Tab 1</Text>
    </View>
  );
}

function Collections() {
  return (
    
    <View style={StyleSheet.container}>
      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/30.png")}
        />
        <View>
         
        </View>
      </View>

      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/31.png")}
        />
        
      </View>

      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/32.png")}
        />
        
      </View>
      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/33.png")}
        />
        
      </View>
      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/34.png")}
        />
        
      </View>
      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/35.png")}
        />
        
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        margin:10
    },
    thananh:{
       marginVertical:10,
    },
  
});
function Saved() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Houses Tab 1</Text>
      </View>
    );
  }
  function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Houses Tab 1</Text>
      </View>
    );
  }


export default Houses;