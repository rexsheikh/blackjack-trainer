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
const gamestate = {
  pCards: {
    "first-deal": [],
  },
  queue: ["first-deal", "dealer-cards"],
  queueCtr: 0,
  pHandEval: {},
  dHandEval: {},
  dCards: [],
  cash: 0,
  points: 0,
  totalBet: 0,
  debugMode: true,
};
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// ****** API Requests **********
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
      gamestate.cash = data.cash;
      gamestate.points = data.points;
      document.getElementById("player-rank").innerText = rank;
      document.getElementById("player-cash").innerText = data.cash;
    });
}
function updateCashPoints() {
  console.log(
    `updating cash to ${gamestate.cash} and points to ${gamestate.points}`
  );
  fetch("/blackjack/updateCashPoints", {
    method: "PUT",
    body: JSON.stringify({
      cash: gamestate.cash,
      points: gamestate.points,
    }),
  });
}
function logChoice(chart, player, dU, correct) {
  fetch("/blackjack/logChoice", {
    method: "POST",
    body: JSON.stringify({
      chart: chart,
      player: player,
      dU: dU,
      correct: correct,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
function logHand(win, blackjack) {
  fetch("/blackjack/logHand", {
    method: "POST",
    body: JSON.stringify({
      win: win,
      blackjack: blackjack,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
// ********* HELPER FUNCTIONS ********
function buildAssignCard(
  cardVal,
  placement = gamestate.queue[gamestate.queueCtr]
) {
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
  // get the current hand string, then get the list of cards in the player hand object.
  console.log("determine correct...");
  let currHand = gamestate.queue[gamestate.queueCtr];
  let pCards = gamestate.pCards[currHand];
  let correctChoice;
  let pA = pCards[0];
  let pB = pCards[1];
  let dU = gamestate.dCards[0];
  let sTotal = pCards.includes(11) ? true : false;
  // pairs
  if (pA === pB && pCards.length === 2) {
    correctChoice = stratPairs[pA][dU];
    let logCorrect = correctChoice === choice;
    logChoice("pairs", pA, dU, logCorrect);
    if (logCorrect) {
      gamestate.points += 1;
    }
    // soft totals (with sum < 21)
  } else if (sTotal && getSum(pCards) < 21) {
    let sum = 0;
    for (let idx = 0; idx < pCards.length; idx++) {
      if (pCards[idx] === 11) {
        continue;
      } else {
        sum += pCards[idx];
      }
    }
    correctChoice = stratSoftTotal[sum][dU];
    let logCorrect = correctChoice === choice;
    if (logCorrect) {
      gamestate.points += 1;
    }
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
      for (let idx = 0; idx < pCards.length; idx++) {
        if (pCards[idx] === 11) {
          sum += 1;
        } else {
          sum += pCards[idx];
        }
      }
      correctChoice = stratSoftTotal[sum][dU];
    } else {
      sum = getSum(pCards);
      correctChoice = stratHardTotal[sum][dU];
    }
    console.log(`choice was ${choice}. correct: ${correctChoice}`);
    let logCorrect = correctChoice === choice;
    logChoice("hardTotal", sum, dU, logCorrect);
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
  console.log("initialize...");
  getRankCash();
  resetGameState();
  if (gamestate.debugMode) {
    manualDealAssign(2, 9, 4, 5);
  } else {
    firstDeal();
  }
  bet();

  const checkDeal = await initCheck();
  if (checkDeal != "proceed") {
    console.log("init check not proceed...");
  } else {
    console.log(
      `gamestate in init before getChoice: ${JSON.stringify(gamestate)}`
    );
    getChoice();
  }
}

function resetGameState() {
  toggleViews([
    ["bet-view", 1],
    ["deal-btn-view", 0],
    ["choice-view", 0],
    ["deal-btn-view", 0],
  ]);
  gamestate.pCards = {
    "first-deal": [],
  };
  gamestate.queue = ["first-deal", "dealer-cards"];
  gamestate.queueCtr = 0;
  gamestate.dCards = [];
  gamestate.totalBet = 0;
  gamestate.cash = 0;
  gamestate.points = 0;
  gamestate.pHandEval = {};
  gamestate.dHandEval = {};
  const playerCardDiv = document.getElementById("first-deal");
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
      gamestate.pCards["first-deal"].push(cardVal);
      buildAssignCard(cardVal, "first-deal");
    } else {
      gamestate.dCards.push(cardVal);
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
  gamestate.pCards["first-deal"] = [pA, pB];
  gamestate.dCards = [dU, dD];
  buildAssignCard(pA, "first-deal");
  buildAssignCard(pB, "first-deal");
  buildAssignCard(dU, "dealer-cards");
  let cardEl = document.createElement("h2");
  cardEl.id = "dealer-down";
  cardEl.innerHTML = "dealerDown";
  document.getElementById("dealer-cards").appendChild(cardEl);
}

async function initCheck() {
  let pSum = getSum(gamestate.pCards["first-deal"]);
  let dSum = getSum(gamestate.dCards);
  if (pSum === 21 && dSum === 21) {
    logHand(false, false);
    console.log("***init push***");
    await delay(1000);
    showDealerDown();
    resetGameState();
    initialize();
  } else if (pSum != 21 && dSum === 21) {
    console.log("***init dealer blackjack***");
    logHand(false, false);
    await delay(1000);
    showDealerDown();
    logHand(0, 0);
    resetGameState();
    initialize();
  } else if (pSum === 21 && dSum != 21) {
    console.log("player blackjack!");
    logHand(true, true);
    await delay(1000);
    showDealerDown();
    await processEndState(true, true);
  } else {
    return "proceed";
  }
}
// *********PLAYER ACTIONS / REACTIONS ********
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
      gamestate.totalBet = betHand;
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
      gamestate.cash -= gamestate.totalBet;
      document.getElementById("player-cash").innerText = gamestate.cash;
      toggleViews([["deal-btn-view", 0]]);
    });
}
function getChoice() {
  let currHand = gamestate.pCards[gamestate.queue[gamestate.queueCtr]];
  console.log(
    `current hand: ${gamestate.pCards[gamestate.queue[gamestate.queueCtr]]}`
  );
  // show hit and stand, always
  toggleViews([
    ["hit-btn", 1],
    ["stand-btn", 1],
    ["double-btn", 0],
    ["split-btn", 0],
  ]);
  //show double/split conditionally.
  if (currHand.length === 2) {
    toggleViews([["double-btn", 1]]);
  }
  // can only split twice in most games
  if (currHand[0] === currHand[1] && gamestate.queue.length < 3) {
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
      determineCorrect(choice);
      toggleViews([["choice-view", 0]]);
      doPlayerChoice(choice);
    });
  });
}
async function doPlayerChoice(choice) {
  console.log(`choice is ${choice}`);
  if (choice === "hit") {
    console.log("in the hit statement...");
    hit();
  } else if (choice === "stand") {
    // advance the counter and check the next hand. If dealer, end with dealer hit loop.
    // else, advanced to split which will need a hit to start.
    gamestate.queueCtr++;
    await delay(1000);
    console.log(
      `current hand after stand: ${gamestate.queue[gamestate.queueCtr]}`
    );
    if (gamestate.queue[gamestate.queueCtr] === "dealer-cards") {
      dealerHitLoop();
    } else {
      hit();
    }
    // end player turn, dealer turn
  } else if (choice === "double") {
    let newBet = gamestate.totalBet * 2;
    gamestate.totalBet = newBet;
    hit();
    gamestate.queueCtr++;
    if (gamestate.queue[gamestate.queueCtr] === "dealer-cards") {
      console.log(
        `adv queue. current hand is ${gamestate.queue[gamestate.queueCtr]}`
      );
      await delay(1000);
      dealerHitLoop();
    } else {
      hit();
    }
  } else if (choice === "split") {
    initSplit();
  }
}
function showDealerDown() {
  let dealerDown = document.getElementById("dealer-down");
  dealerDown.innerHTML = gamestate.dCards[1];
}
function evalHand() {
  if (gamestate.currHand != "dealer-cards") {
    const sum = getSum(gamestate.pCards[gamestate.currHand]);
    return sum;
  } else {
    let dealerState;
    const sum = getSum(gamestate.dCards);
    let dealerSoftTotal = gamestate.dCards.includes(11) ? true : false;
    if (sum === 21) {
      dealerState = "blackjack";
    } else if (sum > 21) {
      dealerState = "bust";
    } else if (sum < 17 || (sum === 17 && dealerSoftTotal)) {
      dealerState = "safeSum";
    } else if (sum >= 17) {
      dealerState = "dealerStand";
    }
    return {dealerState, sum};
  }
}
async function hit() {
  let currHand = gamestate.queue[gamestate.queueCtr];
  // hide choice view and push a card onto the current player hand.
  toggleViews([["choice-view", 0]]);
  let cardVal = getRandomCard();
  gamestate.pCards[currHand].push(cardVal);
  buildAssignCard(cardVal);
  console.log("hit complete");
  // get the player sum. if equal to or greater than 21, move to next hand (either next split or dealer)
  gamestate.pHandEval[gamestate.currHand] = evalHand();
  if (
    gamestate.pHandEval[gamestate.currHand] === 21 ||
    gamestate.pHandEval[gamestate.currHand] > 21
  ) {
    console.log("not a safe sum....");
    await delay(1000);
    gamestate.queueCtr++;
    currHand = gamestate.queue[gamestate.queueCtr];
    console.log(`changing turn to ${currHand}...`);
    if (currHand === "dealer-cards") {
      // queue has advanced to dealer-cards. show the down card and begin the dealer loop until complete.
      // evaluate end state and restart.
      dealerHitLoop();
    } else {
      // queue has advanced to a split card, initiate that hand with a split.
      hit();
    }
  } else {
    // the player has a safe hand and can choose again.
    console.log("safe sum, show choices...");
    toggleViews([["choice-view", 1]]);
  }
}
// *******Evaluations and Transitions************
async function dealerHitLoop() {
  console.log(
    `start dealer hit loop. dealer hand is ${JSON.stringify(gamestate.dCards)}`
  );
  showDealerDown();
  gamestate.dHandEval = evalHand();
  console.log(
    `dealer first eval is...${gamestate.dHandEval.dealerState} | ${gamestate.dHandEval.sum}`
  );
  while (gamestate.dHandEval.dealerState === "safeSum") {
    await delay(1000);
    let cardVal = getRandomCard();
    gamestate.dCards.push(cardVal);
    buildAssignCard(cardVal);
    gamestate.dHandEval = evalHand();
    console.log(
      `dealer next eval is...${gamestate.dHandEval.dealerState} | ${gamestate.dHandEval.sum}`
    );
  }
  console.log("end dealer hit loop...");
  await determineEndWinner();
  initialize();
}
function evalHand() {
  if (gamestate.queue[gamestate.queueCtr] != "dealer-cards") {
    const sum = getSum(gamestate.pCards[gamestate.queue[gamestate.queueCtr]]);
    return sum;
  } else {
    let dealerState;
    const sum = getSum(gamestate.dCards);
    let dealerSoftTotal = gamestate.dCards.includes(11) ? true : false;
    if (sum === 21) {
      dealerState = "blackjack";
    } else if (sum > 21) {
      dealerState = "bust";
    } else if (sum < 17 || (sum === 17 && dealerSoftTotal)) {
      dealerState = "safeSum";
    } else if (sum >= 17) {
      dealerState = "dealerStand";
    }
    return {dealerState, sum};
  }
}
async function determineEndWinner() {
  console.log("determine end winner...");

  // push: equal sum and neither has busted.
  // lose: bust / dealerSum is greater and not bust.
  // win: greater and not bust / dealer bust.

  // loop through the queue until dealer-cards
  for (let i = 0; i < gamestate.queue.length - 1; i++) {
    let currHand = gamestate.queue[i];
    let pHand = gamestate.pCards[currHand];
    console.log(`determine winner pHand: ${pHand}`);
    let pSum = getSum(pHand);
    let dSum = getSum(gamestate.dCards);
    if (pSum > 21) {
      // player bust, lose.
      // log a loss, no blackjack, and do not increment gamestate cash (player loses money).
      // correct responses are still captured with updateCashPoints
      await processEndState(false, false);
    } else if (pSum <= dSum && gamestate.dHandEval.dealerState != "bust") {
      // push or loss. logged as a loss, player loses money.
      await processEndState(false, false);
    } else if (pSum > dSum) {
      await processEndState(true, false);
    }
  }
  delay(1000);
  return;
}
async function processEndState(win, blackjack) {
  if (win && blackjack) {
    logHand(true, true);
    gamestate.cash += gamestate.totalBet * 1.5;
    updateCashPoints();
  } else if (win) {
    logHand(true, false);
    gamestate.cash += gamestate.totalBet;
    updateCashPoints();
  } else {
    logHand(false, false);
    updateCashPoints();
  }
  await delay(1000);
}
async function initSplit() {
  toggleViews([["choice-view", 0]]);
  // get the current hand, take away the last card to create a new hand. create a split-string to create necessary keys and elements
  let splitString = `split-${gamestate.queueCtr}`;
  // add it to the queue with a splice operation to the second to last position (in front of dealer-cards)
  let currHand = gamestate.pCards[gamestate.queue[queueCtr]];
  let splitCard = currHand.pop();
  gamestate.pCards[splitString] = [splitCard];
  gamestate.queue.splice(gamestate.queue.length - 2, splitString);
  let playerCardDiv = document.getElementById("first-deal");
  let splitDiv = document.createElement("div");
  splitDiv.classList.add("container");
  splitDiv.innerHTML = `
    <div class="row" >
      <div class="col-md-4" id = "${splitString}">
          <h2>${splitCard}</h2>
      </div>
    </div>
 `;
  playerCardDiv.appendChild(splitDiv);
  hit();
  await delay(500);
  getChoice();
}

// ******** Execute main game loop logic ************
document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  initialize();
});
