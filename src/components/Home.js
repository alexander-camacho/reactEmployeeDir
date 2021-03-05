import React from "react";
import Table from "./Table"

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <p>Check the list of employees below.</p>
                <Table />
            </header>
        </div>
    )
}

export default Home