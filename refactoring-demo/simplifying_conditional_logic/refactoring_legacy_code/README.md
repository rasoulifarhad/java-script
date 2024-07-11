Install the jasmine-node plugin from https://github.com/mhevery/jasmine-node

npm install jasmine-node -g

And execute:

jasmine-node .

Any test source matching the pattern *.spec.js will be executed.


### Refactoring Legacy Code

###### Magic Strings


 We are developing a trivia game. We know there is some kind of board on which our players must move. And to do so, we need to roll the dice. A die has six faces and it can produce numbers between one and six.

 f the current player's place or position is greater than 11, then its position will be reduced to the current one minus 12. This sounds like a case of when a player reaches the end of the board or play field and it is repositioned in its initial position. Probably position zero. Or, if our game board is circular, going over the last marked position will put the player into the relative first position. So 11 could be the board size. 