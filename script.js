// Declare Variables 
var Int = ["0","1","2","3","4","5","6","7","8","9",
			"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
			"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
			"+","/"],
	Amount,
	NewNumber,
	TempArray,
	Repeated,
	Used_Int = [],
	Used_Int64 = [],
	MoreThan64,
	MoreThan4096,
	MoreThan262144,
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
	find10,
	find64,
	res10,
	res64,
	UserInput,
	RandNum;


// Generate Random Number
function GenRand() {
	amount = Math.pow(64,4)-1
    RandNum = Math.floor(Math.random() * (amount - 0 + 1)) + 0;
}

function GenRandUser() {
    UserInput = prompt("What number do you wish to convert to Base 64?");
    RandNum = Number(UserInput);

}

function IsMoreThan64() {
	  if (RandNum >= 64 && RandNum < 4096) {
    MoreThan64 = 1;
    }
}

function IsMoreThan4096() {
	if (RandNum >= 4096 && RandNum < 262144) {
		MoreThan4096 = 1;
	}
}


function IsMoreThan262144() {
	if (RandNum >= 262144) {
		MoreThan262144 = 1;
	}
}


// push to array and display number
function push() {

Used_Int.push(RandNum);
Used_Int64.push(NewNumber);
document.getElementById("new").innerHTML = "Base 64: "+ NewNumber;

}


// If exists Generate other random number
function GenBase64() {
		if (MoreThan262144 === 1) {
			remainder262144a = RandNum % 262144;
			part262144a = Int[(RandNum - remainder262144a)/262144];

			remainder262144b = remainder262144a % 4096;
			part262144b = Int[(remainder262144a - remainder262144b)/4096];

			remainder262144c = remainder262144b % 64;
			part262144c = Int[(remainder262144b - remainder262144c)/64];

			remainder262144d = remainder262144c % 1;
			part262144d = Int[(remainder262144c - remainder262144d)/1];

			NewNumber = part262144a+part262144b+part262144c+part262144d;
			push();
		}



		else if (MoreThan4096 === 1) {
			remainder4096a = RandNum % 4096;
			part4096a = Int[(RandNum - remainder4096a)/4096];

			remainder4096b = remainder4096a % 64;
			part4096b = Int[(remainder4096a - remainder4096b)/64];

			remainder4096c = remainder4096b % 1;
			part4096c = Int[(remainder4096b - remainder4096c)/1];

			NewNumber = part4096a+part4096b+part4096c;
			push();
		}

		else if(MoreThan64 === 1) {
			remainder = RandNum % 64;
			part1 = Int[(RandNum - remainder)/64];
			part2 = Int[remainder]; 
			NewNumber = part1+part2;
			push();
		}
		
else {
		NewNumber = Int[RandNum];
		push();
	}

}


// Check if Random Number exists in existing array
function CheckArray() {
	Repeated = Used_Int.indexOf(RandNum);

	if (Repeated !== -1 && Used_Int.length === amount+1) {
		alert("Full!");
	}
	
	else if (Repeated !== -1 && Used_Int.length !== amount+1) {
		GenRand();
		CheckArray();
	}
}

function Gen() {
	GenRand();
	CheckArray();
	IsMoreThan262144();
	IsMoreThan4096();
	IsMoreThan64();
	GenBase64();
	document.getElementById("new1").innerHTML = "Base 10: "+ RandNum;
	document.getElementById("array").innerHTML = Used_Int;
	document.getElementById("array2").innerHTML = Used_Int64;
}

function GenFor() {
	var count = prompt("How many times should the button be clicked?");
	for (var j = 0;j<=count;j++){
	GenRand();
	CheckArray();
	IsMoreThan262144();
	IsMoreThan4096();
	IsMoreThan64();
	GenBase64();
	document.getElementById("new1").innerHTML = "Base 10: "+ RandNum;
	document.getElementById("array").innerHTML = Used_Int;
	document.getElementById("array2").innerHTML = Used_Int64;
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
	CheckArray();
	IsMoreThan262144();
	IsMoreThan4096();
	IsMoreThan64();
	GenBase64();
	document.getElementById("new1").innerHTML = "Base 10: "+ RandNum;
	document.getElementById("array").innerHTML = Used_Int;
	document.getElementById("array2").innerHTML = Used_Int64;
}