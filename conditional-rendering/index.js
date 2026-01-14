import {Component} from 'react'

class Toggle extends Component {
  state = {isLogin: false}

  updateState = () => {
    const {isLogin} = this.state

    this.setState({isLogin: !isLogin})
  }

  authButton = () => {
    const {isLogin} = this.state

    //conditional rendering using if-else statement
    if (isLogin) {
      return <button onClick={this.updateState}>Logout</button>
    } else {
      return <button onClick={this.updateState}>Login</button>
    }
  }

  render() {
    const {isLogin} = this.state

    //conditional rendering using element variable
    let message

    if (isLogin) {
      message = <p>Login Successful</p>
    } else {
      message = <p>Logout Successful</p>
    }
    return (
      <div>
        <h1>Authentication System</h1>
        //conditional rendering using ternary operator
        {isLogin ? (
          <h2>Welcome to our platform</h2>
        ) : (
          <h2>Thank you for chooseing us</h2>
        )}
        {message}
        {this.authButton()}
        //conditional rendering using logical && operator
        {!isLogin && <p>please login to continue...</p>}
        {isLogin && <p>press logout button to leave this page</p>}
      </div>
    )
  }
}

export default Toggle
