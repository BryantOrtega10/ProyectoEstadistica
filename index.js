class Carta {
	constructor(valor, valor2, valor3, numero, pinta) {
		this.valor = valor; //+1, 0, -1
		this.valor2 = valor2; //2,3, ..., 11
		this.valor3 = valor3; //2,3, ..., 11
		this.numero = numero; //As,2,...,J,Q,K
		this.pinta = pinta; //Picas, Corazon, Trebol, Diamante
	}

	getCarta() {
		return this.numero + this.pinta;
	}
}

class Jugador {
	constructor() {
		this.manoActual = [];
		this.acumulado = 0;
	}
	reiniciarMano() {
		this.manoActual = [];
	}
	modificarAcumulado(valor) {
		this.acumulado += valor;
	}
	obtenerSumaManoActual() {
		let suma = 0;
		for (let i = 0; i < this.manoActual.length; i++) {
			suma += this.manoActual[i].valor2;
		}
		return suma;
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

let mazoInicial = [];
let mazoUsado = [];
let juegoActual = 0;

let jugadores = [];
let manoCupier = [];
let numCartasCrupier = 1;

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
		let valor3 = i;
		let numero = i.valueOf();
		if (i == 1) {
			numero = "As";
			valor2 = 11;
			valor3 = "As";
		} else if (i == 11) {
			numero = "J";
			valor2 = 10;
			valor3 = 10;
		} else if (i == 12) {
			numero = "Q";
			valor2 = 10;
			valor3 = 10;
		} else if (i == 13) {
			numero = "K";
			valor2 = 10;
			valor3 = 10;
		}

		mazoInicial.push(new Carta(valor, valor2, valor3, numero, "Pica"));
		mazoInicial.push(new Carta(valor, valor2, valor3, numero, "Corazon"));
		mazoInicial.push(new Carta(valor, valor2, valor3, numero, "Trebol"));
		mazoInicial.push(
			new Carta(valor, valor2, valor3, numero, "Diamante")
		);
	}
};

const seleccionarCarta = (numero, pinta, jugador) => {
	//jugador = 1,2,3,4 ....
	//jugador = "Cupier"

	let indice = mazoInicial.findIndex(
		(elemento) => elemento.getCarta() == numero + pinta
	);

	if (indice !== -1) {
		let cartaSeleccionada = mazoInicial[indice];
		mazoUsado.push(cartaSeleccionada);
		mazoInicial.splice(indice, 1);
		juegoActual += cartaSeleccionada.valor;

		if (jugador == "Cupier") {
			manoCupier.push(cartaSeleccionada);
			return { valorMesa: juegoActual };
		} else {
			jugadores[jugador].manoActual.push(cartaSeleccionada);
			return {
				valorMesa: juegoActual,
				estrategia: obtenerEstrategia(jugador),
				porcentaje: obtenerPorcentaje(jugador),
				acumulado: jugadores[jugador].acumulado,
			};
		}
	} else {
		console.log("Carta no encontrada");
	}
};

const obtenerPorcentaje = (id_jugador) => {
	const suma = jugadores[id_jugador].obtenerSumaManoActual();
	let sirven = 0;
	for (let i = 0; i < mazoInicial.length; i++) {
		if (
			suma + mazoInicial[i].valor2 <= 21 &&
			suma + mazoInicial[i].valor2 >= 17
		) {
			sirven++;
		}
	}
	return parseInt((sirven / mazoInicial.length) * 100);
};

const obtenerEstrategia = (id_jugador) => {
	if (
		manoCupier.length == 1 &&
		jugadores[id_jugador].manoActual.length == 2
	) {
		if (
			jugadores[id_jugador].manoActual[0].valor2 ==
			jugadores[id_jugador].manoActual[1].valor2
		) {
			//Estrategias pares
			return matrizEstrategiaPares[manoCupier[0].valor3][
				jugadores[id_jugador].manoActual[0].valor2
			];
		} else if (
			jugadores[id_jugador].manoActual[0].valor2 == "As" ||
			jugadores[id_jugador].manoActual[1].valor2 == "As"
		) {
			//Estrategias carta blanda
			const cartaDistinta =
				jugadores[id_jugador].manoActual[0].valor2 == "As"
					? jugadores[id_jugador].manoActual[1].valor2
					: jugadores[id_jugador].manoActual[0].valor2;
			if (cartaDistinta == 10) return "BlackJack";
			return matrizEstrategiaCartasBlandas[manoCupier[0].valor3][
				cartaDistinta
			];
		} else {
			//Estrategias carta dura
			const suma = jugadores[id_jugador].obtenerSumaManoActual();
			if (suma <= 7)
				return matrizEstrategiaCartasDuras[manoCupier[0].valor3][7];
			else if (suma >= 17)
				return matrizEstrategiaCartasDuras[
					manoCupier[0].valor3
				][20];
			else
				return matrizEstrategiaCartasDuras[manoCupier[0].valor3][
					suma
				];
		}
	} else if (
		manoCupier.length == 1 &&
		jugadores[id_jugador].manoActual.length > 2 &&
		juegoActual >= 5
	) {
		const suma = jugadores[id_jugador].obtenerSumaManoActual();
		if (suma < 11) {
			return "P";
		} else {
			return "Q";
		}
	} else if (
		manoCupier.length == 1 &&
		jugadores[id_jugador].manoActual.length > 2 &&
		juegoActual <= -5
	) {
		const suma = jugadores[id_jugador].obtenerSumaManoActual();
		if (suma < 16) {
			return "P";
		} else {
			return "Q";
		}
	} else if (
		manoCupier.length == 1 &&
		jugadores[id_jugador].manoActual.length > 2
	) {
		const suma = jugadores[id_jugador].obtenerSumaManoActual();
		if (suma < 17) {
			return "P";
		} else {
			return "Q";
		}
	} else {
		return null;
	}
};

const reiniciarManos = () => {
	manoCupier = [];
};

const agregarJugador = () => {
	jugadores.push(new Jugador([], 0));
};

const modificarAculadoJug = (id_jugador, valor) => {
	jugadores[id_jugador].modificarAcumulado(valor);
	return jugadores[id_jugador].acumulado;
};

const updateCrupierCard = () => {
	if (manoCupier.length != 0) {
		for (let i = 1; i <= manoCupier.length; i++) {
			const crupierCard = manoCupier[i - 1];
			const imgCard = document.getElementById(`CrupierCard-${i}`);
			imgCard.setAttribute(
				"src",
				`imgs/${crupierCard.getCarta()}.png`
			);
			imgCard.setAttribute("alt", crupierCard.getCarta());
		}
	} else {
		const crupierCardsContainerDiv = document
			.getElementsByClassName("CrupierCardsContainer")
			.item(0);
		const basicHtml = `<div class="CardContainer" data-bs-toggle="modal" data-bs-target="#CardSelection" data-bs-whatever="Cupier">
								<img class="img-fluid" src="imgs/Volteada.png" alt="Carta sin seleccionar" id="CrupierCard-1">
							</div>
							<div class="CardAddContainer" onclick="addCrupierCard()">
								<i class="bi bi-plus-lg"></i>
							</div>`;
		crupierCardsContainerDiv.innerHTML = basicHtml;
	}
};

const updatePlayerCard = (jugador) => {
	const playerCards = document.getElementById(`CardsPlayer-${jugador}`);
	const manoJugador = jugadores[jugador].manoActual;
	if (manoJugador.length != 0) {
		for (let i = 0; i < manoJugador.length; i++) {
			const playerCard = manoJugador[i];
			const imgCard = playerCards.children.item(i).firstElementChild;
			imgCard.setAttribute("src", `imgs/${playerCard.getCarta()}.png`);
			imgCard.setAttribute("alt", playerCard.getCarta());
		}
	} else {
		const basicHtml = `<div class="CardContainer" data-bs-toggle="modal" data-bs-target="#CardSelection" data-bs-whatever="Jugador-${jugador}">
								<img class="img-fluid" src="imgs/Volteada.png" alt="Carta sin seleccionar">
							</div>
							<div class="CardAddContainer" onclick="addPlayerCard(${jugador})">
								<i class="bi bi-plus-lg"></i>
							</div>`;
		playerCards.innerHTML = basicHtml;
	}
};

// Actualiza las cartes, las seleccionadas anteriormente se deshabilitan
const updateCards = (jugador) => {
	for (const card of mazoUsado) {
		const usedCard = document.getElementById(
			`${card.numero + card.pinta}`
		);
		usedCard.removeEventListener("click", clickCarta);
		usedCard.style.opacity = "0.5";
	}
	if (jugador == "Cupier") {
		numCartasCrupier = manoCupier.length;
		updateCrupierCard();
	} else {
		updatePlayerCard(jugador);
	}
};

// Actualiza la estrategia mostrada en pantalla
const updateStrategy = (strategy, jugador) => {
	if (jugador != "Cupier") {
		const strategyDisplay = document.getElementById(
			`StrategyInfoPlayer-${jugador}`
		);
		strategyDisplay.textContent = strategy == null ? "N/A" : strategy;
	}
};

// Actualiza el estado de la mesa mostrado en pantalla
const updateTableState = (tableState) => {
	const tableStateDisplay = document.getElementById("TableStateInfo");
	tableStateDisplay.textContent = tableState;
};

// Actualiza el porcentaje del jugador
const updatePlayerPercentage = (percentage, player) => {
	if (player != "Cupier") {
		const playerPercentageDisplay = document.getElementById(
			`WinPercentagePlayer-${player}`
		);
		playerPercentageDisplay.textContent = percentage;
	}
};

// Actualiza la cantidad ganada por el jugador, dependiendo del boton puslado.
const updatePlayerTotal = (playerNumber, betType) => {
	let total = parseInt(
		document.getElementById(`BetPlayer-${playerNumber}`).value
	);
	const player = jugadores[playerNumber];
	const playerTotalDisplay = document.getElementById(
		`TotalWinPlayer-${playerNumber}`
	);
	if (betType == "Perdida") {
		total = -1 * total;
	} else if (betType == "BlackJack") {
		total = (3 / 2) * total;
	}
	player.modificarAcumulado(total);
	playerTotalDisplay.textContent = player.acumulado;
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
	let jugador = document.getElementById("playerType").value;
	if (jugador != "Cupier") {
		jugador = parseInt(jugador.substr(-1));
	}
	resultado = seleccionarCarta(numero, pinta, jugador);
	updateTableState(resultado.valorMesa);
	updateStrategy(resultado.estrategia, jugador);
	updateCards(jugador);
	updatePlayerPercentage(resultado.porcentaje, jugador);
};

// Añade una carta mas al total de cartas que dispone el jugador.
const addPlayerCard = (jugador) => {
	const cardContainerDiv = document.createElement("div");
	const cardImg = document.createElement("img");
	const playerCardsContainerDiv = document.getElementById(
		`CardsPlayer-${jugador}`
	);
	const addCartDiv = playerCardsContainerDiv.lastElementChild;
	cardContainerDiv.setAttribute("class", "CardContainer");
	cardContainerDiv.setAttribute("data-bs-toggle", "modal");
	cardContainerDiv.setAttribute("data-bs-target", "#CardSelection");
	cardContainerDiv.setAttribute("data-bs-whatever", `Jugador-${jugador}`);
	Object.assign(cardImg, {
		className: "img-fluid",
		src: `imgs/Volteada.png`,
		alt: `Carta sin seleccionar`,
	});
	cardContainerDiv.append(cardImg);
	addCartDiv.replaceWith(cardContainerDiv);
	playerCardsContainerDiv.append(addCartDiv);
};

// Añade una carta mas al total de cartas que dispone el Crupier.
const addCrupierCard = () => {
	const cardContainerDiv = document.createElement("div");
	const cardImg = document.createElement("img");
	const addCardDiv = document
		.getElementsByClassName("CardAddContainer")
		.item(0);
	const crupierCardsContainerDiv = document
		.getElementsByClassName("CrupierCardsContainer")
		.item(0);
	cardContainerDiv.setAttribute("class", "CardContainer");
	cardContainerDiv.setAttribute("data-bs-toggle", "modal");
	cardContainerDiv.setAttribute("data-bs-target", "#CardSelection");
	cardContainerDiv.setAttribute("data-bs-whatever", "Cupier");
	Object.assign(cardImg, {
		className: "img-fluid",
		src: `imgs/Volteada.png`,
		alt: `Carta sin seleccionar`,
		id: `CrupierCard-${++numCartasCrupier}`,
	});
	cardContainerDiv.append(cardImg);
	addCardDiv.replaceWith(cardContainerDiv);
	crupierCardsContainerDiv.append(addCardDiv);
};

const addPlayer = () => {
	agregarJugador();
	const playerNumber = jugadores.length - 1;
	const divPlayersZone = document
		.getElementsByClassName("PlayersZoneContainer")
		.item(0);
	const playerHtml = `<div class="PlayerContainer">
							<h2 class="RolTittle">Jugador ${playerNumber + 1}</h2>
							<div class="d-flex justify-content-center">
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-auto">
											<h2 class="StrategyTittle">Mejor Estrategia</h2>
										</div>
									</div>
									<div class="row justify-content-center">
										<div class="col-auto">
											<h2 id="StrategyInfoPlayer-${playerNumber}">N/A</h2>
										</div>
									</div>
									<div class="row justify-content-center mt-5">
										<div class="col-auto">
											<button type="button" class="btn btn-outline-warning btn-lg" id="ResetHandButton" onclick="resetHand(${playerNumber})">Reinciar Mano</button>
										</div>
									</div>
								</div>
								<div class="PlayerCardsContainer" id="CardsPlayer-${playerNumber}">
									<div class="CardContainer" data-bs-toggle="modal" data-bs-target="#CardSelection" data-bs-whatever="Jugador-${playerNumber}">
										<img class="img-fluid" src="imgs/Volteada.png" alt="Carta sin seleccionar">
									</div>
									<div class="CardAddContainer" onclick="addPlayerCard(${playerNumber})">
										<i class="bi bi-plus-lg"></i>
									</div>
								</div>
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-auto">
											<div class="tittleContainer">
												<h2 class="TableStateTittle text-center">Posibilidades de juego seguro (17-21)</h2>
											</div>
										</div>
									</div>
									<div class="row justify-content-center g-0">
										<div class="col-auto">
											<h2 id="WinPercentagePlayer-${playerNumber}">0</h2>
										</div>
										<div class="col-auto">
											<h2>%</h2>
										</div>
									</div>
									<div class="row justify-content-center mt-5">
										<div class="col-auto">
											<h2 class="WinAmountTittle">Total:</h2>
										</div>
										<div class="col-auto g-0">
											<h2>$</h2>
										</div>
										<div class="col-auto g-0">
											<h2 id="TotalWinPlayer-${playerNumber}">0</h2>
										</div>
									</div>
								</div>
							</div>
							<div class="container mt-3">
								<div class="row justify-content-center align-items-center">
									<label for="BetPlayer-${playerNumber}" class="col-auto col-form-label g-0">
										<h3 class="BetTittle">Apuesta</h3>
									</label>
									<div class="col-auto g-0 me-2">
										<input type="number" class="border-warning bg-transparent" id="BetPlayer-${playerNumber}">
									</div>
									<div class="col-auto g-0">
										<button type="button" class="btn btn-outline-primary mx-1" onclick="updatePlayerTotal(${playerNumber}, 'Ganada')">Ganada</button>
									</div>
									<div class="col-auto g-0">
										<button type="button" class="btn btn-outline-danger mx-1" onclick="updatePlayerTotal(${playerNumber}, 'Perdida')">Perdida</button>
									</div>
									<div class="col-auto g-0">
										<button type="button" class="btn btn-outline-dark mx-1" onclick="updatePlayerTotal(${playerNumber}, 'BlackJack')">BlackJack</button>
									</div>
								</div>
							</div>
							<div class="d-flex justify-content-center">
							</div>
						</div>
						`;
	divPlayersZone.innerHTML += playerHtml;
};

// const getPlayerGameInfo = (jugador, typeOfInfo) => {
// 	const
// };

const resetHand = (jugador) => {
	reiniciarManos();
	if (jugador == "Cupier") {
		numCartasCrupier = 0;
		updateCrupierCard();
	} else {
		jugadores[jugador].reiniciarMano();
		updatePlayerCard(jugador);
		updateStrategy("N/A", jugador);
		updatePlayerPercentage(0, jugador);
	}
};

// Reinicia graficamente las cartas del mazo
const resetDeck = () => {
	reiniciarMazo();
	drawCards();
	resetHand("Cupier");
	for (let numJugador = 0; numJugador < jugadores.length; numJugador++) {
		resetHand(numJugador);
	}
	updateTableState(0);
};

reiniciarMazo();
drawCards();
agregarJugador();

// console.log(seleccionarCarta(10,"Trebol","Cupier"));

// console.log(seleccionarCarta(5,"Trebol",0));
// console.log(seleccionarCarta("As","Trebol",0));

// console.log(seleccionarCarta(8,"Corazon",1));
// console.log(seleccionarCarta("As","Corazon",1));

// console.log(seleccionarCarta(2,"Corazon",2));
// console.log(seleccionarCarta(3,"Corazon",2));
// console.log(seleccionarCarta(4,"Corazon",2));
