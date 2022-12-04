/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import Records from './screens/Records';

const Stack = createNativeStackNavigator();


const App = () => {
  

  return (
    <>
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'E-levy Calculator',headerStyle: {
            backgroundColor: '#347deb',
            
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         }}
        />
        <Stack.Screen
         name="Records" 
         options={{ title: 'Your Records',headerStyle: {
          backgroundColor: '#347deb',
          
        }, }}
         component={Records} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
    </>
  );
};



export default App;
