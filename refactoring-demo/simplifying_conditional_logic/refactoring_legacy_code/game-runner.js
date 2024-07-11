var Game = require('./game');

module.exports = function gameRunner(randomInt) {
    var notAWinner = false;
    var game = new Game();
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');
    const wrongAnswerId = 7;
    do {
        const dice = randomInt(6);
        game.roll(dice);
        if (randomInt(10) == wrongAnswerId) {
            notAWinner = game.wrongAnswer();
        } else {
            notAWinner = game.wasCorrectlyAnswered();
        }
    } while (notAWinner);
}
