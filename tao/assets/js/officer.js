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
        image: 'Default-officer.jpg'
    }, {
        name: 'Joel Prudencio',
        position: 'Asst. Director of Membership',
        image: 'thed.jpg'
    }, {
        name: 'Lucila De Ocampo',
        position: 'Treasurer',
        image: 'lucy.jpg'
    }, {
        name: 'Roelle Manangkil',
        position: 'Asst. Treasurer',
        image: 'Default-officer.jpg'
    }, {
        name: 'Ronnie Vital',
        position: 'Auditor',
        image: 'Default-officer.jpg'
    }, {
        name: 'Bing Agana',
        position: 'Fund Raising Coordinator',
        image: 'Default-officer.jpg'
    }, {
        name: 'Macky Julian',
        position: 'Sports & Events Coordinator',
        image: 'Default-officer.jpg'
    }, {
        name: 'Jonathan Simbahan',
        position: 'Asst. Sports & Events Coordinator',
        image: 'Default-officer.jpg'
    }, {
        name: 'Eujen Ayeng',
        position: 'Media & Documentation Coordinator',
        image: 'Default-officer.jpg'
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

    //populate officers
    officers.forEach(createOfficer);
})();