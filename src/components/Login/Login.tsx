import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
// @ts-ignore
import {FieldCreator, InputLogin} from "../Common/FormCreators";
// @ts-ignore
import {maxLength, Required} from "../../Utils/Validators/Validators";
// @ts-ignore
import styles from './Login.module.css'

const maxLength16 = maxLength(50)
const maxLength12 = maxLength(20)

type LoginFormOwnType  = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnType> & LoginFormOwnType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {FieldCreator<LoginFormValuesKeysType>('email', 'Email', [Required, maxLength16], InputLogin, styles.title)}
            {FieldCreator<LoginFormValuesKeysType>('password', 'Password', [Required, maxLength12], InputLogin, styles.title, "password")}
            <div className={styles.title}>
                <Field name={'rememberMe'} component={"input"} type={"checkbox"}/> remember me
            </div>
            <div className={styles.title}>
                {captchaUrl && <img src={captchaUrl} alt={'f'}/>}
            </div>
            {captchaUrl && FieldCreator<LoginFormValuesKeysType>('captcha', 'Введите символы', [Required], InputLogin, styles.title)}

            {error && <div style={{display: "flex", justifyContent: "center", marginTop: 10}}>
                <div className={styles.errorForm}>
                    <p>{error}</p>
                </div>
            </div>}
            <div className={styles.title}>
                <button className={styles.button}>Авторизоваться</button>
            </div>
        </form>
    )
}


type LoginType = {
    loginMe: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    captchaUrl: string | null
}

type LoginFormValuesType  = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}
type LoginFormValuesKeysType = Extract<keyof LoginFormValuesType, string>;

const Login = React.memo<LoginType>((props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        console.log(formData);
        props.loginMe(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Авторизация</h1>
                </div>
                <div style={{marginBottom: 30}}>
                    <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
                </div>

            </div>

        </div>
    )
})

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnType>({form: 'login'})(LoginForm);


export default Login;