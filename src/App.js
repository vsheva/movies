import './App.css';
import  { useEffect } from 'react';
import axios from "axios"


function App() {
  const getMovies=async()=>{
    try{
    const data = await axios.get('https://movies-app.prakashsakari.repl.co/api/movies').then((data)=>{
       console.log(data)
     })
    }
    catch(err){
        console.log(err)
    }
  }

  useEffect(()=>{
      getMovies()
  }, [])


  return (
<h1>Hello</h1>
  );
}

export default App;
