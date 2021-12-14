const blocsImages = document.querySelectorAll('.bloc-image');
let affichage = document.querySelector('.affichage');
let btnFermeture = document.querySelector('#fermeture-affichage')

for (let blocImage of blocsImages) {
    blocImage.addEventListener('click', (e) => {
        // recupération data de l'image cliquée
        let srcImage = blocImage.childNodes[1].src;
        let altImage = blocImage.childNodes[1].alt;
        let titreImage = blocImage.childNodes[1].title;

        // remplissage data image affichée
        affichage.childNodes[3].src = srcImage.replace('-thumb', '');
        affichage.childNodes[3].alt = altImage;
        affichage.childNodes[3].title = titreImage;

        //data titre
        affichage.childNodes[5].innerHTML = `--- ${titreImage} ---`;

        // remontée de l'ensemble d'affichage au premier plan ! Le menu doit rester devant
        affichage.style.zIndex = 800;

        // retour de l'ensemble d'affichage en arrière-plan
        btnFermeture.addEventListener('click', () => {

            affichage.style.zIndex = -100;
            affichage.childNodes[3].src = "";
            affichage.childNodes[3].alt = "";
            affichage.childNodes[3].title = "";
        })
    })
}