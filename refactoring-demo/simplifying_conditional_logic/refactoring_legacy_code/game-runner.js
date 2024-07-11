var Game = require('./game');

module.exports = function gameRunner(randomInt) {

    function isCurrentAnswerWrong(maxAnswerId, wrongAnswerId) {
        return randomInt(maxAnswerId) == wrongAnswerId;
    }

    function run() {
        var notAWinner = false;
        var game = new Game();
        game.add('Chet');
        game.add('Pat');
        game.add('Sue');
        const wrongAnswerId = 7;
        const maxAnswerId = 10;
        do {
            const dice = randomInt(6);
            game.roll(dice);
            if (isCurrentAnswerWrong(maxAnswerId, wrongAnswerId)) {
                notAWinner = game.wrongAnswer();
            } else {
                notAWinner = game.wasCorrectlyAnswered();
            }
        } while (notAWinner);

    }

    run();

}


