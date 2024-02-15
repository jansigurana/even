// Write your code here
import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {cont: 0}
  getRandomdNumber = () => Math.ceil((Math.random() = 100))

  onIncrease = () => {
    const randomNumber = this.getRandomdNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }
  render() {
    const {count} = this.state
    const displayText = count % 2 == 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p>Count is {displayText}</p>
          <button type="button" className="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
