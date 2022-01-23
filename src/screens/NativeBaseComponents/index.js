import React, {useState} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Box, Select, Input} from 'native-base';

function Home() {
	const tailwind = useTailwind();

	const [input_text, set_input_text] = useState('');

	return (
		<View style={tailwind('flex-1 p-3')}>
			<Box flex={1}>
				<Select
					minWidth="200"
					accessibilityLabel="Choose Service"
					placeholder="Choose Service"
					mt={1}
					onValueChange={itemValue => console.log(itemValue)}>
					<Select.Item label="UX Research" value="ux" />
					<Select.Item label="Web Development" value="web" />
					<Select.Item label="Cross Platform Development" value="cross" />
					<Select.Item label="UI Designing" value="ui" />
					<Select.Item label="Backend Development" value="backend" />
				</Select>

				<Input
					my="3"
					placeholder="Input"
					onChangeText={text => set_input_text(text)}
					value={input_text}
				/>

				<Input
					my="3"
					placeholder="Input"
					onChangeText={text => set_input_text(text)}
					value={input_text}
				/>
			</Box>
		</View>
	);
}

export default Home;
