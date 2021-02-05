import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from "../features/userSlice"
import { auth } from "../firebase"

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() =>{
            dispatch(logout());
        })
        
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMmBA2kQGJt8ApVm5zWD_rZFJeFu3T2zH0w&usqp=CAU"
                    alt="logo"
                />


            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCarret" />

            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>

        </div>
    )
}

export default Header
