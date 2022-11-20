import styles from './TextArea.module.css'

export const TextArea = ({input,meta: {error, warning, touched}, ...props}) => {
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
                <input className={showError ? styles.inputError : styles.input} {...input} {...props}/>
            </div>
            <div>{touched &&
                ((error && <span className={styles.error}>{error}</span>) ||
                    (warning && <span className={styles.warning}>{warning}</span>))} </div>
        </div>
    )
}
