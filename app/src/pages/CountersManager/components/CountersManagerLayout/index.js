// import { v4 as uuid4 } from "uuid";
import propTypes from "prop-types";
import Counter from "../../../../comonComponents/Counter";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../routes/routesName";

import React from "react";

const CountersManagerLayout = ({
  handleCounterCreate,
  handleCounterReset,
  countersList,
}) => {
  return (
    <>
      <Link to={ROUTES.HOME_PAGE}>
        <button className="btn">HOME PAGE</button>
      </Link>
      <div>
        <div style={{ marginBottom: 25 }}>
          <button onClick={handleCounterCreate}>Create counter</button>
          <button onClick={handleCounterReset}>Reset</button>
        </div>

        <div>
          {countersList.map((counter, index) => (
            <div style={{ marginBottom: 10 }} key={index}>
              <Counter countValue={counter.countValue} />
            </div>
          ))}
        </div>


      </div>
    </>
  );
};
CountersManagerLayout.propTypes = {};

export default CountersManagerLayout;
