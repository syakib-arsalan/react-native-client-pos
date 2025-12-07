import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from './AuthContext';

export function StackNavigator() {
  const { userToken } = useAuth();
  return (
    <NavigationContainer>
      { userToken ? <AppStack /> : <AuthStack/> }
    </NavigationContainer>
  );
}
