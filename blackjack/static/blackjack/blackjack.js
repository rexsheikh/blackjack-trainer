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

const cardIcons = {
  2: ["&#x1F0A2", "&#x1F0B2", "&#x1F0C2", "&#x1F0D2"],
  3: ["&#x1F0A3", "&#x1F0B3", "&#x1F0C3", "&#x1F0D3"],
  4: ["&#x1F0A4", "&#x1F0B4", "&#x1F0C4", "&#x1F0D4"],
  5: ["&#x1F0A5", "&#x1F0B5", "&#x1F0C5", "&#x1F0D5"],
  6: ["&#x1F0A6", "&#x1F0B6", "&#x1F0C6", "&#x1F0D6"],
  7: ["&#x1F0A7", "&#x1F0B7", "&#x1F0C7", "&#x1F0D7"],
  8: ["&#x1F0A8", "&#x1F0B8", "&#x1F0C8", "&#x1F0D8"],
  9: ["&#x1F0A9", "&#x1F0B9", "&#x1F0C9", "&#x1F0D9"],
  10: [
    "&#x1F0AA",
    "&#x1F0BA",
    "&#x1F0CA",
    "&#x1F0DA",
    "&#x1F0AB",
    "&#x1F0BB",
    "&#x1F0CB",
    "&#x1F0DB",
    "&#x1F0AD",
    "&#x1F0BD",
    "&#x1F0CD",
    "&#x1F0DD",
    "&#x1F0AE",
    "&#x1F0BE",
    "&#x1F0CE",
    "&#x1F0DE",
  ],
  11: [`&#x1F0A1`, `&#x1F0B1`, `&#x1F0C1`, `&#x1F0D1`],
};
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
      let rankEl = document.getElementById("player-rank");
      rankEl.innerText = `Rank: ${rank}`;

      let cashEl = document.getElementById("player-cash");

      cashEl.innerText = `Total Cash: $${data.cash}`;

      let totalBetEl = document.getElementById("total-bet");
      totalBetEl.innerText = `Total Bet: $${gamestate.totalBet}`;
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
  console.log(
    `logging chart, player, dU, correct: ${chart} | ${player} | ${dU} | ${correct}`
  );
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
  cardIcon,
  placement = gamestate.queue[gamestate.queueCtr]
) {
  let cardEl = document.createElement("div");
  cardEl.classList.add("flip-card");
  cardEl.innerHTML = ` <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>${cardIcon}</h1>
    </div>
    <div class="flip-card-back">
      <h1>&#x1F0A0</h1>
    </div>
  </div>
`;
  document.getElementById(placement).appendChild(cardEl);
}
function getRandomCard() {
  // get a random value then a random suit (icon)
  let idx = Math.floor(Math.random() * cards.length);
  let val = cards[idx];
  let iconLst = cardIcons[val];
  let iconIdx = Math.floor(Math.random() * iconLst.length);
  let icon = iconLst[iconIdx];
  return {val, icon};
}
// used in debug bug to get a card value
function getCard(val) {
  let iconLst = cardIcons[val];
  let iconIdx = Math.floor(Math.random() * iconLst.length);
  let icon = iconLst[iconIdx];
  return {val, icon};
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
  let pA = pCards[0].val;
  let pB = pCards[1].val;
  let dU = gamestate.dCards[0].val;
  let sTotal = pA === 11 || pB === 11 ? true : false;
  // pairs
  if (pA === pB && pCards.length === 2) {
    correctChoice = stratPairs[pA][dU];
    let logCorrect = correctChoice === choice;
    logChoice("pairs", pA, dU, logCorrect);
    if (logCorrect) {
      gamestate.points += 1;
    }
    console.log(`choice was ${choice}. correct: ${correctChoice}`);
    // soft totals (with sum < 21)
  } else if (sTotal && getSum(pCards) < 21) {
    let sum = 0;
    for (let idx = 0; idx < pCards.length; idx++) {
      if (pCards[idx].val === 11) {
        continue;
      } else {
        sum += pCards[idx].val;
      }
    }
    correctChoice = stratSoftTotal[sum][dU];
    let logCorrect = correctChoice === choice;
    if (logCorrect) {
      gamestate.points += 1;
    }
    console.log(`choice was ${choice}. correct: ${correctChoice}`);
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
  let sum = 0;
  let sTotal;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].val === 11) {
      sTotal = true;
    }
    sum += cards[i].val;
    if (sum > 21 && sTotal) {
      console.log(`in get sum...treating 11 as one}`);
      sum -= 10;
    }
  }
  return sum;
}
// ********* INITIALIZE / RESET FUNCTIONS ********
// intialize functions
// bet, deal, eval
async function initialize() {
  console.log("initialize...");
  getRankCash();
  resetGameState();
  while (true) {
    await bet();
    if (gamestate.totalBet > 0) {
      break;
    }
  }
  await deal();
  if (gamestate.debugMode) {
    manualDealAssign(9, 9, 6, 3);
  } else {
    firstDeal();
  }
  const checkDeal = await initCheck();
  if (checkDeal != "proceed") {
    console.log("init check not proceed...");
    toggleViews([
      ["deal-btn-view", 0],
      ["choice-view", 0],
      ["deal-btn-view", 0],
      ["deal-view", 1],
      ["end-state-view", 0],
    ]);
  } else {
    getChoice();
  }
}

function resetGameState() {
  console.log("resetting gamestate...");
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
  let playerCardDiv = document.getElementById("player-cards");
  let dealerCardDiv = document.getElementById("dealer-cards");
  let endDiv = document.getElementById("end-state-view");
  while (playerCardDiv.firstChild) {
    playerCardDiv.removeChild(playerCardDiv.firstChild);
  }
  while (dealerCardDiv.firstChild) {
    dealerCardDiv.removeChild(dealerCardDiv.firstChild);
  }
  endDiv.innerHTML = "";
  let firstDealDiv = document.createElement("div");
  firstDealDiv.classList.add("col", "p-3", "hand");
  firstDealDiv.id = "first-deal";
  playerCardDiv.appendChild(firstDealDiv);
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
    let card = getRandomCard();
    if (i % 2 == 0) {
      gamestate.pCards["first-deal"].push({val: card.val, icon: card.icon});
      buildAssignCard(card.icon, "first-deal");
    } else {
      gamestate.dCards.push({val: card.val, icon: card.icon});
      if (i === 1) {
        buildAssignCard(card.icon, "dealer-cards");
      } else {
        // for dealer down, do not add the flip-card class initially.
        // showDealerDown function adds this class to execute the animation
        let dealerDown = document.createElement("div");
        dealerDown.id = "dealer-down";
        dealerDown.innerHTML = `<h1 class = "dealer-down">&#x1F0A0</h1>`;
        let dealerHand = document.getElementById("dealer-cards");
        dealerHand.appendChild(dealerDown);
      }
    }
  }
}
function manualDealAssign(pA, pB, dU, dD) {
  pA = getCard(pA);
  pB = getCard(pB);
  dU = getCard(dU);
  dD = getCard(dD);
  gamestate.pCards["first-deal"] = [pA, pB];
  gamestate.dCards = [dU, dD];
  buildAssignCard(pA.icon, "first-deal");
  buildAssignCard(pB.icon, "first-deal");
  buildAssignCard(dU.icon, "dealer-cards");
  let dealerDown = document.createElement("div");
  dealerDown.id = "dealer-down";
  dealerDown.innerHTML = `<h1 class = "dealer-down">&#x1F0A0</h1>`;
  let dealerHand = document.getElementById("dealer-cards");
  dealerHand.appendChild(dealerDown);
}

async function initCheck() {
  let pSum = getSum(gamestate.pCards["first-deal"]);
  let dSum = getSum(gamestate.dCards);
  if (pSum === 21 && dSum === 21) {
    logHand(false, false);
    console.log("***init push***");
    await delay(1000);
    showDealerDown();
    await processEndState(false, false);
  } else if (pSum != 21 && dSum === 21) {
    console.log("***init dealer blackjack***");
    logHand(false, false);
    await delay(1000);
    showDealerDown();
    logHand(0, 0);
    await processEndState(false, false);
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
async function bet() {
  console.log("bet...");

  return new Promise((resolve) => {
    toggleViews([
      ["deal-view", 0],
      ["choice-view", 0],
      ["deal-btn-view", 0],
      ["bet-view", 1],
    ]);

    const betBtns = document.querySelectorAll(".bet-btn");
    let betHand = 0;

    const handleClick = function (btn) {
      betHand += parseInt(btn.getAttribute("data-chip-val"), 10);
      gamestate.totalBet = betHand;
      let updateBet = document.getElementById("total-bet");
      updateBet.innerText = `Total Bet: $${gamestate.totalBet}`;
      toggleViews([["deal-btn-view", 1]]);

      // Remove event listeners to avoid multiple clicks
      betBtns.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });

      resolve("bet complete");
    };

    betBtns.forEach((btn) => {
      btn.addEventListener("click", () => handleClick(btn));
    });
  });
}
// document
//   .getElementById("deal-btn-view")
//   .addEventListener("click", function () {
//     toggleViews([
//       ["bet-view", 0],
//       ["deal-view", 1],
//       ["choice-view", 1],
//     ]);
//     gamestate.cash -= gamestate.totalBet;
//     document.getElementById(
//       "player-cash"
//     ).innerText = `Total Cash: $${gamestate.cash}`;
//     toggleViews([["deal-btn-view", 0]]);
//     return Promise.resolve("deal complete");
//   });

async function deal() {
  return new Promise((resolve) => {
    const dealButton = document.getElementById("deal-btn-view");

    const handleDealClick = function () {
      toggleViews([
        ["bet-view", 0],
        ["deal-view", 1],
        ["choice-view", 1],
      ]);

      gamestate.cash -= gamestate.totalBet;
      document.getElementById(
        "player-cash"
      ).innerText = `Total Cash: $${gamestate.cash}`;

      toggleViews([["deal-btn-view", 0]]);

      // Remove the event listener to avoid multiple clicks
      dealButton.removeEventListener("click", handleDealClick);

      resolve("deal complete");
    };

    dealButton.addEventListener("click", handleDealClick);
  });
}
function getChoice() {
  let currHand = gamestate.pCards[gamestate.queue[gamestate.queueCtr]];
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
  if (currHand[0].val === currHand[1].val && gamestate.queue.length < 3) {
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
    console.log("in the do player choice hit statement...");
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
      await delay(1000);
      hit();
    }
    // end player turn, dealer turn
  } else if (choice === "double") {
    let newBet = gamestate.totalBet * 2;
    gamestate.totalBet = newBet;
    await hit();
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
  let dealerCards = document.getElementById("dealer-cards");
  dealerCards.removeChild(dealerCards.lastChild);
  let cardEl = document.createElement("div");
  cardEl.classList.add("flip-card");
  cardEl.innerHTML = ` <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1>${gamestate.dCards[1].icon}</h1>
      </div>
      <div class="flip-card-back">
        <h1>&#x1F0A0</h1>
      </div>
    </div>
  `;
  dealerCards.appendChild(cardEl);
}
function evalHand() {
  if (gamestate.currHand != "dealer-cards") {
    console.log(`evaling player hand in evalHand()....`);
    const sum = getSum(gamestate.pCards[gamestate.currHand]);
    console.log(`eval hand sum is ... ${sum}`);
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
  return new Promise((resolve) => {
    let currHand = gamestate.queue[gamestate.queueCtr];
    // hide choice view and push a card onto the current player hand.
    toggleViews([["choice-view", 0]]);
    let card = getRandomCard();
    gamestate.pCards[currHand].push({val: card.val, icon: card.icon});
    console.log(`player hand after hit: ${JSON.stringify(gamestate.pCards)}`);
    buildAssignCard(card.icon);
    console.log("hit complete");
    // get the player sum. if equal to or greater than 21, move to next hand (either next split or dealer)
    gamestate.pHandEval[gamestate.currHand] = evalHand();
    console.log(
      `pHand eval in hit...${gamestate.pHandEval[gamestate.currHand]}`
    );
    if (
      gamestate.pHandEval[gamestate.currHand] === 21 ||
      gamestate.pHandEval[gamestate.currHand] > 21
    ) {
      console.log("not a safe sum....");
      // await delay(1000);
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
    resolve("hit complete");
  });
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
    let card = getRandomCard();
    console.log(`dealer random card: ${JSON.stringify(card)}`);
    gamestate.dCards.push({val: card.val, icon: card.icon});
    buildAssignCard(card.icon);
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
    let pSum = getSum(pHand);
    let dSum = getSum(gamestate.dCards);
    if (pSum > 21) {
      // player bust, lose.
      // log a loss, no blackjack, and do not increment gamestate cash (player loses money).
      // correct responses are still captured with updateCashPoints
      console.log("***PLAYER LOSES WITH BUST****");
      await processEndState(false, false);
    } else if (pSum <= dSum && gamestate.dHandEval.dealerState != "bust") {
      // push or loss. logged as a loss, player loses money.
      console.log("***PLAYER LOSES****");
      await processEndState(false, false);
    } else if (pSum > dSum) {
      console.log("***PLAYER WINS****");
      await processEndState(true, false);
    }
  }
  await delay(1000);
  return;
}
async function processEndState(win, blackjack) {
  toggleViews([["end-state-view", 1]]);
  if (win && blackjack) {
    logHand(true, true);
    gamestate.cash += gamestate.totalBet * 1.5;
    updateCashPoints();
    displayEndState("BLACKJACK!");
  } else if (win) {
    logHand(true, false);
    gamestate.cash += gamestate.totalBet;
    updateCashPoints();
    displayEndState("YOU WIN!");
  } else {
    logHand(false, false);
    updateCashPoints();
    displayEndState("DEALER WINS!");
  }
  await delay(1000);
  initialize();
}

async function displayEndState(endStr) {
  let endDiv = document.getElementById("end-state-view");
  let endContent = document.createElement("h2");
  endContent.innerHTML = endStr;
  endDiv.appendChild(endContent);
  toggleViews([["end-state-view", 1]]);
}
async function initSplit() {
  toggleViews([["choice-view", 0]]);
  // get the current hand, take away the last card to create a new hand. create a split-string to create necessary keys and elements
  let splitString = `split-${gamestate.queueCtr}`;
  // add it to the queue with a splice operation to the second to last position (in front of dealer-cards)
  let splitCard = gamestate.pCards[gamestate.queue[gamestate.queueCtr]].pop();
  gamestate.pCards[splitString] = [splitCard];
  gamestate.queue.splice(gamestate.queue.length - 1, 0, splitString);
  console.log(`gamestate after split ops: ${JSON.stringify(gamestate)}`);

  // rebuild the current hand
  let currHand = gamestate.queue[gamestate.queueCtr];
  let currHandDiv = document.getElementById(currHand);
  currHandDiv.removeChild(currHandDiv.lastChild);

  // add the new split card to player cards
  let playerCardDiv = document.getElementById("player-cards");
  let splitDiv = document.createElement("div");
  splitDiv.classList.add("col", "p-3", "hand");
  splitDiv.id = splitString;
  splitDiv.innerHTML = ` 
  <div class="flip-card"> 
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1>${splitCard.icon}</h1>
      </div>
    <div class="flip-card-back">
        <h1>&#x1F0A0</h1>
    </div>
</div>
  
  </div>
`;
  splitDiv.classList.add("col", "p-3");
  playerCardDiv.appendChild(splitDiv);

  // hit to the current hand.
  await delay(500);
  hit();
}

// ******** Execute main game loop logic ************
document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  initialize();
});
