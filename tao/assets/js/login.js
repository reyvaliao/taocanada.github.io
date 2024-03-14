const allowedEmails = new Map();
['ferdisicap2toronto@gmail.com',
    'niagaratriskelion1968@gmail.com',
    'rayval2012@gmail.com',
    'rosales.yt184@gmail.com'].forEach(email => {
        allowedEmails.set(email, email);
    })
const members = [{ "Id": 3, "Name": "Aguila, Rico C.", "date": "5/2/2018", "email": null, "number": "9059734929" }, { "Id": 4, "Name": "Benito, Don B", "date": "4/28/2022", "email": null, "number": "9053413688" }, { "Id": 5, "Name": "Alejandria, Ryan Cabariban", "date": "8/26/2022", "email": null, "number": "16473368832" }, { "Id": 6, "Name": "Aboy, Nilo Y", "date": "12/12/2018", "email": null, "number": "7805041330" }, { "Id": 7, "Name": "Ayeng Eujen G.", "date": "4/16/2023", "email": null, "number": "6479918286" }, { "Id": 8, "Name": "Base,Ronald C", "date": "4/5/2012", "email": null, "number": "6474258480" }, { "Id": 9, "Name": "Barlaan, Noel P", "date": "9/18/2005", "email": null, "number": "6479886572" }, { "Id": 10, "Name": "Barnachea, Manuel jr H", "date": "7/29/2023", "email": null, "number": "6472281367" }, { "Id": 11, "Name": "BROD. DIONEDA RONNIE M.", "date": "9/9/2000", "email": null, "number": "4167272490" }, { "Id": 12, "Name": "Bolocon , Sergio ,Obregon", "date": "1/31/2024", "email": null, "number": "17055390148" }, { "Id": 13, "Name": "Barredo , Paolo Sofio C.", "date": "1/1/2023", "email": null, "number": "14378385355" }, { "Id": 14, "Name": "Balsomo Rodel G", "date": "2/17/2007", "email": null, "number": "6478878098" }, { "Id": 15, "Name": "Calderon, Mike Jimbo", "date": "8/7/2022", "email": null, "number": "4379745212" }, { "Id": 16, "Name": "Carmelo Valmadrid", "date": "6/17/2015", "email": null, "number": "6475426501" }, { "Id": 17, "Name": "Cayamanda, Harry", "date": "10/4/2007", "email": null, "number": "6478226192" }, { "Id": 18, "Name": "Berania jonathan p", "date": "8/10/2010", "email": null, "number": "16472370031" }, { "Id": 19, "Name": "Chris Canete", "date": "10/10/2010", "email": null, "number": "4373483163" }, { "Id": 20, "Name": "Cimafranca Ric S", "date": "9/2/2020", "email": null, "number": "6477812483" }, { "Id": 21, "Name": "Cinco, Ronald B.", "date": "6/12/2018", "email": null, "number": "2898283251" }, { "Id": 22, "Name": "Dela Pena Bay", "date": "8/28/1998", "email": null, "number": "4058648270" }, { "Id": 23, "Name": "Dimaranan Romelito G", "date": "12/28/2017", "email": null, "number": "6478038177" }, { "Id": 24, "Name": "Cristine Rocky", "date": "01/12/2022", "email": null, "number": "4379701479" }, { "Id": 25, "Name": "Ecraela, John Steven R", "date": "4/29/2019", "email": null, "number": "6475446232" }, { "Id": 26, "Name": "Evangelista, Ronald I.", "date": "6/25/2010", "email": null, "number": "4374505652" }, { "Id": 27, "Name": "Faller Ramon L", "date": "2/7/2015", "email": null, "number": "2898344796" }, { "Id": 28, "Name": "Frederick 'Riki' Rosales", "date": "1/1/2015", "email": null, "number": "19052468806" }, { "Id": 29, "Name": "Garcia, Prince Eduard ADAW", "date": "11/29/2021", "email": null, "number": "4372638656" }, { "Id": 30, "Name": "Guyyoche Neil Reyes", "date": "10/5/2023", "email": null, "number": "4168784068" }, { "Id": 31, "Name": "Francis alexis mercado dela cruz", "date": "4/27/2008", "email": null, "number": "905617077" }, { "Id": 32, "Name": "Ipurong, Charlene, N", "date": "2/10/2020", "email": null, "number": "6472221565" }, { "Id": 33, "Name": "Jayvy Tamayo Q", "date": "1/23/2024", "email": null, "number": "4378751238" }, { "Id": 34, "Name": "Juanico David  T.", "date": "10/28/2008", "email": null, "number": "14379847933" }, { "Id": 35, "Name": "Jeffrey Dacula", "date": "11/29/2020", "email": null, "number": "6475401966" }, { "Id": 36, "Name": "Laqui, Jonatan Mendoza ", "date": "8/8/2023", "email": null, "number": "4372212224" }, { "Id": 37, "Name": "Lucy de Ocampo ", "date": "5/16/1986", "email": null, "number": "2894425047" }, { "Id": 38, "Name": "Mangaliman Dharrell V", "date": "9/8/2023", "email": null, "number": "16477874529" }, { "Id": 39, "Name": "Mark Anthony Julian", "date": "3/5/2023", "email": null, "number": "6476151179" }, { "Id": 40, "Name": "Maliwanag, Emuell M.", "date": "12/11/2023", "email": null, "number": "4372972933" }, { "Id": 41, "Name": "Ningala, Eric Jones G", "date": "5/1/2023", "email": null, "number": "4375994865" }, { "Id": 42, "Name": "Pacis, Ferdinand R", "date": "12/17/2012", "email": null, "number": "6478352128" }, { "Id": 43, "Name": "Palafox, Charlie Melvin", "date": "2/28/2018", "email": null, "number": "5195041143" }, { "Id": 44, "Name": "PINEDA JR  DIEGO ", "date": "7/7/2007", "email": null, "number": "5146610174" }, { "Id": 45, "Name": "Miranda Nestor Jr. C", "date": "3/17/2009", "email": null, "number": "12894898176" }, { "Id": 46, "Name": "Prudencio, Jeol R.", "date": "6/10/1968", "email": null, "number": "14168854945" }, { "Id": 47, "Name": "Ponce Romel A.", "date": "8/8/1998", "email": null, "number": "4167108596" }, { "Id": 48, "Name": "Roales ,Leohood Reyes", "date": "9/8/2014", "email": null, "number": "14376676254" }, { "Id": 49, "Name": "Sales, Eric", "date": "6/1/2015", "email": null, "number": "647293021313" }, { "Id": 50, "Name": "Ramos,Edgar A.", "date": "5/6/2016", "email": null, "number": "9054645749" }, { "Id": 51, "Name": "Teddy David Apolonio", "date": "3/17/2017", "email": null, "number": "6479360318" }, { "Id": 52, "Name": "simbahan, jonathan s.", "date": "1/1/1997", "email": null, "number": "4169491810" }, { "Id": 53, "Name": "Valiao,Reynaldo D", "date": "10/22/2003", "email": null, "number": "4373244030" }, { "Id": 54, "Name": "Torres, Jan Luigi , Trinidad", "date": "7/8/2008", "email": null, "number": "6478352222" }, { "Id": 55, "Name": "Velasco, Joselito M.", "date": "10/12/2012", "email": null, "number": "17806555126" }, { "Id": 56, "Name": "Sales, Sandro", "date": "2/23/2012", "email": null, "number": "19057833371" }, { "Id": 57, "Name": "Dexter H. Godenez", "date": "12/12/2023", "email": null, "number": "4168970906" }, { "Id": 58, "Name": "Sheldom J Maddox", "date": "5/29/2023", "email": null, "number": "19053188604" }, { "Id": 59, "Name": "zapata jeanette castro", "date": "12/12/1900", "email": null, "number": "4379724482" }, { "Id": 60, "Name": "Villaverde, Nelson C", "date": "1/30/2024", "email": null, "number": "4168418011" }];

(function () {
    "use strict";
    // const tableEl = document.querySelector("#membersTpl")
    // members.forEach(createRow)
    // document.querySelector(".members table").classList.add('show')
    // createRow(['foo', 'bar'])
    // const tableEl = document.querySelector("#membersTpl")
    // members.forEach(createRow);
    // document.querySelector(".members table").classList.add('show')
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
async function login(email, password) {

    const response = await fetch('http://localhost:8080/login', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
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
    nameEl.textContent = member.Name
    const numberEl = document.createElement("td")
    numberEl.textContent = member.number
    const dateEl = document.createElement("td")
    dateEl.textContent = member.date

    rowEl.appendChild(nameEl)
    rowEl.appendChild(numberEl)
    rowEl.appendChild(dateEl)
    const tableEl = document.querySelector("#membersTpl")

    tableEl.appendChild(rowEl)

}
function handleCredentialResponse(googleUser) {
    document.querySelector('.error-message').style.display = "none"
    const responsePayload = decodeJwtResponse(googleUser.credential);
    if (allowedEmails.get(responsePayload.email)) {
        document.cookie = "token=" + googleUser.credential;
        window.location.href = './members-restricted.html'
    } else {
        document.querySelector('.error-message').textContent = "Email is not included in Test Users"
        document.querySelector('.error-message').style.display = "block"
    }

    // console.log("ID: " + responsePayload.sub);
    // console.log('Full Name: ' + responsePayload.name);
    // console.log('Given Name: ' + responsePayload.given_name);
    // console.log('Family Name: ' + responsePayload.family_name);
    // console.log("Image URL: " + responsePayload.picture);
    // console.log("Email: " + responsePayload.email);
    // if (responsePayload.name) {
    //     const tableEl = document.querySelector("#membersTpl")
    //     members.forEach(createRow);
    //     document.querySelector(".members table").classList.add('show')
    // } else {
    //     document.querySelector(".members .col-lg-12").textContent("You need to login")

    // }
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