import React from "react"

const Leaderboard = () => {
  return (
    <div class="theLeaderboard">
      <h2>LeaderBoard</h2>
      <br />
      <button class="lbutton easyButton" value="easy">
        Easy
      </button>
      <button value="normal" class="lbutton normalButton">
        Normal
      </button>
      <button value="hard" class="lbutton hardButton">
        Hard
      </button>
      <button value="insane" class="lbutton insaneButton">
        Insane
      </button>
      <button value="godmode" class="lbutton godmodeButton">
        GOD MODE!
      </button>
      <div class="leaderboards">
        <div class="easyLeaderboard active leaderboard">
          <h3>This is the top 10 for the easy difficulty!</h3>
          <ol class="theList easyList"></ol>
        </div>
        <div class="normalLeaderboard leaderboard">
          <h3>This is the top 10 for the normal difficulty!</h3>
          <ol class="theList normalList"></ol>
        </div>
        <div class="hardLeaderboard leaderboard">
          <h3>This is the top 10 for the hard difficulty!</h3>
          <ol class="theList hardList"></ol>
        </div>
        <div class="insaneLeaderboard leaderboard">
          <h3>This is the top 10 for the insane difficulty!</h3>
          <ol class="theList insaneList"></ol>
        </div>
        <div class="godmodeLeaderboard leaderboard">
          <h3>This is the top 10 for the GOD mode difficulty!</h3>
          <ol class="theList godmodeList"></ol>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
