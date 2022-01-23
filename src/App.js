import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import {NativeBaseProvider} from 'native-base';

import AppNavigation from './navigation/navigation';
import utilities from '../tailwind.json';

function App() {
	return (
		<TailwindProvider utilities={utilities}>
			<NativeBaseProvider>
				<NavigationContainer>
					<AppNavigation />
				</NavigationContainer>
			</NativeBaseProvider>
		</TailwindProvider>
	);
}

export default App;
