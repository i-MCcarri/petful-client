import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <label htmlFor='home'></label>
                <button id='home'><a href='../'>Home</a></button>
                <label htmlFor='adopt'></label>
                <button id='adopt'><a href='../adopt'>Adopt</a></button>
            </div>
        );
    }
}