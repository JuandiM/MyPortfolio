import React from 'react';
import './listPortfolio.scss'

const ListPortfolio = ({id, title, active, setSelected}) => {
  return (
  <li className=
    {active ? 'portfolioList active' : 'portfolioList'} onClick={()=> setSelected(id)}>
      {title}
  </li>
  );
};

export default ListPortfolio;
