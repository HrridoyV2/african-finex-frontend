import { Button } from "antd";
import React from "react";


function FinalPage() {
  return (
    <div className="container border my-5">
      <div className="container p-5">
        <h4 className="my-5">
          Congratulations you have made it successfully. Remember your internal
          transaction ID. If you need any help customer support will ask for it
        </h4>
        <h1>334235</h1>
        <h4 className="my-5">ID X, qtt token, Token, timestamp</h4>
        <Button variant="success"> I've stored the ID and i'm done</Button>
      </div>
    </div>
  );
}

export default FinalPage;
