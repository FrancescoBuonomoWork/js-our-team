console.log("Team");

const containerDOMElement = document.querySelector(".container");
console.log(containerDOMElement);

const team = [
    {
        'nome': "Wayne Barnett",
        'ruolo': "Founder & CEO",
        'foto': "wayne-barnett-founder-ceo.jpg",

    },
    {
        'nome': "Angela Caroll",
        'ruolo': "Chief Editor",
        'foto': "angela-caroll-chief-editor.jpg",

    },
    {
        'nome': "Walter Gordon",
        'ruolo': "Office Manager",
        'foto': "walter-gordon-office-manager.jpg",

    },
    {
        'nome': "Angela Lopez",
        'ruolo': "Social Media Manager",
        'foto': "angela-lopez-social-media-manager.jpg",

    },
    {
        'nome': "Scott Estrada",
        'ruolo': "Developer",
        'foto': "scott-estrada-developer.jpg",

    },
    {
        'nome': "Barbara Ramos",
        'ruolo': "Graphic Designer",
        'foto': "barbara-ramos-graphic-designer.jpg",

    }
]
console.log(team);
// console.log(team[0].nome);
// qui ciclo l array e stampo ogni singolo oggetto con le sue proprietà 
for (let i = 0; i < team.length; i++) {
    // console.log(team[i])
    const currentTeamMember = team[i];
    console.log(currentTeamMember);

    // const string = `<div>
    // nome: ${currentTeamMember['nome']} ruolo: ${currentTeamMember['ruolo']} foto:  ${currentTeamMember['foto']}
    // </div>`;
    // console.log(currentTeamMember[i].foto)

    const h3Name = `<h3>${currentTeamMember['nome']}</h3>`;
    const pRole = `<p> ${currentTeamMember['ruolo']} </p>`;
    const img = `<img src="./img/${currentTeamMember['foto']}" alt="">`;

    const cardHTML = `
        <div class="card">
            <div class="card-img">
                ${img}
            </div>
            <div class="card-text">
                <h3>
                    ${h3Name}
                </h3>
                <p>
                    ${pRole}
                </p>
            </div>
        </div>
    `;
    // <img src="./img/${currentTeamMember[i].foto}">
    // <h3>
    // ${currentTeamMember[i].nome}
    // </h3>
    //     <p>
    //     ${currentTeamMember[i].ruolo}
    // </p> 
    console.log(cardHTML);
    containerDOMElement.innerHTML += cardHTML;

    // const card = `<div class="card"></div>`;
    // const cardImg = `<div class="card-img"></div>`;
    // const cardText = `<div class="card-text"></div>`;
    // containerDOMElement.innerHTML += card;
    // cardDOMElement = document.querySelectorAll(".card");
    // // console.log(cardDOMElement);
    // cardDOMElement[i].innerHTML += cardImg;
    // cardDOMElement[i].innerHTML += cardText;
    // // console.log(cardDOMElement);



    // // console.log(string);
    // // containerDOMElement.innerHTML += string;

    // // containerDOMElement.innerHTML += h3Name;
    // // containerDOMElement.innerHTML += pRole;
    // // containerDOMElement.innerHTML += img;


    // // cardDOMElement[i].innerHTML += h3Name;
    // // cardDOMElement[i].innerHTML += pRole;
    // // cardDOMElement[i].innerHTML += img;
    // cardImgDOMElement = document.querySelectorAll(".card-img");
    // // console.log(cardImgDOMElement);
    // cardTextDOMElement = document.querySelectorAll(".card-text");
    // // console.log(cardTextDOMElement);
    // cardImgDOMElement[i].innerHTML += img;
    // cardTextDOMElement[i].innerHTML += h3Name;
    // cardTextDOMElement[i].innerHTML += pRole;





}
