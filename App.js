import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SingleCardView from './screens/SingleCardView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Defining Navigator
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='SingleCardView' component={SingleCardView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
