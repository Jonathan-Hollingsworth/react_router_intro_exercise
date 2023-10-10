import React from "react";
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
      <div className="VendingMachine">
        <h1>Vending Machine</h1>
        <b>What would you like?</b>
        <br />
        <Link to="/chips">Chips</Link>
        <Link to="/cola">Cola</Link>
        <Link to="/jerky">Jerky</Link>
        <Link to="/chocolate-bar">Chocolate bar</Link>
      </div>
    )
}

export default VendingMachine