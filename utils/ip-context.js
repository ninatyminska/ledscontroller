import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IpContext = createContext(0);
export const useIp = () => useContext(IpContext);

export const IpContextProvider = ({ children }) => {
	const [ip, setIp] = useState(0);

	const changeIp = (value) => {
		setIp(value);
	};

	useEffect(() => {
		if (ip !== 0) {
			AsyncStorage.setItem('WEMOS_IP', `${ip}`);
		}
	}, [ip]);

	useEffect(() => {
		AsyncStorage.getItem('WEMOS_IP')
			.then((value) => {
				setIp(value !== 'null' ? value : '192.168.1.13');
			});
	}, []);

	return (
		<IpContext.Provider
			value={{
				ip,
				changeIp,
			}}>
			{children}
		</IpContext.Provider>
	);
};
