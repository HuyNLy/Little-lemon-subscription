import * as React from 'react';
import { Text, Image, 
  KeyboardAvoidingView, Platform, TextInput, Pressable,
  Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const isEmailValid = validateEmail(email);

  ;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.center}>
      <ScrollView 
        contentContainerStyle={styles.center} 
        keyboardDismissMode="on-drag" // Dismisses keyboard when user scrolls
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Image
            source={require('../assets/little-lemon-logo-grey.png')}
            style={styles.image}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel="Little Lemon Logo Grey"
          />
        </TouchableWithoutFeedback>
        
        <Text style={styles.headers}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Type Your Email"
          keyboardType="email-address"
        />
        
        <Pressable
          style={[styles.button, { backgroundColor: isEmailValid ? 'darkgreen' : 'gray' }]} 
          onPress={() => Alert.alert(`Thanks for subscribing! Stay tuned!`)}
          disabled={!isEmailValid}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  headers: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    borderRadius: 10,
    width:'90%',
    height: 40,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#EDEFEE',
    width: '90%',
  },
});

export default SubscribeScreen;
