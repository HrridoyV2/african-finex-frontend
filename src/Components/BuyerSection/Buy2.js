import { Button } from 'antd';
import { connect } from 'formik';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";
import { UserContext } from '../../App';
import { buy } from '../../redux';
function SecondPage() {
  const [wallet, setWallet] = useState("");
  const { buyerWallet, setBuyerWallet } = useContext(UserContext);
  let history = useHistory();

  const isValid = () => {
    const valid = WAValidator.validate(wallet, "BTC");
    if (valid) {
      alert("This is a valid address");
      history.push("/page3");
      setBuyerWallet(wallet);
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
          placeholder="Enter your BSC wallet address"
        />
        <h4>You will receive your TAOA in this address</h4>

        <h4 className="text-danger mt-5">
          Pay close attention mistakes will make you loose all your assets and
          there is nothing we can do to help
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
    )
}




export default SecondPage
