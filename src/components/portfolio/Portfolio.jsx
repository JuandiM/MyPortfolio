import React, { useEffect } from 'react';
import { useState } from 'react';
import ListPortfolio from '../listPortfolio/ListPortfolio';
import './portfolio.scss'
import {featuredPortfolio, webPortfolio, componentsPortfolio, responsivePortfolio} from '../../data';

const Portfolio = () => {

    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'responsive',
            title: 'Responsive',
        },
        {
            id: 'components',
            title: 'Components',
        },
    ];

        useEffect(()=>{
            switch(selected){
                case 'featured':
                    setData(featuredPortfolio);
                    break;
                case 'web':
                    setData(webPortfolio);
                    break;
                case 'responsive':
                    setData(responsivePortfolio);
                    break;
                case 'components':
                    setData(componentsPortfolio);
                    break;
                    default:
                    setData(featuredPortfolio);
            }
        },[selected]);

    return (
    <div className='portfolio' id='portfolio'>
        <h2>Portfolio</h2>
        <ul>
            {list.map((item)=>(
                <ListPortfolio 
                    title={item.title}
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}
        </ul>
        <div className="container">
            {data.map((d) => (
                <div className="item">                  
                      <img src={d.img} alt='project-cover'/> 
                      <h3>
                          <a href={d.link} target='_blank' rel='noreferrer'>{d.title}
                          </a>
                      </h3>                   
                </div>
            ))}
            
        </div>
    </div>

    )
};

export default Portfolio;
