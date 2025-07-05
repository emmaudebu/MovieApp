
import './App.css'
import Search from "./component/Search.jsx";
import {useState} from "react";

function App() {

    const [searchText, setSearchText] = useState("");


  return (
      <main>
        <div className="pattern">
          <div className="wrapper">
            <header>
                <img src="./hero.png" alt=""/>
              <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
            </header>
            <Search />
          </div>
        </div>
      </main>
  )
}

export default App
