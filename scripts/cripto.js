function checkPassword(password){
/*	revisa que la contraseña cumpla:
	*al menos 8 caracteres
	*al menos una mayúscula y una minúscula
	*al menos un número
*/
	let caracteres = (password.length >= 8);
	let minmaj = /[A-Z]/.test(password) && /[a-z]/.test(password);
	let num = /[0-9]/.test(password);
	return (caracteres &&minmaj && num);
}

function encrypt(message, password){
	if(password === '' || message === '') return '';
	if(!checkPassword(password)){
		alert('La contraseña debe:\n-Ser alfanumérica\n-Tener al menos 8 caracteres\n-Tener al menos una mayúscula y una minúscula')
		return 'Contraseña no válida';
	}
	encrypted = CryptoJS.AES.encrypt(message, password);
	return encrypted;
}

function decrypt(message, password){
	return CryptoJS.AES.decrypt(message, password).toString(CryptoJS.enc.Utf8)
}