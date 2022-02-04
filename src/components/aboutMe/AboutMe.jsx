import React from 'react';
import './aboutMe.scss';
import reactLogo from '../../assets/logos/react-2.svg';
import htmlLogo from '../../assets/logos/html-1.svg';
import sassLogo from '../../assets/logos/sass-1.svg';
import mongoLogo from '../../assets/logos/mongodb-icon-1.svg';
import nodeLogo from '../../assets/logos/nodejs-icon.svg';
import tsLogo from '../../assets/logos/typescript.svg';
import bootstrapLogo from '../../assets/logos/bootstrap-4.svg';
import jsLogo from '../../assets/logos/logo-javascript.svg';
import cssLogo from '../../assets/logos/css-3.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutMe = () => {

   useEffect(()=> {
    AOS.init({
    duration: 3000,
    disable: true,
    startEvent: 'DOMContentLoaded',
    useClassNames: true,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,});
  }, [])

  return (
  <div className='aboutme' id='aboutme'>
      <div className="top">
          <h2 data-aos="fade-up" data-aos-once="false">About me</h2>
          <div data-aos="fade-left"className="textContainer">
             <p>During the intensive 9-week bootcamp at the well-known Ironhack Global Tech School, I have acquired extensive knowledge of HTML, CSS and JavaScript, developing web applications and projects with Node, Express, MongoDB and React.
                <br/>
                After more than 5 years of working experience in Digital Marketing field, I have made the leap to become a Full-Stack Developer. I'm an enthusiastic person, very motivated by this new change in my career.
                Throughout my work experience, I have worked side by side as a team member, in addition to successfully performing various tasks independently.</p>
          </div>
      </div>
      <div className="bottom">
          <h2 data-aos="fade-up">Skills</h2>
          <div className="techSkills">
          <div data-aos="fade-left" className="skillsList">
            <img src={htmlLogo} alt='Html5'title='html5'/>
          </div>
          <div data-aos="fade-left" className="skillsList">
            <img src={cssLogo} alt='Css'title='css3'/>
          </div>
          <div data-aos="fade-left" className="skillsList">
            <img src={jsLogo} alt='Javascript'title='JavaScript'/>
          </div>
            <div data-aos="fade-left" className="skillsList">
            <img src={reactLogo} alt='React'title='React'/>
          </div>
          <div data-aos="fade-left" className="skillsList">
            <img src={nodeLogo} alt='NodeJs' title='NodeJS'/>
          </div>
          <div data-aos="fade-left" className="skillsList">
            <img src={mongoLogo} alt='MongoDB'title='MongoDB'/>
          </div>
          <div data-aos="fade-left" className="skillsList">
            <img src={bootstrapLogo} alt='Bootstrap' title='Bootstrap'/>
          </div>  
          <div data-aos="fade-left" className="skillsList">
            <img src={tsLogo} alt='Typescript' title='TypeScript'/>
          </div>
          <div data-aos="fade-left" className="skillsList">
            <img src={sassLogo} alt='Sass' title='Sass'/>
          </div>
          </div>
      </div>
  </div>);
};

export default AboutMe;
