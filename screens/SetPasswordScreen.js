import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from 'react-native';

export default function SetPasswordScreen({ onBack, onReset }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    onReset();
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>Set Password</Text>

      <View style={styles.spacer} />

      <View style={styles.form}>

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

      <TouchableOpacity
        style={styles.button}
        onPress={handleReset}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 22,
    paddingTop: 60
  },

  heading: {
    color: '#DDF45A',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  spacer: {
    flex: 1
  },

  form: {
    backgroundColor: '#B49BFF',
    padding: 18,
    borderRadius: 10
  },

  label: {
    color: '#211A35',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 5
  },

  input: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 15
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