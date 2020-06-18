import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const list = props.mylist;
    return ( 
        <div className='footer-container'>
            <h4>{props.title}</h4>
            <div className='footer'>
                {list?.map((item, index) => {
                    return (
                        <p key={index}>{item.title}</p>
                    )
                })}
            </div>
        </div>
    )
} 

export default Footer;