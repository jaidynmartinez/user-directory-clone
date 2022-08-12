import React from "react";
import './Directions.css'

const Directions = () => {

    return(
        <div className="nav">

            <section className='blue--buttons'>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
            </section>

        <section className="prev-next">
            <h4> Previous </h4>
            <h4> Next </h4>
        </section>

        </div>
    )
}
export default Directions