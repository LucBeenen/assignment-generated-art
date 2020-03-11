let arrKleur = ["#faf9f8", "#ff9f03", "#02b59f", "#fd7500", "#211627"]

let link = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(link, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
svg.setAttribute("ViewBox", "0 0 500 500");


function CirkelToevoegen(x, y, r, Kleur) {
    let cirkel = document.createElementNS(link, "circle");
    cirkel.setAttribute("cx", x);
    cirkel.setAttribute("cy", y);
    cirkel.setAttribute("r", r);
    cirkel.setAttribute("fill", Kleur);
    cirkel.setAttribute("stroke", "black");
    svg.appendChild(cirkel);
    document.body.appendChild(svg);
}

for (let i = 0; i < 1200; i++) {
    let x = Math.round(Math.random() * (500 - 0 + 1));
    let y = Math.round(Math.random() * (500 - 0 + 1));
    let r = Math.round(Math.random() * (15 - 3 + 1)) + 3;
    let Kleur = arrKleur[Math.round(Math.random() * arrKleur.length)];
    CirkelToevoegen(x, y, r, Kleur);
} 

function createCircle(x,y,r){
    let cirkel = document.createElementNS(link, "circle");
    cirkel.setAttribute("id", "Cirkel");
    cirkel.setAttribute("cx", x);
    cirkel.setAttribute("cy", y);
    cirkel.setAttribute("r", r);
    cirkel.setAttribute("fill", "red");
    cirkel.setAttribute("stroke", "black");
    svg.appendChild(cirkel);
}
createCircle(100,100,50);

document.body.appendChild(svg);