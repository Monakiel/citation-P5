// IIFE : Immediately Invoked Function Expression. Evite la pollution de la portée globale. (()=> {JS})()
(() => {
    const data = {
        twoparts: {
            start: ['Ne regarde pas', 'Fumer', 'Aimer', 'Manger', 'Respirer'],
            end: ['le doigt qui pointe la lune.', 'ça tue.', 'à perdre la raison.', 'son derrière.', 'son pet.']
        },
        threeparts: {
            start: ["La bave du crapeau", "Une hirondelle", "Le lièvre", "La douceur du miel", "Seul un idiot", "Qui avale une noix de coco"],
            middle: ["n'atteint pas", "ne fait pas", "est plus rapide que", "ne console pas", "mesure", "fait confiance à"],
            end: ["la blanche colombe.", "le printemps.", "la tortue.", "la piqûre de l'abeille", "la profondeur de l'eau avec ses deux pieds.", "son anus."]
        }
    }

    const targetDiv = document.getElementById('content')
    const targetBtn = document.getElementById('generate')

    //Fonction princpale qui va générer les citations aléatoires en prenant des morceaux dans mon objet data.
    const generateQuote = () => {
        //val incluent dans la fonction sinon ne change pas les valeurs
        const valNb = +document.getElementById('nb').value
        const valType = document.getElementById('type').value

        // Vérification de sécurité pour valType
        if (!data.hasOwnProperty(valType)) {
            alert('Valeur incorrecte. Avez-vous modifié la valeur, mister renard ?')
            return
        }
        // Idem pour valNb
        if (valNb < 1 || valNb > 5) {
            alert('Valeur incorrecte. Avez-vous modifié la valeur, mister renaux ?')
            return
        }

        const quotes = []
        //génération de 1 à 5 citations, qui seront stockées dans le tableau quotes.
        for (let i = 1; i <= valNb; i++) {

            const quote = []
            //génération des deux ou trois parties aléatoirement, qui seront stockées dans le tableau quote.
            Object.keys(data[valType]).forEach(part => {
                const arrayQuoteParts = data[valType][part]
                const stringQuotePart = arrayQuoteParts[Math.floor(Math.random() * arrayQuoteParts.length)]
                quote.push(stringQuotePart)
            })

            console.log('Citation numéro ' + i + ' : ')
            console.log(quote.join(' '))
            quotes.push(quote.join(' '))
        }

        //Affichage des citations stockées dans le tableau quotes. De 1 à 5 en fonction du choix de l'utilisateur.
        targetDiv.innerHTML = quotes.join('<br>')
    }

    targetBtn.addEventListener('click', generateQuote)
})()