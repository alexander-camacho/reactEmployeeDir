import React, { Component } from "react"
import Sort from "./Sort"

const employees = [
    {
        firstName: "George",
        lastName: "Washington",
        title: "President"
    },
    {
        firstName: "Abraham",
        lastName: "Lincoln",
        title: "President"
    },
    {
        firstName: "John",
        lastName: "Adams",
        title: "Vice President"
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
        return <Sort sorting={this.state.tableState} data={employees} />
    }

    render() {
        return (<div>
            <button onClick={() => this.handleTableChange("sortFirst")}>Sort by First Name</button>
            <button onClick={() => this.handleTableChange("sortLast")}>Sort by Last Name</button>
            <button>Filter</button>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
        )
    }
}

export default TableContainer