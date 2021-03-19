import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import ledStrip from '../assets/led-strip.png';
import settings from '../assets/settings.png';
import { styles } from '../utils/styles';

export default function LogoTitle(props) {
	return (
		<View style={[styles.logoContainer, props.settings && styles.logoContainerSettings, styles.flex]}>
			<View style={[styles.logoContainer, styles.flex]}>
				<Image style={[styles.logo, props.marginLeft && styles.logoSubPage]} source={ledStrip} />
				<Text style={styles.logoTxt}>{props.title}</Text>
			</View>
			{props.settings && (
				<TouchableOpacity style={styles.settings} onPress={() => props.navigation.navigate('.settings')} >
					<Image style={styles.settings} source={settings} />
				</TouchableOpacity>
			)}
		</View>
	);
}