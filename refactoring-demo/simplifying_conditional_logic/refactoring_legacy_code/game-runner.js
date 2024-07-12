var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function getNotWinner(game) {
        var notAWinner = false;
        if (isCurrentAnswerCorrect()) {
            notAWinner = game.wasCorrectlyAnswered();
        } else {
            notAWinner = game.wrongAnswer();
        }
        return notAWinner;
    }
 
    function isCurrentAnswerCorrect() {
        const wrongAnswerId = 7;
        const maxAnswerId = 10;
        return randomInt(maxAnswerId) != wrongAnswerId;
    }

    var game = new Game();
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');
    do {
        const dice = randomInt(6);
        game.roll(dice);
        var notAWinner = getNotWinner(game);
    } while (notAWinner);


}



