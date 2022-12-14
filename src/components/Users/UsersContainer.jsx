
import { connect } from 'react-redux';
import { follow, setUsers, unfollow,setCurrentPage,setTotalUsersCount, toggleIsFetching} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
class UsersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        }) 
    }

    render() {
        return <>
        {this.props.isFetching ?  <Preloader />: null}
        <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}/> 
        </>
    }
}

const mapStateToProps=(state)=>
{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
} 

// mapDispatchToProps =(dispatch)=>
// {
//     return {
//         follow:(userID) => {
//             dispatch(followAC(userID))
//         }
//     }
// }

export default connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)
