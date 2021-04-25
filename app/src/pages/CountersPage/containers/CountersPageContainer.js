import React, { useMemo } from "react";
import useCounter from "../../../helpers/hooks/useCounter";
import Counters from '../../../pages/CountersPage/components/Counters'
// import Counter from "../../../comonComponents/Counter";// можно брать отсюда переиспользовать


const CountersPageContainer = () => {
  const [
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
  ] = useCounter(0);

  const parityType = useMemo(() => {
    return countValue % 2 === 0 ? "even" : "odd";
  }, [countValue]);

  return (
    <Counters
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      countValue={countValue}
      handleReset={handleReset}
      parityType={parityType}
    />
  );
};

export default CountersPageContainer;
