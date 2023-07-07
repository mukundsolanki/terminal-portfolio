import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h3>About Me</h3>
      <p>
        ~👋 Hello, I'm <span className='commands'>Mukund Solanki</span>, a software developer from India!
      </p>
      <p>
        ~🎓 Currently, I am pursuing my education at Acropolis Institute of Technology and Research (IIT MANGLIYA).
      </p>
      <p>
        ~💻 As a developer, I enjoy working on various projects and exploring new technologies.</p>
      <p>
        ~🌟 Feel free to explore more by typing the "
        <span className='commands'>github</span>",
        "<span className='commands'>skils</span>",
        "<span className='commands'>projects</span>"
        command in the terminal.
      </p>
      <p>
        ~📫 You can reach out to me through my social media profiles. Just type the "<span className='commands'>socials</span>" command to find my contact details.
      </p>
      <p>
        ~⚡️ Let's connect and build something amazing together!
      </p>
      <br />
      <p>For a list of available commands, type '<span className='commands'>help</span>'.</p>
    </div>
  );
};

export default About;
