import React from "react";
import TableContainer from "./TableContainer";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <p>Check the list of employees below.</p>
                <TableContainer />
            </header>
        </div>
    )
}

export default Home