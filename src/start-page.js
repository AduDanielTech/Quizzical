import React from "react";



const Homepage = ({questions}) => {
        
     return (
        <div className="homepage-cont">
            
            <h1>Quizzical</h1>
            <p>Some description needed</p>
            <button className=" algo-btn" onClick={questions}>Start quiz</button>

        </div>
     )
};
export default Homepage