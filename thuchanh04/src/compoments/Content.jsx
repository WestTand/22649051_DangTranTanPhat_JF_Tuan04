import React from 'react'
import './Content.css'
import './style.css'
import avatar from '../assets/avatar.png'
const Content = () => {
  return (
        <main className="content">
            <div className='page-link'>
                <a href="">Home &gt; </a>
                <a href="">Your Recipe Box</a>
            </div>
            <span className="namePro">Emma Gonzalez's Recipe Box</span>
            <div className="title">
             
              <div className="avatar">
                <img src={avatar}alt="" />
              </div>
              <div className="des">
                <span>
Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</span>
               <div className="btn">
               <button className="sur">6.5 Subscribes</button>
                <button className="share">Share <i>&#10148;</i></button>
               </div>
              </div>
            </div>
        </main>
  )
}

export default Content