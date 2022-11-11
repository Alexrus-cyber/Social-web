import React, {useEffect, useState} from "react";
import p from './Like.module.css';
import image from './like.png';
import {addLikeCreator} from "../../../../../Redux/Profile-reducer";


const Like = (props) => {
    const [count, setCount] = useState(props.like);
    const click = () => {
        let counts = count + 1;
        setCount(counts)
        props.addLike(counts)
/*        localStorage.setItem('like', JSON.stringify(counts))*/
        console.log(props.like)
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