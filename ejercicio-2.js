function ejercicio2(numero) {
	if (numero > 1) {
		let numA = numero;
		let arr = Array.from(Array(numA).keys());
		var arrResult = [];

		for(let i in arr) {
			// Se quitan todos los valores con decimal
			let resto = numA % arr[i] === 0;
			if(resto) {
				let valorEntero = numA / arr[i];
				arrResult.push([i, valorEntero]);
			}	
		}

		for(i = 0; i < arrResult.length; i++) {
			// Se quitan los valores repetidos
			if(arrResult.length > 1  && arrResult[i + 1][0] == arrResult[i][1]) {
				arrResult.splice(i + 1);
			} else {
				break;
			}
		}

		// Se toman los últimos valores del arreglo
		let numB = parseInt(arrResult[arrResult.length - 1][0]);
		let numC = arrResult[arrResult.length - 1][1]
		let resultado = numB + numC;
		console.log(`B * C = A (${numB * numC})`);
		console.log(`La suma de los dos factores es ${resultado}`);
	} else {
		console.log('Ingresar un numero mas grande');
	}
}

ejercicio2(12345);
