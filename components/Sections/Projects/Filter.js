import React from 'react'

const Filter = ({ categorySelected, setCategorySelected, filter }) => {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="list-inline filter-control" role="group" aria-label="Filter-control">
                <li 
                    className={ categorySelected === null ? "list-inline-item tab-active" : "list-inline-item"}
                    onClick={() => setCategorySelected(null)}
                >{filter[0]}</li>
                <li 
                    className={ categorySelected === "ecommerce" ? "list-inline-item tab-active" : "list-inline-item" }
                    onClick={() => setCategorySelected("ecommerce")}
                >{filter[1]}</li>
                <li 
                    className={ categorySelected === "social" ? "list-inline-item tab-active" : "list-inline-item" }
                    onClick={() => setCategorySelected("social")}
                >{filter[2]}</li>
                <li 
                    className={ categorySelected === "blog" ? "list-inline-item tab-active" : "list-inline-item" }
                    onClick={() => setCategorySelected("blog")}
                >{filter[3]}</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter