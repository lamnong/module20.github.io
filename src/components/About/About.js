import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import picture from '../../assets/pics/image.png';

const About = () => {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={picture}
          alt="about-me"
          className="photo"
        />
      </div>
      <div>
        <p>
          As a full stack web developer, I am looking to build a more
          intuitive user experience on the web. I recently earned
          a certificate in full stack development from the
          University of Irvine bootcamp, with newly developed
          skills in JavaScript, CSS, React.js, and responsive web
          design, where I can apply more problem solving skill, so all the logics
          in needed will be executed in the most efficient algorithm.
        </p>
        <p>
          I have applied aspects of learning knowledge to build some apps as a{' '}
          <a
            href="https://lamnong.github.io/module5.github.io/"
            target="_blank"
          >
            Schedule
          </a>{' '}
          a{' '}
          <a
            href="https://notetakermudule11.herokuapp.com"
            target="_blank"
          >
            Note Taker
          </a>{' '}
        </p>
      </div>
    </section>
  );
}



export default About