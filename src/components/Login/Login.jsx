import React from "react";
import {Field, reduxForm} from "redux-form";
import {InputLogin} from "../Common/TextArea";
import {maxLength,Required} from "../../Utils/Validators/Validators";
import styles from './Login.module.css'


const maxLength16 = maxLength(50)
const maxLength12 = maxLength(20)
const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={styles.title}>
                <Field name={'email'} placeholder={'Email'} validate={[Required, maxLength16]} component={InputLogin}/>
            </div>
            <div className={styles.title}>
                <Field name={'password'} placeholder={'Password'} validate={[Required, maxLength12]} component={InputLogin}/>
            </div>
            <div className={styles.title}>
                <Field name={'rememberMe'} component={"input"} type={"checkbox"}/> remember me
            </div>
            <div className={styles.title}>
                <button >Login</button>
            </div>
        </form>
    )
}
const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.loginMe(formData.email, formData.password, formData.rememberMe)
    }
  return (
      <div className={styles.login}>
          <div className={styles.container}>
              <div  className={styles.title}>
                  <h1>LOGIN</h1>
              </div>
              <div>
                  <LoginReduxForm onSubmit = {onSubmit}/>
              </div>

          </div>

      </div>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default Login;