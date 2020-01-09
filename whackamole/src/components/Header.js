import React from "react"

const Header = () => {
  return (
    <div>
      <h1>
        Whack-a-mole! <span class="score">0</span>
      </h1>
      <h2>Choose your name</h2>
      <div class="inputfield">
        <input
          type="text"
          spellcheck="false"
          value=""
          class="inputtext"
          placeholder="Type your name here"
          required
        ></input>
      </div>
    </div>
  )
}

export default Header
