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
    <div className="container border my-5">
      <div className="container p-5">
        <input
          onBlur={(e) => setWallet(e.target.value)}
          className="form-control mb-5"
          type="text"
          placeholder="BSC wallet address"
        />

        <h4 className="mt-5">
          If for some reason we can not proceed with your sale (Which is rare)
          we will completely return your assets. Please provide a BSC valid
          wallet address that you have access to. Pay close attention to not
          input any incorrect information.
        </h4>
      </div>
      <a
        href="https://www.binance.org/en/smartChain"
        target="_blank"
        className="text-center"
      >
        <h4>Don't have a BSC wallet yet?</h4>
      </a>
      <div className="text-center py-5">
        <Button variant="danger" className="px-5" onClick={isValid}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Sell2;
