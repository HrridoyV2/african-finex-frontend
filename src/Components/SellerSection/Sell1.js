import { Button } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

function Sell() {
  const { token, setToken } = useContext(UserContext);
  const handleChange = (e) => {
    setToken(e);
  };
  return (
    <div className="container border my-5">
      <div className="container">
        <h4> Stablecoin gateway - Sell</h4>
        <select
          key={"down"}
          id={`dropdown-button-drop-${"down"}`}
          drop={"down"}
          variant="secondary"
          title={token || "Choose a token"}
        >
          <option onSelect={handleChange} value={"token1"}>
            token1
          </option>
          <option onSelect={handleChange} value={"token2"}>
            token2
          </option>
          <option onSelect={handleChange} value={"token3"}>
            token3
          </option>
        </select>
        <div>
          <label htmlFor="quantity">
            <input type="number" placeholder="Quantity" />
          </label>
        </div>
        <div className="mt-5">
          <h3>You will get X AOA @Preco AOA/TAOA</h3>
        </div>
        <Link to="/sell2">
          <Button variant="danger" className="px-5 mt-5 text-center">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sell;
