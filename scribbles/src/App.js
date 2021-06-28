import React, {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const History = ({allClicks}) => {
  if(allClicks.length === 0){
    return (
      <div>The app is controlled by clicking on the buttons.</div>
    )
  }
  return (
    <div>button press history: {allClicks.join('')}</div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setLeft(left+1)
    setAll(allClicks.concat('l'))
  }
  const handleRightClick = () => {
    setRight(right+1)
    setAll(allClicks.concat('r'))
  }
  return (
    <div>
      <Display counter={left}/>
      <Button handleClick={handleLeftClick} text="left"/>
      <Display counter={right}/>
      <Button handleClick={handleRightClick} text="right"/>
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App