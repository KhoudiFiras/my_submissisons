import { useState } from 'react'


const Statistics = (props) =>{
  if(props.all ==0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }else{
  return(
    <div>
    <h1>statistics</h1>
    <table>
    <tr><StatisticLine text="good" value ={props.good} /></tr>
    <tr><StatisticLine text="neutral" value ={props.neutral} /></tr>
    <tr><StatisticLine text="bad" value ={props.bad} /></tr>
    <tr><StatisticLine text="all" value ={props.all} /></tr>
    <tr><StatisticLine text="average" value ={(props.good - props.bad) / props.all} /></tr>
    <tr><StatisticLine text="positive" value ={(props.good / props.all) * 100} /></tr>
    </table>
    </div>
  )}
}

const StatisticLine = (props) => {
  return(
    <>
        <td>{props.text}</td>
        <td> {props.value}</td>
    </>
  )
}
const Button =(props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad

  const handleGClick = () =>{
    setGood(good + 1)
  }
  const handleNClick = () =>{
    setNeutral(neutral + 1)
  }
  const handleBClick = () =>{
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGClick} text={"good"}/>
      <Button handleClick={handleNClick} text={"neutral"}/>
      <Button handleClick={handleBClick} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App