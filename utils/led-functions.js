import tinycolor from 'tinycolor2';

export function rainbowOn(ip) {
	fetch(`http://${ip}/rainbow?fade=3000`, {
		method: 'GET'
	}).catch((error) => {
		console.error(error);
	});
}

export function ledsOff(ip) {
	fetch(`http://${ip}/ledsoff?fade=1000`, {
		method: 'GET'
	}).catch((error) => {
		console.error(error);
	});
}

export function rgbVal(ip, color, mode) {
	const rgb = Object.values(tinycolor(color).toRgb());

	if (mode === 'wave') {
		setWave(ip, rgb[0], rgb[1], rgb[2]);
	} else {
		setColor(ip, rgb[0], rgb[1], rgb[2]);
	}
}

export function setWave(ip, r, g, b) {
	fetch(`http://${ip}/wave?r=${r}&g=${g}&b=${b}&fade=1000`, {
		method: 'GET'
	}).catch((error) => {
		console.error(error);
	});
}

export function setColor(ip, r, g, b) {
	fetch(`http://${ip}/setleds?r=${r}&g=${g}&b=${b}&fade=1000`, {
		method: 'GET'
	}).catch((error) => {
		console.error(error);
	});
}