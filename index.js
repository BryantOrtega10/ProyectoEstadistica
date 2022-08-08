class Carta {

	constructor(valor, valor2, numero, pinta) {
		this.valor = valor; //+1, 0, -1
		this.valor2 = valor2; //2,3, ..., 11
		this.numero = numero; //As,2,...,J,Q,K
		this.pinta = pinta; //Picas, Corazon, Trebol, Diamante
	}

	getCarta() {
		return this.numero + this.pinta;
	}
}

let matrizEstrategiaCartasDuras = {
	2: {
		7: "P",
		8: "P",
		9: "D",
		10: "D",
		11: "D",
		12: "P",
		13: "Q",
		14: "Q",
		15: "Q",
		16: "Q",
		20: "Q",
	},
	3: {
		7: "P",
		8: "P",
		9: "D",
		10: "D",
		11: "D",
		12: "P",
		13: "Q",
		14: "Q",
		15: "Q",
		16: "Q",
		20: "Q",
	},
	4: {
		7: "P",
		8: "P",
		9: "D",
		10: "D",
		11: "D",
		12: "Q",
		13: "Q",
		14: "Q",
		15: "Q",
		16: "Q",
		20: "Q",
	},
	5: {
		7: "P",
		8: "D",
		9: "D",
		10: "D",
		11: "D",
		12: "Q",
		13: "Q",
		14: "Q",
		15: "Q",
		16: "Q",
		20: "Q",
	},
	6: {
		7: "P",
		8: "D",
		9: "D",
		10: "D",
		11: "D",
		12: "Q",
		13: "Q",
		14: "Q",
		15: "Q",
		16: "Q",
		20: "Q",
	},
	7: {
		7: "P",
		8: "P",
		9: "P",
		10: "D",
		11: "D",
		12: "P",
		13: "P",
		14: "P",
		15: "P",
		16: "P",
		20: "Q",
	},
	8: {
		7: "P",
		8: "P",
		9: "P",
		10: "D",
		11: "D",
		12: "P",
		13: "P",
		14: "P",
		15: "P",
		16: "P",
		20: "Q",
	},
	9: {
		7: "P",
		8: "P",
		9: "P",
		10: "D",
		11: "D",
		12: "P",
		13: "P",
		14: "P",
		15: "P",
		16: "P",
		20: "Q",
	},
	10: {
		7: "P",
		8: "P",
		9: "P",
		10: "P",
		11: "D",
		12: "P",
		13: "P",
		14: "P",
		15: "P",
		16: "P",
		20: "Q",
	},
	As: {
		7: "P",
		8: "P",
		9: "P",
		10: "D",
		11: "D",
		12: "P",
		13: "P",
		14: "P",
		15: "P",
		16: "P",
		20: "Q",
	},
};

let matrizEstrategiaCartasBlandas = {
	2: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "D",
		7: "Q",
		8: "Q",
		9: "Q",
	},
	3: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "D",
		7: "D/Q",
		8: "Q",
		9: "Q",
	},
	4: {
		2: "D",
		3: "D",
		4: "D",
		5: "D",
		6: "D",
		7: "D/Q",
		8: "Q",
		9: "Q",
	},
	5: {
		2: "D",
		3: "D",
		4: "D",
		5: "D",
		6: "D",
		7: "D/Q",
		8: "Q",
		9: "Q",
	},
	6: {
		2: "D",
		3: "D",
		4: "D",
		5: "D",
		6: "D",
		7: "D/Q",
		8: "D/Q",
		9: "Q",
	},
	7: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "Q",
		8: "Q",
		9: "Q",
	},
	8: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "Q",
		8: "Q",
		9: "Q",
	},
	9: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "P",
		8: "Q",
		9: "Q",
	},
	10: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "P",
		8: "Q",
		9: "Q",
	},
	As: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "Q",
		8: "Q",
		9: "Q",
	},
};

let matrizEstrategiaPares = {
	2: {
		2: "P/S",
		3: "P/S",
		4: "P",
		5: "D",
		6: "S",
		7: "S",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	3: {
		2: "S",
		3: "P/S",
		4: "P",
		5: "D",
		6: "S",
		7: "S",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	4: {
		2: "S",
		3: "S",
		4: "P/S",
		5: "D",
		6: "S",
		7: "S",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	5: {
		2: "S",
		3: "S",
		4: "D/S",
		5: "D",
		6: "S",
		7: "S",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	6: {
		2: "S",
		3: "S",
		4: "D/S",
		5: "D",
		6: "S",
		7: "S",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	7: {
		2: "S",
		3: "S",
		4: "P",
		5: "D",
		6: "S",
		7: "S",
		8: "S",
		9: "Q",
		10: "Q",
		As: "S",
	},
	8: {
		2: "P",
		3: "P/S",
		4: "P",
		5: "D",
		6: "P",
		7: "S",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	9: {
		2: "P",
		3: "P",
		4: "P",
		5: "D",
		6: "P",
		7: "P",
		8: "S",
		9: "S",
		10: "Q",
		As: "S",
	},
	10: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "Q",
		8: "S",
		9: "Q",
		10: "Q",
		As: "S",
	},
	As: {
		2: "P",
		3: "P",
		4: "P",
		5: "P",
		6: "P",
		7: "P",
		8: "S",
		9: "Q",
		10: "Q",
		As: "S",
	},
};

    constructor(valor, valor2, numero, pinta) {
        this.valor = valor;//+1, 0, -1
        this.valor2 = valor2;//2,3, ..., 11
        this.numero = numero; //As,2,...,J,Q,K
        this.pinta = pinta; //Picas, Corazon, Trebol, Diamante
    }

    getCarta(){
        return this.numero+this.pinta;
    }
    
}

let matrizEstrategiaCartasDuras = {
    2: {
        7:"P",8:"P",9:"D", 10:"D", 11:"D", 12:"P", 13:"Q", 14:"Q", 15:"Q", 16:"Q", 20:"Q"
    },
    3: {
        7:"P",8:"P",9:"D", 10:"D", 11:"D", 12:"P", 13:"Q", 14:"Q", 15:"Q", 16:"Q", 20:"Q"
    },
    4: {
        7:"P",8:"P",9:"D", 10:"D", 11:"D", 12:"Q", 13:"Q", 14:"Q", 15:"Q", 16:"Q", 20:"Q"
    },
    5: {
        7:"P",8:"D",9:"D", 10:"D", 11:"D", 12:"Q", 13:"Q", 14:"Q", 15:"Q", 16:"Q", 20:"Q"
    },
    6: {
        7:"P",8:"D",9:"D", 10:"D", 11:"D", 12:"Q", 13:"Q", 14:"Q", 15:"Q", 16:"Q", 20:"Q"
    },
    7: {
        7:"P",8:"P",9:"P", 10:"D", 11:"D", 12:"P", 13:"P", 14:"P", 15:"P", 16:"P", 20:"Q"
    },
    8: {
        7:"P",8:"P",9:"P", 10:"D", 11:"D", 12:"P", 13:"P", 14:"P", 15:"P", 16:"P", 20:"Q"
    },
    9: {
        7:"P",8:"P",9:"P", 10:"D", 11:"D", 12:"P", 13:"P", 14:"P", 15:"P", 16:"P", 20:"Q"
    },
    10: {
        7:"P",8:"P",9:"P", 10:"P", 11:"D", 12:"P", 13:"P", 14:"P", 15:"P", 16:"P", 20:"Q"
    },
    "As": {
        7:"P",8:"P",9:"P", 10:"D", 11:"D", 12:"P", 13:"P", 14:"P", 15:"P", 16:"P", 20:"Q"
    }
}


let matrizEstrategiaCartasBlandas = {
    2: {
        2:"P",3:"P",4:"P", 5:"P", 6:"D", 7:"Q", 8:"Q", 9:"Q"
    },
    3: {
        2:"P",3:"P",4:"P", 5:"P", 6:"D", 7:"D/Q", 8:"Q", 9:"Q"
    },
    4: {
        2:"D",3:"D",4:"D", 5:"D", 6:"D", 7:"D/Q", 8:"Q", 9:"Q"
    },
    5: {
        2:"D",3:"D",4:"D", 5:"D", 6:"D", 7:"D/Q", 8:"Q", 9:"Q"
    },
    6: {
        2:"D",3:"D",4:"D", 5:"D", 6:"D", 7:"D/Q", 8:"D/Q", 9:"Q"
    },
    7: {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"Q", 8:"Q", 9:"Q"
    },
    8: {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"Q", 8:"Q", 9:"Q"
    },
    9: {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"P", 8:"Q", 9:"Q"
    },
    10: {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"P", 8:"Q", 9:"Q"
    },
    "As": {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"Q", 8:"Q", 9:"Q"
    }
}

let matrizEstrategiaPares = {
    2: {
        2:"P/S",3:"P/S",4:"P", 5:"D", 6:"S", 7:"S", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    3: {
        2:"S",3:"P/S",4:"P", 5:"D", 6:"S", 7:"S", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    4: {
        2:"S",3:"S",4:"P/S", 5:"D", 6:"S", 7:"S", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    5: {
        2:"S",3:"S",4:"D/S", 5:"D", 6:"S", 7:"S", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    6: {
        2:"S",3:"S",4:"D/S", 5:"D", 6:"S", 7:"S", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    7: {
        2:"S",3:"S",4:"P", 5:"D", 6:"S", 7:"S", 8:"S", 9:"Q", 10: "Q", "As": "S"
    },
    8: {
        2:"P",3:"P/S",4:"P", 5:"D", 6:"P", 7:"S", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    9: {
        2:"P",3:"P",4:"P", 5:"D", 6:"P", 7:"P", 8:"S", 9:"S", 10: "Q", "As": "S"
    },
    10: {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"Q", 8:"S", 9:"Q", 10: "Q", "As": "S"
    },
    "As": {
        2:"P",3:"P",4:"P", 5:"P", 6:"P", 7:"P", 8:"S", 9:"Q", 10: "Q", "As": "S"
    }
}



let mazoInicial = [];
let mazoUsado = [];
let juegoActual = 0;

let cartaCupier = null;
let manoJugador = [];

let numCartasJugador = 1;

// Indica si la seleccion es para el Crupier o para el jugador
const cardSelectionModal = document.getElementById("CardSelection");
const playerType = document.getElementById("playerType");
cardSelectionModal.addEventListener("show.bs.modal", (event) => {
	let button = event.relatedTarget;
	const selectedPlayer = button.getAttribute("data-bs-whatever");
	playerType.value = selectedPlayer;
});

const reiniciarMazo = () => {
	mazoInicial = [];
	mazoUsado = [];
	juegoActual = 0;
	for (let i = 1; i <= 13; i++) {
		let valor = 0;

		if (i >= 2 && i <= 6) valor = 1;
		else if (i >= 7 && i <= 9) valor = 0;
		else if (i == 1 || i >= 10) valor = -1;
		let valor2 = i;
		let numero = i.valueOf();
		if (i == 1) {
			numero = "As";
			valor2 = "As";
		} else if (i == 11) {
			numero = "J";
			valor2 = 10;
		} else if (i == 12) {
			numero = "Q";
			valor2 = 10;
		} else if (i == 13) {
			numero = "K";
			valor2 = 10;
		}

		mazoInicial.push(new Carta(valor, valor2, numero, "Pica"));
		mazoInicial.push(new Carta(valor, valor2, numero, "Corazon"));
		mazoInicial.push(new Carta(valor, valor2, numero, "Trebol"));
		mazoInicial.push(new Carta(valor, valor2, numero, "Diamante"));
	}
};

const seleccionarCarta = (numero, pinta, mano) => {
	let indice = mazoInicial.findIndex(
		(elemento) => elemento.getCarta() == numero + pinta
	);
	if (indice !== -1) {
		let cartaSeleccionada = mazoInicial[indice];
		mazoUsado.push(cartaSeleccionada);
		mazoInicial.splice(indice, 1);
		juegoActual += cartaSeleccionada.valor;

		if (mano == "Jugador") {
			manoJugador.push(cartaSeleccionada);
		} else if (mano == "Cupier") {
			cartaCupier = cartaSeleccionada;
		}
		return { valorMesa: juegoActual, estrategia: obtenerEstrategia() };
	} else {
		console.log("Carta no encontrada");
	}
};

const obtenerEstrategia = () => {
	if (cartaCupier != null && manoJugador.length == 2) {
		if (manoJugador[0].valor2 == manoJugador[1].valor2) {
			//Estrategias pares
			return matrizEstrategiaPares[cartaCupier.valor2][
				manoJugador[0].valor2
			];
		} else if (
			manoJugador[0].valor2 == "As" ||
			manoJugador[1].valor2 == "As"
		) {
			//Estrategias carta blanda
			const cartaDistinta =
				manoJugador[0].valor2 == "As"
					? manoJugador[1].valor2
					: manoJugador[0].valor2;
			if (cartaDistinta == 10) return "BlackJack";
			return matrizEstrategiaCartasBlandas[cartaCupier.valor2][
				cartaDistinta
			];
		} else {
			//Estrategias carta dura
			const suma = manoJugador[0].valor2 + manoJugador[1].valor2;
			if (suma <= 7)
				return matrizEstrategiaCartasDuras[cartaCupier.valor2][7];
			else if (suma >= 17)
				return matrizEstrategiaCartasDuras[cartaCupier.valor2][20];
			else
				return matrizEstrategiaCartasDuras[cartaCupier.valor2][
					suma
				];
		}
	} else {
		return null;
	}
};

const reiniciarManos = () => {
	manoJugador = [];
	cartaCupier = null;
};

const updateCrupierCard = () => {
	const crupierCard = document.getElementById("CrupierCard");
	const imgName = cartaCupier == null ? "Volteada" : cartaCupier.getCarta();
	const imgAlt =
		cartaCupier == null
			? "Carta sin seleccionar"
			: cartaCupier.getCarta();
	crupierCard.setAttribute("src", `imgs/${imgName}.png`);
	crupierCard.setAttribute("alt", imgAlt);
};

const updatePlayerCard = () => {
	if (manoJugador.length != 0) {
		for (let i = 1; i <= manoJugador.length; i++) {
			const playerCard = manoJugador[i - 1];
			const imgCard = document.getElementById(`PlayerCard-${i}`);
			imgCard.setAttribute("src", `imgs/${playerCard.getCarta()}.png`);
			imgCard.setAttribute("alt", playerCard.getCarta());
		}
	} else {
		const playerCardsContainerDiv = document
			.getElementsByClassName("PlayerCardsContainer")
			.item(0);
		const basicHtml = `<div class="CardContainer" data-bs-toggle="modal" data-bs-target="#CardSelection" data-bs-whatever="Jugador">
								<img class="img-fluid" src="imgs/Volteada.png" alt="Carta sin seleccionar" id="PlayerCard-1">
							</div>
							<div class="CardAddContainer" onclick="addPlayerCard()">
								<i class="bi bi-plus-lg"></i>
							</div>`;
		playerCardsContainerDiv.innerHTML = basicHtml;
	}
};

// Actualiza las cartes, las seleccionadas anteriormente se deshabilitan
const updateCards = () => {
	for (const card of mazoUsado) {
		const usedCard = document.getElementById(
			`${card.numero + card.pinta}`
		);
		usedCard.removeEventListener("click", clickCarta);
		usedCard.style.opacity = "0.5";
	}
	updateCrupierCard();
	updatePlayerCard();
};

// Actualiza la estrategia mostrada en pantalla
const updateStrategy = (strategy) => {
	const strategyDisplay = document.getElementById("StrategyInfo");
	strategyDisplay.textContent = strategy;
};

// Actualiza el estado de la mesa mostrado en pantalla
const updateTableState = (tableState) => {
	const tableStateDisplay = document.getElementById("TableStateInfo");
	tableStateDisplay.textContent = tableState;
};

// Pone las imgs de todas las cartas en el modal
const drawCards = () => {
	const cardsContainer = document.getElementById("cardsGroup");
	cardsContainer.innerHTML = "";
	for (const card of mazoInicial) {
		const divCol = document.createElement("div");
		const divImgContainer = document.createElement("div");
		const cardImg = document.createElement("img");
		divCol.setAttribute("class", "col");
		divImgContainer.setAttribute("class", "imageContainer");
		divImgContainer.setAttribute("data-bs-dismiss", "modal");
		Object.assign(cardImg, {
			className: "img-fluid",
			src: `imgs/${card.getCarta()}.png`,
			alt: `${card.numero} de ${card.pinta}`,
			id: `${card.numero + card.pinta}`,
		});
		cardImg.setAttribute("data-numero", card.numero);
		cardImg.setAttribute("data-pinta", card.pinta);
		cardImg.addEventListener("click", clickCarta);
		divImgContainer.appendChild(cardImg);
		divCol.appendChild(divImgContainer);
		cardsContainer.appendChild(divCol);
	}
};

// funcion que obtiene los valores necesarios para seleccionar una carta y la selecciona.
const clickCarta = (e) => {
	const numero = e.target.getAttribute("data-numero");
	const pinta = e.target.getAttribute("data-pinta");
	const mano = document.getElementById("playerType").value;
	resultado = seleccionarCarta(numero, pinta, mano);

	if (resultado) {
		updateStrategy(resultado.estrategia);
		updateTableState(resultado.valorMesa);
	}
	updateCards();
};

// Añade una carta mas al total de cartas que dispone el jugador.
const addPlayerCard = () => {
	const cardContainerDiv = document.createElement("div");
	const cardImg = document.createElement("img");
	const addCartDiv = document
		.getElementsByClassName("CardAddContainer")
		.item(0);
	const playerCardsContainerDiv = document
		.getElementsByClassName("PlayerCardsContainer")
		.item(0);
	cardContainerDiv.setAttribute("class", "CardContainer");
	cardContainerDiv.setAttribute("data-bs-toggle", "modal");
	cardContainerDiv.setAttribute("data-bs-target", "#CardSelection");
	cardContainerDiv.setAttribute("data-bs-whatever", "Jugador");
	Object.assign(cardImg, {
		className: "img-fluid",
		src: `imgs/Volteada.png`,
		alt: `Carta sin seleccionar`,
		id: `PlayerCard-${++numCartasJugador}`,
	});
	cardContainerDiv.append(cardImg);
	addCartDiv.replaceWith(cardContainerDiv);
	playerCardsContainerDiv.append(addCartDiv);
};

// Reinicia graficamente las cartas en la mesa

const resetHand = () => {
	numCartasJugador = 1;
	reiniciarManos();
	updateCrupierCard();
	updatePlayerCard();
	updateStrategy("N/A");
};

// Reinicia graficamente las cartas del mazo
const resetDeck = () => {
	numCartasJugador = 1;
	reiniciarMazo();
	drawCards();
	resetHand();
	updateTableState(0);
};

reiniciarMazo();
drawCards();
//
=======


const reiniciarMazo = () => {
    mazoInicial = [];
    mazoUsado = [];
    juegoActual = 0;
    for (let i = 1; i <= 13; i++) {
        let valor = 0;
        
        if(i>=2 && i<=6) valor = 1;
        else if(i>=7 && i<=9) valor = 0;
        else if(i==1 || i>=10) valor = -1;
        let valor2 = i;
        let numero = i.valueOf();
        if(i == 1){ numero = "As"; valor2 = "As";}
        else if(i == 11){ numero = "J"; valor2 = 10}
        else if(i == 12){ numero = "Q"; valor2 = 10}
        else if(i == 13){ numero = "K"; valor2 = 10}

        mazoInicial.push(new Carta(valor, valor2, numero, "Pica" ));
        mazoInicial.push(new Carta(valor, valor2, numero, "Corazon" ));
        mazoInicial.push(new Carta(valor, valor2, numero, "Trebol" ));
        mazoInicial.push(new Carta(valor, valor2, numero, "Diamante" ));
    }
}

const seleccionarCarta = (numero, pinta, mano) => {
    let indice = mazoInicial.findIndex(elemento => elemento.getCarta() == numero+pinta);
    if(indice !== -1){
        let cartaSeleccionada = mazoInicial[indice];
        mazoUsado.push(cartaSeleccionada);
        mazoInicial.splice(indice, 1);
        juegoActual += cartaSeleccionada.valor;
        
        if(mano == "Jugador"){
            manoJugador.push(cartaSeleccionada);
        }
        else if(mano == "Cupier"){
            cartaCupier = cartaSeleccionada;
        }
        return {valorMesa: juegoActual, estrategia: obtenerEstrategia()}
    }
    else{
        console.log("Carta no encontrada")
    }
}

const obtenerEstrategia = () => {
    if(cartaCupier != null && manoJugador.length == 2){
        if(manoJugador[0].valor2 == manoJugador[1].valor2){
            //Estrategias pares
            return matrizEstrategiaPares[cartaCupier.valor2][manoJugador[0].valor2];
        }
        else if(manoJugador[0].valor2 == "As" || manoJugador[1].valor2 == "As"){
            //Estrategias carta blanda
            const cartaDistinta = (manoJugador[0].valor2 == "As" ? manoJugador[1].valor2 : manoJugador[0].valor2);
            if (cartaDistinta == 10) return "BlackJack"
            return matrizEstrategiaCartasBlandas[cartaCupier.valor2][cartaDistinta];
        }
        else{
            //Estrategias carta dura            
            const suma = manoJugador[0].valor2 + manoJugador[1].valor2;
            if(suma <= 7) return matrizEstrategiaCartasDuras[cartaCupier.valor2][7]
            else if(suma >= 17) return matrizEstrategiaCartasDuras[cartaCupier.valor2][20]
            else return matrizEstrategiaCartasDuras[cartaCupier.valor2][suma]
        }
    }
    else{
        return null;
    }
}

const reiniciarManos = () => {
    manoJugador = []
    cartaCupier = null;
}
reiniciarMazo();

