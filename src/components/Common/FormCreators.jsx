import styles from './FormCreators.module.css'
import {Field} from "redux-form";
import React from "react";


export const TextAreaForm = ({input,meta: {error, warning, touched}, ...props}) => {
    const showError = touched && error;
    return(
        <div className={styles.text}>
                <textarea className={showError ? styles.textAreaError : styles.textArea} {...input} {...props}/>
                <div>{touched &&
                    ((error && <span className={styles.error}>{error}</span>) ||
                        (warning && <span className={styles.warning}>{warning}</span>))} </div>
        </div>
    )
}

export const InputLogin = ({input,meta: {error, warning, touched}, ...props}) => {
    const showError = touched && error;
    return(
        <div>
            <div className={styles.flex}>
                <input className={showError ? styles.inputError : styles.input} {...input} {...props}></input>
            </div>
            <div>{touched &&
                ((error && <span className={styles.error}>{error}</span>) ||
                    (warning && <span className={styles.warning}>{warning}</span>))} </div>
        </div>
    )
}

export const FieldCreator = (name, placeholder, validators, component,className, type) => {
    return (
        <div className={className}>
            <Field name={name} placeholder={placeholder} validate={validators} component={component} type={type}/>
        </div>
    )
}