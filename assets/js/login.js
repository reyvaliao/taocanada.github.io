window.membersEmail = new Map();



async function getEmails() {
    const response = await fetch('https://taocanada.ca:8080/api/members/emails', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json();
}
(function () {
    "use strict";
    let isLoggedin = false;
    getEmails().then((data) => {
        data.msg.forEach(v => {
            window.membersEmail.set(v.email, v.email)
        })
    })
    const token = document.cookie.split(';').find(value => value.includes('oken'))
    if (token) {
        isLoggedin = true
        const name = window.atob(token.trim().substring(6)).split('-')[0];
        window.location.href = './index.html';


    }

    document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.error-message').style.display = "none"
        const email = document.querySelector('form').elements[0].value
        const password = document.querySelector('form').elements[1].value


        login(email, password).then((data) => {
            console.log(data)
            if (data.code === 200) {
                document.cookie = "token=" + data.msg;
                window.location.href = './members-restricted.html'

            } else {
                document.querySelector('.error-message').textContent = "Username and Password is incorrect"
                document.querySelector('.error-message').style.display = "block"
            }
        })

    })
})();


async function loginFromGoogle(email) {

    const response = await fetch('https://taocanada.ca:8080/loginEmail', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ email: email }), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
async function login(email, password) {
    const response = await fetch('https://taocanada.ca:8080/login', {

        const response = await fetch('https://taocanada.ca:8080/login', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ email: email, password: password }), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
function createRow(member) {
            const rowEl = document.createElement("tr")
            const nameEl = document.createElement("td")
            nameEl.textContent = member.name
            const numberEl = document.createElement("td")
            numberEl.textContent = member.email
            const dateEl = document.createElement("td")
            dateEl.textContent = member.dateArrived

            rowEl.appendChild(nameEl)
            rowEl.appendChild(numberEl)
            rowEl.appendChild(dateEl)
            const tableEl = document.querySelector("#membersTpl")

            tableEl.appendChild(rowEl)

        }
function handleCredentialResponse(googleUser) {
            document.querySelector('.error-message').style.display = "none"
            const responsePayload = decodeJwtResponse(googleUser.credential);
            loginFromGoogle(responsePayload.email).then(data => {
                console.log(data)
                if (data.code === 200) {
                    document.cookie = "token=" + data.msg;
                    window.location.href = './members-restricted.html'
                } else {
                    document.querySelector('.error-message').textContent = "Username and Password is incorrect"
                    document.querySelector('.error-message').style.display = "block"
                }
            })
        }
function signOut() {

            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        }
function decodeJwtResponse(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }
// 