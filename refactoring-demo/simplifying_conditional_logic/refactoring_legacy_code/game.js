exports = typeof window !== "undefined" && window !== null ? window : global;

module.exports = function () {

    var minimumNumberOfPlayers = 2;

    var players = new Array();
    var places = new Array(6);
    var purses = new Array(6);
    var inPenaltyBox = new Array(6);


    var currentPlayer = 0;
    var isGettingOutOfPenaltyBox = false;

    this.getMinimumNumberOfPlayers = function () {
        return minimumNumberOfPlayers;
    };

    var didPlayerWin = function () {
        return !(purses[currentPlayer] == 6)
    };

    var currentCategory = function () {
        const popCategory = 'Pop';
        const scienceCategory = 'Science';
        const sportsCategory = 'Sports';
        const rockCategory = 'Rock';
        if (places[currentPlayer] == 0)
            return popCategory;
        if (places[currentPlayer] == 4)
            return popCategory;
        if (places[currentPlayer] == 8)
            return popCategory;
        if (places[currentPlayer] == 1)
            return scienceCategory;
        if (places[currentPlayer] == 5)
            return scienceCategory;
        if (places[currentPlayer] == 9)
            return scienceCategory;
        if (places[currentPlayer] == 2)
            return sportsCategory;
        if (places[currentPlayer] == 6)
            return sportsCategory;
        if (places[currentPlayer] == 10)
            return sportsCategory;
        return rockCategory;
    };

    this.createRockQuestion = function (index) {
        return "Rock Question " + index;
    };

    var popQuestions = new Array();
    var scienceQuestions = new Array();
    var sportsQuestions = new Array();
    var rockQuestions = new Array();

    const categorySize = 50;
    for (var i = 0; i < categorySize; i++) {
        popQuestions.push("Pop Question " + i);
        scienceQuestions.push("Science Question " + i);
        sportsQuestions.push("Sports Question " + i);
        rockQuestions.push("Rock Question " + i);
    };

    this.isPlayable = function (howManyPlayers) {
        return this.howManyPlayers() >= this.getMinimumNumberOfPlayers();
    };

    this.add = function (playerName) {
        players.push(playerName);
        places[this.howManyPlayers() - 1] = 0;
        purses[this.howManyPlayers() - 1] = 0;
        inPenaltyBox[this.howManyPlayers() - 1] = false;

        console.log(playerName + " was added");
        console.log("They are player number " + players.length);

        return true;
    };

    this.howManyPlayers = function () {
        return players.length;
    };


    var askQuestion = function () {
        const popCategory = 'Pop';
        const scienceCategory = 'Science';
        const sportsCategory = 'Sports';
        const rockCategory = 'Rock';
        if (currentCategory() == popCategory)
            console.log(popQuestions.shift());
        if (currentCategory() == scienceCategory)
            console.log(scienceQuestions.shift());
        if (currentCategory() == sportsCategory)
            console.log(sportsQuestions.shift());
        if (currentCategory() == rockCategory)
            console.log(rockQuestions.shift());
    };

    this.roll = function (roll) {
        console.log(players[currentPlayer] + " is the current player");
        console.log("They have rolled a " + roll);
        const boardSize = 12;

        if (this.isPlayerInPnaltyBox()) {
            if (this.isOdd(roll)) {
                isGettingOutOfPenaltyBox = true;

                console.log(players[currentPlayer] + " is getting out of the penalty box");
                places[currentPlayer] = places[currentPlayer] + roll;
                if (this.playerShouldStartANewLap()) {
                    places[currentPlayer] = places[currentPlayer] - boardSize;
                }

                console.log(players[currentPlayer] + "'s new location is " + places[currentPlayer]);
                console.log("The category is " + currentCategory());
                askQuestion();
            } else {
                console.log(players[currentPlayer] + " is not getting out of the penalty box");
                isGettingOutOfPenaltyBox = false;
            }
        } else {

            places[currentPlayer] = places[currentPlayer] + roll;
            if (this.playerShouldStartANewLap()) {
                places[currentPlayer] = places[currentPlayer] - boardSize;
            }

            console.log(players[currentPlayer] + "'s new location is " + places[currentPlayer]);
            console.log("The category is " + currentCategory());
            askQuestion();
        }
    };

    this.wasCorrectlyAnswered = function () {
        if (this.isPlayerInPnaltyBox()) {
            if (isGettingOutOfPenaltyBox) {
                console.log('Answer was correct!!!!');
                purses[currentPlayer] += 1;
                console.log(players[currentPlayer] + " now has " +
                    purses[currentPlayer] + " Gold Coins.");

                var winner = didPlayerWin();
                currentPlayer += 1;
                if (this.shouldResetCurrentPlayer())
                    currentPlayer = 0;

                return winner;
            } else {
                currentPlayer += 1;
                if (this.shouldResetCurrentPlayer())
                    currentPlayer = 0;
                return true;
            }



        } else {

            console.log("Answer was correct!!!!");

            purses[currentPlayer] += 1;
            console.log(players[currentPlayer] + " now has " +
                purses[currentPlayer] + " Gold Coins.");

            var winner = didPlayerWin();

            currentPlayer += 1;
            if (this.shouldResetCurrentPlayer())
                currentPlayer = 0;

            return winner;
        }
    };

    this.wrongAnswer = function () {
        console.log('Question was incorrectly answered');
        console.log(players[currentPlayer] + " was sent to the penalty box");
        inPenaltyBox[currentPlayer] = true;

        currentPlayer += 1;
        if (this.shouldResetCurrentPlayer())
            currentPlayer = 0;
        return true;
    };

    this.isOdd = function (roll) {
        return roll % 2 != 0;
    };

    this.playerShouldStartANewLap = function () {
        const lastPositionOnTheBoard = 11;
        return places[currentPlayer] > lastPositionOnTheBoard;
    };

    this.isPlayerInPnaltyBox = function () {
        return inPenaltyBox[currentPlayer];
    }

    this.shouldResetCurrentPlayer = function () {
        return currentPlayer == players.length;
    }
    
};




