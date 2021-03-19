import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import { ipReg } from '../utils/regex';
import { styles } from '../utils/styles';
import { useIp } from '../utils/ip-context';

function validate(val) {
	if (ipReg.test(val)) {
		return true;
	} else {
		return false;
	}
};

export default function Input() {
	const { ip, changeIp } = useIp();

	const [newIp, setNewIp] = useState('');
	const [valid, setValid] = useState(false);

	return (
		<View style={[styles.container, styles.flex]}>
			<Text style={styles.settingsTxt}>In order to change IP, please provide <Text style={valid ? styles.valid : styles.invalid}>valid</Text> value below, then click 'Set IP' button:</Text>
			<TextInput
				style={[styles.settingsInput, valid ? styles.valid : styles.invalid, valid ? styles.validBorder : styles.invalidBorder]}
				placeholder={'Current IP: ' + ip} placeholderTextColor={valid ? '#04b304' : '#ff0000'}
				keyboardType='number-pad'
				maxLength={12}
				onChangeText={value => {
					setValid(validate(value));
					setNewIp(value);
				}} 
				value={newIp}
			/>
			<View style={styles.settingsBtnView}>
				<Button
					disabled={!valid}
					onPress={() => {
						changeIp(newIp);
						setNewIp('');
						setValid(false);
					}}
					title="Set IP"
					color="#841584"
					accessibilityLabel="Set IP for WeMos D1"
				/>
			</View>
		</View>
	);
}