import { useState } from "react";
import './random.styles.css';

const Random = () => {

    function getRandomNum(){
        return Math.floor(Math.random() * 100) + 1;
    }

    let [randomNumber, setRandomNumber] = useState(getRandomNum());

    return (
        <div id="random-container">
            <h1 id="random-number">{randomNumber}</h1>
            <button id="random-button" onClick={() => setRandomNumber(getRandomNum)}>Criar novo número</button>
        </div>
    );
}

export default Random;