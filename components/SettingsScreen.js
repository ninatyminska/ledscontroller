import React from 'react';
import { View, ImageBackground } from 'react-native';
import background from '../assets/background.png';
import { styles } from '../utils/styles';

import Input from './Input';

export default function ColorScreen() {
	return (
		<View style={[styles.container, styles.flex]}>
			<ImageBackground source={background} style={[styles.background, styles.flex]}>
				<Input />
			</ImageBackground>
		</View>
	);
}