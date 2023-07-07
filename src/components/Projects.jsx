import React from 'react'

export default function Projects() {

    const projectOne = `
    A web-based Code Editor built with React. 
    It allows users to write and run HTML, CSS, and JavaScript code in real-time, 
    providing a live output preview. Users can sign in with their Google accounts 
    using Firebase Authentication.
    `;

    const projectTwo = `
    Quizit👀 is a Flutter-based mobile application that allows users to complete 
    quizzes and receive a certificate upon completing all the quizzes.
    `;

    const projectThree = `
    A chrome extension that allows users to generate QR codes for the current web
    pages they are on and user can also create custom QR codes for their links and
    texts.
    `;

    const projectFour = `
    CertiCraft is an innovative certificate generator that was developed during a 
    hackathon at our college.
    `;

    const projectFive = `
    PeerChat🍐 is a Peer to Peer realtime chat application created using NodeJS, 
    Express & Socket.io
    `;

    const projectSix = `
    A NodeJs CLI tool to convert text into ASCII art and converts it into image!
    `;

    return (
        <div>
            <p>Click on the project to visit the project:</p>

            <a className='projects-head' href="https://devlit.vercel.app/" target='_blank' rel="noreferrer">► DevLit</a>
            <pre className='projects-content'>{projectOne}</pre>

            <a className='projects-head' href='https://github.com/mukundsolanki/Quizit-the-quiz-app' target='_blank' rel="noreferrer">► Quizit</a>
            <pre className='projects-content'>{projectTwo}</pre>

            <a className='projects-head' href='https://github.com/mukundsolanki/QReate-2.0' target='_blank' rel="noreferrer">► QReate 2.0</a>
            <pre className='projects-content'>{projectThree}</pre>

            <a className='projects-head' href='https://github.com/mukundsolanki/CertiCraft' target='_blank' rel="noreferrer">► CertiCraft</a>
            <pre className='projects-content'>{projectFour}</pre>

            <a className='projects-head' href='https://github.com/mukundsolanki/Peer-Chat' target='_blank' rel="noreferrer">► Peer-Chat🍐</a>
            <pre className='projects-content'>{projectFive}</pre>

            <a className='projects-head' href='https://www.npmjs.com/package/artify-ascii' target='_blank' rel="noreferrer">► Artify-ascii</a>
            <pre className='projects-content'>{projectSix}</pre>
        </div>
    )
}
