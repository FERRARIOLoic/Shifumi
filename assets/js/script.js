let playerPoints = 0;
let computerPoints = 0;
let percentageCalc = 0;
let selectHuman = document.querySelectorAll('.imgShifumi');
// console.log(selectHuman);

selectHuman.forEach(eachTableElement => {

    eachTableElement.onclick = (event) => {

        let choiceHuman = event.target.dataset.value;
        let choiceComputer = "";


        function computerChoice(max) {
            return Math.floor(Math.random() * max);
        }
        let choiceNbComputer = computerChoice(3);

        if (choiceNbComputer == 0) {
            choiceComputer = 'Pierre';
        } else if (choiceNbComputer == 1) {
            choiceComputer = 'Feuille';
        } else if (choiceNbComputer == 2) {
            choiceComputer = 'Ciseaux';
        }
        console.log('choiceHuman : ' + choiceHuman);
        console.log('ComputerChoice : ' + choiceComputer);

        let resultWin = '<p class="resultBattle"><strong>Bravo, vous avez gagné !!!</strong></p>';
        let resultLost = '<p class="resultBattle"><strong>Désolé, vous avez perdu...</strong></p>';
        let resultEquality = '<p class="resultBattle"><strong>Egalité</strong></p>';


        if (choiceHuman == 'Pierre' && choiceComputer == 'Pierre') {
            // EGALITE 
            document.getElementById("resultBattle").style.color = "#000000";
            resultBattle.innerHTML = resultEquality;
            computerPoints = computerPoints + 1;
            playerPoints = playerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/equality.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerWin" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerWin" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Pierre' && choiceComputer == 'Feuille') {
            // PERDU
            document.getElementById("resultBattle").style.color = "#f00020";
            resultBattle.innerHTML = resultLost;
            computerPoints = computerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/lost.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerLost" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerWin" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Pierre' && choiceComputer == 'Ciseaux') {
            // GAGNE
            document.getElementById("resultBattle").style.color = "#228B22";
            resultBattle.innerHTML = resultWin;
            playerPoints = playerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/win.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerWin" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerLost" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Feuille' && choiceComputer == 'Pierre') {
            // GAGNE
            document.getElementById("resultBattle").style.color = "#228B22";
            resultBattle.innerHTML = resultWin;
            playerPoints = playerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/win.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerWin" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerLost" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Feuille' && choiceComputer == 'Feuille') {
            // EGALITE
            document.getElementById("resultBattle").style.color = "#000000";
            resultBattle.innerHTML = resultEquality;
            computerPoints = computerPoints + 1;
            playerPoints = playerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/equality.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerWin" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerWin" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Feuille' && choiceComputer == 'Ciseaux') {
            // PERDU
            document.getElementById("resultBattle").style.color = "#f00020";
            resultBattle.innerHTML = resultLost;
            computerPoints = computerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/lost.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerLost" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerWin" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Ciseaux' && choiceComputer == 'Pierre') {
            // PERDU
            document.getElementById("resultBattle").style.color = "#f00020";
            resultBattle.innerHTML = resultLost;
            computerPoints = computerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/lost.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerLost" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerWin" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Ciseaux' && choiceComputer == 'Feuille') {
            // GAGNE
            document.getElementById("resultBattle").style.color = "#228B22";
            resultBattle.innerHTML = resultWin;
            playerPoints = playerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/win.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerWin" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerLost" src="assets/img/${choiceComputer}.png">`;
        } else if (choiceHuman == 'Ciseaux' && choiceComputer == 'Ciseaux') {
            // EGALITE
            document.getElementById("resultBattle").style.color = "#000000";
            resultBattle.innerHTML = resultEquality;
            computerPoints = computerPoints + 1;
            playerPoints = playerPoints + 1;
            imgResult.innerHTML = `<img class="imgShifumiWinLose" src="assets/img/equality.gif">`;
            imgResultPlayer.innerHTML = `<img class="imgShifumiResultPlayerWin" src="assets/img/${choiceHuman}.png">`;
            imgResultComputer.innerHTML = `<img class="imgShifumiResultComputerWin" src="assets/img/${choiceComputer}.png">`;
        }


        playerPointsResult.innerHTML = playerPoints;
        computerPointsResult.innerHTML = computerPoints;
        if (computerPoints == 0) {
            computerPoints = 1;
            percentageCalc = Math.round((playerPoints * 100) / computerPoints);
            computerPoints = 0;
        } else {
            percentageCalc = Math.round((playerPoints * 100) / computerPoints);
        }
        percentage.innerHTML = `${percentageCalc}%`;
        console.log(percentageCalc);
    }
});


var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};