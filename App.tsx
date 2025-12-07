import { useEffect} from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigator } from './src/navigation/StackNavigator';
import BootSplash from 'react-native-bootsplash';
import { AuthProvider } from './src/navigation/AuthContext';

function App() {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={isDarkMode ? 'black' : 'white'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <StackNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}

export default App;
