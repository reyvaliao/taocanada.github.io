
const requiredFields = [
    "name",
    "address",
    "phone",
    "employer",
    "dateArrived",
    "status",
    "photo",
    "emergency",
    "alexis",
    "rootChapter",
    "dateInitiated",
    "welcomeChapter",
    "dateWelcomed",
    "gt",
    "mi",
    "vouched",
    "batchmates"

];
const datesFields = [
    "dateArrived",
    "dateWelcomed",
    "dateInitiated"
]
function checkForms() {
    let valid = true;

    valid = [...requiredFields, email].some(v => {
        document.querySelector('#' + v).classList.remove('is-invalid');
        if (document.querySelector('#' + v).value.length === 0) {
            document.querySelector('#' + v).classList.add('is-invalid');
            return false;
        }
        return true;
    })
    if (valid) {

        const data = new FormData();
        requiredFields.filter(v => v !== 'col' && v !== 'photo').forEach(v => {
            data.append(v, document.querySelector('#' + v).value);
        })

        data.append('photo', document.getElementById("photo").files[0])
        if (document.getElementById("col").files[0])
            data.append('col', document.getElementById("col").files[0])
        if (document.getElementById("pop").files[0])
            data.append('pop', document.getElementById("pop").files[0])


        register(data).then((data) => {
            console.log(data)
            if (data.code === 200) {
                document.cookie = "token=" + data.msg;
                window.location.href = '././members'

            } else {
                document.querySelector('.error-message').textContent = data.msg
                document.querySelector('.error-message').style.display = "block"
            }
        })

    }
    document.querySelector('.error-message').textContent = ""
    if (!valid) {
        document.querySelector('.error-message').textContent = "Required field is missing"
    }
}
(function () {
    let isLoggedin = false;

    const token = document.cookie.split(';').find(value => value.includes('oken'))
    if (token) {
        isLoggedin = true;
        const name = window.atob(token.trim().substring(6)).split('-')[0];
        document.querySelector('#loggedInUser').textContent = name + " ";
        document.querySelector('.registration-form').style.display = 'none';
        document.querySelector('.registered').style.display = 'none';
    } else {
        document.querySelector('button[type="submit"]').addEventListener('click', checkForms)
        document.querySelector('.registered-user').style.display = 'none';
        document.querySelector('button[type="submit"]').addEventListener('click', checkForms)
    }

})();

async function register(data) {
    // const response = await fetch('https://taocanada.ca:8080/api/members', {

    const response = await fetch('https://taocanada.ca:8080/api/members', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        // headers: {
        //     "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: data // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}