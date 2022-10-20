import styles from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export const User = (props) => {
  return(
      <NavLink className={({isActive}) => (isActive ? styles.active : styles.users)} to={props.link} >
          <div >
              <img className={styles.photo} src={'https://i.pinimg.com/originals/6b/08/76/6b087603862a127ea290e0a47ed932bf.jpg'} alt={'photo'}/>
          </div>
          <div className={''}>
              <p>Daniil Gromyko</p>
          </div>
          <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: 56,marginRight:10}}>
              <p style={{display:'flex', alignItems: 'flex-start', justifyContent: 'flex-start'}}>x</p>
          </div>
      </NavLink>
  );
}