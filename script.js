

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
