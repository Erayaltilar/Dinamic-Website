const loginForm = document.querySelector('.login-form')
let sendername = document.getElementById('username');
let password = document.getElementById('password');


loginForm.addEventListener('login-button', (e) =>{
    e.preventDefault();

    let  userData= {
        membername: membername.value,
        password: password.value,
        email:email.value
    }

    var base_url = window.location.origin;
			
		$.post(base_url + '/login' ,userData, function (json) {
			console.log("Success")
		});

    })