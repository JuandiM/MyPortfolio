import React from 'react';
import './intro.scss';
import {init} from 'ityped';
import { useEffect, useRef } from 'react';
import myCV from '../../assets/Juandi Mena RESUME.pdf'

const Intro = () => {

    const textRef = useRef();

    useEffect(()=> {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["World!", "I'm Juandi Mena"],
      });
    },[])

  return (
  <div className='intro' id='intro'>
    <div className="left">
      <div className="imgContainer">
        <img src='assets/mi-foto.png' alt='mi-foto'></img>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hello <span ref={textRef}>World</span></h2>
        <h1>Full Stack Developer</h1>
        {/* <h3>MERN Stack</h3> */}
        <img src='assets/logos/mern1.png' alt='MERN Stack'/>
        <a href={myCV} download='Juandi_Mena_RESUME' className='button'>Download CV</a>
        {/*<button type='button'></button>*/}
      </div>
      <a href='#aboutme' className='arrow'>
        <img src='assets/down.png' alt=''></img>
      </a>
    </div>
    
  </div>
  )
};

export default Intro;
