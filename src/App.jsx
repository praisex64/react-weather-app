import { useState } from 'react'
import axios from 'axios'; 



function App() {

  const [data, setData] = useState({}); 
  const [location, setLocation] = useState(''); 

  const API_KEY = '85a3654b4e58d280836287ba6e19847a';
  

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

   const searchLocation = () => {
     axios.get(url).then((response) => {
      setData(response.data); 
      console.log(response.data); 
     }); 
     setLocation('');
   }



  return (
     <div className='App'>
        <div className="search">
          <input 
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <button
          onClick={searchLocation}
          >search</button>
        </div>

        <div className="container">
            <div className="top">
                <div className="location">
                   <p>{data.name}</p>
                </div>
                <div className="temp">
                  <h1>{data.main ? <h1>{data.main.temp.toFixed()}ºF</h1> : null}</h1>
                </div>
                <div className="description">
                  {data.weather ? <p>{data.weather[0].main}</p> : null}
                 
                </div>
                

            </div>
              {/* midiline */}

              {data.main != undefined && 
               <div className="bottom">
               <div className="feels">
                 {data.main ? <p className="bold">{data.main.feels_like}ºF</p> : null}
                 <p>Feels Like</p>
               </div>

               <div className="humidity">
               {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          
                 <p>humidity</p>
               </div>

               <div className="wind">
               {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
                    <p>Wind Speed</p> 
               </div>
           </div>
              }
           
        </div>
     </div>
  )
}

export default App
