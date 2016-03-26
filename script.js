// Declare Variables 
var Int = ["0","1","2","3","4","5","6","7","8","9",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"+","/"],
Amount,
NewNumber,
TempArray,
Repeated,
array64,
DecimalPlaces,
numbers,
Used_Int = [],
Used_Int64 = [],
remainder,
part1,
part2,
remainder4096a,
remainder4096b,
remainder4096c,
remainder262144a,
remainder262144b,
remainder262144c,
remainder262144d,
part4096a,
part4096b,
part4096c,
part262144a,
part262144b,
part262144c,
part262144d,
NewBase10,
Base10A,
Base10B,
Base10C,
Base10D,
find10,
find64,
res10,
res64,
UserInput,
RandNum;

// Generate Random Number between 0 and (64^4)-1
function GenRand() {
	amount = Math.pow(64,4)-1
	RandNum = Math.floor(Math.random() * (amount - 0 + 1)) + 0;
}

// Use UserInput instead of a Random Number
function GenRandUser() {
	UserInput = prompt("What number do you wish to convert to Base 64?");
	RandNum = Number(UserInput);

}

// Determine how big the number is.
// For some reason if these functions are grouped together I get a "Maximum Call Stack Size Exceeded" error. So I put them in sepearte functions
function IsMoreThan64(number) {
	if (number >= 64 && number < 4096) {
		return true;
	}
}

function IsMoreThan4096(number) {
	if (number >= 4096 && number < 262144) {
		return true;
	}
}

function IsMoreThan262144(number) {
	if (number >= 262144) {
		return true;
	}
}

// Check if Random Number exists in existing array
function CheckArray() {
	Repeated = Used_Int.indexOf(RandNum);

	if (Repeated !== -1 && Used_Int.length === amount+1) {
		alert("All combinations have been used!");
	}
	
	else if (Repeated !== -1 && Used_Int.length !== amount+1) {
		GenRand();
		CheckArray();
	}
}

// Convert to base 64 
function GenBase64() {
	if (IsMoreThan262144(RandNum)) {
		remainder262144a = RandNum % 262144;
		part262144a = Int[(RandNum - remainder262144a)/262144];

		remainder262144b = remainder262144a % 4096;
		part262144b = Int[(remainder262144a - remainder262144b)/4096];

		remainder262144c = remainder262144b % 64;
		part262144c = Int[(remainder262144b - remainder262144c)/64];

		remainder262144d = remainder262144c % 1;
		part262144d = Int[(remainder262144c - remainder262144d)/1];

		NewNumber = part262144a+part262144b+part262144c+part262144d;
		push(RandNum,NewNumber);
	}



	else if (IsMoreThan4096(RandNum)) {
		remainder4096a = RandNum % 4096;
		part4096a = Int[(RandNum - remainder4096a)/4096];

		remainder4096b = remainder4096a % 64;
		part4096b = Int[(remainder4096a - remainder4096b)/64];

		remainder4096c = remainder4096b % 1;
		part4096c = Int[(remainder4096b - remainder4096c)/1];

		NewNumber = part4096a+part4096b+part4096c;
		push(RandNum,NewNumber);
	}

	else if(IsMoreThan64(RandNum)) {
		remainder = RandNum % 64;
		part1 = Int[(RandNum - remainder)/64];
		part2 = Int[remainder]; 
		NewNumber = part1+part2;
		push(RandNum,NewNumber);
	}

	else {
		NewNumber = Int[RandNum];
		push(RandNum,NewNumber);
	}

}

// Converts Base 64 Base 10
function GenBase10() {
	numbers = prompt("What is the number in base 64?");
	array64 = numbers.split("");
	DecimalPlaces = array64.length;
	switch(DecimalPlaces){
		case 4:
			Base10A = Int.indexOf(array64[0])*Math.pow(64, 3);
			Base10B = Int.indexOf(array64[1])*Math.pow(64, 2);
			Base10C = Int.indexOf(array64[2])*Math.pow(64, 1);
			Base10D = Int.indexOf(array64[3])*Math.pow(64, 0);
			NewBase10 = Base10A+Base10B+Base10C+Base10D;
			push(NewBase10,numbers);
			break;
		case 3:
			Base10B = Int.indexOf(array64[0])*Math.pow(64, 2);
			Base10C = Int.indexOf(array64[1])*Math.pow(64, 1);
			Base10D = Int.indexOf(array64[2])*Math.pow(64, 0);
			NewBase10 = Base10B+Base10C+Base10D;
			push(NewBase10,numbers);
			break;
		case 2:
			Base10C = Int.indexOf(array64[0])*Math.pow(64, 1);
			Base10D = Int.indexOf(array64[1])*Math.pow(64, 0);
			NewBase10 = Base10C+Base10D;
			push(NewBase10,numbers);
			break;
		case 1: 
			Base10D = Int.indexOf(array64[0])*Math.pow(64, 0);
			NewBase10 = Base10D;
			push(NewBase10,numbers);
			break;
		default:
			alert("Invalid Input");
	} 
}

// push to array
function push(base10,base64) {

	Used_Int.push(base10);
	Used_Int64.push(base64);
}

// Write to document
function WriteToDoc(BaseTen,BaseSixFour) {
	document.getElementById("new").innerHTML = "Base 64: "+ BaseSixFour;
	document.getElementById("new1").innerHTML = "Base 10: "+ BaseTen;
	document.getElementById("array").innerHTML = Used_Int;
	document.getElementById("array2").innerHTML = Used_Int64;
}

// function for HTML buttons
function Gen() {
	GenRand();
	CheckArray();
	GenBase64();
	WriteToDoc(RandNum,NewNumber)
}

function GenFor() {
	var count = prompt("How many times should the button be clicked?");
	for (var j = 0;j<=count;j++){
		GenRand();
		CheckArray();
		GenBase64();
		WriteToDoc(RandNum,NewNumber);
	}
}

function findten() {
	find10 = Number(prompt("What's the number in base 10?"));
	res10 = Used_Int.indexOf(find10);
	alert(find10+" is "+Used_Int64[res10]+ " in base 64");
}


function findsixtyfour() {
	find64 = prompt("What's the number in base 64?");
	res64 = Used_Int64.indexOf(find64);
	alert(find64+" is "+ Used_Int[res64]+ " in base 10");
}

function User() {
	GenRandUser();
	GenBase64();
	WriteToDoc(RandNum,NewNumber);
}

function User2() {
	GenBase10();
	WriteToDoc(NewBase10,numbers);
}