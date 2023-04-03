// redirect to homepage if user logged in
window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if (comapreToken(user.authToken, user.email)) {
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if (name != null) { //signup page
        if (name.value.length < 3) {
            showAlert('name must be 3 letters long');
        } else if (!email.value.length) {
            showAlert('enter your email');
        } else if (password.value.length < 8) {
            showAlert('password should be 8 letters long');
        } else if (!number.value.length) {
            showAlert('enter your phone number')
        } else if (!Number(number.value) || number.value.length < 10) {
            showAlert('invalid number, please enter a valid number');
        } else if (!tac.checked) {
            showAlert('you must agree to our terms and condition');
        } else {
            loader.style.display = 'block';
            sendData('/signup', {
                "name": name.value,
                "email": email.value,
                "password": password.value,
                "number": number.value,
                "tac": tac.value,
                "notification": notification.value,
                "seller": false
            })
        }
    } else {
        // login page
        if(!email.value.length || !password.value.length){
            showAlert('fill all the inputs');
        } else{
            loader.style.display = 'block';
            sendData('/login', {
                "email": email.value,
                "password": password.value,
            })
        }
    }
})

// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
    }).then((res) => res.json())
        .then(response => {
            processData(response);
        })
}

const processData = (data) => {
    loader.style.display = null;
    if (data.alert) {
        showAlert(data.alert);
    } else if (data.name) {
        // create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show')
    setTimeout(() => {
        alertBox.classList.remove('show')
    }, 3000);
}