import React, { useCallback, useEffect, useState } from "react";
import Counter from "../../../comonComponents/Counter";

const FunctionalCounterPageContainer = () => {
  const [counterState, setCounterState] = useState({
    countValue: 0,
    parityType: "even",
  });

  useEffect(() => {
    setCounterState({
      ...counterState,
      parityType: counterState.countValue % 2 === 0 ? "even" : "odd",
    });
  }, [counterState.countValue]);

  const handleReset = () => {
    setCounterState({
      countValue: 0,
      parityType: "even",
    });
  };

  const handleIncrement = useCallback(() => {
    setCounterState((state) => {
      const countValue = state.countValue + 1;

      return {
        ...state,
        countValue,
      };
    });
  }, []);

  const handleDecrement = useCallback( () => {
      if (counterState.countValue > 0) {
        setCounterState((state) => {
          const countValue = state.countValue - 1;

          return {
            ...state,
            countValue,
          };
        });
      }
    },
    [counterState.countValue]
  );

  return (
    <Counter
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      parityType={counterState.parityType}
      countValue={counterState.countValue}
    />
  );
  }


export default FunctionalCounterPageContainer;
