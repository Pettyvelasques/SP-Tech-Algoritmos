function multiplicar() {
	// alert( "O produto de " + inputN1.value + " e " + inputN2.value + " resulta em " + inputN1.value * inputN2.value )
	alert(
		`O produto de ${inputN1.value} e ${inputN2.value} resulta em ${
			inputN1.value * inputN2.value
		}`
	);
}

function dividir() {
	alert(
		"A divisão de " +
			inputN1.value +
			" e " +
			inputN2.value +
			" resulta em " +
			inputN1.value / inputN2.value
	);
}

function somar() {
	alert(
		"A soma de " +
			inputN1.value +
			" e " +
			inputN2.value +
			" resulta em " +
			(Number(inputN1.value) + Number(inputN2.value))
	);
}

function subtrair() {
	alert(
		"A diferença de " +
			inputN1.value +
			" e " +
			inputN2.value +
			" resulta em " +
			(inputN1.value - inputN2.value)
	);
}
