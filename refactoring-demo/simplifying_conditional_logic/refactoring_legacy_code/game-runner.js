var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function didSomebodyWin(game, isCurrentAnswerCorrect) {
        return (isCurrentAnswerCorrect)
            ? ! game.wasCorrectlyAnswered()
            : ! game.wrongAnswer();
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
        var dice = randomInt(6);
        game.roll(dice);
    } while (!didSomebodyWin(game, isCurrentAnswerCorrect()));

}



