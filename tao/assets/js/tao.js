const members = [
    ["Aboy, Nilo Y", "7805041330"],
    ["Aguila, Rico C.", "9059734929"],
    ["Alejandria, Ryan Cabariban", "16473368832"],
    ["Ayeng Eujen G.", "6479918286"],
    ["Balsomo Rodel G", "6478878098"],
    ["Barlaan, Noel P", "6479886572"],
    ["Barnachea, Manuel jr H", "6472281367"],
    ["Barredo , Paolo Sofio C.", "14378385355"],
    ["Base,Ronald C", "6474258480"],
    ["Benito, Don B", "9053413688"],
    ["Berania jonathan p", "16472370031"],
    ["Bolocon , Sergio ,Obregon", "17055390148"],
    ["BROD. DIONEDA RONNIE M.", "4167272490"],
    ["Calderon, Mike Jimbo", "4379745212"],
    ["Carmelo Valmadrid", "6475426501"],
    ["Cayamanda, Harry", "6478226192"],
    ["Chris Canete", "4373483163"],
    ["Cimafranca Ric S", "6477812483"],
    ["Cinco, Ronald B.", "2898283251"],
    ["Cristine Rocky", "4379701479"],
    ["Dela Pena Bay", "4058648270"],
    ["Dimaranan Romelito G", "6478038177"],
    ["Ecraela, John Steven R", "6475446232"],
    ["Evangelista, Ronald I.", "4374505652"],
    ["Faller Ramon L", "2898344796"],
    ["Francis alexis mercado dela cruz", "905617077"],
    ["Frederick 'Riki' Rosales", "19052468806"],
    ["Garcia, Prince Eduard ADAW", "4372638656"],
    ["Guyyoche Neil Reyes", "4168784068"],
    ["Ipurong, Charlene, N", "6472221565"],
    ["Jayvy Tamayo Q", "4378751238"],
    ["Jeffrey Dacula", "6475401966"],
    ["Juanico David  T.", "14379847933"],
    ["Laqui, Jonatan Mendoza ", "4372212224"],
    ["Lucy de Ocampo ", "2894425047"],
    ["Maliwanag, Emuell M.", "4372972933"],
    ["Mangaliman Dharrell V", "16477874529"],
    ["Mark Anthony Julian", "6476151179"],
    ["Miranda Nestor Jr. C", "12894898176"],
    ["Ningala, Eric Jones G", "4375994865"],
    ["Pacis, Ferdinand R", "6478352128"],
    ["Palafox, Charlie Melvin", "5195041143"],
    ["PINEDA JR  DIEGO ", "5146610174"],
    ["Ponce Romel A.", "4167108596"],
    ["Prudencio, Jeol R.", "14168854945"],
    ["Ramos,Edgar A.", "9054645749"],
    ["Roales ,Leohood Reyes", "14376676254"],
    ["Sales, Eric", "647293021313"],
    ["Sales, Sandro", "19057833371"],
    ["simbahan, jonathan s.", "4169491810"],
    ["Teddy David Apolonio", "6479360318"],
    ["Torres, Jan Luigi , Trinidad", "6478352222"],
    ["Valiao,Reynaldo D", "4373244030"],
    ["Velasco, Joselito M.", "17806555126"],
    ["Villaverde, Nelson C", "4168418011"],
    ["zapata jeanette castro", "4379724482"],
    ["Sheldom J Maddox", "19053188604"],
    ["Dexter H. Godenez", "4168970906"]
];
(function () {
    "use strict";
    const tableEl = document.querySelector("#membersTpl")
    members.forEach(createRow)
    // createRow(['foo', 'bar'])

})();
function createRow(member) {
    const rowEl = document.createElement("tr")
    const nameEl = document.createElement("td")
    nameEl.textContent = member[0]
    const numberEl = document.createElement("td")
    numberEl.textContent = member[1]
    rowEl.appendChild(nameEl)
    rowEl.appendChild(numberEl)
    membersTpl.appendChild(rowEl)

}