//Packages
var requireText = require('require-text');	//Import another file
var prompt = require('prompt-sync')();		//Prompt input
//Get Pokemon Name
var pokemonInput = prompt("Who's that Pokemon? ");
pokemonInput = pokemonInput.toLowerCase();
//Import Pokemon list
var pokemonList = requireText('./pokemon.txt', require);
pokemonList = pokemonList.split("\r\n");
//Filter Pokemon that have the same name length
var matchlist = [];
for (var i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].length == pokemonInput.length) {
		matchlist.push(pokemonList[i]);
	}
}
var pokemonList = matchlist
//Loop for every letter on input
//Check if it's underscore, if not then check for the exact letter
//If different from the checked letter, then remove
function isTheSame() {
	for (var i = 0; i < pokemonInput.length; i++) {
	if (pokemonInput.charAt(i) == "_") {
	  	continue;
	}
	else {
		for (var j = 0; j < pokemonList.length; j++) {
			var current = pokemonList[j];
			if (pokemonInput.charAt(i) != current.charAt(i)) {
				pokemonList.splice(j,1);
			}
		}
	}
	}
}
//Repeat for 10 pass because why not?
for (var i = 0; i < 10; i++) {
	isTheSame()
}
console.log(pokemonList);