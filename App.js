import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from './utils/styles';

import AppLoading from 'expo-app-loading';

import HomeScreen from './components/HomeScreen';
import LogoTitle from './components/LogoTitle';
import ColorScreen from './components/ColorScreen';
import WaveScreen from './components/WaveScreen';
import SettingsScreen from './components/SettingsScreen';

import { IpContextProvider } from './utils/ip-context';

import {
	useFonts,
	Nunito_400Regular,
	Nunito_600SemiBold,
	Nunito_700Bold,
} from '@expo-google-fonts/nunito';

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_600SemiBold,
		Nunito_700Bold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<IpContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='.ledsController'>
						<Stack.Screen name='.ledsController' component={HomeScreen} options={({ route, navigation }) => ({ headerTitle: () => <LogoTitle title={route.name} navigation={navigation} settings={true} />, headerStyle: [styles.header, styles.shadow], headerTintColor: '#FD016D' })} />
						<Stack.Screen name='.wave' component={WaveScreen} options={({ route }) => ({ headerTitle: () => <LogoTitle title={route.name} marginLeft={true} />, headerStyle: [styles.header, styles.shadow], headerTintColor: '#FD016D' })} />
						<Stack.Screen name='.color' component={ColorScreen} options={({ route }) => ({ headerTitle: () => <LogoTitle title={route.name} marginLeft={true} />, headerStyle: [styles.header, styles.shadow], headerTintColor: '#FD016D' })} />
						<Stack.Screen name='.settings' component={SettingsScreen} options={({ route }) => ({ headerTitle: () => <LogoTitle title={route.name} marginLeft={true} />, headerStyle: [styles.header, styles.shadow], headerTintColor: '#FD016D' })} />
					</Stack.Navigator>
				</NavigationContainer>
			</IpContextProvider>
		);
	}
}