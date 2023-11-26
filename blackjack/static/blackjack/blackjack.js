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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "double"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "hit"
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
        "ace": "stand"
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
        "ace": "stand"
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
        "ace": "stand"
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
        "ace": "stand"
    },
};
// playerOtherCard (ace assumed):dealerUp:correctAns
const stratSoftTotal = {
    2: {
        2:"hit",
        3:"hit",
        4:"hit",
        5:"double",
        6:"double",
        7:"hit",
        8:"hit",
        9:"hit",
        10:"hit",
        "ace":"hit",
    },
    3: {
        2:"hit",
        3:"hit",
        4:"hit",
        5:"double",
        6:"double",
        7:"hit",
        8:"hit",
        9:"hit",
        10:"hit",
        "ace":"hit",
    },
    4: {
        2:"hit",
        3:"hit",
        4:"double",
        5:"double",
        6:"double",
        7:"hit",
        8:"hit",
        9:"hit",
        10:"hit",
        "ace":"hit",
    },
    5: {
        2:"hit",
        3:"hit",
        4:"double",
        5:"double",
        6:"double",
        7:"hit",
        8:"hit",
        9:"hit",
        10:"hit",
        "ace":"hit",
    },
    6: {
        2:"hit",
        3:"double",
        4:"double",
        5:"double",
        6:"double",
        7:"hit",
        8:"hit",
        9:"hit",
        10:"hit",
        "ace":"hit",
    },
    7: {
        2:"double",
        3:"double",
        4:"double",
        5:"double",
        6:"double",
        7:"hit",
        8:"hit",
        9:"hit",
        10:"hit",
        "ace":"hit",
    },
    8: {
        2:"stand",
        3:"stand",
        4:"stand",
        5:"stand",
        6:"double",
        7:"stand",
        8:"stand",
        9:"stand",
        10:"stand",
        "ace":"stand",
    },
    9: {
        2:"stand",
        3:"stand",
        4:"stand",
        5:"stand",
        6:"stand",
        7:"stand",
        8:"stand",
        9:"stand",
        10:"stand",
        "ace":"stand",
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
        "ace": "n",
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
        "ace": "n",
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
        "ace": "n",
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
        "ace": "n",
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
        "ace": "n",
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
        "ace": "n",
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
        "ace": "y",
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
        "ace": "n",
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
        "ace": "n",
    },
    "ace": {
        2: "y",
        3: "y",
        4: "y",
        5: "y",
        6: "y",
        7: "y",
        8: "y",
        9: "y",
        10: "y",
        "ace": "y",
    },
};

const cards = [2,3,4,5,6,7,8,9,10,11];
let totalBet = 0; 

document.addEventListener('DOMContentLoaded',function(){
    console.log('dom loaded...');
    toggleViews([["deal-view",0],["choice-view",0]]);
    addChipToBet();
    deal();
})


function addChipToBet(){
    const betBtns = document.querySelectorAll('.bet-btn');
    betBtns.forEach(function(btn){
        btn.addEventListener('click',function(){
            const betVal = parseInt(btn.getAttribute('data-chip-val'),10);
            totalBet += betVal;
            console.log(totalBet);
        })
    })
}
// for assigning multiple variables at once in javascript 
// https://sabe.io/blog/javascript-declare-multiple-variables

// destructing statement: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function deal(){
    document.querySelector('.deal-btn').addEventListener('click',function(){
        let playerCards = [];
        let dealerCards = [];
        let dealerUp;
        for (let i = 0; i < 4; i++) {
            let card = getRandomCard();
            let cardEl = document.createElement('h2');
            cardEl.innerHTML = card;
            if(i % 2 == 0){
                document.getElementById('player-cards').appendChild(cardEl);
                playerCards.push(card);
            }else{
                if(i === 1){
                    dealerUp = card;
                }
                dealerCards.push(card);
                document.getElementById('dealer-cards').appendChild(cardEl)
            }            
        }
        toggleViews([['bet-view',0],['deal-view',1]])
        document.getElementById('bet-view').style.display = 'none';
        document.getElementById('deal-view').style.display = 'block';
        evalBlackjack(...playerCards) ? console.log('win!') : toggleViews([['choice-view',1]]);
        evalBlackjack(...dealerCards) ? console.log('lose!') : toggleViews([['choice-view',1]]);
        getChoice(...playerCards,dealerUp);
    })    
}

function getRandomCard(){
    let idx = Math.floor(Math.random() * cards.length);
    return cards[idx];
}

function evalBlackjack(c1,c2){
    return c1 + c2 == 21 ? true : false;
}

function getChoice(pA,pB,dU){
    const choiceBtns = document.querySelectorAll(".choice-btn");
    choiceBtns.forEach(btn => {
        btn.addEventListener('click',function(){
            const choice = btn.getAttribute('data-choice');
            const correct = evalChoice(pA,pB,dU,choice)
            console.log(`correct: ${correct}`);
            fetch('/blackjack', {
                method: 'POST',
                body: JSON.stringify({
                    choice: choice,
                    player_a: pA,
                    player_b: pB,
                    dealer_up: dU,
                    correct:correct
                }),
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);

            })
        })
    })
}

function evalChoice(pA,pB,dU,choice){
    // eval pairs
    if(pA === pB){
        const correctChoice = stratPairs[pA][dU];
        return correctChoice === choice;
    // eval soft totals
    }else if (pA === 11 || pB === 11){
        let sum = pA + pB;
        const correctChoice = stratHardTotal[sum][dU];
        return correctChoice === choice;
    // eval hard totals
    }else{
        let sum = pA + pB;
        const correctChoice = stratHardTotal[sum][dU];
        return correctChoice === choice;
    }
}
function toggleViews(actionList){
    for (let i = 0; i < actionList.length; i++) {
        let [view,action] = actionList[i];
        if(action === 0){
            document.getElementById(view).style.display = 'none';
        }else{
            document.getElementById(view).style.display = 'block';
        }
    }
}