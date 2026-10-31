import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from 'react-native';

export default function ForgotPasswordScreen({ onBack, onContinue }) {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Enter your email address');
      return;
    }

    onContinue();
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>Forgotten Password</Text>

      <View style={styles.intro}>
        <Text style={styles.title}>Forgot Password?</Text>

        <Text style={styles.description}>
          Enter your email address to reset your password.
        </Text>
      </View>

      <View style={styles.form}>

        <Text style={styles.label}>
          Enter your email address
        </Text>

        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>Back to Log In</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 22,
    justifyContent: 'center'
  },

  heading: {
    color: '#DDF45A',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  intro: {
    alignItems: 'center',
    marginVertical: 70
  },

  title: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20
  },

  description: {
    color: '#aaa',
    textAlign: 'center'
  },

  form: {
    backgroundColor: '#B49BFF',
    padding: 18,
    borderRadius: 10
  },

  label: {
    color: '#211A35',
    fontWeight: 'bold',
    marginBottom: 10
  },

  input: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14
  },

  button: {
    backgroundColor: '#383838',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 25,
    padding: 14,
    marginTop: 30,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  back: {
    color: '#DDF45A',
    textAlign: 'center',
    marginTop: 20
  }
});