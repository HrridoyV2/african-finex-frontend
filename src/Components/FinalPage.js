import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";


function FinalPage() {
  const history = useHistory();
  return (
    <div className="container container_border my-5 px-5 pt-5">
        <h4 className="my-5">
          Congratulations you have made it successfully. Remember your internal
          transaction ID. If you need any help customer support will ask for it
        </h4>
        <h1>334235</h1>
        <h4 className="my-3">ID X, qtt token, Token, timestamp</h4>
        <button onClick={() => {history.push('/');alert('Congratulation, back to home')}} className="btn_next btn-block my-4 bg-light"> I've stored the ID and i'm done</button>
      
    </div>
  );
}

export default FinalPage;
