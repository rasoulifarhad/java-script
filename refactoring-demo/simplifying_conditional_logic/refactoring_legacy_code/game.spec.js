const Game = require('./game.js');
const gameRunner = require('./game-runner.js');
const expect = require('chai').expect;
const approvals = require('approvals');
approvals.mocha();
const _ = require('lodash');
const { getRandom } = require('./rnd.js');
const fs = require('fs');
const exp = require('constants');

describe("The test environment", function () {

  let expectedContent;
  let game;

  this.beforeEach(function () {
    var data = fs.readFileSync('The_test_environment.should_pass.approved.txt');
    expectedContent = data.toString();
    game = new Game();
  });

  it("should pass", function () {
    expect(true).to.be.true;
    expect(true).to.be.equal(true)
  });

  it("should access the game", function () {
    expect(Game).anything;
  });

  it("should create the game", function () {
    expect(game).anything;
  });

  it("new game is not playable", function () {
    addJustNotEnoughPlayers();
    expect(game.isPlayable()).to.be.false;
  });

  function addJustNotEnoughPlayers()  {
    addManyPlayers(game.getMinimumNumberOfPlayers() - 1);
  };

  function addEnoughPlayers()  {
    addManyPlayers(game.getMinimumNumberOfPlayers());
  };

  function addManyPlayers(numberOfPlayers) {
    for (let index = 0; index < numberOfPlayers; index++) {
      game.add('player#' + index);    
    }
  };

  it("it can add new players", function () {
    expect(game.howManyPlayers()).equal(0);
    game.add("A player");
    expect(game.howManyPlayers()).equal(1);
  });


  it("after adding two players to a new game it is playable", function () {
    addEnoughPlayers();
    expect(game.isPlayable()).to.be.true;
  });

  it("when player enter a wrong answer it is sent to the penalty box", function () {
    game.add("A player");
    game.wrongAnswer();
    expect(game.isPlayerInPenaltyBox()).to.be.true;
    expect(game.getCurrentPlayer()).equal(0);
  });

  it("current player is not reset after wrong answer if other players did not yet play", function () {
    addEnoughPlayers();
    game.wrongAnswer();
    expect(game.getCurrentPlayer()).equal(1);
  });

  it("test player wins with the correct number of coins", function () {
    addEnoughPlayers();
    expect(game.getNumberOfCoinsToWin()).equal(6);
    game.setCurrentPlayer(0);
    expect(game.getCurrentPlayer()).equal(0);
    game.setCurrentPlayerPurses(game.getNumberOfCoinsToWin());
    expect(game.didPlayerNotWin()).to.be.false;

  });

  it("test second part of roll logic", function () {
    game.setCurrentPlayer(0);
    game.setPlayerName('john');
    game.setPlayerInPenaltyBox(false);
    game.setPlayerPlace(2);
    game.roll(1);
    expect(game.getPlayerPlace()).equal(3);
  });

  it("game should pass", function () {
    const loggedLines = [];
    const oldLog = console.log;
    console.log = function (arg) {
      loggedLines.push(arg);
    }
    _.range(18).forEach(() => {
      gameRunner(getRandom);
    });
    console.log = oldLog;
    let actualContent = loggedLines.join("\n");
    expect(actualContent).to.be.equal(expectedContent);
  });
});
