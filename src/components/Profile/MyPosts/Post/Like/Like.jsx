import React from "react";
import p from './Like.module.css';

const Like = (props) => {
    return (
            <div>
                <span>like {props.count}</span>
            </div>
    );
}

export default  Like;