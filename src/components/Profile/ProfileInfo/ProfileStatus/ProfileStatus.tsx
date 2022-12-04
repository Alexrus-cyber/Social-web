import React, {memo, useCallback, useState} from "react";
// @ts-ignore
import styles from '../../Profile.module.css'
// @ts-ignore
import {Module} from "../../../Common/Module/Module";
// @ts-ignore
import InfoReduxForm from "../ProfileDataText/InfoReduxForm";
import {PropsDataType} from "../ProfileDataText/ProfileDataText";



export const ProfileStatus = memo<PropsDataType>((props) => {
    const [moduleActive, setModuleActive] = useState(false);

    const onSubmit = useCallback((formData: any) => {
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
            <Module active={moduleActive} setActive={setModuleActive}>
                <InfoReduxForm initialValues={props.profile} profile={props.profile}
                               onSubmit={onSubmit} handleSubmit={undefined}/>
            </Module>

        </div>
    )
})
