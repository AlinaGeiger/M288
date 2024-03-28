var player1Name = '';
var player2Name = '';
var flag = 1; // Spieler X beginnt
var points = {
    player1: 0,
    player2: 0
};
 
// Funktion, um die ersten beiden Buchstaben eines Spielernamens zu erhalten
function getInitials(name) {
    return name.substring(0, 2).toUpperCase();
}
 
function setPlayerNames() {
    player1Name = document.getElementById("player1Name").value || 'Spieler 1';
    player2Name = document.getElementById("player2Name").value || 'Spieler 2';
    document.getElementById('print').innerHTML = `${player1Name} ist dran`;
    document.getElementById('playerInput').style.display = 'none';
}
 
function removePlayerNames() {
    player1Name = '';
    player2Name = '';
}
 
function resetGame() {
    for (var i = 1; i <= 9; i++) {
        var cell = document.getElementById("b" + i);
        cell.value = '';
        cell.disabled = false;
        cell.classList.remove('player1', 'player2'); // Entferne Spielerklassen
    }
    flag = 1; // Beginne mit Spieler X
    document.getElementById('print').innerHTML = `${player1Name} ist dran`;
}
 
function cellClicked(cellId) {
    var cell = document.getElementById(cellId);
    var currentPlayer = flag === 1 ? player1Name : player2Name;
    cell.value = getInitials(currentPlayer);
    cell.disabled = true;
    cell.classList.add('player' + flag); // Füge die entsprechende Spielerklasse hinzu
    flag = 1 - flag;
    checkWin();
}
 
function checkWin() {
    var winConditions = [
        ["b1", "b2", "b3"],
        ["b4", "b5", "b6"],
        ["b7", "b8", "b9"],
        ["b1", "b4", "b7"],
        ["b2", "b5", "b8"],
        ["b3", "b6", "b9"],
        ["b1", "b5", "b9"],
        ["b3", "b5", "b7"]
    ];
 
    for (var condition of winConditions) {
        var [a, b, c] = condition;
        if (document.getElementById(a).value && document.getElementById(a).value === document.getElementById(b).value && document.getElementById(b).value === document.getElementById(c).value) {
            var winnerName = document.getElementById(a).value === getInitials(player1Name) ? player1Name : player2Name;
            document.getElementById('print').innerHTML = `${winnerName} hat gewonnen!`;
 
            // Increment the points for the winner
            points[winnerName === player1Name ? 'player1' : 'player2']++;
 
            // Display the points
            document.getElementById('player1Points').innerHTML = points.player1;
            document.getElementById('player2Points').innerHTML = points.player2;
 
            for (var i = 1; i <= 9; i++) {
                document.getElementById("b" + i).disabled = true;
            }
            return;
        }
    }
 
    // Überprüfe auf Unentschieden
    var allFilled = true;
    for (var i = 1; i <= 9; i++) {
        if (document.getElementById("b" + i).value === '') {
            allFilled = false;
            break;
        }
    }
 
    if (allFilled) {
        document.getElementById('print').innerHTML = "Unentschieden!";
    } else {
        // Update die Zugmeldung nur, wenn das Spiel noch läuft
        document.getElementById('print').innerHTML = flag === 0 ? `${player2Name} ist dran` : `${player1Name} ist dran`;
    }
}
 
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('player1Name') && localStorage.getItem('player2Name')) {
        player1Name = localStorage.getItem('player1Name');
        player2Name = localStorage.getItem('player2Name');
        document.getElementById("player1Name").value = player1Name;
        document.getElementById("player2Name").value = player2Name;
        document.getElementById('playerInput').style.display = 'none';
        document.getElementById('print').innerHTML = `${player1Name} ist dran`;
    }
});
 
