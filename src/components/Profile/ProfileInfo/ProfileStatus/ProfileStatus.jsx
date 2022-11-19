import React, {useState} from "react";

export const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)


    const activeMode = () =>{
        setEditMode(true);
    }
    const disableMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (el) => {
        setStatus(el.currentTarget.value);
    }
    return (
        <div>
            {editMode

                ? <div><input  onChange={onStatusChange} value={status}></input>
                    <button onClick={disableMode}>Сохранить</button>
                </div>


                : <div>
                    <span>{props.status}</span>
                    <button onClick={activeMode}>Изменить</button>
                  </div>
            }
        </div>

    )
}
