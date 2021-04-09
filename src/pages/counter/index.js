import React, { useState } from 'react'
import Button from "../../components/Button"
import "./style.css";

const CounterPage = () => {
  // * STATE
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="counter">counts: {counter}</div>
      <div className="button">
        <Button type="info" onClick={() => setCounter(counter + 1)}>Info Button</Button>
      </div>
    </div>
  )
}

export default CounterPage
