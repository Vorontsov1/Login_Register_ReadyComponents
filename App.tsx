import { StatusBar } from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WelcomeScreen from './screens/WelcomeScreen';
import Navigation from './navigation';




export default function App() {
  return (
    <SafeAreaProvider>
    <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}


