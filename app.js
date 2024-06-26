const fs = require('fs');
console.log(fs);

const gender = [
	"M", "F"
];

const firstNameMale = [
	"Adam",
	"Adrian",
	"Adolf",
	"Alan",
	"Albert",
	"Aleksander",
	"Alfred",
	"Antoni",
	"Arkadiusz",
	"Artur"
	
];

const firstNameFemale = [
	"Ada",
	"Adela",
	"Agata",
	"Agnieszka",
	"Aleksandra",
	"Alicja",
	"Alina",
	"Amanda",
	"Anastazja",
	"Angelika"
];

const lastName = [
	"Nowak",
	"Kowalczyk",
	"Wójcik",
	"Wożniak",
	"Mazur",
	"Krawczyk",
	"Kaczmarek",
	"Kus",
	"Przerwa",
	"Rusin"
];

const people = [];

const randChoice = (arr) => {
	if (arr.length === 0) {
		return null;
	}
	
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

for (let i = 0; i < 20; i++) {
	const selectedGender = randChoice(gender);
	
	let selectedFirstName;
	if (selectedGender === "M") {
		selectedFirstName = randChoice(firstNameMale);
	} else {
		selectedFirstName = randChoice(firstNameFemale);
	}
	
	const selectedLastName = randChoice(lastName);
	
	const person = {
		gender: selectedGender,
		firstName: selectedFirstName,
		lastName: selectedLastName
	};
	
	people.push(person);
}

console.log(people);

const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
	if (err) throw err;
	console.log('The file has been saved!')
});