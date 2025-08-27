import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SelectBankScreen from './src/screens/SelectBankScreen';
import AddListExpenses from './src/screens/AddListExpensesScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Select" component={SelectBankScreen} />
        <Stack.Screen name="AddExpenses" component={AddListExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

