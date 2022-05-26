const registerForm = document.querySelector('.register-form')
let membername = document.getElementById('membername');
let password = document.getElementById('password');
let email = document.getElementById('email');


registerForm.addEventListener('register-button', (e) =>{
    e.preventDefault();

    let  userData= {
        membername: membername.value,
        password: password.value,
        email:email.value
    }

    var base_url = window.location.origin;
			
		$.post(base_url + '/register' ,userData, function (json) {
			console.log("Success")
		});

    })