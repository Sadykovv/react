import React from 'react';
import Profile from './Profile'
import * as axios from "axios"
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount (){
        axios.get(`/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render () {
    return <div >
        <Profile {...this.props} profile={this.props.profile}/>
    </div>
}
}


const mapStateToProps = (state) => {
    return {
    profile:state.profilePage.profile
    }
} 

export default connect (mapStateToProps,{ setUserProfile})(ProfileContainer);