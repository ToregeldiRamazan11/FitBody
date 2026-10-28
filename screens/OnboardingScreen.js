// screens/OnboardingScreen.js
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen({ onNextScreen }) {
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: 'Start Your Journey Towards A More Active Lifestyle',
      
    },
    {
      title: 'Get Personalized Workout Plans Tailored For You',
       
    },
    {
      title: 'Achieve Your Fitness Goals With FITBODY',
      
    },
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1); // Осы экранның ішіндегі келесі қадамға өту
    } else {
      if (onNextScreen) onNextScreen(); // 3 қадам біткен соң WelcomeScreen-ге өту
    }
  };

  const handleSkip = () => {
    if (onNextScreen) onNextScreen();
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' }} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <Text style={styles.cardIcon}>{slides[step].icon}</Text>
          <Text style={styles.cardTitle}>{slides[step].title}</Text>
          
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, step === 0 && styles.activeDot]} />
            <View style={[styles.dot, step === 1 && styles.activeDot]} />
            <View style={[styles.dot, step === 2 && styles.activeDot]} />
          </View>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {step === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
    padding: 10,
  },
  skipText: {
    color: '#ccff00',
    fontSize: 16,
    fontWeight: '600',
  },
  cardContainer: {
    backgroundColor: '#b19cd9',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  cardIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 22,
  },
  nextButton: {
    borderWidth: 1.5,
    borderColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});