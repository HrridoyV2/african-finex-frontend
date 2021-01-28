import React, { useContext } from "react";

import WAValidator from "wallet-address-validator";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { Button } from "antd";

function Sell2() {
  const [wallet, setWallet] = useState("");
  const { finalWallet, setFinalWallet } = useContext(UserContext);
  let history = useHistory();

  const isValid = () => {
    const valid = WAValidator.validate(wallet, "BTC");
    if (valid) {
      alert("This is a valid address");
      history.push("/sell3");
      setFinalWallet(wallet);
    } else {
      alert("Address INVALID");
    }
  };

  return (
    <div className="container container_border my-5 px-5 pt-5">
      
        <input
          onBlur={(e) => setWallet(e.target.value)}
          className="form-control mb-5"
          type="text"
          placeholder="BSC wallet address"
        />

        <h4 className="my-4">
          If for some reason we can not proceed with your sale (Which is rare)
          we will completely return your assets. Please provide a BSC valid
          wallet address that you have access to. Pay close attention to not
          input any incorrect information.
        </h4>
      
      <a
        href="https://www.binance.org/en/smartChain"
        target="_blank"
        className="text-center"
      >
        <h4>Don't have a BSC wallet yet?</h4>
      </a>
        <button className="my-4 btn_next btn-block" onClick={isValid}>
          Next
        </button>
    </div>
  );
}

export default Sell2;
