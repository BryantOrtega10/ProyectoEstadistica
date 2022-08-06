class Carta {
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
