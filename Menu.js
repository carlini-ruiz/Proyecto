import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import INICIO from "./Inicio";
import PANTALLAB from "./Pantallab"
import PantallaA from './PantallaA';
import ALTAS from './Altas';
import ID from './Id';
import BAJAS from './Bajas';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={INICIO} />
        <Stack.Screen name="Pantallab" component={PANTALLAB}/>
        <Stack.Screen name="PantallaA" component={PantallaA}/> 
        <Stack.Screen name="Altas" component={ALTAS}  /> 
        <Stack.Screen name="Id" component={ID}/> 
        <Stack.Screen name="Bajas" component={BAJAS}
        options={{headerBackVisible : false} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
