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

// array from to add an html element to a NodeList
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// *********GLOBAL VARIABLES AND CONSTANTS********
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
  turn: "player",
};
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  initialize();
});
// ********* HELPER FUNCTIONS ********
function buildAssignCard(cardVal, placement) {
  let cardEl = document.createElement("h2");
  cardEl.innerHTML = cardVal;
  document.getElementById(placement).appendChild(cardEl);
}
function getRandomCard() {
  let idx = Math.floor(Math.random() * cards.length);
  let cardVal = cards[idx];
  return cardVal;
}
function determineCorrect(pA, pB, dU, choice) {
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
function getSum(cards) {
  let sum = cards.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}
// ********* INITIALIZE / RESET FUNCTIONS ********
// intialize functions
// bet, deal, eval
async function initialize() {
  resetGameState();
  bet();
  firstDeal();
  await initCheck(); //do I need the await here to run the timeouts?
  console.log(
    `player cards: ${gameState.playerCards}...dealer cards: ${gameState.dealerCards}....turn: ${gameState.turn}`
  );
  if (check != "proceed") {
    console.log("init check not proceed...");
  } else {
    getPlayerChoice();
  }
}
// wait half a second for end game animation then reset.

function resetGameState() {
  toggleViews([
    ["bet-view", 1],
    ["deal-btn-view", 0],
    ["choice-view", 0],
    ["deal-btn-view", 0],
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

function firstDeal() {
  console.log("firstDeal...");
  for (let i = 0; i < 4; i++) {
    let cardVal = getRandomCard();
    if (i % 2 == 0) {
      gameState.playerCards.push(cardVal);
      buildAssignCard(cardVal, "player-cards");
    } else {
      gameState.dealerCards.push(cardVal);
      if (i === 1) {
        buildAssignCard(cardVal, "dealer-cards");
      } else {
        let cardEl = document.createElement("h2");
        cardEl.id = "dealer-down";
        cardEl.innerHTML = "dealerDown";
        document.getElementById("dealer-cards").appendChild(cardEl);
      }
    }
  }
}
function bet() {
  console.log("bet...");
  toggleViews([
    ["deal-view", 0],
    ["choice-view", 0],
    ["deal-btn-view", 0],
  ]);
  const betBtns = document.querySelectorAll(".bet-btn");
  let betHand = 0;
  betBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      betHand += parseInt(btn.getAttribute("data-chip-val"), 10);
      gameState.totalBet = betHand;
      toggleViews([["deal-btn-view", 1]]);
    });
  });
  document
    .getElementById("deal-btn-view")
    .addEventListener("click", function () {
      toggleViews([
        ["bet-view", 0],
        ["deal-view", 1],
        ["choice-view", 1],
      ]);
      toggleViews([["deal-btn-view", 0]]);
    });
}
// *********PLAYER ACTIONS / REACTIONS ********
async function playerActionLoop() {
  console.log("starting player loop...");
  console.log(
    `gamestate.playerCards: ${JSON.stringify(gameState.playerCards)}`
  );
  const eval = evalHand();
  if (eval != "safeSum") {
    console.log(`player ${eval}!!`);
    // show dealer down card, show dealer down card
    // capture bets
  } else {
    console.log("getting new choice..");
    const choice = await getPlayerChoice(
      gameState.playerCards,
      gameState.dealerCards
    );
    await doPlayerChoice(choice);
    return playerActionLoop();
  }
}
function getPlayerChoice() {
  console.log("getPlayerChoice....");
  let pA = gameState.playerCards[0];
  let pB = gameState.playerCards[1];
  let dU = gameState.dealerCards[0];
  // get all the buttons to add event listeners. always show the hit and stand button. double/split conditionally.
  const choiceBtns = document.querySelectorAll(".choice-btn");
  toggleViews([
    ["hit-btn", 1],
    ["stand-btn", 1],
    ["double-btn", 0],
    ["split-btn", 0],
  ]);
  if (gameState.playerCards.length === 2) {
    toggleViews([["double-btn", 1]]);
  }
  if (pA === pB) {
    toggleViews([["split-btn", 1]]);
  }

  choiceBtns.forEach((btn) => {
    // Create a clone of each button to remove existing event listeners
    const cloneBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(cloneBtn, btn);

    cloneBtn.addEventListener("click", function () {
      const choice = cloneBtn.getAttribute("data-choice");
      const correct = determineCorrect(pA, pB, dU, choice);
      toggleViews([["choice-view", 0]]);
      doPlayerChoice(choice);
    });
  });
}

async function doPlayerChoice(choice) {
  console.log(`doPlayerChoice...${choice}`);
  if (choice === "hit") {
    console.log("in the hit statement...");
    playerHit();
  } else if (choice === "stand") {
    console.log("stand....end player choice...start dealer choice");
    await showDealerDown();
    dealerHitLoop();
    // end player turn, dealer turn
  } else if (choice === "double") {
    let newBet = gameState.totalBet * 2;
    gameState.totalBet = newBet;
    await playerHit();
    await showDealerDown();
    console.log(`total bet is now: ${gameState.totalBet}`);
    console.log("double....end player choice...start dealer choice");
    dealerHitLoop();
  } else if (choice === "split") {
    console.log("split chosen...");
  }
}
function showDealerDown() {
  return new Promise(() => {
    setTimeout(() => {
      let dealerDown = document.getElementById("dealer-down");
      dealerDown.innerHTML = gameState.dealerCards[1];
    }, 500);
  });
}
// check for player and dealer blackjack on first deal
async function initCheck() {
  let pSum = getSum(gameState.playerCards);
  let dSum = getSum(gameState.dealerCards);
  if (pSum === 21 && dSum === 21) {
    await showDealerDown();
    // need modal or something to show push.
    resetGameState();
    initialize();
  } else if (pSum != 21 && dSum === 21) {
    await showDealerDown();
    // need modal or something to show dealer win.
    resetGameState();
    initialize();
  } else if (pSum === 21 && dSum != 21) {
    console.log("playerWin");
    await showDealerDown();
    resetGameState();
    initialize();
  } else {
    return "proceed";
  }
}

function evalHand() {
  let eval;
  if (gameState.turn === "player") {
    const sum = getSum(gameState.playerCards);
    if (sum === 21) {
      eval = "blackjack";
    } else if (sum > 21) {
      eval = "bust";
    } else {
      eval = "safeSum";
    }
  } else {
    let dealerSoftTotal = gameState.dealerCards.includes(11) ? true : false;
    if (sum === 21) {
      eval = "blackjack";
    } else if (sum > 21) {
      eval = "bust";
    } else if (sum < 17 || (sum === 17 && dealerSoftTotal)) {
      eval = "dealerHit";
    } else if (sum >= 17) {
      eval = "dealerStand";
    }
  }
  return eval;
}

async function dealerHitLoop() {
  let eval = evalHand();
  while (eval === "dealerHit") {
    await hit();
    eval = evalHand();
  }
  console.log(`...dealer hit loop complete...dealer end was ${eval}`);
}

function hit() {
  return new Promise((resolve) => {
    if (gameState.turn === "player") {
      setTimeout(() => {
        let cardVal = getRandomCard();
        gameState.playerCards.push(cardVal);
        buildAssignCard(cardVal, "player-cards");
        resolve("hit complete");
        console.log("hit complete");
        console.log(
          `gamestate.playerCards: ${JSON.stringify(gameState.playerCards)}`
        );
      }, 500);
    } else {
      setTimeout(() => {
        let cardVal = getRandomCard();
        gameState.dealerCards.push(cardVal);
        buildAssignCard(cardVal, "dealer-cards");
        resolve("hit complete");
      }, 500);
    }
  });
}

async function playerHit() {
  toggleViews([["choice-view", 0]]);
  await hit();
  const eval = evalHand();
  if (eval != "safeSum") {
    console.log("not a safe sum....");
    return initialize();
  } else {
    toggleViews([["choice-view", 1]]);
  }
}
