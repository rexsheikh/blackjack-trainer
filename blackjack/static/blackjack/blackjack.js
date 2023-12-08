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
  pHandEval: "",
  dHandEval: "",
  dealerCards: [],
  totalBet: 0,
  debugMode: true,
};
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function getRankCash() {
  fetch(`blackjack/playerInfo`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let rank;
      if (data.points < 10) {
        rank = 1;
      } else if (data.points >= 10 && data.points < 20) {
        rank = 2;
      } else if (data.points >= 20 && data.points < 30) {
        rank = 3;
      } else if (data.points >= 30 && data.points < 40) {
        rank = 4;
      } else if (data.points >= 40 && data.points < 50) {
        rank = 5;
      }
      document.getElementById("player-rank").innerText = rank;
      document.getElementById("player-cash").innerText = data.cash;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  initialize();
});
// ********* HELPER FUNCTIONS ********
function buildAssignCard(cardVal, placement = gameState.currHand) {
  let cardEl = document.createElement("h2");
  cardEl.innerHTML = cardVal;
  document.getElementById(placement).appendChild(cardEl);
}
function getRandomCard() {
  let idx = Math.floor(Math.random() * cards.length);
  let cardVal = cards[idx];
  return cardVal;
}
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function determineCorrect(choice) {
  let currHand = gameState.playerCards[gameState.currHand];
  let correctChoice;
  let pA = currHand[0];
  let pB = currHand[1];
  let dU = gameState.dealerCards[0];
  let sTotal = currHand.includes(11) ? true : false;
  // pairs
  if (pA === pB && currHand.length === 2) {
    correctChoice = stratPairs[pA][dU];
    let logCorrect = correctChoice === choice;
    logChoice("pairs", pA, dU, logCorrect);

    // soft totals (with sum < 21)
  } else if (sTotal && getSum(currHand) < 21) {
    let sum = 0;
    for (let idx = 0; idx < currHand.length; idx++) {
      if (currHand[idx] === 11) {
        continue;
      } else {
        sum += currHand[idx];
      }
    }
    correctChoice = stratSoftTotal[sum][dU];
    let logCorrect = correctChoice === choice;
    logChoice("softTotal", sum, dU, logCorrect);

    // hard totals
  } else {
    // if there is an ace present and it pushes the sum
    // over 21, then treat it as a 1 (instead of 11) and eval
    // hard total
    let sum = 0;
    if (sTotal) {
      // put 11 at the back of the array with sort then get rid of it
      // get the sum + 1 to replace 11 with one
      for (let idx = 0; idx < currHand.length; idx++) {
        if (currHand[idx] === 11) {
          sum += 1;
        } else {
          sum += currHand[idx];
        }
      }
      correctChoice = stratSoftTotal[sum][dU];
    } else {
      sum = getSum(currHand);
      correctChoice = stratHardTotal[sum][dU];
    }
    console.log(`choice was ${choice}. correct: ${correctChoice}`);
    let logCorrect = correctChoice === choice;
    logChoice("hardTotal", sum, dU, logCorrect);
  }
}

function logChoice(chart, player, dU, correct) {
  fetch("/blackjack/logChoice", {
    method: "POST",
    body: JSON.stringify({
      chart: chart,
      player: player.toString(),
      dU: dU.toString(),
      correct: correct,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
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
  getRankCash();
  resetGameState();
  bet();
  if (gameState.debugMode) {
    manualDealAssign(2, 3, 4, 5);
  } else {
    firstDeal();
  }
  const checkDeal = await initCheck();
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
  gameState.playerCards = {
    "player-cards": [],
  };
  gameState.currHand = "player-cards";
  gameState.dealerCards = [];
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
  if (gameState.playerCards[gameState.currHand].length === 2) {
    toggleViews([["double-btn", 1]]);
  }
  if (
    gameState.playerCards[gameState.currHand][0] ===
    gameState.playerCards[gameState.currHand][1]
  ) {
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
      toggleViews([["choice-view", 0]]);
      doPlayerChoice(choice);
    });
  });
}

async function doPlayerChoice(choice) {
  console.log(`doPlayerChoice...${choice}`);
  if (choice === "hit") {
    console.log("in the hit statement...");
    hit();
  } else if (choice === "stand") {
    console.log("stand....end player choice...start dealer choice");
    gameState.currHand = "dealer-cards";
    showDealerDown();
    hit();
    // end player turn, dealer turn
  } else if (choice === "double") {
    let newBet = gameState.totalBet * 2;
    gameState.totalBet = newBet;
    hit();
    await delay(1000);
    showDealerDown();
    console.log(`total bet is now: ${gameState.totalBet}`);
    console.log("double....end player choice...start dealer choice");
    // end the player turn and enter the dealer hit loop
    gameState.currHand = "dealer-cards";
    hit();
  } else if (choice === "split") {
    initSplit();
  }
}
function showDealerDown() {
  let dealerDown = document.getElementById("dealer-down");
  dealerDown.innerHTML = gameState.dealerCards[1];
}
// check for player and dealer blackjack on first deal
async function initCheck() {
  let pSum = getSum(gameState.playerCards[gameState.currHand]);
  let dSum = getSum(gameState.dealerCards);
  if (pSum === 21 && dSum === 21) {
    console.log("***init push***");
    await delay(1000);
    showDealerDown();
    resetGameState();
    initialize();
  } else if (pSum != 21 && dSum === 21) {
    console.log("***init dealer win***");
    await delay(1000);
    showDealerDown();
    resetGameState();
    initialize();
  } else if (pSum === 21 && dSum != 21) {
    console.log("playerWin");
    await delay(1000);
    resetGameState();
    initialize();
  } else {
    return "proceed";
  }
}

function evalHand() {
  let eval;
  if (gameState.currHand != "dealer-cards") {
    const sum = getSum(gameState.playerCards[gameState.currHand]);
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

async function hit() {
  if (gameState.currHand != "dealer-cards") {
    toggleViews([["choice-view", 0]]);
    let cardVal = getRandomCard();
    gameState.playerCards[gameState.currHand].push(cardVal);
    buildAssignCard(cardVal);
    console.log("hit complete");
    console.log(
      `gamestate.playerCards: ${JSON.stringify(
        gameState.playerCards[gameState.currHand]
      )}`
    );
    let eval = evalHand();
    console.log(`eval is: ${eval}`);
    if (eval != "safeSum") {
      // playerHandEval
      console.log("not a safe sum....");
      await delay(1000);
      gameState.currHand = "dealer-cards";
      console.log("changing turn to dealer and running hit....");
      showDealerDown();
      hit();
    } else {
      console.log("safe sum, show choices...");
      toggleViews([["choice-view", 1]]);
    }
  } else {
    let eval = evalHand();
    console.log(`dealer first eval is...${eval}`);
    while (eval === "dealerHit") {
      await delay(1000);
      console.log("in dealer hit loop...");
      let cardVal = getRandomCard();
      gameState.dealerCards.push(cardVal);
      buildAssignCard(cardVal);
      console.log("dealer hit complete");
      eval = evalHand();
      console.log(`dealer next eval is...${eval}`);
    }
    console.log(`...dealer hit loop complete...dealer end was ${eval}`);
  }
}

async function initSplit() {
  toggleViews([["choice-view", 0]]);
  let [splitA, splitB] = gameState.playerCards["player-cards"];
  delete gameState.playerCards["player-cards"];
  gameState.playerCards["split-a"] = [splitA];
  gameState.playerCards["split-b"] = [splitB];
  gameState.currHand = "split-a";
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
  hit();
  await delay(500);
  getChoice();
}

// tests and logs
// 1. check player cards at the current hand and dealers
// console.log(
//   `player cards: ${JSON.stringify(
//     gameState.playerCards[gameState.currHand]
//   )}...dealer cards: ${JSON.stringify(gameState.dealerCards)}....currHand: ${
//     gameState.currHand
//   }`
// );
