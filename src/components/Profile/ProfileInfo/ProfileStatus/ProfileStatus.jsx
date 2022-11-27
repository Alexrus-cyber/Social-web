import React, {useCallback, useState} from "react";
import styles from '../../Profile.module.css'
import {Module} from "../../../Common/Module/Module";
import InfoReduxForm from "../ProfileDataText/InfoReduxForm";

export const ProfileStatus = React.memo((props) => {
    const [moduleActive, setModuleActive] = useState(false);

    const onSubmit = useCallback((formData) => {
        console.log(formData);
        setModuleActive(false);
        props.updateProfile(formData)
    }, [props])

    return (
        <div style={{display: "flex"}}>
            {Number(props.id) === props.myId
                ? moduleActive
                    ? <div></div>
                    :
                    <div style={{marginLeft: 10}}>
                        <button className={styles.button} onClick={() => setModuleActive(true)}>Изменить</button>
                    </div>
                : <div style={{marginLeft: 10}}></div>
            }
            <Module active={moduleActive} setActive={setModuleActive}>
                <InfoReduxForm myId = {props.myId} initialValues = {props.profile} profile={props.profile}
                                onSubmit={onSubmit}/>
            </Module>

        </div>
    )
})
