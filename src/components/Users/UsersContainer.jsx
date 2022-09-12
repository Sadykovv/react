
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC,setCurrentPageAC ,setTotalUsersCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        axios.get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}/> 
    }
}

const mapStateToProps=(state)=>
{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(TotalCount)=>{
            dispatch(setTotalUsersCountAC(TotalCount))
        }
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
