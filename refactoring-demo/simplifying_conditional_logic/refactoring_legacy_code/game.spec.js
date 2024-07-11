const Game = require('./game.js');
const gameRunner = require('./game-runner.js');
const expect = require('chai').expect;
const approvals = require('approvals');
approvals.mocha();
const _ = require('lodash');
const {getRandom} = require('./rnd.js');
const fs = require('fs');
describe("The test environment", function() {
  it("should pass", function() {
    expect(true).to.be.true;
    expect(true).to.be.equal(true)
  });

  it("should access the game", function() {
    expect(Game).anything;
  });

  it("game should pass", function() {
    const loggedLines = [];
    const oldLog = console.log;
    console.log = function(arg) {
      loggedLines.push(arg);
    }
    _.range(18).forEach(() => {
        gameRunner(getRandom);
    });
    console.log = oldLog;
    // console.log(loggedLines);
    // this.verifyAsJson(loggedLines);
  });
});

// describe("The test environment", function() {
//   it("should pass", function() {
//     expect(true).toBe(true);
//   });

//   it("should access game", function() {
//     expect(Game).toBeDefined();
//   });
// });

// describe("Your specs...", function() {
//   // it ...
// });
