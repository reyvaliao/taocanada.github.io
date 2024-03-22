
//Meant for login and logout button in header`
(function () {
    "use strict";
    let isLoggedin = false;

    const token = document.cookie.split(';').find(value => value.includes('oken'))

    if (token) {
        isLoggedin = true;
        document.querySelector('.portal-btn').textContent = "Logout"
    }

    document.querySelector('.portal-btn').addEventListener('click', function () {
        if (isLoggedin) {
            const cookies = document.cookie.split(";");

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
            logout(token.substring(6)).then(data => {
                window.location.href = './index.html';
            })
        } else {
            window.location.href = './login.html';
        }
    })


})();

async function logout(token) {
    const response = await fetch('http://ec2-54-173-229-172.compute-1.amazonaws.com:8080/logout', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            token: token
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}