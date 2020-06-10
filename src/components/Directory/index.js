import React from 'react';
import './style.scss';
import Helado from './../../assets/1.jpg';

const Directory = props => {

    return (

        <div className="directory">

            <div className="wrap">
                
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Helado})`
                    }}
                >
                    <a href="/#"> 
                        Shop Womens
          </a>
                </div>

            </div>
        </div>


    )

}

export default Directory;