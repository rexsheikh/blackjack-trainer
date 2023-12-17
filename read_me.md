Blackjack Trainer - READ ME

1. Getting Started
   Note: All references for this project are show in line with the corresponding code.

   a. Installations - First, ensure that python is installed and check the version in the terminal using the command: `python --version`. Next, ensure that Django is installed, using `pip list` to see all installed python packages. If it is not listed, enter the following terminal command: `pip install django`. Lastly, ensure Plotly is installed, using the command `pip install plotly` if not.
   b. Setup - To begin this project from scratch start a new Django app using the following commands:

   - `django-admin startproject finalProject`
   - `python3 manage.py startapp blackjack`
     Next, configure settings.py to include the new application name (blackjack).

2. Application Structure
   a. Client Side: Blackjack Trainer uses javascript, CSS and HTML to present a user interface. Under the blackjack directory, notice the static and template directories. The former holds javascript files for the blackjack game loop and API endpoints to both interact with the data and respond to user inputs. This directory also has styles.css which controls the application's appearance in finer detail The latter, templates, holds html files and django templates that apply to each page across the application.

   b. Server Side: Blackjack Trainer uses Django to store and retrieve data in a SQLite database. In running the above commands to start a new django project, one is given default files to include urls.py, views.py and admin.py. Urls.py describes what urls the application uses in conjuction with what python views to run on reaching that url. Admin.py allows the user to seed or delete data from the database as well as control user permissions and access.

3. Primary Game Loop - blackjack.js
   a. Before describing the primary functions involved in this javascript file, it is first necessary to point out global constant that these function will be manipulating. First, notice the strategy charts (`stratHartTotal`,`stratSoftTotal`,`stratPair`). These objects reflect blackjack basic strategy charts that describe the best move in a given scenario. For example, hard totals shows a user's sum, and depending on a dealer's shown card, the user should either hit, double, or stand. Next, the `gamestate` object stores key information about the current hand of the game to include player cards (and their corresponding icons), dealer cards, the player hand queue (if there's split hands) and current queue counter to keep track of which hand to evaluate, and hand evaluations to determine whether a hand was won or lost.

   b. DOM content loaded: Once the DOM is loaded, a single function, `initialize()` is executed. This contains higher level function of the game which then call smaller helper functions and API calls to present and store information. The following steps will proceed through those function calls to describe their purpose within the overall functionality of the game.

   b. Reset game state: The first function in initialize is `resetGameState()`. This function which resets the `gamestate` object itself to default values and erases and divs built within the DOM is placed first to allow for a game loop. Key information about `gamestate`, like correct responses, are captured throughout the game and can be reset upon a hand's completion.

   c. Bet loop - Here, the user is forced to place a bet to break the while loop and reveal the deal button with the helper function, `toggleViews`. This function shows the betting amounts and subtracts from the user's total cash to add to the total bet for a hand.

   d. Deal - Once deal is pressed, the player and dealer are given cards. The user sees two cards and the dealer's second card is shown face down. To reflect real gameplay, there is an initial check at this point to see whether the user or the dealer or both have blackjack at this point, which would end the loop. This function works by assigning random cards and icons to the player and dealer gamestate which are then presented in the DOM in their respective places.

   e. Get Choice - Here, the user will always be able to choose hit or stand and will conditionally be presented with double or split. Double appears on the first deal only and split when the first two dealt cards are identical in value.

   f. Do Choice - Entering a choice will execute that choice. For example, if a user hit's, they will be presented another card. Their hand is evaluated and they are either presented more choices if their sum is safe or not if they have busted. Stand will end the user's turn and begin the dealer's hit loop. Double is essentially a hit immediately followed by a stand. Split will add a new hand as a key value pair to the player's hand, hit to the current hand and allow the user to proceed through that hand normally. Critical to this operation, though, is the addition of the split hand to `gamestate[queue]`, which captures the split hand that still needs to be evaluated. Once all the player's hands are complete, the dealer is automatically given cards and will stand on 17 and hit on a soft 17. Finally, the gamestate is evalauted to check for a push, win or loss. Money is adjusted accordingly, too.

   g. Key API calls - For each choice, the selection is vetted against the strategy charts to determine whether it was correct or not. There is a separate model for each chart, but `logChoice` takes the key information and passes it to the server side to be processed. Wins and losses are captured too, including initial blackjack from dealer or player along with corresponding bet losses and gains.

4. Main Menu and Statistics
   a. Total wins, blackjack, and player information: This pieces of information are simple data retrievals to get the User's overall stats. The Hand model captures the outcome of each hand to include blackjacks. The user information stores their total cash.

   b. Plotly Heatmaps - The plotly heatmaps show a grid of response data for each strategy chart. Configuring the x and y axes describe the dealer's up card and the player's hand, respectively. From here, correct responses are retrieved from the database and placed into a two dimensional array that corresponds to their location on the chart. The overall chart aims to show player's weak points in their understanding of basic strategy and overall response trends. Hovering over each cell will give the exact number of correct responses for a given scenario.

5. Video URL: https://youtu.be/I6eMsCr6y4s
