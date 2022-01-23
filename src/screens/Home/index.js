import React from 'react';
import {View, Button, Pressable, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from '../../constants/app_constant';

function Home() {
	const tailwind = useTailwind();
	const navigation = useNavigation();

	const custom_navigate = route_name => {
		console.log('abc');
		navigation.navigate(route_name);
	};

	return (
		<View style={tailwind('flex-1 justify-center items-center')}>
			<Button
				title="Native Base Components"
				onPress={() => custom_navigate(ROUTES.NATIVEBASE)}
			/>

			<View style={tailwind('my-1')} />

			<Button title="Native Components" onPress={() => custom_navigate(ROUTES.NATIVE)} />
		</View>
	);
}

export default Home;
