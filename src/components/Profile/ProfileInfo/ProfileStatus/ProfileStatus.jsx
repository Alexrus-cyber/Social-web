import React, {useCallback, useState} from "react";

export const ProfileStatus = React.memo((props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)
    const activeMode = () => {
        setEditMode(true);
    }
    const disableMode = useCallback(() => {
        setEditMode(false)
        props.updateStatus(status)
    },[props,status])

    const onStatusChange = (el) => {
        setStatus(el.currentTarget.value);
    }

    return (
        <div style={{display: "flex"}}>
            status:
            {props.id === props.myId
                ? editMode
                    ? <div style={{marginLeft: 10}}><input onChange={onStatusChange} value={status}></input>
                        <button onClick={disableMode}>Сохранить</button>
                    </div>
                    :
                    <div style={{marginLeft: 10}}>
                        <span>{props.status}</span>
                        <button onClick={activeMode}>Изменить</button>
                    </div>
                : <div style={{marginLeft: 10}}>{props.status}</div>
            }
        </div>
    )
})
