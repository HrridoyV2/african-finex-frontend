import { Button } from "antd";
import React, { useContext, useState } from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

function Sell() {
  const { token, setToken } = useContext(UserContext);
  const handleChange = (e) => {
    setToken(e);
  };
  return (
    <div className="container container_b
    order my-5 px-5 pt-5">
      
        <h4> Stablecoin gateway - Sell</h4>
        <SplitButton
          key={"down"}
          id={`dropdown-button-drop-${"down"}`}
          drop={"down"}
          variant=""
          title={token || "Choose a token"}
          style={{border: "1px solid black"}}
        >
          <Dropdown.Item onSelect={handleChange} eventKey={"token 1"}>
            token 1
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token 2"}>
            token 2
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token 3"}>
            token 3
          </Dropdown.Item>
        </SplitButton>
        
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
