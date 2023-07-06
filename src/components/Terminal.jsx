import React, { useState } from 'react';
import Intro from './Intro';

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
            newOutput =
                'Available commands:\n' +
                '  - about\n' +
                '  - education\n' +
                '  - skills\n' +
                '  - socials';
        } else if (input === 'about') {
            newOutput = 'About: about text goes here.';
        } else if (input === 'education') {
            newOutput = 'Education: education details go here.';
        } else if (input === 'skills') {
            newOutput = 'Skills: skills go here.';
        } else if (input === 'socials') {
            newOutput = 'Socials: social media links go here.';
        } else if (input === 'clear') {
            setHistory([]);
            setInput('');
            return;
        } else {
            newOutput = 'Command not found. Type "help" for available commands.';
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
                            <span className='user'>user69
                                <span className='symbols'>@</span>
                                mukund.terminal.dev:
                                <span className='symbols'>~$</span>
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
            <span className='user'>user69
                <span className='symbols'>@</span>
                mukund.terminal.dev:
                <span className='symbols'>~$</span>
            </span>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    autoFocus
                />
            </form>

        </div>
    );
};

export default Terminal;
