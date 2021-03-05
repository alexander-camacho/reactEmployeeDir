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
        <div>

            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {employees.map((value, index) => {
                    return <tr>
                        <td key={index}>{value.firstName}</td>
                        <td key={index}>{value.lastName}</td>
                    </tr>
                })}
            </table>
            <button>Sort</button>
            <button>Filter</button>
        </div>
    )
}

export default Table