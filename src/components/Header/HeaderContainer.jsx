import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer'
import * as axios from "axios"
import { connect } from 'react-redux';
import React from 'react';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`/auth/me`, { withCredentials: true }).then(response => {
            
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                this.props.setAuthUserData(id, email, login)

            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);