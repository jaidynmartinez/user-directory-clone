import React from "react";
import './Main.css'

const Main = () => {

    
    return(
        <div className="main--container">

        <div className="main--body">
                <h1 className="page-number">Page</h1>

                <h1 className="name">Name</h1>

            <section>
                <ul>
                <li>From:</li>
                <li>Job Title:</li>
                <li>Employer:</li>
                </ul>
            </section>

            <section>
                Favorite Movies:
                <ol>
                    <li>Movie 1</li>
                    <li>Movie 2</li>
                    <li>Movie 3</li>
                </ol>
            </section>
        </div>
        
        </div>
    )
}
export default Main