// Ganz am Anfang des Scripts einfügen
//var player1Name = localStorage.getItem('player1Name') || 'Spieler 1';
//var player2Name = localStorage.getItem('player2Name') || 'Spieler 2';
var flag = 1; // Spieler X beginnt



function setPlayerNames() {
    player1Name = document.getElementById("player1Name").value || 'Spieler 1';
    player2Name = document.getElementById("player2Name").value || 'Spieler 2';
    localStorage.setItem('player1Name', player1Name);
    localStorage.setItem('player2Name', player2Name);
    document.getElementById('print').innerHTML = `${player1Name} ist dran`;
    document.getElementById('playerInput').style.display = 'none';
    updateGameInstruction();
}




document.getElementById('neuenamen'),localStorage.removeItem('player1Name');
document.getElementById('neuenamen'),localStorage.removeItem('plalyer2Name');




function updateGameInstruction() {
    document.getElementById('print').innerHTML = `Spiel beginnt beim ersten Move<br><br>Erster Spieler startet als <b>${player1Name}</b> und zweiter als <b>${player2Name}</b>`;
}

function clearInputFields() {
    const inputFields = document.querySelectorAll('#main .cell');
    inputFields.forEach((field) => {
        field.value = '';
    });
}

// Function called whenever user tab on any box 
function myfunc() { 

	// Setting DOM to all boxes or input field 
	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value; 
	b2 = document.getElementById("b2").value; 
	b3 = document.getElementById("b3").value; 
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 

	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 
		
	b1btn = document.getElementById("b1"); 
	b2btn = document.getElementById("b2"); 
	b3btn = document.getElementById("b3"); 
	b4btn = document.getElementById("b4"); 
	b5btn = document.getElementById("b5"); 
	b6btn = document.getElementById("b6"); 
	b7btn = document.getElementById("b7"); 
	b8btn = document.getElementById("b8"); 
	b9btn = document.getElementById("b9"); 

	// Checking if Player X won or not and after 
	// that disabled all the other fields 
	// Alles, was direkt Gewinnbedingungen überprüft und deaktiviert Buttons, z.B.:
if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {  }
// Bis zum Ende aller dieser Bedingungen
 { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	 if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player X finish 
	// Checking for Player 0 starts, Is player 0 won or 
	// not and after that disabled all the other fields 
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		checkWin();
	} 

	// Checking of Player 0 finish 
	// Here, Checking about Tie 
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
		(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
			b5 == '0') && (b6 == 'X' || b6 == '0') && 
		(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
			b8 == '0') && (b9 == 'X' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Match Tie"; 
	} 
	else { 

		// Here, Printing Result 
		if (flag == 1) { 
			document.getElementById('print') 
				.innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('print') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
} 

// Ersetze die existierende myfunc_2() Funktion
function myfunc_2() {
    for (var i = 1; i <= 9; i++) {
        var cell = document.getElementById("b" + i);
        cell.value = '';
        cell.disabled = false;
    }
    flag = 1; // Beginne mit Spieler X
    document.getElementById('print').innerHTML = `${player1Name} ist dran`;
}


function myfunc_3() {
    document.getElementById("b1").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b1").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_4() {
    document.getElementById("b2").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b2").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_5() {
    document.getElementById("b3").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b3").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_6() {
    document.getElementById("b4").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b4").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_7() {
    document.getElementById("b5").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b5").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_8() {
    document.getElementById("b6").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b6").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_9() {
    document.getElementById("b7").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b7").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_10() {
    document.getElementById("b8").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b8").disabled = true;
    flag = 1 - flag;
    checkWin();
}

function myfunc_11() {
    document.getElementById("b9").value = flag === 1 ? player1Name.substring(0, 2) : player2Name.substring(0, 2);
    document.getElementById("b9").disabled = true;
    flag = 1 - flag;
    checkWin();
}






function updateTurnMessage() {
    document.getElementById('print').innerHTML = flag === 0 ? `${player2Name} ist dran` : `${player1Name} ist dran`;
}



document.addEventListener('DOMContentLoaded', () => {
    // Initialisiere die Namen mit Werten aus dem localStorage oder Standardwerten
    let player1Name = localStorage.getItem('player1Name') || 'Spieler 1';
    let player2Name = localStorage.getItem('player2Name') || 'Spieler 2';

    // Setze die Werte der Input-Felder nur, wenn im localStorage gespeicherte Namen vorhanden sind
    if (localStorage.getItem('player1Name') && localStorage.getItem('player2Name')) {
        document.getElementById("player1Name").value = player1Name;
        document.getElementById("player2Name").value = player2Name;
        document.getElementById('playerInput').style.display = 'none';
        updateGameInstruction();
        updateTurnMessage();
    }
});


const points = {
    player1: 0,
    player2: 0
};


function checkWin() {
    let winConditions = [
        ["b1", "b2", "b3"],
        ["b4", "b5", "b6"],
        ["b7", "b8", "b9"],
        ["b1", "b4", "b7"],
        ["b2", "b5", "b8"],
        ["b3", "b6", "b9"],
        ["b1", "b5", "b9"],
        ["b3", "b5", "b7"]
    ];


		for (let condition of winConditions) {
			if (document.getElementById(condition[0]).value && document.getElementById(condition[0]).value === document.getElementById(condition[1]).value && document.getElementById(condition[1]).value === document.getElementById(condition[2]).value) {
				let winnerName = document.getElementById(condition[0]).value === player1Name.substring(0, 2) ? player1Name : player2Name;
				document.getElementById('print').innerHTML = winnerName + " hat gewonnen!";
	
				// Increment the points for the winner
				points[winnerName === player1Name ? 'player1' : 'player2']++;
	
				// Display the points
				document.getElementById('player1Points').innerHTML = points.player1;
				document.getElementById('player2Points').innerHTML = points.player2;
	
				for (let i = 1; i <= 9; i++) {
					document.getElementById("b" + i).disabled = true;
				}
				return;
			}
	
		}

		// Check for a tie (all cells filled but no winner)
		if (document.getElementById("b1").value && document.getElementById("b2").value && document.getElementById("b3").value && document.getElementById("b4").value && document.getElementById("b5").value && document.getElementById("b6").value && document.getElementById("b7").value && document.getElementById("b8").value && document.getElementById("b9").value) {
			document.getElementById('print').innerHTML = "Unentschieden!";}
         

    // Überprüfe auf Unentschieden
    let allFilled = true;
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById("b" + i).value === '') {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        document.getElementById('print').innerHTML = "Unentschieden!";
    } else {
        // Update die Zugmeldung nur, wenn das Spiel noch läuft
        updateTurnMessage();
    }
}





// Ganz am Ende des Scripts hinzufügen
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('player1Name') && localStorage.getItem('player2Name')) {
        player1Name = localStorage.getItem('player1Name');
        player2Name = localStorage.getItem('player2Name');
        document.getElementById("player1Name").value = player1Name;
        document.getElementById("player2Name").value = player2Name;
        document.getElementById('playerInput').style.display = 'none';
        updateGameInstruction(); // Stelle sicher, dass diese Funktion die Spielanweisungen aktualisiert
        document.getElementById('print').innerHTML = `${player1Name} ist dran`;
    }
});






