import Axios from "axios";
import { useEffect, useState } from "react";
import './style.scss'

export default function App() {
  const [data, setData] = useState({})
  useEffect(()  => { 
    Axios.get('https://api.kanye.rest').then((response) => {
      setData(response.data);
    })
  },[])

  return (
    <div className="container-kanye">
      <div className="row">
      <h1>"{data.quote}"</h1>
      <p>- Kanye West</p>
      </div>
    </div>
  );
}

