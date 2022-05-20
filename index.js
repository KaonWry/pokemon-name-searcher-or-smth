//Packages
var requireText = require('require-text');	//Import another file
var prompt = require('prompt-sync')();		//Prompt input
//Get Pokemon Name
console.log("Who's that Pokemon?")
console.log("Use underscores ('_') for empty characters")
var pokemonInput = prompt();
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
//Repeat for 69 pass because haha 69 funni number?
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
for (var i = 0; i < 69; i++) {
	isTheSame()
}
//Uppercase all possible answers
for (var i = 0; i < pokemonList.length; i++) {
	pokemonList[i] = pokemonList[i].charAt(0).toUpperCase() + pokemonList[i].slice(1);
}
//Make the right "to be" form because I have nothing to do
var plural = "s "
var be = "are "
if (pokemonList.length == 1) {
	plural = " "
	be = "is "
}
//Joining all array elements into a string
pokemonList = pokemonList.join(', ');
//Write all possible pokemons
console.log("The possible Pokemon" + plural + be + pokemonList + ".");