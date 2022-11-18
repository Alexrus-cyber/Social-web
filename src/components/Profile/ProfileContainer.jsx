import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/Profile-reducer";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../API/API";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {

        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.id;
        if (!userId) {
            userId = 2;
        }
       profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));