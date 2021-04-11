import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesName";

import "./style.css";

const Counter = ({
  countValue,
  parityType,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <>
      <h1>COUNTER PAGE</h1>
      <Link to={ROUTES.HOME_PAGE}>
        <button className="btn">HOME PAGE</button>
      </Link>

      <div className="counter_wrapper">
        <div className="count-screen">{countValue}</div>
        <div className="count-screen">{parityType}</div>
        <div className="button_wrapper">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Counter;
