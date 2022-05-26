const contactForm = document.querySelector('.contact-form')
let sendername = document.getElementById('sendername');
let email = document.getElementById('email');
let message = document.getElementById('message');



contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let  formData= {
        membername: sendername.value,
        email: email.value,
        message: message.value
    }

    var base_url = window.location.origin;
			
		$.post(base_url + '/contact' ,formData, function (json) {
			console.log("Success")
		});

    
        let xhr = new XMLHttpRequest();
        xhr.open('POST','/',true);
        xhr.setRequestHeader('content-type','application/json');
        xhr.onload = function(){
            //  console.log(xhr.responseText);
            if(xhr.responseText == 'success') {
                alert('Email Sent');
                sendername.value = '';
                email.value = '';
                message.value = '';
            }
    else{
            }
        }
        xhr.send(JSON.stringify(formData));


})

