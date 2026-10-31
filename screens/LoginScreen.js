import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen({
  onLogin,
  onForgotPassword,
  onSignUp
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Fill in all fields');
      return;
    }

    onLogin();
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>Log In</Text>

      <View style={styles.intro}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>
          Welcome back! Log in to continue your journey.
        </Text>
      </View>

      <View style={styles.form}>

        <Text style={styles.label}>Username or email</Text>

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

        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.bottom}>
        Don't have an account?
      </Text>

      <TouchableOpacity onPress={onSignUp}>
        <Text style={styles.link}>Sign Up</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  intro: {
    alignItems: 'center',
    marginVertical: 50
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
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
    marginBottom: 7
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 44,
    paddingHorizontal: 14,
    marginBottom: 15
  },

  forgot: {
    color: '#211A35',
    textAlign: 'right',
    fontSize: 12
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

  bottom: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 30
  },

  link: {
    color: '#DDF45A',
    textAlign: 'center',
    marginTop: 8
  }
});