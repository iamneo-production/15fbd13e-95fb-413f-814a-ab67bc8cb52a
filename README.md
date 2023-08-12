# 15fbd13e-95fb-413f-814a-ab67bc8cb52a
# Memory Game - Team Localhost Mavericks
https://sonarcloud.io/summary/overall?id=examly-test_15fbd13e-95fb-413f-814a-ab67bc8cb52a

# React Application Usecase_for_Memory Game

# Use Case Overview: 

The Memory Game React Application is a simple game where players have to match pairs of cards with the same image. The objective of the game is to find all the matching pairs in the least number of moves possible.

## Personas Involved: 

-   Player: The user who interacts with the Memory Game application.

## Flow of Events: 

1.  Player opens the Memory Game application. 
2.  The application displays a grid of facedown cards with images on the back. 
3.  Player clicks on two cards to flip them over. 
4.  If the two cards match, they remain face up, and the player earns points. 
5.  If the two cards do not match, they flip back to the facedown position. 
6.  The game continues until all the matching pairs are found. 
7.  Once all pairs are found, the game ends, and the player is presented with their score and the option to restart the game.

## Alternate Flow: 

-   If the player clicks on a third card before the previous two are flipped back, the application can show an error message and ignore the third click.

## Post Conditions: 

-   The game ends when all pairs of cards are matched. 
-   The player's score is displayed on the screen.

## JSON Mock RESTful: 

URL: GET /api/cards 

Description: Returns a list of card objects, each with a unique identifier and an image URL representing the facedown side. 

URL: POST /api/game/start 

Description: Initiates a new game session and returns a game identifier. 

URL: POST /api/game/{gameId}/flip 

Description: Accepts a card identifier as input and returns the result of flipping the card, whether it matches another card or not. 

URL: GET /api/game/{gameId}/score 

Description: Returns the current score of the player in the ongoing game identified by 'gameId'. 

URL: POST /api/game/{gameId}/restart 

Description: Restarts the game with the same gameId, resetting the cards and the player's score.

# Technical Outcome Conditions: 

-   Unit Testing Code 
-   Mock REST API (ex JSON-Server) for any API requirement 
-   Minimum of 5 Web Components (Screens) to be developed. 
-   Implementation of basic security authentication w public/protected and private route 
-   Minimum of 3 functional hooks 
-   Intra Component communication 
-   Responsive design 
-   Adaptation of Material UI / React Strap
