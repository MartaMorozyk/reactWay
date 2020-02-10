import React from "react";
import cl from './Users.module.css'
import smallAvatar from "./../../files/images/avatar.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={cl.usersBlock}>
        <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p && cl.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>
                        {p}
                    </span>
                }
            )}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : smallAvatar}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Un follow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>)
        }
    </div>
}

export default Users;