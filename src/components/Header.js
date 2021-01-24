import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMmBA2kQGJt8ApVm5zWD_rZFJeFu3T2zH0w&usqp=CAU" 
                alt="logo"
                />
                

            </div>
            <div className="header__middle">
                <SearchIcon />

            </div>
            <div className="header__right">

            </div>
            
        </div>
    )
}

export default Header
