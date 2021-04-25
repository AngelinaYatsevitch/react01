import React, { useMemo } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routesName";

import "./style.css";

const Counter = ({
  countValue,
  parityType,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleAdd,
}) => {
  return (
    <>
      <h1>COUNTER PAGE переиспользуемый</h1>
      <Link to={ROUTES.HOME_PAGE}>
        <button className="btn">HOME PAGE</button>
      </Link>
     
      <div
        className="counter_wrapper"
        className={
          parityType === "even" ? "counter_wrapper even" : "counter_wrapper odd"
        }
      >
        <div className="count-screen">{countValue}</div>
        <div className="count-screen">{parityType}</div>
        <div className="button_wrapper">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="add-dell">
          {/* <button>addCounter</button> */}
          <button>dellCounter</button>
        </div>
      </div>
    </>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default React.memo(Counter);
