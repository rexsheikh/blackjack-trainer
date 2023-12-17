document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  getRankCash();
  getHT();
});

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

      let rankEl = document.getElementById("player-rank");
      rankEl.innerText = `Rank: ${rank}`;

      let cashEl = document.getElementById("player-cash");

      cashEl.innerText = `Total Cash: $${data.cash}`;
    });
}

function getHT() {
  fetch(`menu/getHeatMaps`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let htAxis = buildAxis(5, 20);
      let stAxis = buildAxis(2, 9);
      let pairAxis = buildAxis(2, 10);
      let dUAxis = buildAxis(2, 10);

      var colorscale = [
        [0, `rgb(208,209,196)`],
        [1, `rgb(218,194,0)`],
      ];

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

      Plotly.newPlot("ht-view", htHeatmap, htconfig);

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

function buildAxis(start, end) {
  let axis = [];
  for (let i = start; i <= end; i++) {
    axis.push(i);
  }
  return axis;
}
