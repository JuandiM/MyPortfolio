import React, { useState } from 'react';
import './work.scss';

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Design",
      desc:
        "Build and Design web and mobile applications following the latest trends and technologies.",
      img:
        "https://www.reactjsindia.com/blog/wp-content/uploads/2021/05/Everything-to-know-about-ReactJs-Web-App-Development.jpg",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Front-end",
      desc:
        "For the design and development of my projects I use JavaScript, React and Sass.",
      img:
        "https://i.pinimg.com/originals/ff/e2/46/ffe2466e17de9d611361ed843b0a0fed.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Back-end",
      desc:
        "NodeJs, ExpressJs and MongoDB are the tools I use to build the backend of my projects.",
      img:
        "https://miro.medium.com/max/1200/1*mr4iRSqGzoCev0HNwR3oiA.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Work;
