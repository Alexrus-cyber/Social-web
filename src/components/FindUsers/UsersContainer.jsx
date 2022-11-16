import React from "react";
import {FindUsers} from "./Users/FindUsers";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unFollow} from "../../Redux/FindUsers-reducer";
import Preloader from "../Common/Preloader";
import {userAPI} from "../../API/API";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }
    onPageChangedPlus = () => {
        let pageNumber = this.props.currentPage + 1;
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            })
    }
    onPageChangedMinus = () => {
        let pageNumber = this.props.currentPage - 1;
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
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

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, toggleIsFetching,})(UsersContainer);