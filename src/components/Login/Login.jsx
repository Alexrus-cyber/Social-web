import React from "react";
import {Field, reduxForm} from "redux-form";
import {FieldCreator, InputLogin} from "../Common/FormCreators";
import {maxLength,Required} from "../../Utils/Validators/Validators";
import styles from './Login.module.css'

const maxLength16 = maxLength(50)
const maxLength12 = maxLength(20)
const LoginForm = ({handleSubmit,error }) => {
    return(
        <form onSubmit={handleSubmit}>
            {FieldCreator('email', 'Email', [Required, maxLength16],InputLogin, styles.title)}
            {FieldCreator('password', 'Password', [Required, maxLength12],InputLogin, styles.title, "password")}
            <div className={styles.title}>
                <Field name={'rememberMe'} component={"input"} type={"checkbox"}/> remember me
            </div>
            {error && <div style={{display:"flex", justifyContent: "center", marginTop: 10}}>
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
const Login = React.memo((props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.loginMe(formData.email, formData.password, formData.rememberMe)
    }
  return (
      <div className={styles.login}>
          <div className={styles.container}>
              <div  className={styles.title}>
                  <h1>Авторизация</h1>
              </div>
              <div>
                  <LoginReduxForm onSubmit = {onSubmit}/>
              </div>

          </div>

      </div>
  )
})

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default Login;