import React, {useCallback, useState} from "react";
import image from './like.png';


const Like = (props) => {

    const [count, setCount] = useState(props.likes);
    const click = useCallback(() => {
        let counts = count + 1;
        setCount(counts)
        props.addLike(counts, props.id)
    },[count,props])
    return (
        <div>
            <img style={{cursor: "pointer", width: 20, height: 20,}} onClick={click} src={image} alt={'Hello'}/>
            <span>{props.likes}</span>
        </div>
    );
}

export default Like;