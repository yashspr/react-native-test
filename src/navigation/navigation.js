import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/app_constant';

/* Screens */
import HomeScreen from '../screens/Home/index';
import NativeBaseScreen from '../screens/NativeBase/index';
import NativeComponents from '../screens/NativeComponents';

const Stack = createNativeStackNavigator();

function AppNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
			<Stack.Screen name={ROUTES.NATIVEBASE} component={NativeBaseScreen} />
			<Stack.Screen name={ROUTES.NATIVE} component={NativeComponents} />
		</Stack.Navigator>
	);
}

export default AppNavigation;
