

// Exercise 1

var numberOne= 7;

var numberTwo = 9;

var total = numberOne + numberTwo;

console.log(total);

var a = "String One"

var b = "String Two"

var c = a + b;
console.log(c);


// Exercise 2

var folk =["Gary Davis", "Uncle Dave Macon", "Mississippi John Hurt"];

var rock =["Eric Clapton", "Jimi Hendrix", "The Who"];

var genres =[folk, rock];


function music () {
	for (var i=0; i<1;i++) {
		subGenres(genres[i]);
	}

}

function subGenres (anyname) {
	for (var i=0; i<2;i++ ){
		console.log(anyname[i]);
	}
	
}

music();


// Exercise 3

var ask = prompt("Enter Number");



if (ask < 100) {
	alert ("Number is less than 100")
}

else {
	alert (ask + " is greater than 100")
}


// Exercise 4


// Exercise 5

var ask = prompt("Enter Name");

if (ask == "Ian"){
	alert ("Hi Ian");
}

else {
	alert ("Hi " + ask +", Get off of Ian's computer!");
}

// Exercise 6


var ask = prompt("Enter Name"); {
	alert ("Your name is" + " " +ask)
}










