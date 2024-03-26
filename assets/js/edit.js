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
    requiredFields.forEach(v => {
        document.querySelector('#' + v).classList.remove('is-invalid');
        if (document.querySelector('#' + v).value.length === 0) {
            document.querySelector('#' + v).classList.add('is-invalid');
            valid = false;
        }

    })

    valid = requiredFields.some(v => {
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
        data.append('id', document.querySelector('#id').value);
        data.append('email', document.querySelector('#email').value);
        data.append('photo', document.getElementById("photo").files[0])
        if (document.getElementById("col").files[0])
            data.append('col', document.getElementById("col").files[0])
        if (document.getElementById("pop").files[0])
            data.append('pop', document.getElementById("pop").files[0])


        editMember(data).then((data) => {
            console.log(data)
            if (data.code === 200) {
                document.querySelector('.sent-message').textContent = "You have successfully updated your account"
                document.querySelector('.sent-message').style.display = "block"


            } else {
                document.querySelector('.error-message').textContent = "Username and Password is incorrect"
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
    document.querySelector('.sent-message').style.display = "none"
    let isLoggedin = false;

    // const token = true
    const token = document.cookie.split(';').find(value => value.includes('oken'))
    if (token) {
        isLoggedin = true;
        const email = window.atob(token.trim().substring(6)).split('-').pop();

        getMemberEmail(email).then(data => {
            if (!Object.keys(data).length) {
                return;
            }
            const member = data;
            requiredFields.filter(v => (v !== 'col' && v !== 'photo')).forEach(v => {
                if (datesFields.includes(v)) {
                    document.querySelector('#' + v).value = (new Date(member[v])).toLocaleDateString("en-US");
                } else {
                    document.querySelector('#' + v).value = member[v]
                }


            })
            document.querySelector('#id').value = member['id'];
            document.querySelector('#email').value = member['email']
            // document.querySelector('#photo').value = 'none.jpg'
        })
    } else {
        window.location.href = "././login"
    }


    document.querySelector('button[type="submit"]').addEventListener('click', checkForms)


})();

async function editMember(data) {
    // const response = await fetch('https://taocanada.ca:8080/api/members/' + document.querySelector('#id').value, {

    const response = await fetch('https://taocanada.ca:8080/api/members/' + document.querySelector('#id').value, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
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


async function getMemberEmail(email) {
    const params = (new URL(document.location)).searchParams
    // const response = await fetch('https://taocanada.ca:8080/api/members/' + params.id, {
    const response = await fetch('https://taocanada.ca:8080/api/members/email?' + new URLSearchParams({ email }), {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // token: token
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
