import React from "react"

function FilterBtn(props) {

    const filterTitle = [...new Set(props.data.map(item => item.title))]

    const list = filterTitle.map(function (name, index) {
        return <button
            className="dropdown-item"
            href="#"
            key={index}
            onClick={() => props.handleTableChange(name)
            }>
            {name}
        </button>
    })


    return (
        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle" type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Filter By Title
                </button>
            <div
                className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {list}
            </div>
        </div>
    )
}

export default FilterBtn