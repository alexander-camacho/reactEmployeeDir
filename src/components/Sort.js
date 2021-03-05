import React from "react"

function compareFirst( a, b ) {
    if( a.firstName < b.firstName){
        return -1;
    }
    if (a.firstName > b.firstName){
        return 1
    }
    return 0
}

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
    

    console.log(props)
    if(props.sorting === 'default'){
        return (
            props.data.map((value, index) => {
                return <tr>
                    <td key={index}>{value.firstName}</td>
                    <td key={index}>{value.lastName}</td>
                </tr>
            })
        )
    } else if(props.sorting === 'sortFirst') {
        return (
            props.data.sort(compareFirst).map((value, index) => {
                return <tr>
                    <td key={index}>{value.firstName}</td>
                    <td key={index}>{value.lastName}</td>
                </tr>
            })
        )
    } else if(props.sorting === 'sortLast') {
        return (
            props.data.sort(compareLast).map((value, index) => {
                return <tr>
                    <td key={index}>{value.firstName}</td>
                    <td key={index}>{value.lastName}</td>
                </tr>
            })
        )
    }
}

export default Sort