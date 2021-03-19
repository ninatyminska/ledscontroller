import React from 'react';
import { Image, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import background from '../assets/background.png';
import rainbow from '../assets/rainbow.png';
import wind from '../assets/wind.png';
import color from '../assets/pipette.png';
import off from '../assets/off.png';
import { styles } from '../utils/styles';
import { rainbowOn, ledsOff } from '../utils/led-functions';
import { useIp } from '../utils/ip-context';

export default function HomeScreen({ navigation }) {
	const { ip } = useIp();

	return (
		<View style={[styles.container, styles.flex]}>
			<ImageBackground source={background} style={[styles.background, styles.flex]}>
				<View style={[styles.boxesContainer, styles.flex, styles.boxes1]}>
					<TouchableOpacity style={[styles.box, styles.shadow, styles.boxRainbow]} onPress={() => rainbowOn(ip)}>
						<Image style={styles.logo} source={rainbow} />
						<Text style={styles.boxTxt}>.rainbow</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.box, styles.shadow, styles.boxColor]} onPress={() => navigation.navigate('.color')}>
						<Image style={styles.logo} source={color} />
						<Text style={styles.boxTxt}>.color</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.boxesContainer, styles.flex, styles.boxes2]}>
					<TouchableOpacity style={[styles.box, styles.shadow, styles.boxWave]} onPress={() => navigation.navigate('.wave')}>
						<Image style={styles.logo} source={wind} />
						<Text style={styles.boxTxt}>.wave</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.box, styles.shadow, styles.boxOff]} onPress={() => ledsOff(ip)}>
						<Image style={styles.logo} source={off} />
						<Text style={styles.boxTxt}>.off</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}