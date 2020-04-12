import React, { FC } from "react"

const App: FC<{ color: string }> = ({ color }) => {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <p>The color of this page is: {color}</p>
    </div>
  )
}

export default App