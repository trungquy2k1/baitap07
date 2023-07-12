import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text } from 'react-native';
//import { Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop:50 }}>
            <TouchableOpacity>
                <Image 
                    source={require('../assets/categori/profile.png')}
                />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>HOME</Text>
            <View style={{flexDirection:'row',}}>
                <TouchableOpacity style={{ margin:5}}>
                    <Image 
                        source={require('../assets/categori/icon1.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:5}}>
                    <Image 
                        source={require('../assets/categori/icon2.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    
    )}

export default Header;