import React from "react"


// Sorts from a to z based on first name
function compareFirst( a, b ) {
    if( a.firstName < b.firstName){
        return -1;
    }
    if (a.firstName > b.firstName){
        return 1
    }
    return 0
}

// Sorts from a to z based on last name
function compareLast( a, b ) {
    if( a.lastName < b.lastName){
        return -1;
    }
    if (a.lastName > b.lastName){
        return 1
    }
    return 0
}


function Sort(props) {
    
    function rowData(index, value) {
        return <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.title}</td>
        </tr>;
    }
    
    if(props.sorting === 'default'){
        return (
            props.data.map((value, index) => {
                return rowData(index, value)
            })
        )
    } else if(props.sorting === 'sortFirst') {
        return (
            props.data.sort(compareFirst).map((value, index) => {
                return rowData(index, value)
            })
        )
    } else if(props.sorting === 'sortLast') {
        return (
            props.data.sort(compareLast).map((value, index) => {
                return rowData(index, value)
            })
        )
    } else {
        console.log(props)
        return (
            props.data.filter(function(person){return person.title === props.sorting}).map((value, index) => {
                return rowData(index, value)
            })
        )
    }

}

export default Sort