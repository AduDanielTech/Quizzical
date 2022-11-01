import React from "react"
import ErrorBoundary from './errorBoundary'
export default function App() {
   
 
    
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
     const [starWarsData, setStarWarsData] = React.useState([''])
    
    React.useEffect(function() {
       
        fetch('https://opentdb.com/api.php?amount=10')
            .then(res => res.json())
            .then(data => setStarWarsData(data.results))
    }, [])
    const randomNumber = Math.floor(Math.random() * starWarsData.length)
     
    
    return (
        <div>
     <ErrorBoundary> <p>hey</p></ErrorBoundary>  
       
        </div>
    )
}


