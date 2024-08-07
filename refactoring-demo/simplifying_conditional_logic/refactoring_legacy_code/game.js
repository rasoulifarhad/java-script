exports = typeof window !== "undefined" && window !== null ? window : global;

module.exports = function () {

    var minimumNumberOfPlayers = 2;

    var players = new Array();
    var places = new Array(6);
    var purses = new Array(6);
    var inPenaltyBox = new Array(6);


    var currentPlayer = 0;
    var isGettingOutOfPenaltyBox = false;

    numberOfCoinsToWin = 6;

    this.getNumberOfCoinsToWin = function () {
        return numberOfCoinsToWin;
    };

    this.getCurrentPlayer = function () {
        return currentPlayer;
    };

    this.setCurrentPlayer = function (playerId) {
        currentPlayer = playerId;
    };

    this.setCurrentPlayerPurses = function (count) {
        purses[currentPlayer] = count;
    };

    this.getMinimumNumberOfPlayers = function () {
        return minimumNumberOfPlayers;
    };

    this.didPlayerNotWin = function () {
        return !(purses[currentPlayer] == numberOfCoinsToWin);
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
        setDefaultPlayerParametersFor(this.nextPlayerId());

        console.log(playerName + " was added");
        console.log("They are player number " + players.length);

        return true;

    };

    this.howManyPlayers = function () {
        return players.length;
    };

    this.nextPlayerId = function () {
        return this.howManyPlayers() - 1;
    };

    var setDefaultPlayerParametersFor = function (playerId) {
        places[playerId] = 0;
        purses[playerId] = 0;
        inPenaltyBox[playerId] = false;
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

    this.roll = function (rolledNumber) {
        console.log(players[currentPlayer] + " is the current player");
        console.log("They have rolled a " + rolledNumber);
        const boardSize = 12;

        if (this.isPlayerInPenaltyBox()) {
            if (this.isOdd(rolledNumber)) {
                isGettingOutOfPenaltyBox = true;

                console.log(players[currentPlayer] + " is getting out of the penalty box");
                places[currentPlayer] = places[currentPlayer] + rolledNumber;
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
            // Player is placed to the next position based on the rolled number, information 
            // is told to the user, and we ask a question
            places[currentPlayer] = places[currentPlayer] + rolledNumber;
            if (this.playerShouldStartANewLap()) {
                places[currentPlayer] = places[currentPlayer] - boardSize;
            }

            console.log(players[currentPlayer] + "'s new location is " + places[currentPlayer]);
            console.log("The category is " + currentCategory());
            askQuestion();
        }
    };

    this.wasCorrectlyAnswered = function () {
        if (this.isPlayerInPenaltyBox()) {
            if (isGettingOutOfPenaltyBox) {
                console.log('Answer was correct!!!!');
                purses[currentPlayer] += 1;
                console.log(players[currentPlayer] + " now has " +
                    purses[currentPlayer] + " Gold Coins.");

                var winner = this.didPlayerNotWin();
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

            var winner = this.didPlayerNotWin();

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

    this.isPlayerInPenaltyBox = function () {
        return inPenaltyBox[currentPlayer];
    };

    this.setPlayerInPenaltyBox = function (inPenaltyBox) {
        inPenaltyBox[currentPlayer] = inPenaltyBox;
    };

    this.setPlayerName = function (name) {
        players[currentPlayer] = name;
    };

    this.setPlayerPlace = function (place) {
        places[currentPlayer] = place;
    };

    this.getPlayerPlace = function () {
        return places[currentPlayer];
    };


    this.shouldResetCurrentPlayer = function () {
        return currentPlayer == players.length;
    };
    
};




