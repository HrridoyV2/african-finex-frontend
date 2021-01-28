import React, { useState } from "react";
import {
  DropdownButton,
  ButtonGroup,
  Dropdown,
  SplitButton,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

function Page3() {

  const [selectedBank, setSelectedBank] = useState("Chose Your Bank");

  const handleChange = (e) => {
    setSelectedBank(e);
  };
  return (
    <div className="container container_border my-5 px-5 pt-5">
      
        <div className="my-5">
        <SplitButton
            key={"down"}
            id={`dropdown-button-drop-${"down"}`}
            drop={"down"}
            variant=""
            title={selectedBank}
          >
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank1"}>
              Bank 1
            </Dropdown.Item>
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank2"}>
              Bank 2
            </Dropdown.Item>
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank3"}>
              Bank 3
            </Dropdown.Item>
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank4"}>
              Bank 4
            </Dropdown.Item>
          </SplitButton>
          
        </div>
        <h5 className="mb-5">
          Transfers between banks are usually faster. If available give
          preference to your local bank and the system will automatically find
          the best P2P for you.
        </h5>
        <a href="#" className="ml-5">
          <h5>How long does it usually take?</h5>
        </a>
        <Link to="/buy4">
          <button className="px-5 my-4 btn_next btn-block">
            Next
          </button>
        </Link>
      
    </div>
  );
}

export default Page3;
