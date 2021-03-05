import React from "react"

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

function Table() {
    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tr>
                <td>{employees[0].firstName}</td>
                <td>{employees[0].lastName}</td>
            </tr>
            <tr>
                <td>{employees[1].firstName}</td>
                <td>{employees[1].lastName}</td>
            </tr>
            <tr>
                <td>{employees[2].firstName}</td>
                <td>{employees[2].lastName}</td>
            </tr>
        </table>
    )
}

export default Table