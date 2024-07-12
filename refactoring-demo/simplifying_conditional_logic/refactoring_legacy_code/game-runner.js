var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function getNotWinner(game, dice) {
        game.roll(dice);
        return (isCurrentAnswerCorrect())
            ? game.wasCorrectlyAnswered()
            : game.wrongAnswer();
    }
 
    function isCurrentAnswerCorrect() {
        const wrongAnswerId = 7;
        const maxAnswerId = 10;
        return randomInt(maxAnswerId) != wrongAnswerId;
    }

    var notAWinner
    var game = new Game();
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');
    do {
        notAWinner = getNotWinner(game, randomInt(6));
    } while (notAWinner);


}



