
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