import React from 'react'
import { pageLinks,socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
    {/* // Higher order function to display the object */}
    {pageLinks.map((link)=>{
      const {id,href,text} = link;
      return (
        <li key={id}>
          <a href={href} className='footer-link'> {text}</a>
  
        </li>
      )
    })}
    </ul>
    <ul className="footer-icons">
    {socialLinks.map((link)=>{
            return <li key={link.id}> 
            <a href={link.href} target='_blank' rel='noreferrer' className='nav-icon'><i className={link.icon}></i></a>
            </li>
          })}
    </ul>
   
  </footer>
  )
}

export default Footer