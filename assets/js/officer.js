const officers = [
    {
        name: 'Dexter Godenez',
        position: 'Chairman',
        image: 'dex.jpg'
    }, {
        name: 'Ronnie Madelo Dioneda',
        position: 'Vice Chairman',
        image: 'ronnie.jpg'
    }, {
        name: 'Ferdinand Pacis',
        position: 'Secretary',
        image: 'ferdi.jpg'
    }, {
        name: 'Reynaldo Bhoy Valiao',
        position: 'Director of Membership',
        image: 'boy.jpg'
    }, {
        name: 'Thed Bulado',
        position: 'Asst. Director of Membership',
        image: 'thed.jpg'
    }, {
        name: 'Joel Prudencio',
        position: 'Asst. Director of Membership',
        image: 'joel.jpg'
    }, {
        name: 'Lucila De Ocampo',
        position: 'Treasurer',
        image: 'lucy.jpg'
    }, {
        name: 'Roelle Manangkil',
        position: 'Asst. Treasurer',
        image: 'roelle.jpg'
    }, {
        name: 'Ronnie Vital',
        position: 'Auditor',
        image: 'ronniev.jpg'
    }, {
        name: 'Bing Agana',
        position: 'Fund Raising Coordinator',
        image: 'bing.jpg'
    }, {
        name: 'Macky Julian',
        position: 'Sports & Events Coordinator',
        image: 'macky.jpg'
    }, {
        name: 'Jonathan Simbahan',
        position: 'Asst. Sports & Events Coordinator',
        image: 'jonathan.jpg'
    }, {
        name: 'Eujen Ayeng',
        position: 'Media & Documentation Coordinator',
        image: 'eujeny.png'
    },
]
function createOfficer(officer) {

    const cardEl = document.createElement("div")
    cardEl.classList.add('card')

    const imgEl = document.createElement("img")
    imgEl.src = "./assets/img/officers/" + officer.image;
    imgEl.classList.add('card-img-top')

    const cardBodyEl = document.createElement("div")
    cardBodyEl.classList.add('card-body')

    const nameEl = document.createElement("h5")
    nameEl.textContent = officer.name

    const positionEl = document.createElement("h6")
    positionEl.textContent = officer.position


    cardBodyEl.appendChild(nameEl)
    cardBodyEl.appendChild(positionEl)
    cardEl.appendChild(imgEl);
    cardEl.appendChild(cardBodyEl)
    const officerEl = document.querySelector(".officer-section")

    officerEl.appendChild(cardEl)
}
(function () {

    // const name = window.atob(document.cookie.split(';')[2].substring(6)).split('-')[0];
    let isLoggedin = false;

    const token = document.cookie.split(';').find(value => value.includes('oken'))
    if (!token) {
        // window.location.href = './login.html'
    } else {
        isLoggedin = true
        document.querySelector('.portal-btn').textContent = "Logout"
        // window.location.href ='./login.html'
    }
    //populate officers
    officers.forEach(createOfficer);

    document.querySelector('.portal-btn').addEventListener('click', function () {
        if (isLoggedin) {
            const cookies = document.cookie.split(";");

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
            window.location.href = './index.html';
        } else {
            window.location.href = './login.html';
        }
    })
})();