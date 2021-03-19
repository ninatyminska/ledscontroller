import React from 'react';
import { View, ImageBackground } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import background from '../assets/background.png';
import { styles } from '../utils/styles';
import { rgbVal } from '../utils/led-functions';
import { useIp } from '../utils/ip-context';

export default function WaveScreen() {
	const { ip } = useIp();

	return (
		<View style={[styles.container, styles.flex]}>
			<ImageBackground source={background} style={[styles.background, styles.flex]}>
				<ColorPicker hideSliders={1} onColorSelected={color => rgbVal(ip, color, 'wave')} style={styles.flex} />
			</ImageBackground>
		</View>
	);
}