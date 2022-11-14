import React from "react";
import {FindUsers} from "./Users/FindUsers";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unFollow} from "../../Redux/FindUsers-reducer";
import axios from "axios";
import Preloader from "../Common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }
    onPageChangedPlus = () => {
        this.props.setCurrentPage(this.props.currentPage + 1);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }
    onPageChangedMinus = () => {
        this.props.setCurrentPage(this.props.currentPage - 1);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage - 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <FindUsers follow={this.props.follow} unFollow={this.props.unFollow} users={this.props.users}
                               currentPage={this.props.currentPage}
                               onPageChangedMinus={this.onPageChangedMinus}
                               onPageChangedPlus={this.onPageChangedPlus}/>}
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.findUserPage.users,
        pageSize: state.findUserPage.pageSize,
        totalUsersCounts: state.findUserPage.totalUsersCounts,
        currentPage: state.findUserPage.currentPage,
        isFetching: state.findUserPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, toggleIsFetching,})(UsersContainer);