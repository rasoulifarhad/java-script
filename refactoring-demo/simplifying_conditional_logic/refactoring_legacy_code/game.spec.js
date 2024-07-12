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

  before(() => console.log('Testing started - before all tests'));

  after(() => console.log('Testing finished - after all tests'));

  beforeEach(function () {
    var data = fs.readFileSync('The_test_environment.should_pass.approved.txt');
    expectedContent = data.toString();
  });

  afterEach(() => console.log('After a test - exit a test'));

  it("should pass", function () {
    expect(true).to.be.true;
    expect(true).to.be.equal(true)
  });

  it("should access the game", function () {
    expect(Game).anything;
  });

  it("should create the game", function () {
    const game = new Game();
    expect(game).anything;
  });

  it("new game is not playable", function () {
    const game = new Game();
    addJustNotEnoughPlayers(game);
    expect(game.isPlayable()).to.be.false;
  });

  function addJustNotEnoughPlayers(game)  {
    for (let index = 0; index < game.getMinimumNumberOfPlayers() - 1; index++) {
      game.add('player#' + index);    
    }
  }

  function addEnoughPlayers(game)  {
    for (let index = 0; index < game.getMinimumNumberOfPlayers(); index++) {
      game.add('player#' + index);    
    }
  }

  it("after adding two players to a new game it is playable", function () {
    const game = new Game();
    addEnoughPlayers(game);
    expect(game.isPlayable()).to.be.true;
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
