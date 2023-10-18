console.log("Team");

const containerDOMElement = document.querySelector(".container");
console.log(containerDOMElement);

const team = [
    {
        'nome':"Wayne Barnett",
        'ruolo':"Founder & CEO",
        'foto':"wayne-barnett-founder-ceo.jpg",

    },
    {
        'nome':"Angela Caroll",
        'ruolo':"Chief Editor",
        'foto':"angela-caroll-chief-editor.jpg",

    },
    {
        'nome':"Walter Gordon",
        'ruolo':"Office Manager",
        'foto':"walter-gordon-office-manager.jpg",

    },
    {
        'nome':"Angela Lopez",
        'ruolo':"Social Media Manager",
        'foto':"angela-lopez-social-media-manager.jpg",

    },
    {
        'nome':"Scott Estrada",
        'ruolo':"Developer",
        'foto':"scott-estrada-developer.jpg",

    },
    {
        'nome':"Barbara Ramos",
        'ruolo':"Graphic Designer",
        'foto':"barbara-ramos-graphic-designer.jpg",

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

    const h3Name = `<h3>${currentTeamMember['nome']}</h3>`;
    const pRole = `<p> ${currentTeamMember['ruolo']} </p>`;
    const img = `<img src="./img/${currentTeamMember['foto']} alt="">`;
    // console.log(string);
    // containerDOMElement.innerHTML += string;
    containerDOMElement.innerHTML += h3Name;
    containerDOMElement.innerHTML += pRole;
    containerDOMElement.innerHTML += img;


}
