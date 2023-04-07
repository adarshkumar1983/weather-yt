import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const WeatherData = () => {

  const {state} = useLocation();
  const {data} = state;
  const icon = data.weather[0].icon
  const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`

  const navigate = useNavigate();

  const back = () =>{
    navigate(-1);
  }
  



  return (
    <>
    <div className='w-full h-[100vh]'>
      {/* 
      {data.weather[0].description} */}
<h1 className='text-[10vmin] font-bold text-center p-5'>{data.name}, {data.sys.country}</h1>
<div className='w-full h-[40vh] flex flex-col justify-center items-center'>
  <img key={data.id} src={icon_url} alt={data.weather[0].main} />
  <h3 className='text-center pt-5 font-bold text-[3.5vmin]'>{data.weather[0].description}</h3>
</div>
<div className='flex flex-row justify-around p-5 h-[25vh]'>
  <h1 className='text-[3vmin] font-bold'>Temp: {data.main.temp}°F </h1>
  <h1 className='text-[3vmin] font-bold'>Humidity: {data.main.humidity}%</h1>
  <h1 className='text-[3vmin] font-bold'>Feels Like: {data.main.feels_like} °F</h1>
</div>
<div className='text-center'>
<button onClick={back} className=' bg-yellow-500 p-2 rounded-md'><h1 className='text-[3vmin]'>Back</h1></button>
</div>
</div>   
  </>
  )
}

export default WeatherData
