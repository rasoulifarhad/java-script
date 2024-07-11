Install the jasmine-node plugin from https://github.com/mhevery/jasmine-node

npm install jasmine-node -g

And execute:

jasmine-node .

Any test source matching the pattern *.spec.js will be executed.


### Refactoring Legacy Code

If temperature in the server room is below five degrees, and humidity rises over 
fifty percent but remains under eighty, and the air pressure is steady, then the 
senior technician John, who has at least three years of work experience in 
networking and servers administration should be notified, and he must wake up in 
the middle of the night, dress up, go out, take his car or call a cab if he does 
not have a car, drive to the office, enter the building, start the air conditioning 
and wait until temperature raises over ten degrees and humidity falls below twenty 
percent.

Simplification

If environmental conditions represent a risk... ... then something 
should be done. 

If environmental conditions represent a risk... ... then notify level 
three tech support. 

If environmental conditions represent a risk... ... then notify level 
three tech support. and expect environment to be restored within normal 
parameters.

If environmental conditions represent a risk, notify level three tech 
support and expect environment to be restored within normal parameters.

if(rand(minAnswerId, maxAnswerId == wrongAnswerId))

If a random number between minimum answer ID and maximum answer ID equals 
the wrong answer's ID, then...

What about this? If wrong answer is selected, then... Better, isn't it?

###### Magic Strings


 We are developing a trivia game. We know there is some kind of board on which our players must move. And to do so, we need to roll the dice. A die has six faces and it can produce numbers between one and six.

 f the current player's place or position is greater than 11, then its position will be reduced to the current one minus 12. This sounds like a case of when a player reaches the end of the board or play field and it is repositioned in its initial position. Probably position zero. Or, if our game board is circular, going over the last marked position will put the player into the relative first position. So 11 could be the board size. 