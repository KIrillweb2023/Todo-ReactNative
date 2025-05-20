import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import SettingsScreen from './app/screens/SettingsScreen/SettingsScreen';


import "./global.css"
import Head from './app/components/Head/Head';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View className="h-screen w-full">
        <StatusBar style='auto' />
      

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">

            <Stack.Screen options={{ headerTitle: (props) => <Head {...props}/> }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />

          </Stack.Navigator>
        </NavigationContainer>

     
    </View>
  );
}

