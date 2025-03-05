import React from 'react'
import './style.css'
import './Header.css'
import logo from '../assets/logo.png'
import avarta from '../assets/avatar.png'
const Header = () => {

    var menuContent = ['What to cook','Recipes','Ingredients','Occasions','About us']

  return (
    <>
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder='Search' />
            </div>
            <nav className="nav-link">
                {menuContent.map((menuitem,index)=>{
                    return <a href="" key={index}>{menuitem}</a>
                })}
                
            </nav>
            <div className="recipe-box">
                <button>Your Recipe Box</button>
                <img src={avarta} alt="" className="profile-pic"/>
            </div>
        </header>
    </>
  )
}

export default Header