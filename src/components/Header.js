//Here we are importing the React library and a CSS file for styling.
import React from 'react';
import '../styles.css';

/*export default is used to export the Header component so it 
can be imported and used in other files.
Return can have only one element to be returned*/

export default function Header(){
    return (
        <div className = 'header'>
            <img className = 'logo' src = 'logo.png' alt = 'moviedux logo'/>
            <h2 className='app-subtitle'>It's time for popcorn. Find your next movie here.</h2>
        </div>
    );
}