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
  playerCards: {
    "player-cards": [],
  },
  currHand: "player-cards",
  dealerCards: [],
  totalBet: 0,
  splitQueue: [],
  debugMode: true,
};
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  initialize();
});
// ********* HELPER FUNCTIONS ********
function buildAssignCard(cardVal) {
  let cardEl = document.createElement("h2");
  cardEl.innerHTML = cardVal;
  document.getElementById(gameState.currHand).appendChild(cardEl);
}
function getRandomCard() {
  let idx = Math.floor(Math.random() * cards.length);
  let cardVal = cards[idx];
  return cardVal;
}
function determineCorrect(choice) {
  let currHand = gameState.playerCards[gameState.currHand];
  let correctChoice;
  let pA = currHand[0];
  let pB = currHand[1];
  let dU = gameState.dealerCards[0];
  let sTotal = currHand.includes(11) ? true : false;
  if (pA === pB && currHand === 2) {
    correctChoice = stratPairs[pA][dU];
    return correctChoice === choice;
    // eval soft totals
  } else if (sTotal && getSum(currHand) < 21) {
    let sum = 0;
    for (let idx = 0; idx < gameState.playerCards[currHand].length; idx++) {
      if (currHand[idx] === 11) {
        continue;
      } else {
        sum += currHand[idx];
      }
    }
    correctChoice = stratSoftTotal[sum][dU];
    return correctChoice === choice;
  } else {
    let sum = 0;
    if (sTotal) {
      // put 11 at the back of the array with sort then get rid of it
      // get the sum + 1 to replace 11 with one
      for (let idx = 0; idx < gameState.playerCards[currHand].length; idx++) {
        if (currHand[idx] === 11) {
          sum += 1;
        } else {
          sum += currHand[idx];
        }
      }
    } else {
      sum = getSum(currHand);
    }
    correctChoice = stratHardTotal[sum][dU];
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
  if (gameState.debugMode) {
    manualDealAssign(2, 2, 4, 4);
  } else {
    firstDeal();
  }
  const checkDeal = await initCheck(); //do I need the await here to run the timeouts?
  console.log(
    `player cards: ${gameState.playerCards}...dealer cards: ${gameState.dealerCards}....turn: ${gameState.turn}`
  );
  if (checkDeal != "proceed") {
    console.log("init check not proceed...");
  } else {
    getChoice();
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
  gameState.playerCards = {};
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
      gameState.playerCards["player-cards"].push(cardVal);
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
function manualDealAssign(pA, pB, dU, dD) {
  gameState.playerCards["player-cards"] = [pA, pB];
  gameState.dealerCards = [dU, dD];
  buildAssignCard(pA, "player-cards");
  buildAssignCard(pB, "player-cards");
  buildAssignCard(dU, "dealer-cards");
  let cardEl = document.createElement("h2");
  cardEl.id = "dealer-down";
  cardEl.innerHTML = "dealerDown";
  document.getElementById("dealer-cards").appendChild(cardEl);
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

function getChoice() {
  console.log("getPlayerChoice....");
  // show hit and stand, always
  toggleViews([
    ["hit-btn", 1],
    ["stand-btn", 1],
    ["double-btn", 0],
    ["split-btn", 0],
  ]);
  //show double/split conditionally.
  if (gameState.playerCards.length === 2) {
    toggleViews([["double-btn", 1]]);
  }
  if (pA === pB) {
    toggleViews([["split-btn", 1]]);
  }
  // add event listeners to the buttons
  const choiceBtns = document.querySelectorAll(".choice-btn");
  choiceBtns.forEach((btn) => {
    // Create a clone of each button to remove existing event listeners
    const cloneBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(cloneBtn, btn);
    cloneBtn.addEventListener("click", function () {
      const choice = cloneBtn.getAttribute("data-choice");
      const correct = determineCorrect(choice);
      console.log(`choice was ${choice} and that is ${correct}`);
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
    gameState.turn = "dealer";
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
    initSplit();
  }
}
function showDealerDown() {
  setTimeout(() => {
    let dealerDown = document.getElementById("dealer-down");
    dealerDown.innerHTML = gameState.dealerCards[1];
  }, 500);
  return Promise.resolve("dealer down complete");
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
  if (gameState.currHand != "dealer-cards") {
    const sum = getSum(gameState.playerCards[currHand]);
    if (sum === 21) {
      eval = "blackjack";
    } else if (sum > 21) {
      eval = "bust";
    } else {
      eval = "safeSum";
    }
  } else {
    const sum = getSum(gameState.dealerCards);
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
  console.log(`turn in dealer loop: ${gameState.turn}`);
  let eval = evalHand();
  console.log(`dealer first eval is...${eval}`);
  let count = 0;
  while (eval === "dealerHit" && count < 3) {
    console.log("in dealer hit loop...");
    await hit();
    eval = evalHand();
    console.log(`dealer next eval is...${eval}`);
    count++;
  }
  console.log(`...dealer hit loop complete...dealer end was ${eval}`);
}

async function hit() {
  if (gameState.currHand != "dealer-cards") {
    toggleViews([["choice-view", 0]]);
    let cardVal = getRandomCard();
    gameState.playerCards[currHand].push(cardVal);
    buildAssignCard(cardVal);
    console.log("hit complete");
    console.log(
      `gamestate.playerCards: ${JSON.stringify(gameState.playerCards)}`
    );
    let eval = evalHand();
    console.log(`eval is: ${eval}`);
    if (eval != "safeSum") {
      console.log("not a safe sum....");
      await delay(500);
      initialize();
    } else {
      console.log("safe sum, show choices...");
      toggleViews([["choice-view", 1]]);
    }
  } else {
    let eval = evalHand();
    console.log(`dealer first eval is...${eval}`);
    let count = 0;
    while (eval === "dealerHit" && count < 3) {
      console.log("in dealer hit loop...");
      let cardVal = getRandomCard();
      gameState.dealerCards.push(cardVal);
      buildAssignCard(cardVal);
      await delay(500);
      console.log("dealer hit complete");
      eval = evalHand();
      console.log(`dealer next eval is...${eval}`);
      count++;
    }
    console.log(`...dealer hit loop complete...dealer end was ${eval}`);
  }
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function initSplit() {
  let [splitA, splitB] = gameState.playerCards;
  gameState.splitHands["split-a"] = [splitA];
  gameState.splitHands["split-b"] = [splitB];
  gameState.splitQueue = ["split-a", "split-b"];
  // will need to replace this with an animation but delete and recreate for now
  const playerCardDiv = document.getElementById("player-cards");
  while (playerCardDiv.firstChild) {
    playerCardDiv.removeChild(playerCardDiv.firstChild);
  }
  playerCardDiv.innerHTML = `
  <div class="container">
    <div class="row" id = "split-container">
      <div class="col-md-6" id = "split-a">
          <h2>splitA </h2>
          <h2>${splitA}</h2>
      </div>
      <div class="col-md-6" id = "split-b">
        <h2>splitB</h2>
        <h2>${splitB}</h2>
      </div>
    </div>
  </div>`;
}
function getPlayerSplitChoice(currHand) {
  console.log("getPlayerChoice....");
  let pA = gameState.splitHands[currHand][0];
  let pB = gameState.splitHands[currHand][1];
  let dU = gameState.dealerCards[0];
  // get all the buttons to add event listeners. always show the hit and stand button. double/split conditionally.
  const choiceBtns = document.querySelectorAll(".choice-btn");
  toggleViews([
    ["hit-btn", 1],
    ["stand-btn", 1],
    ["double-btn", 0],
    ["split-btn", 0],
  ]);
  if (gameState.splitHands["currHand"] === 2) {
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
async function splitLoop() {
  let ctr = 0;
  while (ctr < gameState.splitQueue.length) {
    let currHand = gameState.splitQueue[ctr];
    if (currHand.length === 1) {
      await splitHit();
      const eval = evalHand();
      if (eval === "safeSum") {
        getSplitChoice();
      }
    }
  }
}

function evalSplitHand(currHand) {
  let eval;
  const sum = getSum(gameState.splitHands[currHand]);
  if (sum === 21) {
    eval = "blackjack";
  } else if (sum > 21) {
    eval = "bust";
  } else {
    eval = "safeSum";
  }
  return eval;
}
