import React from "react";
import { Link } from 'react-router-dom';

function ChocolateBar() {
    return (
      <div className="ChocolateBar">
        <h1>Node Chocolate</h1>
        <b>Out of Stock</b>
        <Link to="/">Go back</Link>
      </div>
    )
}

export default ChocolateBar