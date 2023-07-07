import React from 'react'

export default function Skills() {

  const skillShow = `
    HTML     CSS       JAVASCRIPT     REACTJS      BOOTSTRAP/TAILWIND
    NodeJS   MySQL     MongoDB        C            C++ 
    PYTHON   JAVA      DART           FLUTTER      NPM
    PUG      ANDROID   KOTLIN         GIT          GOOGLE CLOUD
    API      UIPATH    SOCKET.IO      WEBSOCKETS   NETLIFY
    VERCEL   HEROKU    FASTAPI        APACHE       FIGMA
    LINUX    PI        FIGMA          MARKDOWN     CANVA
  `;

  return (
    <>
      <p className='skills-text'>Skills and Tools:</p>
      <pre className='skills'>
        {skillShow}
      </pre>
      <p className='skills-text'>For a list of available commands, type '<span className='commands'>help</span>'.</p>
    </>
  )
}
