import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
  }
}
  handleDecrement = ()=> {
    this.setState({countValue: this.state.countValue-1});
  };

  handleIncrement = ()=> {
    this.setState({countValue: this.state.countValue+1});
  };

  handleReset = () => {
    this.setState({countValue: this.state.countValue = 0});
  }




  render() {
    return (
      <Counter 
      countValue={this.state.countValue}
      handleDecrement={this.handleDecrement}
      handleIncrement={this.handleIncrement}
      handleReset={this.handleReset}

      />
    ); 
  }
}


export default CounterPageContainer;
