import React, { Component } from "react"
import Sort from "./Sort"
import FilterBtn from "./FilterBtn"
import employees from "../employees"


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
            <button className="btn btn-primary" onClick={() => this.handleTableChange("sortFirst")}>Sort All by First Name</button>
            <button className="btn btn-primary" onClick={() => this.handleTableChange("sortLast")}>Sort All by Last Name</button>
            <FilterBtn data={employees} handleTableChange={this.handleTableChange}/>
            <table class="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
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