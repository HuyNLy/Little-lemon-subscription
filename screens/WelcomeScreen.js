import * as React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <>
  <View style={styles.center}>
    <Image
    source={require('../assets/little-lemon-logo.png')}
    style={styles.image }
    resizeMode="contain"
    accessible={true}
    accessibility Label={'Little Lemon Logo'}
    />
    <Text style={styles.headers}>Little Lemon, your local Mediterranean Bistro</Text>
    
  </View>;
  <View style={{ marginBottom: 50, alignItems: 'center' }}>
    <Pressable style={styles.button}
          onPress={() => navigation.navigate('Subscribe')}>
          <Text style={styles.buttonText}>
            Newsletter
          </Text>
        </Pressable>
  </View>
   
    </>
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 200,
    
  },
  headers: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  button:{
  
    justifyContent: 'center',
    backgroundColor: 'darkgreen',
    borderRadius: 10,
    width: 400,
    height:40,
  },
  buttonText:{
    textAlign: 'center',

    fontSize:15,
    color: 'white',
  }
});
export default WelcomeScreen;
