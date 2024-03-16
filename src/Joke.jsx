import React, {useState} from 'react';



function Joke() {

    const[joke,setJoke] = useState("");

    const fetchApi = async  ()=>{
       await  fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((res) => res.json()).then((data) => setJoke(data.joke)) ;
        
        
    };

  return (
<div className="card text-center mt-5">
  <div className="card-header bg-success">
    <h1>Joke</h1>
  </div>
  <div className="card-body">
    
    <p className="card-text"> {joke} </p>
    {/* <a onClick={fetchApi} href='#' className="btn btn-success">Generate Joke</a> */}
    <button onClick={fetchApi} className="btn btn-success" >Generate joke</button>
  </div>
  
</div>
  )
}

export default Joke ;
