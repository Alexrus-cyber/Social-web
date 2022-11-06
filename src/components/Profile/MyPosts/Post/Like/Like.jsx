import React, {useEffect, useState} from "react";
import p from './Like.module.css';
import image from './like.png';

const Like = (props) => {
    const [count, setCount] = useState(0);
    const click = () => {
        let counts = count + 1;
        setCount(counts)
/*        localStorage.setItem('like', JSON.stringify(counts))*/
    }


/*    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('like'))
        if (count){
            setCount(count)
        }
    })*/

    return (
            <div>
                <img style={{cursor: "pointer", width: 20, height: 20,}} onClick={click} src={image} alt={'Hello'}/>
                <span>{props.like}</span>
            </div>
    );
}

export default  Like;