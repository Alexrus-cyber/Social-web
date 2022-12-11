import React, {memo, useCallback, useState} from "react";
import styles from '../../Profile.module.css'
import {Module} from "../../../Common/Module/Module";
import { InitializeFromStateFormRedux } from "../ProfileDataText/InfoReduxForm";
import {PropsDataType} from "../ProfileDataText/ProfileDataText";
import {ProfileType} from "../../../../Types/Types";



export const ProfileStatus = memo<PropsDataType>((props) => {
    const [moduleActive, setModuleActive] = useState(false);

    const onSubmit = useCallback((formData: ProfileType) => {
        console.log(formData);
        setModuleActive(false);
        props.updateProfile(formData)
    }, [props])

    return (<div style={{display: "flex"}}>
            {Number(props.id) === props.myId
                ? moduleActive
                    ? <div></div>
                    :
                    <div style={{marginLeft: 10}}>
                        <button className={styles.button} onClick={() => setModuleActive(true)}>Изменить</button>
                    </div>
                : <div style={{marginLeft: 10}}></div>
            }
            <Module active={moduleActive} setActive={setModuleActive} >
                <InitializeFromStateFormRedux initialValues={props.profile} profile={props.profile}
                                              onSubmit = {onSubmit}/>
            </Module>

        </div>
    )
})
