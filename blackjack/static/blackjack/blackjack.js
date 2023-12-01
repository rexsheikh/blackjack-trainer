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
  playBlackJack();
});
// ********* HELPER FUNCTIONS ********
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
// *********PLAYER ACTIONS / REACTIONS ********
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
async function playerActionLoop() {
  console.log("starting player loop...");
  console.log(
    `gamestate.playerCards: ${JSON.stringify(gameState.playerCards)}`
  );
  const eval = await evalHand(gameState.playerCards);
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
function getPlayerChoice(playerCards, dealerCards) {
  console.log("getPlayerChoice...");
  const choiceBtns = document.querySelectorAll(".choice-btn");
  let pA = playerCards[0];
  let pB = playerCards[1];
  let dU = dealerCards[0];
  return new Promise((resolve) => {
    choiceBtns.forEach((btn) => {
      // Create a clone of each button to remove existing event listeners
      const cloneBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(cloneBtn, btn);

      cloneBtn.addEventListener("click", function () {
        const choice = cloneBtn.getAttribute("data-choice");
        const correct = determineCorrect(pA, pB, dU, choice);

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
            resolve(choice);
          });
      });
    });
  });
}
async function doPlayerChoice(choice) {
  console.log(`doPlayerChoice...${choice}`);
  if (choice === "hit") {
    await hit("player-cards");
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
  }
  return Promise.resolve("choice complete");
}

// main game loop
async function playBlackJack() {
  console.log("playBlackJack...");
  resetGameState();
  toggleViews([["bet-view", 1]]);
  bet();
  firstDeal();
  showDeal();
  await playerActionLoop();
}

function evalHand(cards) {
  console.log(`evalHand...`);
  const sum = getSum(cards);
  let eval;
  if (sum === 21) {
    eval = "blackjack";
  } else if (sum > 21) {
    eval = "bust";
  } else {
    eval = "safeSum";
  }
  console.log(`sum calc: ...${sum}...`);
  if (gameState.turn === "player") {
    if (eval != "safeSum") {
      gameState.turn = "dealer";
      console.log("Player turn complete...");
      return Promise.resolve(eval);
    } else {
      console.log(`...determined safeSum...`);
      return Promise.resolve("safeSum");
    }
  } else {
    if (eval != "safeSum") {
      console.log(`dealer ${eval}!!`);
      // need to add logic to capture wins somewhere...
    } else {
      if ((gameState.dealerCards.includes(11) && sum === 17) || sum >= 17) {
        console.log("dealerStand");
        return "dealerStand";
      } else {
        console.log("dealerHit");
        return dealerActionLoop();
      }
    }
  }
}

async function dealerActionLoop() {
  const result = await evalHand(gameState.playerCards);
  if (result === "dealerStand") {
    return resetGameState();
  } else {
    hit("dealer-cards");
  }
  return result;
}

async function hit(hand) {
  setTimeout(() => {
    let cardVal = getRandomCard();
    gameState.playerCards.push(cardVal);
    buildAssignCard(cardVal, hand);
  }, 1000);
  return Promise.resolve("hit complete");
}
