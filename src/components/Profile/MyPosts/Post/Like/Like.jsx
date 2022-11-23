import React, {useCallback, useState} from "react";
import image from './like.png';
import styles from "../Post.module.css";


const Like = (props) => {

    const [count, setCount] = useState(props.likes);
    const click = useCallback(() => {
        let counts = count + 1;
        setCount(counts)
        props.addLike(counts, props.id)
    },[count,props])
    return (
        <div className={styles.like} onClick={click}>
            <img style={{cursor: "pointer", width: 20, height: 20,marginRight: 5}} src={image} alt={'Hello'}/>
            <span style={{fontWeight: "bold"}}>{props.likes}</span>
        </div>
    );
}

export default Like;