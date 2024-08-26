import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home/Home';
import Start from './Screens/Start/Start';
import ProductScreen from './Screens/Products/ProductsScreen';
import AuthenticationScreen from './Screens/Authentication/AuthenticationScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Authentication' component={AuthenticationScreen} />
          <Stack.Screen name='Start' component={Start} />
          <Stack.Screen name='Products' component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
