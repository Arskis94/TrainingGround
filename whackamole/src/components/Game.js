import React from "react"

const Game = () => {
  const xd = 123
  return (
    <div>
      <div>
        <h2 class="timer">
          Game will begin after you choose your name and difficulty
        </h2>
      </div>
      <div class="game">
        <div class="hole hole1">
          <div class="mole"> </div>{" "}
        </div>{" "}
        <div class="hole hole2">
          <div class="mole"> </div>{" "}
        </div>{" "}
        <div class="hole hole3">
          <div class="mole"> </div>{" "}
        </div>{" "}
        <div class="hole hole4">
          <div class="mole"> </div>{" "}
        </div>{" "}
        <div class="hole hole5">
          <div class="mole"> </div>{" "}
        </div>{" "}
        <div class="hole hole6">
          <div class="mole"> </div>{" "}
        </div>
      </div>
    </div>
  )
}

export default Game
