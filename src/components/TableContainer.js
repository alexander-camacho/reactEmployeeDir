import React, { Component } from "react"
import Table from "./Table"
import Sort from "./Sort"

const employees = [
    {
        firstName: "George",
        lastName: "Washington"
    },
    {
        firstName: "Abraham",
        lastName: "Lincoln"
    },
    {
        firstName: "John",
        lastName: "Adams"
    }
]


class TableContainer extends Component {
    state = {
        tableState: "default"
    }


    
    handleTableChange = sorting => {
        this.setState({ tableState: sorting })
    }

    renderTableData = () => {
        if (this.state.tableState === "default") {
            return <Sort sorting="default" data={employees}/>
        } else if (this.state.tableState === "sortFirst") {
            return <Sort sorting="sortFirst" data={employees}/>
        } else if (this.state.tableState === "sortLast") {
            return <Sort sorting="sortLast" data={employees}/>
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleTableChange("sortFirst")}>Sort by First Name</button>
                <button onClick={() => this.handleTableChange("sortLast")}>Sort by Last Name</button>
                <button>Filter</button>
                <Table />
                {this.renderTableData()}
            </div>
        )
    }
}

export default TableContainer