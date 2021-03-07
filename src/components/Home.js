import React from "react";
import TableContainer from "./TableContainer";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-center">
                    Employee Tracker
                    </h1>
                <p className="text-center">
                    Search through the employees using the buttons below!
                    </p>
                <TableContainer />
            </header>
        </div>
    )
}

export default Home