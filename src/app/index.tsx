import { useState } from 'react';
import OnboardingScreen from '../../screens/OnboardingScreen';
import SplashScreen from '../../screens/SplashScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

export default function Page() {
  const [screenStep, setScreenStep] = useState(1); // 1-ші беттен (Launch/SplashScreen) басталады

  
  if (screenStep === 1) {
    return (
      <SplashScreen 
        onPress={() => setScreenStep(2)} // Жанасу арқылы немесе автоматты түрде 2-ші бетке өту үшін
      />
    );
  } else if (screenStep === 2) {
    return (
      <WelcomeScreen 
        onNext={() => setScreenStep(3)} 
      />
    );
  } else {
    return (
      <OnboardingScreen 
        onFinish={() => setScreenStep(1)} // Басынан қайта бастау немесе аяқтау
      />
    );
  }
}