<meta charset="UTF-8">

<h3>Álcool ou gasolina</h3>

<script> 

	function pulaLinha() {

		document.write("<br>");
		document.write("<br>");
	}

	function mostra (frase) {

		document.write(frase);
		pulaLinha();
	}

	mostra("Qual das opções é melhor?");



	var tanque = 40;

	var caminhoComGasolina = 480; 
	var consumoDeGasolina = (caminhoComGasolina / tanque);

	mostra("O consumo do carro com gasolina foi de " + consumoDeGasolina + " km/l.");
	
	var caminhoComAlcool = 300;
	var consumoDeAlcool = (caminhoComAlcool / tanque);

	mostra("Já o consumo do carro com álcool foi de " + consumoDeAlcool + " km/l.");


	if (consumoDeGasolina > consumoDeAlcool) {

		mostra("O consumo de gasolina foi maior que o de álcool!");
	}

	else {

		mostra("O consumo de alcool foi maior que o de gasolina!");
	}

</script>>