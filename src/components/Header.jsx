import React from 'react'

export default function Header() {
    return (
        <div>
            <div className="terminal-header">
                <span className="commands">admin</span>
                <span className="symbol">@</span>
                <span className="user">mukund.dev.terminal</span>
                <span className="command">:</span>
                <span className="directory">/path/to/current/directory</span>
            </div>
        </div>
    )
}
