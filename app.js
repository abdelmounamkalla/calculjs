


// ------- pour verification 

// console.log('hello');

// ------ voir console dans chrome inspect

// ------- recuprer tout les bouttons du DOM avec le selecteur 
// css de la class bouton document.querySelectorAll('.bouton')


window.addEventListener('error', function (e) {
        alert('Une erreur est survenue dans votre calcul : ' + e.message);
    })


document.addEventListener('keydown', function (e) {
       
  
     console.log (e.keyCode);
 
      const valeur = e.keyCode.toString();
      
      calculer(valeur);

    })

document.addEventListener('click', function (e) {
       console.log (e.target);
     console.log (e.target.dataset);
	 console.log (e.target.dataset.key);
    
    const valeur = e.target.dataset.key;
        calculer(valeur);

    })

//  ---Returns the first element that is a descendant
//---- of node that matches selectors.


//const touches = document.querySelectorAll('.bouton');

// console.log(touches);

// ------- en recuper un node liste tree 
// ------- en va le covertir en tableau

const touches = [...document.querySelectorAll('.bouton')];

// console.log(touches);
// appliquer map function pour recuperer les data-key dans un tableau 
// ----Calls a defined callback function on each element of an array,
// ----and returns an array that contains the results.

const listeKeycode = touches.map(
    function (elem) {
        return elem.dataset.key;
        //elem.dataset.key => button:bouton . data-key="104"
    });


//console.log(listeKeycode);

const ecran = document.querySelector('.ecran');

//console.log (ecran);

function calculer(valeur) {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                
               //console.log (listeKeycode);

               const indexKeycode = listeKeycode.indexOf(valeur);
                
               // console.log (indexKeycode);

                const touche = touches[indexKeycode];
                
                //console.log (touche);
                //console.log (touche.innerHTML);

                ecran.textContent += touche.innerHTML;
        }
    }
}


