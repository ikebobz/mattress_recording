import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inputs from './Inputs';
import ListVw from './ListVw'
import ScrollVw from './ScrollVw' 
import Operatormgt from './Operatormgt'
import ViewEmployees from './ViewEmployees'
//import HeaderImage from './image';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
	<Stack.Navigator>
	<Stack.Screen 
	name="Home"
    component={ListVw}
    options={{ title: 'Home' }}
	/>
	<Stack.Screen name="Recording Centre" component={Inputs} />
	<Stack.Screen name="Reporting" component={ScrollVw} />
	<Stack.Screen name="Operator Infomgt" component={Operatormgt} />
	<Stack.Screen name="ViewEmployees" component={ViewEmployees} />
	</Stack.Navigator>
	</NavigationContainer>
  );
}

