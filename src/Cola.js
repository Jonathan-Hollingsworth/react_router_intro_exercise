import React from "react";
import { Link } from 'react-router-dom';

function Cola() {
    return (
      <div className="Cola">
        <h1>JS Cola</h1>
        <b>The #1 Digital Refreshment</b>
        <Link to="/">Go back</Link>
      </div>
    )
}

export default Cola