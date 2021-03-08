import * as React from "react"


const App: React.FC = () => {
    const [message, setMessage] = React.useState("")
    

   const testFetch = ( ) => {
       fetch("/api/test")
       .then(res => res.json())
       .then(({msg}) => setMessage(msg))
   }
   React.useEffect(testFetch)


    return (
        <main>
             <h1 className="text-center display-1">Alterna - eCommerce</h1>
            <h3 className="text-center display-3">Things To Do: </h3>
            <hr />
            <div className= "d-flex justify-content-center">
                <ul>
                <li >Decide WHAT my project will be</li>
                <li>Think about the functionality and plan accordingly</li>
                <li>Create a general layout for the project</li>
                <li>TBD</li>
                <li >TBD</li>
            </ul>
            
            </div>
            <p className= "text-center">
                {message}
            </p>
        </main>
    )
}

export default App