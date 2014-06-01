
/*
 *  Marmottipsum generator 1.0.0
 *  Lets generate a Marmotte Lorem Ipsum!
 */

var marmottipsum = function() {

	var sentence = "";

	sentence += marmottipsum.random(marmottipsum.startWith);

	sentence += " " + marmottipsum.secondBlock;

	var lastPunctuation = " ",
		punctuation = "";

	for (var i = 0; i < 100; i++) {

		if (lastPunctuation != " ") {

			punctuation = " ";

		}

		else {

			punctuation = (Math.floor(Math.random() * 100) < 90) ? " " : marmottipsum.random(marmottipsum.punctuation) + " ";

		}

		var word = marmottipsum.random(marmottipsum.words);

		if (punctuation != " " && punctuation != ",") {

			word = marmottipsum.capitalize(word);

		}

		sentence += punctuation + word;

		lastPunctuation = punctuation;

	}

	return sentence + ".";

};

marmottipsum.random = function(array) {

	return array[Math.floor(Math.random() * array.length)];

};

marmottipsum.capitalize = function(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

marmottipsum.punctuation = [

	".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",
	",", ",", ",", ",", ",", ",",
	" !",
	" ?"

];

marmottipsum.startWith = [

	"A pretty Marmot",
	"A quiet Marmot",
	"A woodchuck Marmot",
	"A Marmot mountain",
	"A wild Marmot",
	"An incredible Marmot",
	"An Alpine Marmot"

];

marmottipsum.secondBlock = "Ipsum";

marmottipsum.wordMarmotte = [

	"marmot",
	"marmots",
	"marmota",
	"marmotti",
	"marmottouner",
	"marmottipsum",
	"marmiton",
	"incredible",
	"wild",
	"sweet",
	"pretty",
	"run",
	"eat",
	"squirrels",
	"Dimou",
	"species",
	"mountain",
	"mountainous areas",
	"Alps",
	"hibernate",
	"winter",
	"grass",
	"flowers",
	"species",
	"Alpine marmot",
	"mountain mouse",
	"Marmot Day",
	"rodents",
	"team marmottes"

];

marmottipsum.wordLorem = [

	"dolor",
	"sit",
	"amet",
	"consectetur",
	"adipisicing",
	"elit",
	"sed",
	"do",
	"eiusmod",
	"tempor",
	"incididunt",
	"labore",
	"et",
	"magna",
	"aliqua",
	"ut",
	"enim",
	"ad",
	"minim",
	"veniam",
	"quis",
	"nostrud",
	"exercitation",
	"ullamco",
	"laboris",
	"nisi",
	"aliquip",
	"ex",
	"ea",
	"commodo",
	"consequat",
	"duis",
	"aute",
	"irure",
	"reprehenderit",
	"in",
	"voluptate",
	"velit",
	"esse",
	"cillum",
	"dolore",
	"eu",
	"fugiat",
	"nulla",
	"pariatur",
	"Excepteur",
	"sint",
	"occaecat",
	"cupidatat",
	"non",
	"proident",
	"sunt",
	"culpa",
	"qui",
	"officia",
	"deserunt",
	"mollit",
	"anim",
	"id",
	"est",
	"laborum"

];

marmottipsum.words = marmottipsum.wordMarmotte.concat(marmottipsum.wordLorem);