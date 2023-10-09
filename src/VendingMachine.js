import React from "react";
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
      <div className="VendingMachine">
        <h1>Vending Machine</h1>
        <b>What would you like?</b>
        <Link exact to="/chips">Chips</Link>
        <Link exact to="/cola">Cola</Link>
        <Link exact to="/jerky">Jerky</Link>
        <Link exact to="/chocolate-bar">Chocolate bar</Link>
      </div>
    )
}

export default VendingMachine