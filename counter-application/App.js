import {Component} from 'react'
import './App.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onReset = () => {
    this.setState({count: 0})
  }

  render() {
    let {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="counter-value">{count}</p>
        <button onClick={this.onDecrement}>Decrease</button>
        <button onClick={this.onReset}>Reset</button>
        <button onClick={this.onIncrement}>Increase</button>
      </div>
    )
  }
}

export default Counter
