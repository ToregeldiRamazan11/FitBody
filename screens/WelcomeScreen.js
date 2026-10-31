import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function WelcomeScreen({ onSignUp, onLogin }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd'
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>

        <View style={styles.titleContainer}>
          <Text style={styles.welcomeSubtitle}>
            Welcome to
          </Text>

          <Text style={styles.brandTitle}>
            FITBODY
          </Text>
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={onSignUp}
          >
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={onLogin}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcomeSubtitle: {
    fontSize: 18,
    color: '#ccff00',
    fontWeight: '600'
  },

  brandTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#ccff00',
    letterSpacing: 2
  },

  buttonContainer: {
    width: '100%',
    gap: 12
  },

  signupButton: {
    backgroundColor: '#B49BFF',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center'
  },

  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },

  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center'
  },

  loginText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  }
});