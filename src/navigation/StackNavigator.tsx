import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '../modules/dashboard/screens/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserListScreen } from '../modules/user/screens/UserListScreen';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard' >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="User" component={UserListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
