import React from 'react';
import { FaPaw } from 'react-icons/fa';
import headerImg from '../root/header-img.jpg';

export default class Header extends React.Component {
    render() {
        const imageUrl = window.innerWidth <= 500 ? headerImg : headerImg;
        return (<div className='header-wrapper'>
            <div 
                id='header'
                className="App" 
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}>
                <h1>Petful <FaPaw style={{fontSize:'33px'}} /></h1> 
            </div>
            </div>
        );
    }
}