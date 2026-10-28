import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function SplashScreen({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}>FB🏃</Text>
          </View>
          <Text style={styles.brandText}>FITBODY</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  iconPlaceholder: {
    marginBottom: 10,
  },
  iconText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#8a2be2',
  },
  brandText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#ccff00',
    letterSpacing: 2,
  },
});