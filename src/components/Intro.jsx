import React from 'react';
import Header from './Header';

const Intro = () => {
  return (
    <>
    <Header/>
      <span className='commands'>admin
        <span className='symbols'>💀</span>
        <span className='user'>mukund.terminal.dev:</span>
        <span className='symbols'>~$</span>
        <span className='commands'> welcome@user69</span>
      </span>
      {/* <pre className="ascii-art">
        {asciiArt1}
      </pre> */}
      <p>Welcome to my terminal based portfolio website.</p>
      <p>For a list of available commands, type '<span className='commands'>help</span>'.</p>
      <p>This website's source code can be found at <a href="https://github.com/mukundsolanki/terminal-portfolio">Github</a></p>
    </>
  );
};

export default Intro;
