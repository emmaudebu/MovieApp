
import './App.css'
import Search from "./component/Search.jsx";
import {useEffect, useState} from "react";

const API_BASE_URL ='https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_KEY;

const API_OPTIONS = {
    method: 'GET',
    header:{
        'Accept': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
}


function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const fetchMovies = async () => {
        try{
            
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
            
        }
        
    }

    useEffect(() => {



    }, [
        setSearchTerm
])
  return (
      <main>
        <div className="pattern">
          <div className="wrapper">
            <header>
                <img src="./hero.png" alt=""/>
              <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
            <Search  searchTerm={searchTerm} setSearchText={setSearchTerm} />
            </header>
              <section className="all-movies">
                  <h2>All Movies</h2>
                  {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
              </section>
          </div>
        </div>
      </main>
  )
}


export default App
