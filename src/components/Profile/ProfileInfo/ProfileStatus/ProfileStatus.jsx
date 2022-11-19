import React, {useState} from "react";

export const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div>
            {editMode

                ? <div><input value={props.status}></input>
                    <button onClick={() => setEditMode(false)}>Сохранить</button>
                </div>


                : <div><span>{props.status}</span>
                    <button onClick={() => setEditMode(true)}>Изменить</button>
                </div>}
        </div>

    )
}
