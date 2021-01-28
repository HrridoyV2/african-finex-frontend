import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useId } from "react-id-generator";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";


function Page4({ children, ...rest }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const swapId = Math.floor(Math.random() * Math.floor(1000) + 100);
  const { buyerWallet, setBuyerWallet } = useContext(UserContext);

  const postBuy = () => {
    setLoading(true);
    const bulkData = { buyerWallet, SwapId: swapId, IBAN: "ABCDEFG1234567" };

    fetch("https://african-finex.herokuapp.com/buy", {
      method: "POST",
      body: JSON.stringify(bulkData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Successfully posted");
          history.push("/sell")
        }
      });
  };

  return (
    <div className="container container_border my-5 px-5 pt-5">
        <h4 className="my-5">Transfers funds to the following account</h4>
        <div className="my-5">
          <h3>IBAN: ABCDEFG1234567</h3>
          <h3>Swap ID: {swapId}</h3>
        </div>
        <h4>
          As soon as the funds are received the transaction to your BSC wallet
          will be made the following address.
        </h4>
        <h4 className="my-5">({buyerWallet ? buyerWallet: "wallet address"})</h4>
        <a href="#" className="text-center">
          <h4>Doubts? Discord or Telegram</h4>
        </a>
        <div className="text-center">
          <button disabled={loading} variant="danger" className="px-5 btn_next bg-light btn-block my-4 " onClick={postBuy}>
            {loading? "Submitting...":"Next"}
          </button>
        </div>
      </div>
  );
}

export default Page4;
