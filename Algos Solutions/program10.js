unction VowelOrConsonant(character) {

	if((character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 122)) {
		switch(character.charCodeAt(0)) {
			case '65' : console.log(character + " is a vowel"); break;
			case '69' : console.log(character + " is a vowel"); break;
			case '73' : console.log(character + " is a vowel"); break;
			case '79' : console.log(character + " is a vowel"); break;
			case '85' : console.log(character + " is a vowel"); break;
			case '97' : console.log(character + " is a vowel"); break;
			case '101' : console.log(character + " is a vowel"); break;
			case '105' : console.log(character + " is a vowel"); break;
			case '111' : console.log(character + " is a vowel"); break;
			case '117' : console.log(character + " is a vowel"); break;
			default : console.log(character + " is a consonant"); break;

		}
	} else {
		console.log("Please enter a valid letter");
	}
}

VowelOrConsonant('a');