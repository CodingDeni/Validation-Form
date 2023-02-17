const form = document.getElementById('formulario');
const username = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('clave');
const password2 = document.getElementById('confirmacion');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs() {
	const usernameValue = username.value.trim(); // trim para quitar espacios en blanco
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	let usernameIsValid = true;
	let emailIsValid = true;
	let passwordIsValid = true;
	let password2IsValid = true; 

	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if(usernameValue === '') {
		setErrorFor(username, 'Rellene este campo');
		usernameIsValid = false;
	} else {
		setSuccessFor(username);
	}
	
	
	if(validEmail.test(emailValue)) {
		setSuccessFor(email);	
	} else if (emailValue === '') {
		setErrorFor(email, 'Rellene este campo');
		emailIsValid = false;
	} else {
		setErrorFor(email, 'Email inválido');
		emailIsValid = false;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Rellene este campo');
		password2IsValid = false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
		password2IsValid = false;
	} else{
		setSuccessFor(password2);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Rellene este campo');
		passwordIsValid = false;
	} else if(passwordValue.length > 8 ) {
		setErrorFor(password, 'No debe tener más de 8 caracteres');
		passwordIsValid = false;
	} else {
		setSuccessFor(password);
	}
	
	if (usernameIsValid && emailIsValid && passwordIsValid && password2IsValid) {
		alert("La inscripción ha sido correcta");
		formulario.reset();
	  }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formulario__grupo error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formulario__grupo success';
}