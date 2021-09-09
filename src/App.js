import React, {useEffect, useState} from "react";
import "./App.css";
import Header from './components/Header'
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/index'
import PhotoCard from "./components/Photo";

function App() {
  const [cardData, setCardData] = useState('');


// planetary/apod?api_key=
  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setCardData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      <Header/>
      <PhotoCard date={cardData.date} title={cardData.title} description={cardData.explanation} />
    </div>
  );
}

export default App;
