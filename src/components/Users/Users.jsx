import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";
import * as axios from "axios" 


let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
        
    let pages =[]

    for (let i=1;i<=pagesCount;i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>
                    {p}
                </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/"+u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { 
                                axios.delete(`/follow/${u.id}`,
                                {
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"75ede3ab-066d-404d-a6d9-22a4c6018ba9"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id) 
                                    }
                                })
                            
                            }}>Unfollow</button>
                            
                            : <button onClick={() => { 
                                axios.post(`/follow/${u.id}`, {},
                                {
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"75ede3ab-066d-404d-a6d9-22a4c6018ba9"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        
                                
                                }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users