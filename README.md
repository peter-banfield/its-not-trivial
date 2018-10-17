# its-not-trivial
An interactive party trivia game.

## How to use
1. Run `npm install` to install dependencies locally
2. Run `npm start` to start the app
3. Navigate in a browser to localhost:3000/ to see the Player board or localhost:3000/GameBoard for the gameboard screen

## Contributing
Create a branch with a descriptive name that connects to an existing issue. Format should be Issue-#-descriptive-name. 

# RULES
* 4-7 Players
* Once a question has been asked players will have 60 seconds to respond with a numerical answer
* The players will then have 60 seconds to place two bets on the answer or answers they believe closest to the correct answer without going over
* Points are awarded in the following fashion
    * One bet will be worth 2 points
    * The other bet will be worth 1 point 
    * Correct bets placed on Smaller than the Smallest will give 1 bonus point
    * Providing an answer that is exactly correct will give 2 bonus points.
    * once per round you can double down and double the points from one of your two bets if successful
