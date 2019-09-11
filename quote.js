let quote1 = ["La bave du crapeau", "Une hirondelle", "Le lièvre", "La douceur du miel", "Seul un idiot", "Qui avale une noix de coco"]
let quote2 = ["n'atteint pas", "ne fait pas", "est plus rapide que", "ne console pas", "mesure", "fait confiance à"]
let quote3 = ["la blanche colombe.", "le printemps.", "la tortue.", "la piqûre de l'abeille", "la profondeur de l'eau avec ses deux pieds.", "son anus."]

let targetDiv = document.getElementById('content')
let targetBtn = document.getElementById('generate')

const generateQuote = () => {
    let quote = quote1[Math.floor(Math.random() * quote1.length)] + " " + quote2[Math.floor(Math.random() * quote2.length)] + " " + quote3[Math.floor(Math.random() * quote3.length)]
    targetDiv.innerHTML = quote
    console.log(quote)
}

targetBtn.addEventListener("click", generateQuote)