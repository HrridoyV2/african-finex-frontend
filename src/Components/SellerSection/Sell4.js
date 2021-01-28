import { Button } from "antd";
import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

function Sell4() {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { account, finalWallet, token } = useContext(UserContext);
  const [txid, setTxid] = useState("");

  const postSell = () => {
    setLoading(true)

    const bulkData = { account, finalWallet, token, txid };

    fetch("https://african-finex.herokuapp.com/sell", {
      method: "POST",
      body: JSON.stringify(bulkData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Successful");
          history.push("/final-page");
        }
      });
  };
  
  return (
    <div className="container container_border my-5 px-5 pt-5">
      
        <h4>
          Transfer your tokens {token} to the following BSN (Biance smart chain)
          address and enter the result in a TXid
        </h4>
        <h4 className="mt-5">0xd215423aAd24dA82f782eA845aeD269E621</h4>
        <input
          type="text"
          className="form-control mt-5"
          placeholder="TXid (mandatory info)"
          onBlur={(e) => setTxid(e.target.value)}
        />
        <button disabled={loading} className="btn_next btn-block my-4" onClick={postSell}>
          {loading ?"Submitting...":"Done"}
        </button>
      
    </div>
  );
}

export default Sell4;
