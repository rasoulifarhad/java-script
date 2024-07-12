var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function getNotWinner(game) {
        if (isCurrentAnswerCorrect()) {
            return game.wasCorrectlyAnswered();
        } else {
            return game.wrongAnswer();
        }
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



