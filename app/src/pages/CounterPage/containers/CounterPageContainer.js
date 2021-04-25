import React, { Component } from "react";
import Counter from "../../../comonComponents/Counter";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: "even",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      this.setState( (state)  =>  {
        const parityType = state.countValue %2 === 0 ? "even" : "odd";
    
        return {
          ...state,
          parityType,
        }
      });
    }
  }

  handleIncrement = () => {
    this.setState((state) => {
      const countValue = state.countValue + 1;
      return {
        ...state,
        countValue,
      };
    });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
    this.setState((state) => {
      const countValue = state.countValue - 1;
      return {
        ...state,
        countValue,
      };
    });
  };
}

  handleReset = () => {
    this.setState({
      countValue: 0,
    });
  };

  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        handleDecrement={this.handleDecrement}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterPageContainer;
