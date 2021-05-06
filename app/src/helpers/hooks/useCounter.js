import { useState, useCallback } from "react";

export default (initialValue) => {
  const [countValue, setCountValue] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCountValue((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    if (countValue > 0) {
      setCountValue((state) => state - 1);
    }
  }, [countValue]);

  const handleReset = useCallback(() => {
    setCountValue(0);
  }, []);
  return [countValue, handleIncrement, handleDecrement, handleReset];
};
