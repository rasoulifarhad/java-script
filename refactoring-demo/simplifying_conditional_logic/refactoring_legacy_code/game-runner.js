var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function getNotWinner(game) {
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
        const dice = randomInt(6);
        game.roll(dice);
        notAWinner = getNotWinner(game);
    } while (notAWinner);


}



