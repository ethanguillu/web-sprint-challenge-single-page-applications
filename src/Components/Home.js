import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div className="homeContainer">
      <Link to="/pizza">
        <button className="shop-btn" id="order-pizza" onClick={() => history.push("/pizza")}>
          Order Now! 
        </button>
      </Link>
    </div>
  );
}