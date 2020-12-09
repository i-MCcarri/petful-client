import React from 'react';
import { FaPaw } from 'react-icons/fa';
import headerImg from '../root/header-img.jpg';

export default class Header extends React.Component {
    render() {
        const imageUrl = window.innerWidth <= 500 ? headerImg : headerImg;
        return (<div style={{backgroundColor: '#e0e5e9'}}>
            <div 
                id='header'
                className="App" 
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    width: '40%',
                    height: '200px'
                }}>
                <h1>Petful <FaPaw style={{fontSize:'33px'}} /></h1> 
            </div>
            </div>
        );
    }
}