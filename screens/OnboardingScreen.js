// screens/OnboardingScreen.js
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen({ onFinish }) {
  const [step, setStep] = useState(0);

  // Figma дизайнындағы 3 түрлі onboarding бетінің мәліметтері
  const slides = [
    {
      title: 'Start Your Journey Towards A More Active Lifestyle',
      icon: '🏃',
      image: { uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' },
      buttonText: 'Next',
    },
    {
      title: 'Find Nutrition Tips That Fit Your Lifestyle',
      icon: '🥗',
      image: { uri: 'https://images.unsplash.com/photo-1540420773420-3366772f4999' }, // Салат ұстаған адам/тағам фоны
      buttonText: 'Next',
    },
    {
      title: 'A Community For You, Challenge Yourself',
      icon: '👥',
      image: { uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd' }, // Залдағы спортшы фоны
      buttonText: 'Get Started',
    },
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1); // Келесі слайдқа өту
    } else {
      if (onFinish) onFinish(); // Соңғы бетте Get Started басқан соң келесі басты экранға өту
    }
  };

  const handleSkip = () => {
    if (onFinish) onFinish();
  };

  return (
    <ImageBackground 
      source={slides[step].image} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        
        {/* Жоғарғы оң жақтағы Skip түймесі */}
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Ортадағы күлгін блок (мәтіндер мен иконкалар автоматты түрде өзгереді) */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardIcon}>{slides[step].icon}</Text>
          <Text style={styles.cardTitle}>{slides[step].title}</Text>
          
          {/* Индикатор нүктелері */}
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, step === 0 && styles.activeDot]} />
            <View style={[styles.dot, step === 1 && styles.activeDot]} />
            <View style={[styles.dot, step === 2 && styles.activeDot]} />
          </View>
        </View>

        {/* Next / Get Started батырмасы */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {slides[step].buttonText}
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
    backgroundColor: '#b19cd9', // Күлгін блок фон түсі
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