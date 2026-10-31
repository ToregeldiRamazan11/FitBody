import { useState } from 'react';

import OnboardingScreen from './screens/OnboardingScreen';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import FingerprintScreen from './screens/FingerprintScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import SetPasswordScreen from './screens/SetPasswordScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const renderScreen = () => {
    switch (currentScreen) {

      case 'splash':
        return (
          <SplashScreen
            onPress={() => setCurrentScreen('onboarding')}
          />
        );

      case 'onboarding':
        return (
          <OnboardingScreen
            onFinish={() => setCurrentScreen('welcome')}
          />
        );

      case 'welcome':
        return (
          <WelcomeScreen
            onSignUp={() => setCurrentScreen('signup')}
            onLogin={() => setCurrentScreen('login')}
          />
        );

      case 'login':
        return (
          <LoginScreen
            onLogin={() => setCurrentScreen('fingerprint')}
            onForgotPassword={() => setCurrentScreen('forgot')}
            onSignUp={() => setCurrentScreen('signup')}
          />
        );

      case 'signup':
        return (
          <SignUpScreen
            onSignUp={() => setCurrentScreen('fingerprint')}
            onLogin={() => setCurrentScreen('login')}
          />
        );

      case 'forgot':
        return (
          <ForgotPasswordScreen
            onBack={() => setCurrentScreen('login')}
            onContinue={() => setCurrentScreen('setPassword')}
          />
        );

      case 'setPassword':
        return (
          <SetPasswordScreen
            onBack={() => setCurrentScreen('forgot')}
            onReset={() => setCurrentScreen('login')}
          />
        );

      case 'fingerprint':
        return (
          <FingerprintScreen
            onSkip={() => setCurrentScreen('welcome')}
            onContinue={() => setCurrentScreen('welcome')}
          />
        );

      default:
        return (
          <SplashScreen
            onPress={() => setCurrentScreen('onboarding')}
          />
        );
    }
  };

  return renderScreen();
}