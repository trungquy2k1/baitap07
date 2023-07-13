import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity } from 'react-native';
import Signin from './Signin';

export default function LandingScreen({ navigation }) { // truyền navigation qua props
  return (
    <View style={styles.container}>
      
      
      <View>
        <Text style={styles.box2}>Hello</Text>
      <View>
      <TouchableOpacity style={styles.but1}
         onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.but2}>Log In</Text>
      </TouchableOpacity>
    </View>

        <View>
          <TouchableOpacity 
            style={styles.but3}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.but4}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tinyLogo: {
    marginTop: -150,
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,

  },
  box1: {
    color: '#5EA33A',
    marginTop: 30,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  box2: {
    color: '#20C065',
    textAlign: 'center',
    
    fontSize: 30,
    alignItems: 'center',
    marginBottom: 60,
    fontWeight:500,

  },
  but1: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#20C065",
    marginBottom: 10,
    color: "white"
  },
  but3: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "white",
    marginBottom: 150,
    color: "white",
    borderWidth: 1,
    borderColor:"#20C065",
  },
  but2: {
    color: 'white',
    fontSize: 20,

  },
  but4: {
    color: '#5EA33A',
    fontSize: 20,

  },
});