import firstScreen from "./componnents/firstScreen";
import SecondScreen from "./componnents/secondScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="firstScreen" component={firstScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
