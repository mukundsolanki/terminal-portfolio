import React, { useState } from 'react';
import Intro from './Intro';
import About from './About';
import Skills from "./Skills";
import Socials from "./Socials";
import Help from './Help';
import Projects from "./Projects";

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [history, setHistory] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setOutput('');

        // Process input command
        let newOutput = '';
        if (input === 'help') {
            newOutput = <Help />;
        } else if (input === 'about') {
            newOutput = <About />;
        } else if (input === 'skills') {
            newOutput = <Skills />;
        } else if (input === 'socials') {
            newOutput = <Socials />;
        } else if (input === 'projects') {
            newOutput = <Projects />;
        } else if (input === 'github') {
            newOutput = <p><span className='user'>[✔]</span> Opening Github....</p>
            window.open('https://github.com/mukundsolanki', '_blank');
        } else if (input === 'source') {
            newOutput = <p><span className='user'>[✔]</span> Opening Source code....</p>
            window.open('https://github.com/mukundsolanki/terminal-portfolio', '_blank');
        } else if (input === 'gui') {
            newOutput = <p><span className='user'>[✔]</span> Opening GUI website....</p>
            window.open('https://mukundsolanki.repl.co', '_blank');
        } else if (input === 'linkedin') {
            newOutput = <p><span className='user'>[✔]</span> Opening LinkedIn profile....</p>
            window.open('https://www.linkedin.com/', '_blank');
        }
        else if (input === 'clear') {
            setHistory([]);
            setInput('');
            return;
        } else {
            newOutput = <p>Command not found. Type "<span className='commands'>help</span>" for available commands.</p>;
        }
        setOutput(newOutput);
        setHistory((prevHistory) => [...prevHistory, { input, output: newOutput }]);
        setInput('');
    };

    // const renderOutput = () => {
    //     if (output === '') {
    //         return null;
    //     }

    //     return (
    //         <pre className="output">
    //             <code>{output}</code>
    //         </pre>
    //     );
    // };

    const renderHistory = () => {
        if (history.length === 0) {
            return null;
        }

        return (
            <div className="history">
                {history.map((item, index) => (
                    <div key={index} className="history">
                        <span>
                            <span className='commands'>user69
                                <span className='symbols'>💀</span>
                                <span className='user'>mukund.terminal.dev:</span>
                                <span className='symbols'>~$ </span>
                            </span>
                            <span className='commands'>{item.input}</span>
                        </span>
                        <br />
                        <span className="output">{item.output}</span>
                        <div className="spacing"></div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="terminal">
            <Intro />

            {/* {renderOutput()} */}
            {renderHistory()}
            <div className='terminal-spacing'>
                <span className='commands'>user69
                    <span className='symbols'>💀</span>
                    <span className='user'>mukund.terminal.dev:</span>
                    <span className='symbols'>~$ </span>
                </span>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        autoFocus
                        className="input-text-custom commands"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
