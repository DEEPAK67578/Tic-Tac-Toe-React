import "./Gamboard.css";

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let current = 1;
function Gameboard(props) {
  function Game(event) {
    const selectedRow = event.target.dataset.row - 1;
    const selectedCol = event.target.dataset.col - 1;
    if (gameData[selectedRow][selectedCol] != 0) {
      alert("Please select a empty field");
      return;
    }
    gameData[selectedRow][selectedCol] = props.activePlayer + 1;
    event.target.textContent = props.playerData[props.activePlayer].symbol;
    current++;
    props.switchPlayer();
  }

  function checkForWinner () {
    
  }
  return (
    <div>
      <ul>
        <li onClick={Game} data-row="1" data-col="1"></li>
        <li onClick={Game} data-row="1" data-col="2"></li>
        <li onClick={Game} data-row="1" data-col="3"></li>

        <li onClick={Game} data-row="2" data-col="1"></li>
        <li onClick={Game} data-row="2" data-col="2"></li>
        <li onClick={Game} data-row="2" data-col="3"></li>

        <li onClick={Game} data-row="3" data-col="1"></li>
        <li onClick={Game} data-row="3" data-col="2"></li>
        <li onClick={Game} data-row="3" data-col="3"></li>
      </ul>
    </div>
  );
}

export default Gameboard;
