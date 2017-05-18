// Test de script distant pour Moodle

var titre = document.querySelector("h2");
var nom = prompt("Quel est votre nom ?");
var newH2 = "Bonjour, " + nom + ". Heureux de vous rencontrer!";
titre.innerHTML = newH2;
titre.style.color = "red";
