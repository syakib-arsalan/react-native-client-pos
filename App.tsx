
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { StackNavigator } from './src/navigation/StackNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={isDarkMode ? 'black' : 'white'} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StackNavigator />
    </SafeAreaProvider>
  );
}

export default App;
