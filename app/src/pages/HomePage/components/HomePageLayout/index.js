import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesName";

import "./style.css";

const HomePageLayout = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to ={ROUTES.COUNTER_PAGE}>
        <button className="btn">GO TO COUNTER PAGE</button>
      </Link>
    </div>
  );
};

export default HomePageLayout;
