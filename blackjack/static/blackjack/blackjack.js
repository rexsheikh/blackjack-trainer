// strategy charts referenced from:
// https://www.blackjackapprenticeship.com/blackjack-strategy-charts/

// keep track of player turn using variables (in this context, I am using gamestate)
// https://stackoverflow.com/questions/56508951/how-do-i-keep-track-of-players-turn-in-game

// using promises to chain events (specifically using then)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// array from to add an html element to a NodeList
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// *********GLOBAL VARIABLES AND CONSTANTS********
// strategy charts referenced from:
// https://www.blackjackapprenticeship.com/blackjack-strategy-charts/
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
  debugMode: false,
};
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Reference for unicode playing cards: https://en.wikipedia.org/wiki/Playing_Cards_(Unicode_block)
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
// loads the players cash and rank
// note: started to build out rank functionality but this feature is not fully implemented
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

      let cashEl = document.getElementById("player-cash");
      cashEl.innerText = `Total Cash: $${data.cash}`;

      let totalBetEl = document.getElementById("total-bet");
      totalBetEl.innerText = `Total Bet: $${gamestate.totalBet}`;
    });
}
// at the conclusion of each hand, the player's cash is updated according to their
// bet and whether they won or lost
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
// log which chart to reference (which corresponds to a model), the player's hand,
// the dealer's shown card and whether or not the response was correct
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
// log the outcome of the hand whether it was a win or blackjack (both booleans)
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
// takes a card icon and default placement of the current hand in the queue to create an html
// element
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
// gets a random card and icon.
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
// delay function to add pauses between actions to smooth gameplay.
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// I used the above to learn how to structure promises and their resolution.
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
// checks the player's hand and finds the correct strategy chart to compare it against.
// this function also logs whether the choice was correct
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
// sum a given set of cards. note the detection of soft total. If there is an ace present and
// it would put the player or dealer over into bust, it is automatically treated as a 1 instead of 11.
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
// ********* INITIALIZE /  FUNCTIONS ********
// main game loop that loads player information, resets any previous gamestate, forces
// a user bet, deals cards (with manual assignment or random depending on debug mode)
// checks the first deal, and proceeds into user choices.
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
    manualDealAssign(6, 2, 4, 3);
  } else {
    firstDeal();
  }
  const checkDeal = await initCheck();
  if (checkDeal != "proceed") {
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
  // Reference for removing all children of a node:
  // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  // I used the same reference for the delay function to structure a promise here.
  console.log("resetting gamestate...");
  return new Promise((resolve) => {
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
    resolve("reset complete");
  });
}
// function that takes a list of actions to perform. for example, providing
// toggleViews([["bet-view",1]]) will show the bet view.
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
// assigns a random cards to both player and dealer with the dealer's second card shown face down.
function firstDeal() {
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
// manually assigns a value to player and dealer cards while getting a random icon for each.
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
// checks the initial state of the game for dealer and player blackjack and logs the outcome, if applicable.
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
// bet function that increments the total bet while subtracting from the user's total cash.
// a promise is used here to wait for a bet to be placed before proceeding to show the deal button.
async function bet() {
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
// similiar to bet, this uses a promise to ensure cards are dealt on the button press before proceeding.
// the user's total cash is shown to be decremented by the total bet amount. on click, the deal btn is hidden and the game
// proceeds.
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
// gets the user choice, toggles the choice view off and deal view on and does the player choice.
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
    // Create a clone of each button to remove existing event listeners.
    // I referenced: // removing event listeners with clone node and replace child
    // https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
    // to discover this method after I was having trouble with buttons doing multiple actions after the first action.
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
// takes the user choice, processes the outcome of the choice, and either proceeds with the game (ie moving to dealer turn on bust)
// or shows choices again.
async function doPlayerChoice(choice) {
  if (choice === "hit") {
    hit();
  } else if (choice === "stand") {
    // advance the counter and check the next hand. If dealer, end with dealer hit loop.
    // else, advanced to split which will need a hit to start.
    gamestate.queueCtr++;
    await delay(2000);
    console.log(
      `current hand after stand: ${gamestate.queue[gamestate.queueCtr]}`
    );
    if (gamestate.queue[gamestate.queueCtr] === "dealer-cards") {
      dealerHitLoop();
    } else {
      await delay(2000);
      hit();
    }
    // end player turn, dealer turn
  } else if (choice === "double") {
    let newBet = gamestate.totalBet * 2;
    gamestate.totalBet = newBet;
    await hit();
    gamestate.queueCtr++;
    if (gamestate.queue[gamestate.queueCtr] === "dealer-cards") {
      await delay(2000);
      dealerHitLoop();
    } else {
      hit();
    }
  } else if (choice === "split") {
    initSplit();
  }
}
// reveals the dealers down card to begin the dealer's turn.
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

// addes a card to the current hand. uses a promise to ensure that the function is carried out entirely before proceeding.
// evaluates the condition of the hand to determine the next process.
async function hit() {
  return new Promise((resolve) => {
    let currHand = gamestate.queue[gamestate.queueCtr];
    // hide choice view and push a card onto the current player hand.
    toggleViews([["choice-view", 0]]);
    let card = getRandomCard();
    gamestate.pCards[currHand].push({val: card.val, icon: card.icon});
    console.log(`player hand after hit: ${JSON.stringify(gamestate.pCards)}`);
    buildAssignCard(card.icon);
    // get the player sum. if equal to or greater than 21, move to next hand (either next split or dealer)
    gamestate.pHandEval[gamestate.currHand] = evalHand();
    if (
      gamestate.pHandEval[gamestate.currHand] === 21 ||
      gamestate.pHandEval[gamestate.currHand] > 21
    ) {
      // await delay(1000);
      gamestate.queueCtr++;
      currHand = gamestate.queue[gamestate.queueCtr];
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
      toggleViews([["choice-view", 1]]);
    }
    resolve("hit complete");
  });
}
// *******Evaluations and Transitions************
// hits to the dealer hand until 17, bust, or 21
async function dealerHitLoop() {
  showDealerDown();
  gamestate.dHandEval = evalHand();
  while (gamestate.dHandEval.dealerState === "safeSum") {
    await delay(1000);
    let card = getRandomCard();
    console.log(`dealer random card: ${JSON.stringify(card)}`);
    gamestate.dCards.push({val: card.val, icon: card.icon});
    buildAssignCard(card.icon);
    gamestate.dHandEval = evalHand();
  }
  await determineEndWinner();
}
// evaluates the current hand for unsafe sums like 21 or blackjack to control the next process.returns the dealerstate and sum
// to determine the end winner.
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
//checks the player's sum, dealer state and if necessary compares sums to determine the end winner.
async function determineEndWinner() {
  // push: equal sum and neither has busted.
  // lose: bust / dealerSum is greater and not bust.
  // win: greater and not bust / dealer bust.

  // loop through the queue until dealer-cards
  for (let i = 0; i < gamestate.queue.length - 1; i++) {
    let currHand = gamestate.queue[i];
    let pHand = gamestate.pCards[currHand];
    let pSum = getSum(pHand);
    let dSum = getSum(gamestate.dCards);
    console.log(
      `gamestate in determine end winner...${JSON.stringify(gamestate)}`
    );
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
    } else if (pSum > dSum || gamestate.dHandEval.dealerState === "bust") {
      console.log("***PLAYER WINS****");
      await processEndState(true, false);
    }
  }
  await delay(2000);
  return;
}
// shows the end-state (win or loss or blackjack) and logs the outcome of the hand. runs initialize() at the conclusion to restart
// the game loop
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
  await delay(2000);
  initialize();
}

// toggles the end game message on. takes a string for the message.
async function displayEndState(endStr) {
  let endDiv = document.getElementById("end-state-view");
  let endContent = document.createElement("h2");
  endContent.innerHTML = endStr;
  endDiv.appendChild(endContent);
  toggleViews([["end-state-view", 1]]);
}
// initializes the split operation by altering the player's cards object in the gamestate and building DOM elements for a proper display.
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
  initialize();
});
