let playerPoints = 0;
let computerPoints = 0;
let percentageCalc = 0;
let selectHuman = document.querySelectorAll('.imgShifumi');
// console.log(selectHuman);

selectHuman.forEach(eachTableElement => {

    console.log(eachTableElement);


    eachTableElement.onclick = (event) => {
        console.log(event.target.dataset.value);

        let choiceHuman = event.target.dataset.value;
        let choiceComputer = "";
        console.log('Player : ' + playerPoints);
        console.log('Computer : ' + computerPoints);


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

        if (choiceHuman == 'Pierre' && choiceComputer == 'Pierre') {
            document.getElementById("resultBattle").style.color = "#000000";
            resultBattle.innerHTML = 'Egalité';
        } else if (choiceHuman == 'Pierre' && choiceComputer == 'Feuille') {
            document.getElementById("resultBattle").style.color = "#f00020";
            resultBattle.innerHTML = 'Désolé, vous avez perdu...';
            computerPoints = computerPoints + 1;
        } else if (choiceHuman == 'Pierre' && choiceComputer == 'Ciseaux') {
            document.getElementById("resultBattle").style.color = "#228B22";
            resultBattle.innerHTML = 'Bravo, vous avez gagné !!!';
            playerPoints = playerPoints + 1;
        } else if (choiceHuman == 'Feuille' && choiceComputer == 'Pierre') {
            document.getElementById("resultBattle").style.color = "#228B22";
            resultBattle.innerHTML = 'Bravo, vous avez gagné !!!';
            playerPoints = playerPoints + 1;
        } else if (choiceHuman == 'Feuille' && choiceComputer == 'Feuille') {
            document.getElementById("resultBattle").style.color = "#000000";
            resultBattle.innerHTML = 'Egalité';
        } else if (choiceHuman == 'Feuille' && choiceComputer == 'Ciseaux') {
            document.getElementById("resultBattle").style.color = "#f00020";
            resultBattle.innerHTML = 'Désolé, vos avez perdu...';
            computerPoints = computerPoints + 1;
        } else if (choiceHuman == 'Ciseaux' && choiceComputer == 'Pierre') {
            document.getElementById("resultBattle").style.color = "#f00020";
            resultBattle.innerHTML = 'Désolé, vos avez perdu...';
            computerPoints = computerPoints + 1;
        } else if (choiceHuman == 'Ciseaux' && choiceComputer == 'Feuille') {
            document.getElementById("resultBattle").style.color = "#228B22";
            resultBattle.innerHTML = 'Bravo, vous avez gagné !!!';
            playerPoints = playerPoints + 1;
        } else if (choiceHuman == 'Ciseaux' && choiceComputer == 'Ciseaux') {
            document.getElementById("resultBattle").style.color = "#000000";
            resultBattle.innerHTML = 'Egalité';
        }

        playerPoints.innerHTML = playerPoints;
        computerPoints.innerHTML = computerPoints;
        imgResult.innerHTML = `<img src="assets/img/${choiceComputer}.png">`;
        percentageCalc = (playerPoints * 100) / computerPoints;
        percentage.innerHTML = `Réussite : <br>${percentageCalc}%`;
        console.log(percentageCalc);
    }
});