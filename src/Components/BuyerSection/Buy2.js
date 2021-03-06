
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";
import { UserContext } from '../../App';

function SecondPage() {
  const [wallet, setWallet] = useState("");
  const { buyerWallet, setBuyerWallet } = useContext(UserContext);
  let history = useHistory();

  const isValid = () => {
    const valid = WAValidator.validate(wallet, "BTC");
    if (valid) {
      alert("This is a valid address");
      history.push("/buy3");
      setBuyerWallet(wallet);
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
          placeholder="Enter your BSC wallet address"
        />
        <h4>You will receive your TAOA in this address</h4>

        <h4 className="text-danger mt-5">
          Pay close attention mistakes will make you loose all your assets and
          there is nothing we can do to help
        </h4>

        <a
        href="https://www.binance.org/en/smartChain"
        target="_blank"
        className="text-center"
      >
        <h4 className="my-3">Don't have a BSC wallet yet?</h4>
      </a>
      
        <button className="mb-4 btn_next btn-block" onClick={isValid}>
          Next
        </button>
      
      
      
    </div>
    )
}




export default SecondPage
