import React from 'react';
import { pageLinks,socialLinks } from '../data'; // import the data from the data.js (two variable - one for page and another for Social media)

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
  <div className="nav-center">
    <div className="nav-header">
      <h3 className='nav-logo'> Explore India</h3>
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
    <ul className="nav-links" id="nav-links">
      {pageLinks.map((link)=>{
        return <li key={link.id}>
          <a href={link.href} className="nav-link"> {link.text} </a>
        </li>
      })}
     
    </ul>

    <ul className="nav-icons">
      {socialLinks.map((link)=>{
        return <li key={link.id}> 
        <a href={link.href} target='_blank' rel='noreferrer' className='nav-icon'><i className={link.icon}></i></a>
        </li>
      })}
    </ul>
  </div>
</nav>
</div>
  )
}

export default Navbar