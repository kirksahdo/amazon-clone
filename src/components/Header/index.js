import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import './styles.css';

function Header() {

  return (
    <div className='header'>
        <div className='header_left'> 
            <img 
                className='header_logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        </div>
        <div className='header_search'>
            <input className='header_searchInput' type='text' />
            <div className='header_searchIcon' >
                <SearchIcon />
            </div>
        </div>
    </div>
  )
}

export default Header;