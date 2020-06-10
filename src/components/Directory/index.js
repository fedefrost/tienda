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
                        Tienda 1
          </a>
                </div>

                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Helado})`
                    }}
                >
                    <a href="/#"> 
                        Tienda 1
          </a>
                </div>

            </div>
        </div>


    );

};

export default Directory;