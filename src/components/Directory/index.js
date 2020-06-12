import React from 'react';
import './style.scss';
import Helado from './../../assets/1.jpg';
import Helado2 from './../../assets/2.jpeg';

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
                        Bowls
          </a>
                </div>

                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Helado2})`
                    }}
                >
                    <a href="/#"> 
                        Cakes
          </a>
                </div>

            </div>
        </div>


    );

};

export default Directory;