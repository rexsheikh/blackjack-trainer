// strategy charts referenced from:
// https://www.blackjackapprenticeship.com/blackjack-strategy-charts/

// for assigning multiple variables at once in javascript
// https://sabe.io/blog/javascript-declare-multiple-variables

// destructuring statement:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// using reduce to sum a list:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// removing all children of a node:
// https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/

// removing event listeners with clone node and replace child
// https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element

// keep track of player turn using variables (in this context, I am using gamestate)
// https://stackoverflow.com/questions/56508951/how-do-i-keep-track-of-players-turn-in-game

// using promises to chain events (specifically using then)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// playerSum:dealerUp:correctAns
const stratHardTotal = {
  5: {
    2: "hit",
    3: "hit",
    4: "hit",
    5: "hit",
    6: "hit",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  6: {
    2: "hit",
    3: "hit",
    4: "hit",
    5: "hit",
    6: "hit",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  7: {
    2: "hit",
    3: "hit",
    4: "hit",
    5: "hit",
    6: "hit",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  8: {
    2: "hit",
    3: "hit",
    4: "hit",
    5: "hit",
    6: "hit",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  9: {
    2: "hit",
    3: "double",
    4: "double",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  10: {
    2: "double",
    3: "double",
    4: "double",
    5: "double",
    6: "double",
    7: "double",
    8: "double",
    9: "double",
    10: "hit",
    ace: "hit",
  },
  11: {
    2: "double",
    3: "double",
    4: "double",
    5: "double",
    6: "double",
    7: "double",
    8: "double",
    9: "double",
    10: "double",
    ace: "double",
  },
  12: {
    2: "hit",
    3: "hit",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  13: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  14: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  15: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  16: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  17: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "stand",
    8: "stand",
    9: "stand",
    10: "stand",
    ace: "stand",
  },
  18: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "stand",
    8: "stand",
    9: "stand",
    10: "stand",
    ace: "stand",
  },
  19: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "stand",
    8: "stand",
    9: "stand",
    10: "stand",
    ace: "stand",
  },
  20: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "stand",
    8: "stand",
    9: "stand",
    10: "stand",
    ace: "stand",
  },
};
// playerOtherCard (ace assumed):dealerUp:correctAns
const stratSoftTotal = {
  2: {
    2: "hit",
    3: "hit",
    4: "hit",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  3: {
    2: "hit",
    3: "hit",
    4: "hit",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  4: {
    2: "hit",
    3: "hit",
    4: "double",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  5: {
    2: "hit",
    3: "hit",
    4: "double",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  6: {
    2: "hit",
    3: "double",
    4: "double",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  7: {
    2: "double",
    3: "double",
    4: "double",
    5: "double",
    6: "double",
    7: "hit",
    8: "hit",
    9: "hit",
    10: "hit",
    ace: "hit",
  },
  8: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "double",
    7: "stand",
    8: "stand",
    9: "stand",
    10: "stand",
    ace: "stand",
  },
  9: {
    2: "stand",
    3: "stand",
    4: "stand",
    5: "stand",
    6: "stand",
    7: "stand",
    8: "stand",
    9: "stand",
    10: "stand",
    ace: "stand",
  },
};
// playerPair:dealerUp:split (y or n)
const stratPairs = {
  2: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "y",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  3: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "y",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  4: {
    2: "n",
    3: "n",
    4: "n",
    5: "y",
    6: "y",
    7: "n",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  5: {
    2: "n",
    3: "n",
    4: "n",
    5: "n",
    6: "n",
    7: "n",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  6: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "n",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  7: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "y",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  8: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "y",
    8: "y",
    9: "y",
    10: "y",
    ace: "y",
  },
  9: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "n",
    8: "y",
    9: "y",
    10: "n",
    ace: "n",
  },
  10: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "y",
    8: "n",
    9: "n",
    10: "n",
    ace: "n",
  },
  ace: {
    2: "y",
    3: "y",
    4: "y",
    5: "y",
    6: "y",
    7: "y",
    8: "y",
    9: "y",
    10: "y",
    ace: "y",
  },
};
const gameState = {
  playerCards: [],
  dealerCards: [],
  playerWin: false,
  dealerWin: false,
  playerBust: false,
  dealerBust: false,
  totalBet: 0,
  splitHands: [],
};
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  playBlackJack();
});

function resetGameState() {
  console.log("reset game state...");
  toggleViews([
    ["bet-view", 1],
    ["choice-view", 0],
  ]);
  gameState.playerCards = [];
  gameState.dealerCards = [];
  gameState.playerWin = false;
  gameState.dealerWin = false;
  gameState.playerBust = [];
  gameState.dealerBust = [];
  gameState.totalBet = 0;
  const playerCardDiv = document.getElementById("player-cards");
  const dealerCardDiv = document.getElementById("dealer-cards");
  while (playerCardDiv.firstChild) {
    playerCardDiv.removeChild(playerCardDiv.firstChild);
  }
  while (dealerCardDiv.firstChild) {
    dealerCardDiv.removeChild(dealerCardDiv.firstChild);
  }
}
function playBlackJack() {
  console.log("playBlackJack...");
  resetGameState();
  toggleViews([["bet-view", 1]]);
  bet();
  firstDeal();
  showDeal();
  getChoice(gameState.playerCards, gameState.dealerCards);
}

function bet() {
  console.log("bet...");
  toggleViews([
    ["deal-view", 0],
    ["choice-view", 0],
  ]);
  const betBtns = document.querySelectorAll(".bet-btn");
  betBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const betVal = parseInt(btn.getAttribute("data-chip-val"), 10);
      gameState.totalBet += betVal;
      console.log(gameState.totalBet);
    });
  });
}

function showDeal() {
  document.querySelector(".deal-btn").addEventListener("click", function () {
    toggleViews([
      ["bet-view", 0],
      ["deal-view", 1],
      ["choice-view", 1],
    ]);
  });
}

function firstDeal() {
  console.log("firstDeal...");
  for (let i = 0; i < 4; i++) {
    let cardVal = getRandomCard();
    if (i % 2 == 0) {
      buildAssignCard(cardVal, "player-cards");
      gameState.playerCards.push(cardVal);
    } else {
      if (i === 1) {
        dealerUp = cardVal;
      }
      gameState.dealerCards.push(cardVal);
      buildAssignCard(cardVal, "dealer-cards");
    }
  }
}

function buildAssignCard(cardVal, placement) {
  console.log("buildAssignCard...");
  let cardEl = document.createElement("h2");
  cardEl.innerHTML = cardVal;
  document.getElementById(placement).appendChild(cardEl);
}
function getRandomCard() {
  let idx = Math.floor(Math.random() * cards.length);
  let cardVal = cards[idx];
  return cardVal;
}

function evalSum(cards) {
  console.log("evalSum...");
  let sum = cards.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (sum === 21) {
    return "blackjack";
  } else if (sum > 21) {
    return "bust";
  } else {
    return "safeSum";
  }
}

async function getChoice(playerCards, dealerCards) {
  console.log("getChoice...");
  const choiceBtns = document.querySelectorAll(".choice-btn");
  let pA = playerCards[0];
  let pB = playerCards[1];
  let dU = dealerCards[0];
  choiceBtns.forEach((btn) => {
    // Create a clone of each button to remove existing event listeners
    const cloneBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(cloneBtn, btn);

    cloneBtn.addEventListener("click", function () {
      const choice = cloneBtn.getAttribute("data-choice");
      const correct = evalChoice(pA, pB, dU, choice);

      fetch("/blackjack", {
        method: "POST",
        body: JSON.stringify({
          choice: choice,
          player_a: pA,
          player_b: pB,
          dealer_up: dU,
          correct: correct,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          doChoice(choice);
        });
    });
  });
}

function evalChoice(pA, pB, dU, choice) {
  console.log("evalChoice...");
  // eval pairs
  if (pA === pB) {
    const correctChoice = stratPairs[pA][dU];
    return correctChoice === choice;
    // eval soft totals
  } else if (pA === 11 || pB === 11) {
    let sum = pA + pB;
    const correctChoice = stratHardTotal[sum][dU];
    return correctChoice === choice;
    // eval hard totals
  } else {
    let sum = pA + pB;
    const correctChoice = stratHardTotal[sum][dU];
    return correctChoice === choice;
  }
}
function toggleViews(actionList) {
  for (let i = 0; i < actionList.length; i++) {
    let [view, action] = actionList[i];
    if (action === 0) {
      document.getElementById(view).style.display = "none";
    } else {
      document.getElementById(view).style.display = "block";
    }
  }
}

function doChoice(choice) {
  console.log(`doChoice...${choice}`);
  if (choice === "hit") {
    hit();
  } else if (choice === "split") {
    // put each of the split cards into it's own array to set up the splitQueue
    gameState.playerCards = gameState.playerCards.map((card) => [card]);
    console.log(
      `split hands initialize: ${JSON.stringify(gameState.playerCards)}`
    );
    document.getElementById("player-cards").innerHTML = `
    <div class="container">
      <div class="row" id = "split-container">
      </div>
    </div>`;
    for (let idx = 0; idx < gameState.playerCards.length; idx++) {
      let currHand = gameState.playerCards[idx];
      document.getElementById("split-container").innerHTML += `
      <div class="col-md-6">
       <h2>${currHand[0]}</h2>
      </div>
      `;
    }
    splitQueue();
  }
}
function hit() {
  let cardVal = getRandomCard();
  gameState.playerCards.push(cardVal);
  buildAssignCard(cardVal, "player-cards");
  evalSum(gameState.playerCards) === "safeSum"
    ? getChoice(gameState.playerCards, gameState.dealerCards)
    : playBlackJack();
}

function dealerTurn() {}

function stand() {
  // it is now the dealer's turn. hit until 17 or greater, blackjack or bust
}

function double() {
  // double bet. deal one more card. then dealer's turn.
}

async function splitQueue() {
  for (let idx = 0; idx < gameState.playerCards.length; idx++) {
    const playHand = getChoice(
      gameState.playerCards[idx],
      gameState.dealerCards
    );
    await playHand;
  }
}

// **potential templates for split**
function conditionalRepeat(steps) {
  let currentStep = 1;

  function performStep() {
    return new Promise((resolve) => {
      // Simulating an asynchronous operation
      console.log(`Step ${currentStep} completed`);
      currentStep++;
      resolve();
    });
  }

  function repeat() {
    if (currentStep <= steps) {
      performStep().then(() => {
        repeat();
      });
    } else {
      console.log("All steps completed!");
    }
  }

  const startButton = document.getElementById("startButton");

  if (startButton) {
    startButton.addEventListener("click", () => {
      currentStep = 1;
      repeat();
    });
  }
}

// Example usage: Repeat 3 steps on button click
conditionalRepeat(3);

function doSomething() {
  // Simulating a synchronous operation
  const result = "First result";
  console.log(`Step 1: ${result}`);
  return Promise.resolve(result);
}

function doSomethingElse(previousResult) {
  // Simulating a synchronous operation
  const newResult = `${previousResult}, Second result`;
  console.log(`Step 2: ${newResult}`);
  return Promise.resolve(newResult);
}

function doThirdThing(previousResult) {
  // Simulating a synchronous operation
  const finalResult = `${previousResult}, Third result`;
  console.log(`Step 3: ${finalResult}`);
  return Promise.resolve(finalResult);
}

function getUserResponse() {
  return new Promise((resolve) => {
    // Simulating user input with a button click
    const button = document.getElementById("userButton");

    if (button) {
      button.addEventListener("click", () => {
        const userInput = prompt("Enter something:");
        resolve(userInput);
      });
    } else {
      resolve("Default user input");
    }
  });
}

function failureCallback(error) {
  console.error(`Something went wrong: ${error}`);
}

// Usage of the promises chain
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) =>
    getUserResponse().then(
      (userInput) => `${newResult}, User input: ${userInput}`
    )
  )
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
