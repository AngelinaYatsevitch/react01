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
      <Link to ={ROUTES.FUNCTIONAL_COUNTER_PAGE}>
        <button className="btn">GO TO FUNCTIONAL COUNTER PAGE</button>
      </Link>
      <Link to ={ROUTES.COUNTERS_PAGE}>
        <button className="btn">GO TO HOOK COUNTER Page</button>
      </Link>
      <Link to ={ROUTES.MANAGER_COUNTERS_PAGE}>
        <button className="btn">GO TO MANAGER COUNTER Page</button>
      </Link>
      <Link to ={ROUTES.TODO_LIST}>
        <button className="btn">Todo List</button>
      </Link>




    </div>
  );
};

export default HomePageLayout;
