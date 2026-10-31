import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View
} from 'react-native';

export default function SignUpScreen({ onSignUp, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    onSignUp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.heading}>Create Account</Text>

        <Text style={styles.start}>Let's Start!</Text>

        <View style={styles.form}>

          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email or Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

        </View>

        <Text style={styles.terms}>
          By continuing, you agree to our
        </Text>

        <Text style={styles.link}>
          Terms of Use and Privacy Policy.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin}>
          <Text style={styles.bottom}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 22
  },

  heading: {
    color: '#DDF45A',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },

  start: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30
  },

  form: {
    backgroundColor: '#B49BFF',
    padding: 18,
    borderRadius: 10
  },

  label: {
    color: '#211A35',
    fontWeight: 'bold',
    marginBottom: 7
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 44,
    paddingHorizontal: 14,
    marginBottom: 15
  },

  terms: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 11
  },

  link: {
    color: '#DDF45A',
    textAlign: 'center',
    fontSize: 11
  },

  button: {
    backgroundColor: '#383838',
    borderRadius: 25,
    padding: 14,
    marginTop: 20,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  bottom: {
    color: '#DDF45A',
    textAlign: 'center',
    marginTop: 20
  }
});