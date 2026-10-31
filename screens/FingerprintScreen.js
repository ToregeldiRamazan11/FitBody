import {
    SafeAreaView,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';

export default function FingerprintScreen({ onSkip, onContinue }) {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>
        Set Your Fingerprint
      </Text>

      <View style={styles.intro}>
        <Text style={styles.description}>
          Set up fingerprint authentication
          for faster and easier access.
        </Text>
      </View>

      <View style={styles.fingerprintPanel}>
        <Text style={styles.fingerprint}>◎</Text>
      </View>

      <View style={styles.buttons}>

        <TouchableOpacity
          style={styles.button}
          onPress={onSkip}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>

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

  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  description: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 20
  },

  fingerprintPanel: {
    height: 230,
    backgroundColor: '#B49BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -22
  },

  fingerprint: {
    color: '#fff',
    fontSize: 150
  },

  buttons: {
    gap: 12,
    marginTop: 30,
    marginBottom: 20
  },

  button: {
    backgroundColor: '#383838',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 25,
    padding: 14,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});