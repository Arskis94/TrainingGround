import React from "react"

const Difficulty = () => {
  return (
    <div>
      <h2> Choose your difficulty! </h2>{" "}
      <div class="buttons">
        <button
          class="button easyButton"
          onClick="startGame(10, 400, 1800, 'easy')"
        >
          Easy mode{" "}
        </button>{" "}
        <button
          class="button normalButton"
          onClick="startGame(12, 380, 1340, 'normal')"
        >
          Normal mode{" "}
        </button>{" "}
        <button
          class="button hardButton"
          onClick="startGame(13, 300, 1080, 'hard')"
        >
          Hard mode{" "}
        </button>{" "}
        <button
          class="button insaneButton"
          onClick="startGame(15, 280, 840, 'insane')"
        >
          Insane mode{" "}
        </button>{" "}
        <button
          class="button godmodeButton"
          onClick="startGame(16, 220, 480, 'godmode')"
        >
          GOD MODE!
        </button>{" "}
      </div>
    </div>
  )
}

export default Difficulty
