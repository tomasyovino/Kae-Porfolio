import React from 'react'

const Filter = ({ categorySelected, setCategorySelected }) => {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="list-inline filter-control" role="group" aria-label="Filter-control">
                <li 
                    className={ categorySelected === null ? "list-inline-item tab-active" : "list-inline-item"}
                    onClick={() => setCategorySelected(null)}
                >All</li>
                <li 
                    className={ categorySelected === "ecommerce" ? "list-inline-item tab-active" : "list-inline-item" }
                    onClick={() => setCategorySelected("ecommerce")}
                >E-commerce</li>
                <li 
                    className={ categorySelected === "social" ? "list-inline-item tab-active" : "list-inline-item" }
                    onClick={() => setCategorySelected("social")}
                >Social</li>
                <li 
                    className={ categorySelected === "blog" ? "list-inline-item tab-active" : "list-inline-item" }
                    onClick={() => setCategorySelected("blog")}
                >Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter