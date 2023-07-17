import "./Loader.css";
import HashLoader from 'react-spinners/HashLoader';
import { useState } from 'react';

const Loader = ({ text }) => {
    const [color, setColor] = useState('#4169e1')
    return(
        <div className="loader">
            <HashLoader color={color} size={110} />
            <h3 className="loader__text">
            {text}...
            </h3>
        </div>
    )
}
export default Loader;
