import React, { useState, useCallback } from "react";
import CountersManagerLayout from '../components/CountersManagerLayout'

const CountersManagerContainers = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = useCallback(() => {
    const newCounter = {
      countValue: 0,
      parityType: "even",
    };

    setCounters([...counters, newCounter]);
  }, [counters]);

  const handleAdd = useCallback( (index) => {
      setCounters( (state) => {
          const stateCopy = [...state];
          stateCopy.splise(index, 1);
          return stateCopy;
      })
  }, [])

  return (
    <CountersManagerLayout
      countersList={counters}
      handleCounterCreate={handleCounterCreate}
      handleAdd={handleAdd}
      
    />
  );
};

export default CountersManagerContainers;
