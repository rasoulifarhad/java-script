Install the jasmine-node plugin from https://github.com/mhevery/jasmine-node

npm install jasmine-node -g

And execute:

jasmine-node .

Any test source matching the pattern *.spec.js will be executed.


### Refactoring Legacy Code

###### Magic Strings


 We are developing a trivia game. We know there is some kind of board on which our players must move. And to do so, we need to roll the dice. A die has six faces and it can produce numbers between one and six.