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
    <div className="container container_border my-5 px-5 pt-5">
      
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
        
            <input type="number" placeholder="Quantity" className="form-control mt-5" />
        
        <div className="mt-3">
          <h3>You will get X AOA @Preco AOA/TAOA</h3>
        </div>
        <Link to="/sell2">
          <button className="px-5 my-4 btn_next btn-block">
            Next
          </button>
        </Link>
      
    </div>
  );
}

export default Sell;
