import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function NativeComponentsScreen() {
	const tw = useTailwind();

	const [focussed_ele, set_focussed_ele] = useState(null);
	const [input_text, set_input_text] = useState('');

	return (
		<View style={tw('flex-1 p-4')}>
			<TextInput
				onChangeText={text => set_input_text(text)}
				value={input_text}
				placeholder="Enter some text"
				onFocus={() => set_focussed_ele('ele1')}
				onBlue={() => set_focussed_ele(null)}
				style={tw(
					`border border-gray-300 px-3 rounded-md ${
						focussed_ele === 'ele1' ? 'border-blue-400' : ''
					}`,
				)}
			/>

			<TextInput
				onChangeText={text => set_input_text(text)}
				value={input_text}
				placeholder="Enter some text"
				onFocus={() => set_focussed_ele('ele2')}
				onBlue={() => set_focussed_ele(null)}
				style={tw(
					`border border-gray-300 px-3 mt-4 rounded-md ${
						focussed_ele === 'ele2' ? 'border-blue-400' : ''
					}`,
				)}
			/>
		</View>
	);
}

export default NativeComponentsScreen;
