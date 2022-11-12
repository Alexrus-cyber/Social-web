import React, {useEffect, useState} from "react";
import p from './Like.module.css';
import image from './like.png';
import {addLikeCreator} from "../../../../../Redux/Profile-reducer";


const Like = (props) => {

    const [count, setCount] = useState(props.likes);
    const click = () => {
        let counts = count + 1;
        setCount(counts)
        props.addLike(counts, props.id)

    }
    return (
        <div>
            <img style={{cursor: "pointer", width: 20, height: 20,}} onClick={click} src={image} alt={'Hello'}/>
            <span>{props.likes}</span>
        </div>
    );
}

export default Like;