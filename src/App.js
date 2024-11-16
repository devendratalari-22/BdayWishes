import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [showGif, SetShowGif] = useState(false);

  const getWishes = () =>{
    SetShowGif(true)
  }

  return (
    <>
      <div className='app'>
      {showGif && (
        <>
      <iframe id='wishes' src="https://gifer.com/embed/74US" width={400} height={400} allowfullscreen></iframe>
      <p>HAPPY BIRTHDAY PRIYUU</p>
      </>)}
      <div>
      <button className="glow-on-hover" type="button" onClick={getWishes}>Wishes Kavalante Click Chey!</button>
      </div>
      
      </div>
    </>
  );
}

export default App;
