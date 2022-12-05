// @ts-ignore
import styles from './FormCreators.module.css'
import {Field} from "redux-form";
import React from "react";
import {FieldValidatorType} from "../../Utils/Validators/Validators";
import {WrappedFieldProps} from "redux-form/lib/Field";


export const TextAreaForm: React.FC<WrappedFieldProps> = ({input, meta: {error, warning, touched}, ...props}) => {
    const showError = touched && error;
    return (
        <div className={styles.text}>
            <textarea className={showError ? styles.textAreaError : styles.textArea} {...input} {...props}/>
            <div>{touched &&
                ((error && <span className={styles.error}>{error}</span>) ||
                    (warning && <span className={styles.warning}>{warning}</span>))} </div>
        </div>
    )
}

export const InputLogin: React.FC<WrappedFieldProps>  = ({input, meta: {error, warning, touched}, ...props}) => {
    const showError = touched && error;
    return (
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

export function FieldCreator<FormKeysType extends string>(name: FormKeysType,
                             placeholder: string | null,
                             validators: Array<FieldValidatorType>,
                             component: React.FC<WrappedFieldProps>,
                             className?: string | null,
                             type?: string | null) {
    return (
        <div className={className ? className : ""}>
            <Field name={name} placeholder={placeholder} validate={validators} component={component} type={type}/>
        </div>
    )
}