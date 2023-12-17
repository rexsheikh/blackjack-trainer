document.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded...");
  getRankCash();
  getHeatMaps();
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

function getHeatMaps() {
  fetch(`menu/getHeatMaps`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let htAxis = [];
      for (let i = 5; i <= 20; i++) {
        htAxis.push(i);
      }
      let dUAxis = [];
      for (let i = 2; i <= 10; i++) {
        dUAxis.push(i);
      }

      var example = [
        {
          z: data.htData,
          x: dUAxis,
          y: htAxis,
          type: "heatmap",
        },
      ];

      Plotly.newPlot("heatmap-view", example);
    });
}
