// main function that calls the API endpoints to load the player's information and heatmap data.
document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  getRankCash();
  getHeatMaps();
});

// gets the players rank and cash
// note: rank is not a fully implemented feature.
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
      let cashEl = document.getElementById("player-cash");
      cashEl.innerText = `Total Cash: $${data.cash}`;
    });
}

// loads the data for the three heatmaps and processes the data to present them.
// includes configuration for the heatmaps.
// I referenced this for a general overview of how to implemement the heatmaps: https://plotly.com/javascript/heatmaps/
// I referenced the following for heatmap configuration items to include colorscale, x/ygap, hovertemplate, ticks and
// bg_color:
// https://community.plotly.com/t/how-can-i-change-the-background-color-of-a-heatmap-plot/30897/2
// https://plotly.com/python/colorscales/
// https://plotly19.rssing.com/chan-60821140/article39.html
// https://stackoverflow.com/questions/45569092/plotly-python-heatmap-change-hovertext-x-y-z
function getHeatMaps() {
  fetch(`menu/getHeatMaps`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // add the wins, blackjacks and total hand elements
      let totalWins = document.getElementById("total-hands");
      totalWins.innerText = `Total Hands: ${data.totalHands}`;

      let wins = document.getElementById("wins");
      wins.innerText = `Wins: ${data.wins}`;

      let blackjacks = document.getElementById("blackjacks");
      blackjacks.innerText = `Blackjacks: ${data.blackjacks}`;
      // use the helper function to build an array of x to x2, inclusive, for the user's cards (sum, not_ace, or pair)
      let htAxis = buildAxis(5, 20);
      let stAxis = buildAxis(2, 9);
      let pairAxis = buildAxis(2, 10);
      let dUAxis = buildAxis(2, 10);

      // adjust the colorscale to fit the application's theme.
      var colorscale = [
        [0, `rgb(208,209,196)`],
        [1, `rgb(218,194,0)`],
      ];

      // hard total heatmap data
      var htHeatmap = [
        {
          z: data.htData,
          x: dUAxis,
          y: htAxis,
          type: "heatmap",
          colorscale: colorscale,
          showscale: true,
          xgap: 5,
          ygap: 5,
          hovertemplate:
            "Dealer Up: %{x}<br>Player Hard Total: %{y}<br>Value: %{z}",
        },
      ];
      // configure teh axis, background, and font color
      var htconfig = {
        annotations: [],
        xaxis: {
          title: {
            text: "Dealer Up",
          },
          tickvals: dUAxis,
          side: "top",
        },
        yaxis: {
          title: {
            text: "Player Hard Total",
          },
          tickvals: htAxis,
        },
        paper_bgcolor: "#323437",
        font: {
          color: "#D0D1C4",
        },
        plot_bgcolor: "#323437",
      };

      // place the heatmap to the ht-view div with data and configuration data.
      Plotly.newPlot("ht-view", htHeatmap, htconfig);

      // repeat the above steps for pair and soft totals.
      var pairHeatmap = [
        {
          z: data.pairData,
          x: dUAxis,
          y: pairAxis,
          type: "heatmap",
          colorscale: colorscale,
          showscale: true,
          xgap: 5,
          ygap: 5,
          hovertemplate:
            "Dealer Up: %{x}<br>Player Hard Total: %{y}<br>Value: %{z}",
        },
      ];
      var pairconfig = {
        annotations: [],
        xaxis: {
          title: {
            text: "Dealer Up",
          },
          tickvals: dUAxis,
          side: "top",
        },
        yaxis: {
          title: {
            text: "Player Pair",
          },
          tickvals: pairAxis,
        },
        paper_bgcolor: "#323437",
        font: {
          color: "#D0D1C4",
        },
        plot_bgcolor: "#323437",
      };

      Plotly.newPlot("pair-view", pairHeatmap, pairconfig);

      var stHeatmap = [
        {
          z: data.stData,
          x: dUAxis,
          y: stAxis,
          type: "heatmap",
          colorscale: colorscale,
          showscale: true,
          xgap: 5,
          ygap: 5,
          hovertemplate:
            "Dealer Up: %{x}<br>Player Card (not Ace): %{y}<br>Value: %{z}",
        },
      ];
      var stconfig = {
        annotations: [],
        xaxis: {
          title: {
            text: "Dealer Up",
          },
          tickvals: dUAxis,
          side: "top",
        },
        yaxis: {
          title: {
            text: "Player Soft Total",
          },
          tickvals: stAxis,
        },
        paper_bgcolor: "#323437",
        font: {
          color: "#D0D1C4",
        },
        plot_bgcolor: "#323437",
      };

      Plotly.newPlot("st-view", stHeatmap, stconfig);
    });
}

// helper function to build the player's axis.
function buildAxis(start, end) {
  let axis = [];
  for (let i = start; i <= end; i++) {
    axis.push(i);
  }
  return axis;
}
