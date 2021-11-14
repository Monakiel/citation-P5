// IIFE : Immediately Invoked Function Expression. Evite la pollution de la portée globale. (()=> {JS})()
;(() => {
	const data = {
		start: [
			'La bave du crapeau',
			'Une hirondelle',
			'Le lièvre',
			'La douceur du miel',
			'Seul un idiot',
			'Mauvais conseil',
		],
		middle: [
			"n'atteint pas",
			'ne fait pas',
			'est plus rapide que',
			'ne console pas',
			'mesure',
			'retombe',
		],
		end: [
			'la blanche colombe.',
			'le printemps.',
			'la tortue.',
			"la piqûre de l'abeille",
			"la profondeur de l'eau avec ses deux pieds.",
			'sur qui le donne.',
		],
	}

	const $ = id => document.getElementById(id)

	const rand = max => Math.floor(Math.random() * max)
	const start = () => data.start[rand(data.start.length)]
	const mid = () => data.middle[rand(data.middle.length)]
	const end = () => data.end[rand(data.end.length)]

	const algos = {
		twoparts: () => start() + ' et ' + end(),

		threeparts: () => [start(), mid(), end()].join(' '),
	}

	const targetDiv = $('content')
	const targetBtn = $('generate')

	// Fonction principale qui va générer les citations aléatoires en prenant des morceaux dans mon objet data.
	const generateQuotes = () => {
		// valNb et valType intégrées dans la fonction (et pas en-dehors) sinon ne change pas les valeurs
		const valNb = +$('nb').value
		const valType = $('type').value

		// Vérification de sécurité pour valType
		if (!algos.hasOwnProperty(valType)) {
			alert("ERREUR. Avez-vous modifié l'algo, mister renard ?")
			return
		}

		// Idem pour valNb
		if (valNb < 1 || valNb > 5) {
			alert(
				'Valeur incorrecte. Avez-vous modifié la valeur, mister renaux ?'
			)
			return
		}

		const quotes = []
		const algo = algos[valType]

		//génération de 1 à 5 citations, qui seront stockées dans le tableau quotes.
		for (let i = 1; i <= valNb; i++) {
			const quote = algo()

			console.log('Citation numéro ' + i + ' : ')
			console.log(quote)
			quotes.push(quote)
		}

		//Affichage des citations stockées dans le tableau quotes. De 1 à 5 en fonction du choix de l'utilisateur.
		targetDiv.innerHTML = quotes.join('<br>')
	}

	targetBtn.addEventListener('click', generateQuotes)
})()
