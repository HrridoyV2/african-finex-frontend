import { Button } from "antd";
import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

function Sell3() {
  let history = useHistory();
  const { account, setAccount } = useContext(UserContext);
  return (
    <div className="container container_border my-5 px-5 pt-5">
      
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your IBAN account details to be credited"
          onBlur={(e) => setAccount(e.target.value)}
        />
        <div className="mt-5">
          <a href="#">
            <h4>Where can I find my IBAN</h4>
          </a>
          <button className="my-4 btn_next btn-block" onClick={() => history.push("/sell4")}>
            Next
          </button>
        </div>
      
    </div>
  );
}

export default Sell3;
