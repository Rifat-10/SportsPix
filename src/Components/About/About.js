import React from "react";
import { Button, Card } from "react-bootstrap";
import image from "../../Images/about me.png";
import myImage from "../../Images/yo.png";

const About = () => {
  return (
    <div className='text-white'>
      <img src={image} alt='' height={400} className='w-100' />
      <div className='w-75 mx-auto'>
        <img
          src={myImage}
          alt=''
          srcset=''
          height={300}
          className='mt-5 mb-3'
        />
        <h3 className='mb-3'>Md. Mehedi Hassan Rifat</h3>
        <h6 className='mb-3'>
          <h5>As-Salamu Alaikum,</h5> I am a university student in final semester. Programming and web development are two of my favorite things to do. So, to study professional web development and gain a job in a reputable and large firm. I choose to enroll in Programming Hero's web development course. Because I am passionate about computer technology, I will continue to study and explore till I reach my objective.
        </h6>
        <Button variant='secondary' className='mb-5'>
          My GitHub
        </Button>
      </div>
    </div>
  );
};

export default About;
