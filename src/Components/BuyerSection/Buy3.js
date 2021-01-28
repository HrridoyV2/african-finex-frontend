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
  //   const [bank, setBank] = useState([]); this state will be set after fetching

  const [selectedBank, setSelectedBank] = useState("Chose Your Bank");

  const handleChange = (e) => {
    setSelectedBank(e);
  };
  return (
    <div className="container border my-5">
      <div className="container p-5">
        <div className="my-5">
        <SplitButton
            key={"down"}
            id={`dropdown-button-drop-${"down"}`}
            drop={"down"}
            variant="secondary"
            title={selectedBank}
          >
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank1"}>
              Bank1
            </Dropdown.Item>
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank2"}>
              Bank2
            </Dropdown.Item>
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank3"}>
              Bank3
            </Dropdown.Item>
            <Dropdown.Item onSelect={handleChange} eventKey={"Bank4"}>
              Bank4
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
        <Link to="/page4">
          <Button variant="danger" className="px-5 mt-5 text-center">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page3;
