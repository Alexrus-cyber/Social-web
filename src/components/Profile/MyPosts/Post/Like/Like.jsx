import React, {useState} from "react";
import p from './Like.module.css';
import image from './like.png';

const Like = (props) => {
    const [count, setCount] = useState(0);
    const click = () => {
        setCount(count +  1)
    }

    return (
            <div>
                <img style={{cursor: "pointer", width: 20, height: 20,}} onClick={click} src={image} alt={'Hello'}/>
                <span>{count}</span>
            </div>
    );
}

export default  Like;