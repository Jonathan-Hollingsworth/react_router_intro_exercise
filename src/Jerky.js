import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Jerky() {
    const [piecesEaten, setPiecesEaten] = useState(0)

    function eat() {
        setPiecesEaten(piecesEaten + 1)
    }
    return (
      <div className="Jerky">
        <h1>Beef Jerky: The Meat Lover's Chip</h1>
        <b>Pieces Eaten: {piecesEaten}</b>
        <button onClick={eat}>Eat a piece</button>
        <Link exact to="/">Go back</Link>
      </div>
    )
}

export default Jerky