import React from "react";
import styles from "./FindUsers.module.css";
import {User} from "./Users/User";
import axios from "axios";

class UsersClass extends React.Component {

    componentDidMount = () =>{
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    onPageChangedPlus = () => {
        this.props.setCurrentPage(this.props.currentPage + 1);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    onPageChangedMinus = () => {
        this.props.setCurrentPage(this.props.currentPage - 1);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage - 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
     render() {

        let element = this.props.users.map(el => <User key={el.id} id={el.id} name={el.name} photos={el.photos}
                                                       status={el.status} followed={el.followed}
                                                       follow={this.props.follow} unFollow={this.props.unFollow} setUsers = {this.props.setUsers}/>);
        return (
            <div className={styles.FindUsers}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>Пользователи</h2>
                    </div>
                    <div className={styles.inlineBlock + ' ' + styles.width + ' ' + styles.user}>
                        {element}
                    </div>
                    <div className={styles.showMore}>
                        {this.props.currentPage !== 1 && <button onClick={this.onPageChangedMinus} className={styles.button}>Вернуться</button>}
                        <button onClick={this.onPageChangedPlus} className={styles.button}>Показать еще</button>
                    </div>
                </div>
            </div>
        )
     }
}



export default UsersClass;