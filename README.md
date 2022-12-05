Windows 95: A Role-Playing Game

This is a role-playing game set in the 90s, where the player takes on the role of Bill Gates and attempts to create Windows 95. The game features 10 different levels with various scenarios for Bill's quest, and a scoring system that tracks the player's progress based on the choices that they make. The game ends with either a congratulations message or a failure message, depending on the player's score.

How to Play

-Install the game on your computer by cloning the Git repository and running npm install to install the dependencies.
-Start the game by running npm start to launch the application.
-When the game starts, you will see a menu page that looks like an old school DOS screen.
-Click the "Start" button to begin a new game.
-You will see the first level of the game, which will contain a description of the scenario and a set of choices that you can make.
-Choose a response by clicking on one of the buttons.
-The game will update your score based on the value of your choice, and it will advance to the next level.
-Repeat steps 5-7 for each level of the game until you reach the end.
-When the game ends, you will see a game over message and a message that either congratulates you on your success or informs you of your failure.

Tips

-Read the descriptions and choices carefully to make the best decisions for your quest.
-Keep track of your score to see how well you are doing in your quest.
-Try to earn a high score to unlock special rewards or unlockables in the game.
-Have fun and enjoy the nostalgic 90s atmosphere of the game.

How the Code Works

The game is built using React, a popular JavaScript library for building user interfaces. The code is organized into components, which are reusable pieces of UI that can be composed to create the game. The main component of the game is the App component, which manages the state of the game and renders the other components.

The App component includes a Menu component, which renders the menu page for the game. The Menu component uses inline styles to create the look of an old school DOS screen, and it includes a "Start" button that starts a new game when clicked.

When the player starts a new game, the App component renders a Game component, which displays the current level of the game. The Game component uses a JSON file to import the metadata for the 10 different levels of the game, and it uses the find method to find the current level based on the game progress. The Game component then renders the level's name, description, and choices as buttons.

When the player clicks on a button, the Game component updates the game progress by incrementing it by one, and it updates the score by adding the value of the choice that the user made. When the game ends, the Game component renders a game over message and a message that either congratulates the player on their success or informs them of their failure, depending on the player's score.

The game also includes a CSS file that defines styles for the components of the game. The file includes a .game class that sets the font family, background color, and text color for the Game component. The file also defines styles for the game's title, description, and buttons, including font sizes, margins, padding, and hover effects.

The styles in the CSS file are applied to the components of the game using the className attribute in the JSX code. For example, the .game class is applied to the <div> element that wraps the Game component like this:

Copy code
/*
<div className="game">
  ...
</div>
*/
This allows the styles in the CSS file to be applied to the components of the game, creating the desired look and feel for the game. You can modify the styles in the CSS file to suit your game's requirements, or you can add additional styles to create new looks and effects for the game.