var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function isCurrentAnswerCorrect() {
        const wrongAnswerId = 7;
        const maxAnswerId = 10;
        return randomInt(maxAnswerId) !== wrongAnswerId;
    }

    var notAWinner = false;
    var game = new Game();
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');
    do {
        const dice = randomInt(6);
        game.roll(dice);
        if (isCurrentAnswerCorrect()) {
            notAWinner = game.wasCorrectlyAnswered();
        } else {
            notAWinner = game.wrongAnswer();
        }
    } while (notAWinner);


}


