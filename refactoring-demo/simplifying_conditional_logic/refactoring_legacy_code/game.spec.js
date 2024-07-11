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
    const loggedLines = [];
    const oldLog = console.log;
    console.log = function(arg) {
      loggedLines.push(arg);
    }
    _.range(18).forEach(() => {
        gameRunner(getRandom);
    });
    console.log = oldLog;
    let content = loggedLines.join("\n");
    fs.writeFile(
      "The_test_environment.should_pass.approved.txt",
      content,
      function (err) {
        if(err) {
          return console.error(err);
        }
        console.log(" Finished writing ");
      }
    )
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
