import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: "even",
    };
  }

  componentDidUpdate() {
     (this.state.parityType === "Введено нечетное число") ? alert("нечетное") : alert("четное"); // пока так, незнаю как добавить цвет
    }

  parityType = (value) => {
    if (value % 2) {
      return "Введено нечетное число";
    } else {
      return "Введено четное число";
    }
  };

  handleIncrement = () => {
    this.setState((state) => {
      const countValue = state.countValue + 1;
      const parityTypeEven = this.parityType(countValue);
      return {
        countValue,
        parityType: parityTypeEven,
      };
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      if (this.state.countValue <= 0) {
        this.setState({ countValue: (this.state.countValue = 0) });
      } else {
        const countValue = state.countValue - 1;
        const parityTypeEven = this.parityType(countValue);
        return {
          countValue,
          parityType: parityTypeEven,
        };
      }
    });
  };

  handleReset = () => {
    this.setState((state) => {
      const countValue = (state.countValue = 0);
      return {
        countValue,
        parityType: "Введено четное число",
      };
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
